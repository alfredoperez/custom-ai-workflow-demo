# Plan: Add Home Page with Navigation Bar

**Spec**: [spec.md](./spec.md) | **Date**: 2026-03-21

## Approach

Introduce Angular Router to the existing standalone Angular 20 app by adding `provideRouter()` to `appConfig`, creating a `NavBarComponent` rendered in the root `app.ts` layout above a `<router-outlet>`, and a `HomePageComponent` as the default route. A wildcard route redirects unknown paths to home. This keeps the existing `ngx-dev-toolbar` integration intact while layering in routing and navigation.

## Files

### Create

| File | Purpose |
|------|---------|
| `src/app/layout/nav-bar.ts` | Top navigation bar component with app title and route links using `routerLinkActive` for active highlighting |
| `src/app/pages/home/home-page.ts` | Home page component with welcome message, rendered at `/` |
| `src/app/app.routes.ts` | Route definitions — default route to `HomePageComponent`, wildcard redirect to `/` |

### Modify

| File | Change |
|------|--------|
| `src/app/app.config.ts` | Add `provideRouter(routes)` to the providers array |
| `src/app/app.ts` | Import `NavBarComponent` and `RouterOutlet`; update template to render nav bar above `<router-outlet>` |
