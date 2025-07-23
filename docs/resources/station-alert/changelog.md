---
sidebar_position: 999
---

# Changelog

This page documents the changes made to SA.

## v1.1.\*

### v1.1.7 - 07/23/2025
**Added**:
- [`ic_sa_doubleDistance`](config.md#double-distance) config option. [See here](config.md#double-distance) for more info.

**Changed**:
- Increased the LOD distance for the [Addon Traffic Light](usage/components.md#addon-traffic-lights) from 60 units to 120 units.
- [Lights](usage/components.md#lights) can now be placed on ceilings, no longer exclusively on walls.

### v1.1.6 - 07/04/2025

**Fixes**:
- Locations with no Wall Lights not appearing in the following:
  - HTTP API [`locations` GET](developers/api.mdx#locations) request.
  - [`getAllLocations`](developers/exports/server.md#get-all-locations) server export.
  - [`getAllLocationsWithPlayers`](developers/exports/server.md#get-all-locations-with-players) server export.
  - [`getAllLocationsWithPlayersNearestToPosition`](developers/exports/server.md#get-all-locations-with-players-nearest-to-position) server export.
- Edge case where having multiple [Unit Indicators](usage/components.md#unit-indicators) at one Station could cause game freezing & high resmon on initialization.
- Edge case where sending a correctly formatted [`Alert`](developers/data.mdx#alert) object via an export would result in a hard server crash with a mono error.

### v1.1.5 - 06/24/2025

**Added**:
- Groups for Station Locations.
  - Stations can be assigned a "Group" (i.e., "Sandy Shores") via their Draft File.
  - Groups of Stations can then be alerted at the same time via the new [`newGroupAlert`](developers/exports/server.md#create-new-alert-for-group-of-stations) server export. [See here](developers/exports/server.md#create-new-alert-for-group-of-stations) for more info.
  - All Stations with Groups can then be fetched via the new [`getAllLocationsByGroup`](developers/exports/server.md#get-all-locations-by-group) server export. [See here](developers/exports/server.md#get-all-locations-by-group) for more info.
- Custom Data Attribute for Locations.
  - Store whatever information you'd like on a per-system basis, to access from any script. [See here](developers/tool.md#adding-custom-data) for more info.
- Support for Custom Icons in Sonoran CAD. [See here](developers/third-party.md#per-station-icons) for more info.
	- Icons can be added on a per-system basis, which will display in Sonoran CAD's Station Alert window and Live Map.
		- ![](https://i.imgur.com/3pYjnsr.png "Sonoran CAD w/ Station Alert")

### v1.1.4 - 06/20/2025

**Added**:
- [Bollard Lights](usage/components.md#bollard-lights) that flash on Alert. [See here](usage/components.md#bollard-lights) for more info.
- "ConVar Permissions" section to config, which prevents other resources from reading private values (like Addon Payment Reference).

**Changed**:
- Replaced Addon Traffic Light model.
  - Fixes issue where placing too close to a road would make them act like normal traffic lights.
  - Adds the [`ic_sa_addonTrafficLightAlwaysFlashYellow`](config.md#addon-traffic-lights-always-flash-yellow) config option, allowing addon traffic lights to always be flashing. [See here](config.md#addon-traffic-lights-always-flash-yellow) for more info.
- SA Tool 3D text and color to only draw for the selected prop.
  - For example, if "Door" is selected, only door 3D text will render, and not Traffic Light, Wall Light, etc.
  - Speaker radius colors will also now only show when Ceiling Speaker or Exterior Speaker is selected.
- Improved Addon & Base Traffic lights such that they more consistently stop traffic at red lights.

**Fixed**:
- Issue where Interior Traffic Lights placed very close together would result in the wrong light(s) changing color when a door opened/closed.
- Edge case where sitting in a vehicle, in a station, after closing all doors via the Buzzer or Door Controls, would cause an error.
- Bug that allow re-selecting the same prop multiple times in the SA Tool when selecting a Computer.
- Issue where Peds could be selected in the SA Tool erroneously.

### v1.1.3 - 06/13/2025
:::warning
Significant changes to [Server Exports](developers/exports/server.md) were made in this version, do not blindly update.
:::

**YouTube Video**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ezGdlphpJg0?si=qqfgW74iNxR-JU7P" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Added**:
- Addon Traffic Lights
	- Place anywhere using [SA Tool](developers/tool.md) and stop traffic when Alert received.
	- For more info see the [video above](https://youtu.be/ezGdlphpJg0), [see here](usage/components.md#addon-traffic-lights), and [see here](developers/tool.md#addon-traffic-lights).
- [`ic_sa_closeAllDoorsOnTimeout`](config.md#close-all-doors-on-timeout) config option.
  - Controls if all doors should close on Alert timeout. [See here](config.md#close-all-doors-on-timeout) for more info.

**Changed**:
- ['Locations - Get All *' Server Export](developers/exports/server.md#locations) data structure returns
  - Previously these exports returned a table with an entry called `locations` which contained the expected data.
  - Now the returned table contains what was previously inside `locations`.
  - To update existing implementations, remove `.locations` from any code, see example below:
    - ```lua
      -- Old implementation
      local stations = exports["inferno-station-alert"]getAllLocations().locations
      
      -- New implementation
      local stations = exports["inferno-station-alert"]getAllLocations()
      ```

### v1.1.2 - 06/05/2025

**YouTube Video**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/wypQ19zgBWA?si=8s8A4B3096R8gCOh" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Added**:
- Base Game Traffic Lights
  - Allows for the control of traffic at an intersection when an alert is received.
  - For more info see the [video above](https://youtu.be/wypQ19zgBWA), [see here](usage/components.md#base-game-traffic-lights), and [see here](developers/tool.md#base-game-traffic-lights).

**Fixed**:
- Issue where sending multiple alerts simultaneously would cause doors to not automatically close.
- Issue where resource would not default back to English when using a broken language file.
- Issue where when SA Tool is active, part of the core logic would loop instead of wait.
- Issue where you could save "empty" drafts in the SA Tool.
- Issue where when SA Tool is active, and current location had no doors, Computers and Hidden props would not be highlighted.
- Issue where saving a draft in the SA Tool would not clear Hidden props and Computers from memory until another location was loaded.

### v1.1.1 - 05/30/2025
**Added**:
- New config options:
  - [`ic_sa_nuiVolume`](config.md#nui-volume) controlling the in-game NUI volume. [See here](config.md#nui-volume) for more info.
  - [`ic_sa_command`](config.md#alias-command) allowing for an alias command to be specified instead of `stationalert`. [See here](config.md#alias-command) for more info.
- All Station Broadcast via Station Computer.
  - Similar to a message, but plays at all Stations.
  - Has its own Ace Permission: [`Broadcast`](config.md#use-all-station-broadcast)
- [`doors/rename`](developers/api.mdx#rename-doors) POST API endpoint. [See here](developers/api.mdx#rename-doors) for more info.
- Regex support for TTS replacements. [See here](usage/tts.md#word-replacement-file) for more info.
- Support for extra TTS replacement variables. [See here](usage/tts.md#variables) for more info.
  - `-stations-`, `-doors-`, & `-units-`.
- `tones` parameters to [`newAlert`](developers/exports/server.md#create-new-alert) server export & [`alert`](developers/api.mdx#create-a-new-alert) POST API endpoints.
  - Allows for specifying a specific tone per station alerted.
  - For example, Station One might hear Tone One, while Station Two might hear Tone Two.
- [`newMessage`](developers/exports/server.md#create-new-message) server export for sending messages to stations via export. [See here](developers/exports/server.md#create-new-message) for more info.
- `displayMessage` parameters to [`newAlert`](developers/exports/server.md#create-new-alert), [`newAlertNearestStation`](developers/exports/server.md#create-new-alert-at-nearest-station) and [`newAlertNearestStationWithPlayers`](developers/exports/server.md#create-new-alert-at-nearest-station-with-players) server exports & [`alert`](developers/api.mdx#create-a-new-alert) and [`message`](developers/api.mdx#create-a-new-alert) POST API endpoints.
  - Allows for a separate message to be shown on call screens, versus what is read by TTS.
  - Example:
      - TTS: `Station One: Engine One, Truck One, Fire at Postal 0 9 0`
      - Call Screens: `Station 1: E1 & T1. Fire @ Postal 090`

**Changed**:
- [`stationalert health`](usage/commands.md#health-check) command visual output, and the following extra info:
  - TTS replacements.
  - Addon validation status.

**Fixed**:
- Isolated doors not updating when renamed.
- Issue where incomplete JSON config values would throw an error.
	- A friendly error is now shown, and the default config value is used instead.
- Issue where locations were marked as [Dispatch Centers](usage/components.md#dispatch-centers) erroneously.
- Issue where door names would not be displayed on the alert screen of call screens.
- In-game menus showing out-of-date door names immediately following a door renaming.
- Issue where location updates (such as door renames) while doors were opening/closing would cause traffic lights to incorrectly flash multiple colors.

### v1.1.0 - 05/16/2025

**YouTube Video**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/2BUjmwnyRhc?si=ECIjutYto5G94qHK" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Added**:
- Added [Exterior Speakers](usage/components.md#exterior-speakers).
  - Behave exactly the same as Ceiling Speakers, but are designed to be placed outside.
- Message Screen for [Call Screens](usage/components.md#call-screens)
  - When a message is sent to the station, it will display on the Call Screens for 20 seconds before returning to the screensaver.
  - [`custom_message_url`](config.md#custom-message-url) has also been added for [Custom Call Screen](config.md#custom-call-screen) users. [See here](config.md#custom-message-url) for more info.
- Support for per-station logos. [See here](config.md#logo-url) for more info.
- Yellow and Magenta as color options for [Unit Indicators](usage/components.md#unit-indicators).
- In-game menu to temporarily rename doors. [See here](usage/components.md#station-computer) for more info.
- Support for overriding Custom Call Screen URLs via convars. [See here](config.md#custom-call-screen) for more info.
  - This allows for accents and non-ASCII characters in URLs. [See here](../../translations/station-alert.mdx#custom-call-screen-url-overrides) for more info.
- In-game menu to temporarily isolate (lock open or closed) doors. [See here](usage/components.md#door-controls) for more info.
- [`tts-replace.json`](usage/tts.md#word-replacement) which will replace matching entries in all text-to-speech messages. [See here](usage/tts.md#word-replacement) for more info.
  - For example, replacing `A`, `B`, & `C` with `Alpha`, `Bravo`, and `Charlie`. 
- **Events**:
  - [`NewMessage`](developers/events.md#message-received---server) server event that is fired when a message is sent to a station. [See here](developers/events.md#message-received---server) for more info.
- **API**:
  - [`message`](developers/api.mdx#create-a-new-message) POST API endpoint to send messages to stations via [HTTP API](developers/api.mdx). [See here](developers/api.mdx#create-a-new-message) for more info.
  - [`doors`](developers/api.mdx#get-doors-by-location) GET API endpoint to get doors at a location via [HTTP API](developers/api.mdx). [See here](developers/api.mdx#get-doors-by-location) for more info.
  - [`doors`](developers/api.mdx#update-doors) POST API endpoint to update doors at one or more locations via [HTTP API](developers/api.mdx). [See here](developers/api.mdx#update-doors) for more info.
- **Exports**:
  - [`updateDoors`](developers/exports/server.md#update-doors) server export for opening and closing doors via exports. [See here](developers/exports/server.md#update-doors) for more info.
  - [`updateDoorIsolations`](developers/exports/server.md#update-door-isolations) server export for isolating doors via exports. [See here](developers/exports/server.md#update-door-isolations) for more info.

**Changed**:
- Refactored logic that loads required models for stations to remove unnecessary variable assignment.
- Refactored logic that creates alerts to removed duplicated message variable accidentally introduced in Sonoran Edition.
- Custom Call Screen URL logic such that when [`custom_urls`](config.md#custom-call-screen) is `true`, if any of the custom URLs are empty (`""`), they will default back to the built-in URLs.

**Fixed**:
- Issue where if all doors were deselected in the in-game Call Creation menus, all the doors at a station would open, instead of none.

**Removed**:
- Temporary zFires hook.
  - zFires has been updated to include the required code as part of the download. [See here](developers/third-party.md#zfires) for more info.
  - Make sure to update your copy of zFires!

***

## v1.0.\*
### v1.0.9 - 05/05/2025
**Added**:
- [`/stationalert duifix`](usage/commands.md#dui-fix) command for players with the Flipped DUI Bug. [See here](usage/commands.md#dui-fix) for more info.
- Friendly error for when invalid user-provided JSON config values fail to load, indicating as such.
- `tones.json` which allows tone names with accents and non-ASCII characters. [See here](../../translations/station-alert.mdx#tone-name-overrides) for more info.

**Changed**:
- Improved the server log message when ingesting [Dispatch Centers](usage/components.md#dispatch-centers).
- [`/stationalert health`](usage/commands.md#health-check) command to list [Dispatch Centers](usage/components.md#dispatch-centers) count, and all location names.
- Call Screens requests such that Doors JSON is provided for Screensaver, and Station Name for Alerts. [See here](config.md#custom-call-screen) for more info.

**Fixed**:
- [Dispatch Centers](usage/components.md#dispatch-centers) being selectable in Sonoran CAD.

### v1.0.8 - 04/29/2025
:::warning
Significant changes to [`ic_sa_language`](config.md#language) were made in this version, do not blindly update.
:::

**Changed**:
- Warning about locations not having any lights **and** doors, to warning about not having any lights **or** any doors.
- Wording of [SA Tool](developers/tool.md) when saving a draft.
- Completely redone language system.
  - Was required as `.cfg`s don't support accents.
  - [`ic_sa_language`](config.md#language) is now a language short code (e.g., `en-us`). [See here](config.md#language) for more information.
  - Translations have moved from `config.cfg` to individual files per-language inside a new folder called `languages`.

**Fixed**:
- Text-to-Speech requests containing accents failing.
- "Update Doors" button in Sonoran CAD not properly opening/closing doors in-game.
- No doors closing after timeout when all doors were opened for an Alert.
- Sonoran CAD not being sent required config when validation failed on the first attempt.
- `-station-` appearing on call screens instead of the name of the station, when using server exports.
- Multiple alerts resulting in:
  - Duplicated follow-up messages
  - Doors closing too soon
  - Lights turning off too soon

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
