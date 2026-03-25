---
description: 'SDD — Spec-Driven Development: execute tasks, run checkpoints, commit and open PR.'
---

## Steps

### 1. Load

Find the most recently modified directory under `specs/` that contains `tasks.md`.

Read in parallel:

- `specs/{NNN}-{slug}/tasks.md` — all Phase 1 and Phase 2 tasks
- `specs/{NNN}-{slug}/spec.md` — feature name, requirements, scenarios (for CP1 verification)
- `specs/{NNN}-{slug}/plan.md` — approach, files, issue number if present
- `specs/{NNN}-{slug}/state.json` — current step/task (if exists; note if resuming mid-implement)

Determine commit scope from the primary directory being modified (e.g., `toolbar`, `ui`, `core`). If unclear, omit scope.

Determine issue number from plan.md or spec.md if present.

If no tasks found, stop: "Run `/sdd.specify`, `/sdd.plan`, and `/sdd.tasks` first."

Update `specs/{NNN}-{slug}/state.json`:

```json
{ "step": "implement", "task": "T001", "updated": "{TODAY}" }
```

---

### Context Recovery (if resuming)

If `state.json` shows `step = "implement"` and `task = "T00N"`:

1. Read `spec.md` for feature context
2. Read `tasks.md` — `[x]` = done, `[ ]` = remaining
3. Resume from the first unchecked task
4. Do NOT re-run completed tasks — trust the checkmarks and existing commits

---

### 2. Verify Branch

Confirm you are on the correct feature branch:

```bash
git branch --show-current
```

If the current branch does not match the expected feature branch, **STOP** and ask the user to check out the correct branch before continuing.

---

### 3. Phase 1 — Sequential Core Implementation

Execute tasks T001 → T002 → ... through all Phase 1 tasks in order.

For each task:

1. Perform the work described in the **Do** field
2. Run the **Verify** check
3. Mark complete in `specs/{NNN}-{slug}/tasks.md`: `- [ ]` → `- [x]`
4. Update `specs/{NNN}-{slug}/state.json` — set `task` to the next task ID (or `null` after the last task)

**Deviation rules:**

| Situation                              | Action                                            |
| -------------------------------------- | ------------------------------------------------- |
| Bug, import error, or type mismatch    | Fix silently — note for CP1                       |
| Missing dependency                     | Fix silently — note for CP1                       |
| Architectural approach needs to change | **STOP. Explain to user and ask how to proceed.** |
| Task is impossible as written          | **STOP. Explain why and ask how to proceed.**     |

After the last Phase 1 task, start in background:

```bash
nx build ngx-dev-toolbar
```

---

### 4. Phase 2 — Parallel Agents (normal mode only)

Skip if spec.md shows mode is `"minimal"`.

Launch all `[P][A]` tasks in a **single message** as parallel subagents:

**test-expert subagent** (T005 — always in normal mode):

> Write Jest unit tests for the changed files. Follow AAA pattern (Arrange / Act / Assert). Use Angular TestBed for component tests. Test signals using `computed` and `effect` where relevant. Place spec files adjacent to source files.
>
> Files to test: `{list from T005}`
> Reference existing spec files for patterns: `{existing .spec.ts from project}`
>
> Mark T005 complete in `specs/{NNN}-{slug}/tasks.md` when done.

**docs-expert subagent** (T006 — only if plan.md flagged docs work):

> {If Astro docs page needed}: Create or update the docs page at `apps/docs/src/content/docs/...` following the structure of existing pages. Feature: `{name}`. Public API from spec: `{from spec.md requirements}`.
>
> {If README update needed}: Add the new tool/feature to the tools list and usage section in README.md. Follow existing entry format. Only update for new public-facing tools or major API changes.
>
> Mark T006 complete in `specs/{NNN}-{slug}/tasks.md` when done.

Wait for both subagents to complete before proceeding to CP1.

---

### 5. Commit + PR

Stage the changed files explicitly (no `git add -A`). **Always include the spec artifacts** (`specs/{NNN}-{slug}/`) alongside implementation files:

```bash
git add path/to/file1 path/to/file2 ... specs/{NNN}-{slug}/
```

Commit using conventional commit format:

```bash
git commit -m "{type}({scope}): {short description}" -m "Closes #{N}"
```

Rules:

- `type`: `feat`, `fix`, `refactor`, `docs`, or `chore`
- `scope`: lowercase, from primary directory modified (e.g., `toolbar`). Omit if unclear.
- Short description: imperative, lowercase, no period, max 72 chars
- `Closes #N` line: only if issue number exists
- **No Co-Authored-By or attribution lines**

Push and open PR (use the branch name from `git branch --show-current`):

```bash
git push -u origin {branch-name}
gh pr create \
  --title "{type}({scope}): {short description}" \
  --body "$(cat <<'EOF'
## What

- [bullet from spec]
- [bullet from spec]

## Why

[one sentence from spec]

## Testing

- [verify step from tasks]
- [verify step from tasks]

Closes #{N}
EOF
)"
```

Rules:

- PR title matches commit message exactly
- `Closes #N` only if issue exists — omit otherwise
- No "Generated with Claude Code" or any AI attribution

---

### 6. Summary

Display exactly this format:

```
--- Done ---
Feature: {Feature Name}
Commit:  {type}({scope}): {description}
PR:      {PR URL}
Branch:  {branch-name}
```
