---
description: 'SDD — Spec-Driven Development: execute tasks, run checkpoints, commit and open PR.'
---

## Steps

### 1. Load

Find the most recently modified directory under `specs/` that contains `tasks.md`.

Read in parallel:

- `specs/{NNN}-{slug}/tasks.md` — all Phase 1 and Phase 2 tasks
- `specs/{NNN}-{slug}/spec.md` — feature name, requirements, scenarios
- `specs/{NNN}-{slug}/plan.md` — approach, files to change

If no tasks found, stop: "Run `/sdd.specify`, `/sdd.plan`, and `/sdd.tasks` first."

Update `specs/{NNN}-{slug}/state.json`:

```json
{ "step": "implement", "task": "T001", "updated": "{TODAY}" }
```

---

### 2. Phase 1 — Sequential Core Implementation

Execute tasks T001 → T002 → ... through all Phase 1 tasks in order.

For each task:

1. Perform the work described in the **Do** field
2. Run the **Verify** check
3. Mark complete in `specs/{NNN}-{slug}/tasks.md`: `- [ ]` → `- [x]`
4. Update `specs/{NNN}-{slug}/state.json` — set `task` to the next task ID (or `null` after the last task)

**Deviation rules:**

| Situation                              | Action                                            |
| -------------------------------------- | ------------------------------------------------- |
| Bug, import error, or type mismatch    | Fix silently — note in summary                    |
| Missing dependency                     | Fix silently — note in summary                    |
| Architectural approach needs to change | **STOP. Explain to user and ask how to proceed.** |
| Task is impossible as written          | **STOP. Explain why and ask how to proceed.**     |

---

### 3. Phase 2 — Parallel Tasks

Skip if no `[P][A]` tasks exist.

Launch all `[P][A]` tasks as parallel subagents. Wait for all to complete.

---

### 4. Commit

Stage the changed files explicitly (no `git add -A`). Include the spec artifacts (`specs/{NNN}-{slug}/`) alongside implementation files:

```bash
git add path/to/file1 path/to/file2 ... specs/{NNN}-{slug}/
```

Commit using conventional commit format:

```bash
git commit -m "{type}({scope}): {short description}"
```

Rules:

- `type`: `feat`, `fix`, `refactor`, `docs`, or `chore`
- `scope`: lowercase, from primary directory modified. Omit if unclear.
- Short description: imperative, lowercase, no period, max 72 chars

---

### 5. Summary

Display exactly this format:

```
--- Done ---
Feature: {Feature Name}
Commit:  {type}({scope}): {description}
```
