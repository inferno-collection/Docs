---
sidebar_position: 30
---

# Exports

This pages documents the exports that can be used with FAR.

Be sure to consult the [Data Structures](data.mdx) page to understand the structure of the parameters.

All parameters listed are required, none are optional.  
All the exports listed below are **server** exports, not client exports.

## How to Use

When using exports with FAR, it is important to call them exact as shown below:

```lua
exports["inferno-fire-alarm-reborn"]:exportNameHere(param1, param2)
```

You must put the resource name in square brackets and quotations, followed by a colon and the export name.
You **cannot** write `exports.inferno-fire-alarm-reborn`, and you **cannot** use a period (`.`) after the square brackets.
See the examples below:

```lua
exports["inferno-fire-alarm-reborn"]:getAlarmSystemNearPosition(position) -- CORRECT

exports["inferno-fire-alarm-reborn"].getAlarmSystemNearPosition(position) -- WRONG
                                    ^
exports.inferno-fire-alarm-reborn:getAlarmSystemNearPosition(position) -- WRONG
       ^
exports.inferno-fire-alarm-reborn.getAlarmSystemNearPosition(position) -- WRONG
       ^                         ^
```

## Alarm Systems

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

#### Return Value
[`AlarmSystem`](data.mdx#alarm-system) | `null`

### Get System Components
Use this export to get all the Pull Stations, Detectors, etc. that belong to an Alarm System.

#### Export Name
```
getAlarmSystemCompontents
```
#### Parameters

- `alarmSystemId` - `int`
	- The ID of an Alarm System.

#### Return Value
[`AlarmSystemCompontents`](data.mdx#alarm-system-components) | `null`

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
