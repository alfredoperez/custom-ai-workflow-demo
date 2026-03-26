# Tasks: Add Navigation Bar and Home Page

**Plan**: [plan.md](./plan.md) | **Date**: 2026-03-25

## Format

- `[P]` = Can run in parallel  |  `[A]` = Agent-eligible

---

## Phase 1: Core Implementation (Sequential)

- [x] **T001** Create route definitions — `src/app/app.routes.ts`
  - **Do**: Create `src/app/app.routes.ts` exporting a `routes` array with default route `/` pointing to lazy-loaded `HomeComponent` and a wildcard `**` redirecting to `/`
  - **Verify**: File compiles with `ng build` (no route consumers yet, just the array)

- [x] **T002** Create home page component — `src/app/pages/home/home.ts`
  - **Do**: Create standalone `HomeComponent` with a simple welcome template (heading + short description)
  - **Verify**: Component compiles; referenced in routes from T001

- [x] **T003** Create navbar component — `src/app/layout/navbar.ts`
  - **Do**: Create standalone `NavbarComponent` with app title and a "Home" link using `routerLink`. Import `RouterLink`. Add basic responsive styles (flexbox, sticky top)
  - **Verify**: Component compiles with no errors

- [x] **T004** Wire router into app config — `src/app/app.config.ts`
  - **Do**: Import `provideRouter` from `@angular/router` and `routes` from `./app.routes`. Add `provideRouter(routes)` to the providers array
  - **Verify**: `ng build` succeeds

- [x] **T005** Update app component — `src/app/app.ts`
  - **Do**: Import `NavbarComponent` and `RouterOutlet`. Replace current template with `<app-navbar />` + `<router-outlet />` (keep `<ndt-toolbar />`). Update imports array
  - **Verify**: `ng serve` shows navbar at top, home page content below, navigating to unknown route redirects to `/`

---

## Phase 2: Quality (Parallel — launch agents in single message)

- [x] **T006** [P][A] Unit tests — `test-expert`
  - **Files**: `src/app/layout/navbar.spec.ts`, `src/app/pages/home/home.spec.ts`
  - **Pattern**: Angular TestBed with standalone component imports
  - **Reference**: Standard Angular CLI test patterns (no existing specs in project)

---

## Progress

| Phase | Tasks | Status |
|-------|-------|--------|
| Phase 1 | T001–T005 | [x] |
| Phase 2 | T006 | [x] |
