---
sidebar_position: 999
---

# Changelog

This page documents the changes made to Flares.

## v1.0.\*

### v1.0.2 - 12/15/2025
**Changed**:
- Removed the `slowTraffic` config option, and replaced with a per-cone traffic impact option.
  - The options are as follows:
    - No impact
    - Stop traffic
    - Slow traffic
  - These can be selected when a cone is placed by press Spacebar.

### v1.0.1 - 08/01/2025
**YouTube Video**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/h_L8NF9mohY?si=IszEN_K1CTFn1ftw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Added**:
- Mexican Spanish translation. [See here](../../translations) for more info.
- Support for third-eye and inventory resources. [See here](config.md#manual-interactions-third-eye--inventory-support) for more info.
- Optional animations when placing, and picking up IFlares. [See here](config.md#animations) for more info.

**Changed**:
- Replaced existing menu-based placement system with new placement UI.
- Updated permissions to match new command versus third-eye/inventory placement options. [See here](config.md#permissions) for more info.

**Fixes**:
- Bug where traffic would be slowed even if `ic_if_slowTraffic` was `false`.
- Bug where, when placed, IFlares would appear slightly above the preview, resulting in them "floating" slightly.
- Edge case where passing malformed data to the removal event would result in a "successful" log entry of a removal, but no actual removal of any IFlares.

### v1 - 07/22/2025
Resource release.

**YouTube Video**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/55ZlZ2vyuIY?si=9SJcqf5OHtYsbvOv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
