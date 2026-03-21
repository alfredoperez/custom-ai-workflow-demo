# Tasks: Add Home Page with Navigation Bar

**Plan**: [plan.md](./plan.md) | **Date**: 2026-03-21

## Format

- `[P]` = Can run in parallel | `[A]` = Agent-eligible

---

## Phase 1: Core Implementation (Sequential)

- [x] **T001** Create route definitions — `src/app/app.routes.ts`
  - **Do**: Create `src/app/app.routes.ts` exporting a `routes` array with a default route (`path: ''`) lazy-loading `HomePageComponent` from `./pages/home/home-page` and a wildcard route (`path: '**'`) redirecting to `/`
  - **Verify**: File exists, TypeScript compiles without errors

- [x] **T002** Create home page component — `src/app/pages/home/home-page.ts`
  - **Do**: Create standalone `HomePageComponent` with a welcome message template (e.g. `<h1>Welcome</h1><p>Home page content</p>`)
  - **Verify**: Component compiles, can be imported by route config

- [x] **T003** Create navigation bar component — `src/app/layout/nav-bar.ts`
  - **Do**: Create standalone `NavBarComponent` importing `RouterLink` and `RouterLinkActive`. Template: `<nav>` with app title and a link to home (`/`). Use `routerLinkActive` directive to highlight the active link
  - **Verify**: Component compiles, active class applies on `/`

- [x] **T004** Wire router into app config _(depends on T001)_ — `src/app/app.config.ts`
  - **Do**: Import `provideRouter` from `@angular/router` and `routes` from `./app.routes`. Add `provideRouter(routes)` to the `providers` array
  - **Verify**: `ng serve` starts without router errors

- [x] **T005** Update app root component _(depends on T003, T004)_ — `src/app/app.ts`
  - **Do**: Import `NavBarComponent` and `RouterOutlet`. Update imports array to include both. Replace template body with `<app-nav-bar />` above `<router-outlet />` (keep `<ndt-toolbar />`)
  - **Verify**: App renders nav bar, home page loads at `/`, unknown routes redirect to home

---

## Phase 2: Quality (Parallel — launch agents in single message)

- [x] **T006** [P][A] Unit tests — `test-expert`
  - **Files**: `src/app/pages/home/home-page.spec.ts`, `src/app/layout/nav-bar.spec.ts`
  - **Pattern**: Angular TestBed with standalone component testing
  - **Reference**: Standard Angular 20 standalone component test patterns

---

## Progress

| Phase   | Tasks     | Status |
| ------- | --------- | ------ |
| Phase 1 | T001–T005 | [x]    |
| Phase 2 | T006      | [x]    |
