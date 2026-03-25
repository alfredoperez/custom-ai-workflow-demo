---
description: "SDD — Spec-Driven Development: write a lean spec for rapid iteration."
handoffs:
  - label: Build Plan
    agent: sdd.plan
    prompt: Create a lean plan for this spec
---

## User Input

```text
$ARGUMENTS
```

If `$ARGUMENTS` is empty, stop and say: "Provide a feature description: `/sdd.specify <description>`"

---

## Steps

### 1. Parse Input

Extract the feature description from `$ARGUMENTS`.

Generate a concise slug (2–4 words, action-noun format, lowercase, hyphens):
- "add clickable file references" → `clickable-file-refs`
- "fix payment timeout bug" → `fix-payment-timeout`
- Preserve technical terms (OAuth2, JWT, API)

---

### 2. Determine Spec Number + Create Directory

Scan `specs/` locally for directories matching `[0-9]+-*`:

- Extract the highest number N found; use N+1 as the new number.
- If no spec dirs exist, start at 1.

```bash
mkdir -p specs/{NNN}-{slug}
```

Write `specs/{NNN}-{slug}/state.json`:

```json
{ "step": "specify", "task": null, "updated": "{TODAY}" }
```

---

### 3. Explore Inline

Without spawning a subagent, read 2–3 relevant files to understand the feature area:
- Run Glob and Grep searches in parallel (single message, multiple tool calls) to find files related to the feature description
- Read key sections to understand patterns, architecture, and constraints

---

### 4. Write `specs/{NNN}-{slug}/spec.md`

```markdown
# Spec: {Feature Name}

**Date**: {TODAY}

## Summary

[2–3 sentences: what the feature does and why it's needed.]

## Requirements

- **R001** (MUST): [Critical requirement — testable and unambiguous]
- **R002** (MUST): [Critical requirement]
- **R003** (SHOULD): [Important but not blocking]

## Scenarios

### {Behavior Area}

**When** [user action or system event]
**Then** [expected outcome]

### {Edge Case or Secondary Flow}

**When** [condition]
**Then** [outcome]

## Out of Scope

- [What this intentionally does NOT cover]
```

**Skip**: clarification rounds, formal edge case analysis, exploration findings section, quality checklists.

---

### 5. Summary

Display exactly this format:

```
--- Specify complete ---
Feature: {Feature Name}
Spec:    specs/{NNN}-{slug}/spec.md

Next: /sdd.plan {NNN}-{slug}
```
