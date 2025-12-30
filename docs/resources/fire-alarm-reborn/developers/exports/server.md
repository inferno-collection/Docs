---
sidebar_position: 10
---

# Server Exports

This page documents the server exports that can be used with FAR.

Be sure to consult the [Data Structures](../data.mdx) page to understand the structure of the parameters.

All parameters listed are required, none are optional.  
All the exports listed below are **server** exports, not client exports.  
For client exports, see [here](client.md).

## Alarm Systems

### Get all Systems
Use this export to get all Alarm Systems.

#### Export Name
```
getAllAlarmSystems
```
#### Parameters

None

#### Return Value
[`AlarmSystem`](../data.mdx#alarm-system) | `null`

### Get System by Position
Use this export to get an Alarm System near to a provided position and radius.

#### Export Name
```
getAlarmSystemNearPosition
```
#### Parameters

- `position` - `vector3`
	- Position to use to search for closest Alarm System.
- `radius` - `float`
	- Radius from position to check.
    - Passing `-1` will not limit the search radius.

#### Return Value
[`AlarmSystem`](../data.mdx#alarm-system) | `null`

### Get System Components
Use this export to get all the Pull Stations, Detectors, etc. that belong to an Alarm System.

#### Export Name
```
getAlarmSystemComponents
```
#### Parameters

- `alarmSystemId` - `int`
	- The ID of an Alarm System.

#### Return Value
[`AlarmSystemCompontents`](../data.mdx#alarm-system-components) | `null`

### Get System Passcode
Use this export to get an Alarm System's passcode.

#### Export Name
```
getAlarmSystemPasscode
```
#### Parameters

- `alarmSystemId` - `int`
	- The ID of an Alarm System.

#### Return Value
`string` | `null`

### Reset all Alarm Systems
Use this export to forcefully reset all Alarm Systems.

:::warning
This is not a graceful reset: any isolations, closed Sprinkler Valves, etc. will all be reset to their default values/positions.
:::

#### Export Name
```
resetAllSystems
```
#### Parameters

None

#### Return Value
`void`

### Reset last Alarm System
Use this export to forcefully reset the most recently triggered Alarm System

:::warning
This is not a graceful reset: any isolations, closed Sprinkler Valves, etc. will all be reset to their default values/positions.
:::

#### Export Name
```
resetLastAlarmSystem
```
#### Parameters

None

#### Return Value
`void`

***

## Pull Stations

### Trigger Pull Station At Position
Use this export to trigger the Pull Station closest to the provided position, inside the Alarm System closest to the provided position.

#### Export Name
```
triggerPullStationAtPosition
```
#### Parameters

- `position` - `vector3`
  - Position to use to search for closest Pull Station & Alarm System.

#### Return Value
`void`

### Trigger Pull Station Near Position
Use this export to trigger a random Pull Station near the provided position, inside the Alarm System closest to the provided position.

#### Export Name
```
triggerPullStationNearPosition
```
#### Parameters

- `position` - `vector3`
	- Position to use to search for closest Alarm System.

#### Return Value
`void`

***

## Detectors

### Trigger Detector
Use this export to trigger the Detector closest to the provided position, inside the Alarm System closest to the provided position.

#### Export Name
```
triggerDetectorAtPosition
```
#### Parameters

- `position` - `vector3`
	- Position to use to search for closest Detector & Alarm System.

#### Return Value
`void`

***

## Sprinklers

### Trigger Sprinkler
Use this export to trigger the Sprinkler closest to the provided position, inside the Alarm System closest to the provided position.

#### Export Name
```
triggerSprinklerAtPosition
```
#### Parameters

- `position` - `vector3`
	- Position to use to search for closest Sprinkler & Alarm System.

#### Return Value
`void`

***

## AOP

### Get Alarm System AOP
This export returns the currently set AOP for random alarms.
For more info on how to set an Alarm System's AOP, [see here](../tool.md#adding-aop).

#### Export Name
```
getAlarmAOP
```
#### Parameters

None

#### Return Value
`string`

### Set Alarm System AOP
This export determines which AOP should be used when activating Random Alarms.  
For example, if the AOP is set to `LS`, only Alarm Systems with their AOP defined as `LS` will be selected.  
For more info on how to set an Alarm System's AOP, [see here](../tool.md#adding-aop).

#### Export Name
```
setAlarmAOP
```
#### Parameters

- `aop` - `string`
	- Either a string that is the AOP, or an empty string (`""`) to remove AOP.

#### Return Value
`void`

:::tip
AOP can also be changed via the [`firealarm aop`](../../usage/commands.md#get-or-set-random-alarm-aop) command.
:::

***

## Random Alarms

### Trigger Random Alarm
Use this export to trigger a random [Random Alarms](../../config.md#random-alarms).

#### Export Name
```
triggerRandomAlarm
```
#### Parameters

None

#### Return Value
[`AlarmSystem`](../data.mdx#alarm-system) | `false`

### Enabled or Disable Random Alarms
Use this export to enable or disable [Random Alarms](../../config.md#random-alarms).

#### Export Name
```
enableRandomAlarms
```
#### Parameters

- `value` - `bool`
	- `true` to enable Random Alarms, `false` to disable Random Alarms.

#### Return Value
`void`

:::warning
Each time this export is called, the internal timer that tracks when the last Random Alarm was activated is reset.  
This means you should only call this export as required.

For example, if you have a script that tracks Firefighter numbers in server and you want to enable Random Alarms when more than X players are in server, you should only call this export once to enable Random Alarms, and not ever time the player count goes above X.
:::

### Enabled or Disable All Alarms Globally
Use this export to enable or disable all Alarms.

#### Export Name
```
enableAlarms
```
#### Parameters

- `value` - `bool`
	- `true` to enable Alarms, `false` to disable Alarms.

#### Return Value
`void`
