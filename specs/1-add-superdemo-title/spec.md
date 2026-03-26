# Spec: Add SuperDemo Title to Navbar

**Date**: 2026-03-25

## Summary

Update the navigation bar brand text from "MyApp" to "SuperDemo" so the application displays its correct name in the header.

## Requirements

- **R001** (MUST): The navbar brand text displays "SuperDemo" instead of "MyApp"
- **R002** (MUST): The brand text remains a clickable link to the home route

## Scenarios

### Brand Display

**When** the user loads any page
**Then** the navbar shows "SuperDemo" as the brand title

### Brand Navigation

**When** the user clicks the "SuperDemo" brand text
**Then** they are navigated to the home route (`/`)

## Out of Scope

- Changing navbar styling or layout
- Adding a logo or icon
