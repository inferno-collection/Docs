---
sidebar_position: 40
---

# Developers

## Vehicle Creators
To make a vehicle compatible with Spotlight, ensure that all spotlights modeled onto the vehicle make use of `extralight_1` through `extralight_4` for their illumination, and that they turn on with the vehicle's high beams.

If this is not an option, the vehicle can still be made compatible, but server owners will need to use the [Spotlight Tool](tool.md).

## Server Owners / Developers
If your vehicle(s) do not have an existing functional spotlight via an `extralight_*` bone, the resource will not automatically be able to determine the position of the spotlight.

If this is the case, you can manually add spotlights to the vehicle using the [Spotlight Tool](tool.md).

:::note
If [`ic_spot_disableFallback`](../config.md#disable-fallback) is set to the `true`, vehicles not defined in the `spotlights.json` fille will not be able to use Spotlights automatically regardless of compatibility.
:::
