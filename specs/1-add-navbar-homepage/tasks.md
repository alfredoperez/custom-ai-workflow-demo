# Tasks: Add Navigation Bar and Home Page

**Plan**: [plan.md](./plan.md) | **Date**: 2026-03-25

## Format

- `[P]` = Can run in parallel  |  `[A]` = Agent-eligible

---

## Phase 1: Core Implementation (Sequential)

- [x] **T001** Create route definitions — `src/app/app.routes.ts`
  - **Do**: Create `app.routes.ts` exporting a `routes` array with `/` mapping to `HomeComponent` (lazy-loaded) and a wildcard redirect to `/`
  - **Verify**: File compiles without errors

- [x] **T002** Create HomeComponent — `src/app/pages/home/home-page.ts`
  - **Do**: Create standalone `HomePageComponent` with selector `app-home-page` displaying a welcome message
  - **Verify**: `ng build` passes

- [x] **T003** Create NavbarComponent — `src/app/layout/nav-bar.ts`
  - **Do**: Create standalone `NavBarComponent` with selector `app-nav-bar`, import `RouterLink` and `RouterLinkActive`, render a nav with a "Home" link using `routerLink="/"` and `routerLinkActive` for active-route highlighting
  - **Verify**: `ng build` passes

- [x] **T004** Configure router in appConfig — `src/app/app.config.ts`
  - **Do**: Import `provideRouter` from `@angular/router` and `routes` from `./app.routes`, add `provideRouter(routes)` to the providers array
  - **Verify**: `ng build` passes

- [x] **T005** Update App component with navbar and router-outlet — `src/app/app.ts`
  - **Do**: Import `NavBarComponent` and `RouterOutlet`, add both to `imports`, replace template with `<app-nav-bar />` above `<router-outlet />` (keep `<ndt-toolbar />`)
  - **Verify**: `ng serve` shows navbar with Home link, home page content renders below, unknown routes redirect to home

---

## Phase 2: Quality (Parallel — launch agents in single message)

- [x] **T006** [P][A] Unit tests — `test-expert`
  - **Files**: `src/app/layout/nav-bar.spec.ts`, `src/app/pages/home/home-page.spec.ts`
  - **Pattern**: Angular TestBed with standalone component testing

---

## Progress

| Phase | Tasks | Status |
|-------|-------|--------|
| Phase 1 | T001–T005 | [x] |
| Phase 2 | T006 | [x] |
