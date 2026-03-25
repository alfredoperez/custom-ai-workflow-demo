# Plan: Add Navigation Bar and Home Page

**Spec**: [spec.md](./spec.md) | **Date**: 2026-03-25

## Approach

Add Angular Router to the existing app by configuring `provideRouter` in `appConfig` with a routes array, then create a `NavbarComponent` and `HomeComponent` as standalone components. The root `App` component will be updated to render the navbar above a `<router-outlet>`, establishing the routing foundation for the app.

## Files

### Create

| File | Purpose |
|------|---------|
| `src/app/navbar/navbar.ts` | Standalone navbar component with `routerLink` navigation and `routerLinkActive` for active-route highlighting |
| `src/app/home/home.ts` | Standalone home page component displaying a welcome message |
| `src/app/app.routes.ts` | Route definitions: `/` → HomeComponent, wildcard → redirect to `/` |

### Modify

| File | Change |
|------|--------|
| `src/app/app.config.ts` | Add `provideRouter(routes)` to the providers array |
| `src/app/app.ts` | Import `NavbarComponent` and `RouterOutlet`, replace inline template with navbar + `<router-outlet>` |
