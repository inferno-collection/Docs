---
sidebar_position: 999
---

# Changelog

This page documents the changes made to FAR.

## v1.3.3 - 12/01/2024

:::danger
Breaking changes to the [Exports](developers/exports.md) were made in this version, do not blindly update.
:::

**Added**:
- [`ic_far_sprinklerChance`](config.md#sprinkler-chance-to-extinguish-fire) config value, [see here](config.md#sprinkler-chance-to-extinguish-fire) for details.
- [`ic_far_allowBadResets`](config.md#allow-badinvalid-alarm-system-resets) config value, [see here](config.md#allow-badinvalid-alarm-system-resets) for details.
- [`ic_far_realisticAudio`](config.md#use-realistic-audio-for-sounders) config value, [see here](config.md#use-realistic-audio-for-sounders) for details.
- [`triggerPullStationNearPosition`](developers/exports.md#trigger-pull-station-near-position) export, [see here](developers/exports.md#trigger-pull-station-near-position) for details.

**Changed**:
- Multiple Sprinklers can now activate for the same fire.
  - Previously, only the closest Sprinkler within X distance of a fire would activate, now all Sprinklers with X distance will activate.
  - The distance ('X') from the fire to the Sprinkler has been reduced slightly to avoid "too many" Sprinklers activating.
- Pre-activated Sprinklers now extinguish new fires.
  - :::note
  	This only applies to [z_Fires](https://forum.cfx.re/t/paid-standalone-esx-qbcore-z-fire/5244464?u=christopherm) and [SmartFires](https://forum.cfx.re/t/smart-fires-automatic-fires-fire-smoke-types-many-integrations-standalone-paid-resource/4792695?u=christopherm).
  	:::
  - Previously, once a Sprinkler was activated, any new fires in the same location while the Sprinkler was still active would not be extinguished; this is no longer the case.
- [`triggerPullStationAtPosition`](developers/exports.md#trigger-pull-station-at-position) export now activates the closet Pull Station to the provided position, not a random Pull Station.
  - For random Pull Stations, use [`triggerPullStationNearPosition`](developers/exports.md#trigger-pull-station-near-position).

**Fixed**:
- Issue where randomly generated z_Fires smoke was causing server errors and Sprinklers not to activate.

## v1.3.2 - 11/27/2024
**Fixed**:
- All fires created by z_Fires were put out after a few seconds, regardless of Sprinklers.
- [AlarmActivation](developers/events.md#alarm-activation) event being fired multiple times.
- Typo in `ic_far_defaultSprinklerValveDistanceCheck` config option.
- ALARM and BUZZER Control Panel LEDs still blinking after being muted.

## v1.3.1 - 11/25/2024
**Fixed**:
- Resets being soft locked if first reset attempt failed.
- FIRE LED state not updating until FIRES button was pressed.
- Sprinklers reactivating for a few seconds if the Sprinkler Valve is Closed, and a new component is activated.
- Edge case where the distance check for the nearest interactable component would fail.
- [`ic_far_disablePasscodes`](config.md#disable-passcodes) config option being ignored.
- TEST button saying a passcode is required, when [`ic_far_disablePasscodes`](config.md#disable-passcodes) is `true`.
- ALARM and BUZZER LEDs being stuck in the ON condition after being tested.
- SILENCE ALARM button not working if an Alarm System was silence, but a second component was then activated.

***

## v1.3 - 11/19/2024
**Added**:
- Sprinkler Valves
  - Sprinkler Valves are optional, any systems without a Sprinkler Valve will behave as it did prior to v1.3.
  - Only one Sprinkler Valve can be placed per Alarm System.
  - Sprinkler Valves have two positions:
    - Open
      - Water can flow.
      - Sprinklers will activate.
      - Sprinkler Bell will sound.
    - Closed
      - Water cannot flow.
      - Sprinklers will not activate, and pre-activated Sprinklers will stop showing water.
        - If the Sprinkler Valve is Opened again after being Closed, but before a system reset, pre-activated Sprinklers will show water again.
      - Sprinkler Bell will not sound.
  - If an Alarm System is in Alarm, and there is a triggered Sprinkler, the Sprinkler Valve must be placed in the Closed position before the system can reset.
    - :::tip
    	Be sure to place it back in the Open position afterward though, or else Sprinklers will not activate when there's a fire!
  		:::
  - Sprinkler Valves have their own [Ace Permission](config.md#use-sprinkler-valves).
  - [`SprinklerValveChanged` event](developers/events.md#sprinkler-valve-change).

**Changed**:
- If an Alarm System contains a Sprinkler Valve, the Sprinkler Bell sound effect will come from the position of the Sprinkler Valve instead of the center of the Alarm System.
  - :::tip
  	Not sure where the Sprinkler Valve is located in an Alarm System? Follow the sound of the bell!
  	:::

**Removed**:
- Server console warning about permissions not being correctly set-up.
  - Replaced by the [`config.cfg` error message](#v11---11112024) added in v1.1.

***

## v1.2.2 - 11/18/2024

:::danger
Major breaking changes to the [Events](developers/events.md) were made in this version, do not blindly update.
:::
**Added**:
- [`AlarmActivation`](developers/events.md#alarm-activation) event, which is the new recommended way to listen for Alarm System activation.
- [`getAlarmSystemCompontents`](developers/exports.md#get-system-components) export, which returns an [`AlarmSystemComponents`](developers/data.mdx#alarm-system-components) table, containing all an Alarm System's Pull Station, Detectors, etc.
  - [`AlarmSystemComponents`](developers/data.mdx#alarm-system-components) is a new [Data type](developers/data.mdx).

**Changed**:
- All the events listed below now have an [`AlarmSystem`](developers/data.mdx#alarm-system) parameter passed along with the event. See [Events](developers/events.md) for full details.
  - [`PullStationTriggered`](developers/events.md#pulled)
  - [`PullStationReset`](developers/events.md#reset)
  - [`OpenControlPanel`](developers/events.md#opened)
  - [`DetectorActivation`](developers/events.md#triggered)
  - [`SprinklerActivation`](developers/events.md#triggered-1)

**Removed**:
- `getAlarmSystem` export.
  - If you know the ID of the Alarm System, you likely already have access to an [`AlarmSystem`](developers/data.mdx#alarm-system) object.
  - If you want to get all of an Alarm System's Control Panels, Pull Stations, etc., use the new [`getAlarmSystemCompontents`](developers/exports.md#get-system-components) export.
- Components from the [`AlarmSystem`](developers/data.mdx#alarm-system) data type.
  - Components are now stored in [`AlarmSystemComponents`](developers/data.mdx#alarm-system-components) and can be accessed via the [`getAlarmSystemCompontents`](developers/exports.md#get-system-components) export.
- `alarmSystemId` from all components (Pull Stations, Sounders, etc.).
  - If you know the ID of the Alarm System, you likely already have access to an [`AlarmSystem`](developers/data.mdx#alarm-system) object.

***

## v1.2.1 - 11/17/2024
**Added**:
- Example in `editable/pager.lua` for changing tones paged based on which Alarm System is activated.

**Fixed**:
- Issue where not passing enough arguments to [Exports](developers/exports.md) would throw a confusing error.
- [`PullStationTriggered`](developers/events.md#pulled) event example code referencing a non-existed variable.
- `alarmSystemId` parameter on data returned by [Exports](developers/exports.md) incorrectly being passed as `alarmSystem`.
***

## v1.2 - 11/16/2024
**Added**:
- Check to prevent multiple of the same Alarm System being loaded.
- Error message when a file listed as an `fire_alarms` file could not be found.

**Changed**:
- Warning and Error messages when ingesting Alarms System files to match the style of others from the resource, as well as to include both the file and resource name when referring to Alarm Systems.
  - Example: `INFO: Ingested 15 Alarm Systems from **food_stores.lua** (**inferno-alarms**), 48 total.`

**Fixed**:
- Errors appearing in the client console complaining about config values not being set, when really they had.
- The error message that appeared when you had no set default model values, showing the default values as `Dictionary<bool,sting> etc` instead of their actual JSON values.
- Multiple people being able to interact with an Alarm System Control Panel at once.
  - Even if there are multiple Control Panels for one Alarm System, only one can be used at once.
- [`SystemDisabled` event](developers/events.md#disabled) not being fired.

***

## v1.1 - 11/11/2024
**Added**:
- `IgnoreProximity` flag for Alarm Systems which removes the warning in the server console when one or more systems are within 30 units of each other.
:::warning
We suggest only using this if you're confident you've set up your alarm systems far enough away from each other not to overlap.
:::
- Error message to the server console that appears when the `config.cfg` file has not been executed.
- `triggerPullStationAtPosition` Export which allows for the activation of a random Pull Station of a system within 50 units of the provided position.
- `getAlarmSystemPasscode` Export which returns just an Alarm System's passcode.

**Fixed**:
- Space Bar missing from the Tool controls helper.
- Typos 😔
- Outdated docs link.
- Bug that prevent all but the first Alarm System's Control Panel from opening.
- Postal codes not being loaded from Alarm System files.
- Missing sounders in some of the stock resources.

***

## v1 - 11/11/2024
Initial resource release.
