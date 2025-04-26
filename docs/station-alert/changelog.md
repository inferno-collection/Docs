---
sidebar_position: 999
---

# Changelog

This page documents the changes made to SA.

## v1.0.\*
### v1.0.7 - 04/27/2025
**Added**:
- Higher resolution DUI for Call Screen
	:::warning
	Restarting the resource while using the new Call Screen will cause the Call Screens to all go black.   
	This is because of how FiveM un/loads the replacement asset, and we cannot fix this.   
	If you need to restart the resource a lot (i.e. because you are developing/testing a custom call screen), we suggest moving the `xm_prop_x17_tv_ceiling_scn_02.ydr` file out of the `stream` folder temporarily. 
	:::

**Changed**:
- Further increased the Sonoran Edition timeout validation logic.
- Server info logs to be blue, making them easier to locate in the log.

**Fixed**:
- Typo in `config` value: `i`**s**`_sa_ttsSpeechRate` should be `i`**c**`_sa_ttsSpeechRate`.
- A blank timer appearing for one second when the Call Screen first changes to the Alert page.

### v1.0.6 - 04/24/2025
**Added**:
- Call Screen
  - When not Alerted, displays a screensaver with the station name, current time, and customizable logo.
  - When Alerted, displays call details, door states, and time since alert.
  - Can display custom pages/websites if [configured to do so](config.md#custom-call-screen).
  - See [here](config.md#call-screen-settings-explained) and [here](usage/components.md#call-screens) for more information.

**Fixed**:
- Models not being unloaded from memory when no longer required.
- Issue with doors not auto-closing after the time set in the config.
- Error message triggered when models failing to load, not listing the correct model names.
- Edge case where [SA Tool](developers/tool.md) would completely fail to load when provided bad data, instead of showing a helpful error message.

### v1.0.5 - 04/22/2025
**Added**:
- [`getAllLocationsWithPlayers`](developers/exports/server.md#get-all-locations-with-players) and [`getAllLocationsWithPlayersNearestToPosition`](developers/exports/server.md#get-all-locations-with-players-nearest-to-position) server exports.
- [`MenuOpened`](developers/events.md#menu-opened---client) and [`MenuClosed`](developers/events.md#menu-closed---client) client events.
- Support for no Doors being opened on Alert.
  - Only works with Exports and HTTP API.
  - Instead of passing door names in an array, pass an array with a single empty string.
- Self-Closing Doors
  - When a door is opened, once a vehicle is driven through the door, the door will close.
  - Can be disabled via [`ic_sa_closeDoorsOnDriveThrough`](config.md#self-closing-doors).
- [Health Check](usage/commands.md#health-check) command.

**Fixed**:
- Edge case where Unit Indicators at Stations with no doors would never activate.
- Edge case where restarting the resource after the server had started, while doors where not fulled closed, would result in traffic lights showing multiple colors.
- Bug where the Door Buzzer would incorrectly always show doors as "Closed".
- Bug where props would spawn, despawn, an error would show, and then prop respawn.

### v1.0.4 - 04/19/2025
**Added**:
- Hook for EmergencyDispatch.
- [`ic_sa_slowerDoors`](config.md#slower-doors) config option.
- Coloured radii in the [SA Tool](developers/tool.md#coloured-radii) that indicate the approximate range of Speakers.
  - To help prevent excess overlap and aid in proper coverage of stations.

**Changed**:
- Improved error logging when prop models are not loading correctly.
- Sonoran Edition version validation logic.
  - Will now try twice before exiting.
  - Waits longer to account for slow server boot time.
- Improved logic that sends location data to the client.

**Fixed**:
- Bug in the third-eye code that preventing interaction with most Computers and Door Controls.

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
