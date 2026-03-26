# Plan: Add Navigation Bar and Home Page

**Spec**: [spec.md](./spec.md) | **Date**: 2026-03-25

## Approach

Introduce the Angular Router into the existing standalone app by adding `provideRouter` to `app.config.ts` with a routes array. Create a `NavbarComponent` rendered in `app.ts` above a `<router-outlet>`, and a `HomeComponent` mapped to the default route. Unknown routes redirect to `/`.

## Files

### Create

| File | Purpose |
|------|---------|
| `src/app/layout/navbar.ts` | Standalone navbar component with app title and nav links |
| `src/app/pages/home/home.ts` | Home page component rendered at `/` |
| `src/app/app.routes.ts` | Route definitions (default `/` → Home, wildcard → redirect) |

### Modify

| File | Change |
|------|--------|
| `src/app/app.config.ts` | Add `provideRouter(routes)` to providers array |
| `src/app/app.ts` | Import `NavbarComponent` and `RouterOutlet`; replace inline template with navbar + router-outlet |
