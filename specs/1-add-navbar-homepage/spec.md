# Spec: Add Navigation Bar and Home Page

**Branch**: 1-add-navbar-homepage | **Date**: 2026-03-25

## Summary

Add Angular Router with a navigation bar component and a home page component. The navbar provides top-level navigation across the app, and the home page serves as the default landing route. This establishes the routing foundation for the application which currently has none.

## Requirements

- **R001** (MUST): Configure Angular Router with `provideRouter` in `appConfig` and add a `<router-outlet>` to the root `App` component
- **R002** (MUST): Create a `NavbarComponent` rendered at the top of every page with links to available routes
- **R003** (MUST): Create a `HomeComponent` mapped to the default route (`/`) displaying a welcome message
- **R004** (SHOULD): Navbar visually indicates the currently active route
- **R005** (SHOULD): Unknown routes redirect to the home page

## Scenarios

### Default Navigation

**When** a user opens the app without a specific path
**Then** the home page is displayed with a welcome message and the navbar highlights the "Home" link

### Route Navigation

**When** a user clicks a link in the navbar
**Then** the app navigates to the corresponding route without a full page reload

### Unknown Route

**When** a user navigates to an undefined route
**Then** they are redirected to the home page

## Out of Scope

- Additional pages beyond the home page
- Authentication or route guards
- Responsive/mobile hamburger menu
- Backend API integration
