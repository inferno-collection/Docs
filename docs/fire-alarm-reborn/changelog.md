---
sidebar_position: 999
---

# Changelog

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

## v1.2.1 - 11/17/2024
**Added**:
- Example in `editable/pager.lua` for changing tones paged based on which Alarm System is activated.

**Fixed**:
- Issue where not passing enough arguments to [Exports](developers/exports.md) would throw a confusing error.
- [`PullStationTriggered`](developers/events.md#pulled) event example code referencing a non-existed variable.
- `alarmSystemId` parameter on data returned by [Exports](developers/exports.md) incorrectly being passed as `alarmSystem`.

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
