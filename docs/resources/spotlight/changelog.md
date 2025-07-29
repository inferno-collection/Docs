---
sidebar_position: 999
---

# Changelog

This page documents the changes made to Spotlight.

## v1.0.\*

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
