# Spec: Add Navbar Title "Demo"

**Branch**: 2-add-navbar-title | **Date**: 2026-03-21

## Summary

Update the navbar title from the default "test-ng20" to "Demo". This provides a meaningful application name displayed in the navigation bar.

## Requirements

* **R001** (MUST): The navbar displays "Demo" as the app title

* **R002** (MUST): Existing navbar layout, styling, and navigation links remain unchanged

## Scenarios

### Title Display

**When** the application loads any page
**Then** the navbar shows "Demo" as the app title on the left side

### No Regression

**When** the user navigates between routes
**Then** the navbar links continue to work and highlight correctly

## Out of Scope

* Adding a logo or icon next to the title

* Making the title a clickable link
