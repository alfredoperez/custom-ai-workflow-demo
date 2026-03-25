# Plan: Add Navbar Title "Demo"

**Spec**: specs/2-add-navbar-title/spec.md | **Date**: 2026-03-21

## Approach

Replace the hardcoded "test-ng20" string with "Demo" in the NavBarComponent template.

## Files to Change

- `src/app/layout/nav-bar.ts` — change app-title text from "test-ng20" to "Demo"

## Phase 1 Tasks

| ID | Do | Verify |
|----|-----|--------|
| T001 | Change `<span class="app-title">test-ng20</span>` to `<span class="app-title">Demo</span>` in nav-bar.ts | Run `ng test` and confirm navbar spec passes; visually confirm title reads "Demo" |
