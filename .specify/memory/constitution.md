<!--
Sync Impact Report
- Version change: N/A → 1.0.0 (initial)
- Added principles:
  - I. Angular-First Architecture
  - II. Type Safety & Test Discipline
  - III. Simplicity & Accessible Defaults
- Added sections:
  - Development Constraints
  - Development Workflow
  - Governance
- Templates requiring updates:
  - .specify/templates/plan-template.md — ✅ compatible (Constitution Check section exists)
  - .specify/templates/spec-template.md — ✅ compatible (no principle-specific refs)
  - .specify/templates/tasks-template.md — ✅ compatible (phase structure is generic)
- Follow-up TODOs: none
-->

# TestNg20 Constitution

## Core Principles

### I. Angular-First Architecture

All features MUST use Angular's recommended patterns and latest APIs:

- Standalone components exclusively — no NgModules for declarations
- Signals for state management; avoid RxJS where signals suffice
- Angular's built-in control flow (`@if`, `@for`, `@switch`) over
  structural directives
- OnPush change detection by default
- Router-level lazy loading for feature boundaries
- Follow Angular style guide naming: `feature.type.ts`
  (e.g., `user-list.component.ts`)

Rationale: Consistency with Angular 20 idioms keeps the codebase
approachable and aligned with upstream tooling.

### II. Type Safety & Test Discipline

TypeScript strict mode MUST remain enabled (`strict: true`). Code
MUST NOT use `any` except at verified system boundaries (e.g.,
third-party untyped APIs).

- Prefer narrowly typed interfaces over broad unions
- Tests MUST accompany non-trivial logic; red-green-refactor when
  adding new behavior
- Integration tests (TestBed) for component interactions; unit tests
  for pure services and utilities
- Test files colocated with source: `feature.component.spec.ts`

Rationale: Strict types catch errors at compile time; colocated
tests keep feedback loops short.

### III. Simplicity & Accessible Defaults

Start with the simplest implementation that satisfies the
requirement — YAGNI applies:

- No premature abstractions; three similar lines beat a helper
  nobody reuses
- No state management libraries until signals prove insufficient
- Semantic HTML elements MUST be preferred over generic `<div>`/
  `<span>` for interactive controls
- All interactive elements MUST be keyboard-navigable and include
  appropriate ARIA attributes when semantic HTML is insufficient
- Color contrast MUST meet WCAG 2.1 AA minimum (4.5:1 for text)

Rationale: A demo project must remain easy to read and modify;
accessibility habits formed here carry into production work.

## Development Constraints

- **Framework**: Angular 20 with standalone APIs
- **Language**: TypeScript 5.9+ (`strict: true`)
- **Styling**: Component-scoped styles; no global CSS beyond
  resets/theming tokens
- **Dependencies**: Minimize third-party packages; justify each
  addition in the PR description
- **Build**: Angular CLI (`ng build`, `ng serve`, `ng test`)

## Development Workflow

- Feature work on branches; `main` stays deployable
- Commits SHOULD be small and focused (one concern per commit)
- `ng build` and `ng test` MUST pass before merging
- Code review is encouraged but not gated (sandbox context)

## Governance

This constitution is the authoritative source for project-level
decisions. When a guideline conflicts with an ad-hoc preference,
the constitution wins unless formally amended.

**Amendment process**:
1. Propose the change with rationale
2. Update this file with new version
3. Verify dependent templates still align
4. Commit with message `docs: amend constitution to vX.Y.Z`

**Versioning**: MAJOR for principle removals/redefinitions, MINOR
for new principles or material expansions, PATCH for wording fixes.

**Compliance**: Constitution checks are integrated into the plan
template (`Constitution Check` section). Each plan MUST confirm
alignment before Phase 0 research.

**Version**: 1.0.0 | **Ratified**: 2026-03-21 | **Last Amended**: 2026-03-21
