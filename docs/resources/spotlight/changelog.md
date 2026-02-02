---
sidebar_position: 999
---

# Changelog

This page documents the changes made to Spotlight.

## v1.0.\*

### v1.0.5 - 02/03/2026
**Added**:
- Support for `EnableHighBeams` for all spotlight types.
  - Adding `"EnableHighBeams": true` to a config entry will turn on vehicle high beams with the spotlight.
    - Note: Only works for driver's side spotlights.
- [`IgnoredVehicleClasses`](config.md#ignored-vehicle-classes) and [`IgnoredVehicles`](config.md#ignored-vehicles) config options. See [here](config.md#ignored-vehicle-classes) and [here](config.md#ignored-vehicles) for more info.
  - [`IgnoredVehicleClasses`](config.md#ignored-vehicle-classes) disallows listed vehicle classes from using spotlights. 
  - [`IgnoredVehicles`](config.md#ignored-vehicles) disallows listed vehicles from using spotlights. 

### v1.0.4 - 12/05/2025
**Added**:
- Support for custom spotlight colors with RGB overrides, [see here](config.md#custom-spotlight-rgb-colors) for more info.
  - Allows changing the spotlight color with RGB on a per model basis.
  - Where no custom color exists, the default spotlight color will be used.

### v1.0.3 - 11/21/2025
**Added**:
- Support for [Persistent Spotlights](config.md#vehicles-with-persistent-spotlights). [See here](config.md#vehicles-with-persistent-spotlights) for more info.
  - For vehicles that have spotlights permanently modeled, and cannot be toggled with extras or mod kits.
- `To Console` button to the [Placement Tool](developers/index.md), that pastes the current offset to the F8 Console for easy selection and copying.

**Fixed**:
- Rounding error in the `Z` value of the [Placement Tool](developers/index.md), resulting in values being shown as whole numbers (i.e. `1`) instead of with decimals (i.e. `0.456`).

### v1.0.2 - 07/29/2025
**Added**:
- Support for automatic updating of vehicle mod kits on configured vehicles.
  - Identical to the feature that sets the correct vehicle extra based on spotlight on/off state, but for mod kits. [See here](config.md#vehicle-mod-mapping) for more info.
- Support for spotlights on mod kits that don't have a spotlight bone of their own.
  - Using the new Placement Tool, you can now manually add a spotlight for a vehicle mod kit that doesn't already have a spotlight. [See here](developers/index.md#server-owners--developers) for more info.

**Changed**:
- [`/spotlight debug`](usage/commands.md#spotlight-debugging) now also shows relevant vehicle bones alongside spotlight positions. [See here](usage/commands.md#spotlight-debugging) for more info.

### v1.0.1 - 07/23/2025

**Added**:
- [`/spotlight debug`](usage/commands.md#spotlight-debugging) command, [see here](usage/commands.md#spotlight-debugging) fore more info.
  - Used to visualize the positions of spotlights on vehicles, and get spotlight indices.
- [`VehicleSpotlightIgnores`](config.md#spotlight-ignoring) config option, [see here](config.md#spotlight-ignoring) for more info.
  - Used to tell the resource to ignore specific spotlights on specific vehicles.

### v1 - 07/11/2025
Resource release.

**YouTube Video**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/aR8QT05UrMQ?si=SnQqYDKowGBkGMkh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
