---
sidebar_position: 999
---

# Changelog

This page documents the changes made to SA.

### v1.0.2 - 04/14/2025

:::danger
Breaking changes to the [Exports](developers/exports/server.md) were made in this version, do not blindly update.
:::

**Added**:
- Ability to broadcast a TTS message to a Station from a Computer, without creating a full alert.
  - Think of it like broadcasting over a PA, except it's a TTS message.
- [`is_sa_ttsSpeechRate`](config.md#text-to-speech-rate) config option, to change how fast the TTS is read out.

**Changed**:
- Several server exports:
  - Added:
    - [`getNearestLocationWithPlayersToPosition`](developers/exports/server.md#get-nearest-location-with-players-to-position) export
      - Gets the nearest Station Location to a provided position, only if it has players nearby.
    - [`newAlertNearestStationWithPlayers`](developers/exports/server.md#create-new-alert-at-nearest-station-with-players) export
      - Creates an Alert at the nearest Station Location to a provided position, only if it has players nearby.
      
  - Changed:
    - [`newAlertNearestStation`](developers/exports/server.md#get-nearest-location-to-position) export
      - Now accepts an object so unit indicator colors and a tone can be provided with the export.
      - Also, now requires a `radius` to be provided.

**Fixed**:
- "Press E to..." prompts displaying even when already inside a menu.
- Messages (like "90 seconds") only placing through one speaker, and not all speakers.

### v1.0.1 - 04/13/2025

**Added**:
- Temporary hook for zFires

**Fixed**:
- `editable` files being escrowed.

## v1.0.\*

### v1 - 04/11/2025
Easy Access release.
