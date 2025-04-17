---
sidebar_position: 999
---

# Changelog

This page documents the changes made to SA.

## v1.0.\*

### v1.0.3 - 04/17/2025

**Added**:
- "Close All" button to Door Controls.
- Hook for CD_Dispatch.
- Filter to TTS.
  - A reminder that TTS usage is logged and reviewed... please be kind to people on the internet.

**Changed**:
- Improved TTS error logging.
  - Helpful errors will now appear in the server console when there is a TTS error.

**Fixed**:
- Server crash when duplicate messages were submitted at the same time.
- An issue with SA that resulted in a single zFire fire, creating multiple alerts.
- Super embarrassing typo *somewhere*.
  - No I'm not going to tell you what it was. Yes I'll deny this ever happened. No you'll never find it.

**Removed**:
- Requirement for Station Locations to have at least one light and one door.
  - This now allows for ["Dispatch Centers"](usage/components.md#dispatch-centers) to be placed, which can create alerts but not receive them.

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
- Temporary hook for zFires.

**Fixed**:
- `editable` files being escrowed.

### v1 - 04/11/2025
Easy Access release.
