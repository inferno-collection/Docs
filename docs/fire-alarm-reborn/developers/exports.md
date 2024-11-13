---
sidebar_position: 30
---

# Exports

This pages documents the exports that can be used with FAR.

Be sure to consult the [Data Structures](data.mdx) page to understand the structure of the parameters.

## Pull Stations

### Trigger Pull Station
Use this export to trigger a random Pull Station inside the Alarm System closest to the provided position.

#### Export Name
```
triggerPullStationAtPosition
```
#### Parameters

- `position` - `vector3`
  - Position to use to search for closest Alarm System.

#### Return Value
`void`

***

## Detectors

### Trigger Detector
Use this export to trigger a random Detector inside the Alarm System closest to the provided position.

#### Export Name
```
triggerDetectorAtPosition
```
#### Parameters

- `position` - `vector3`
	- Position to use to search for closest Alarm System.

#### Return Value
`void`

***

## Sprinklers

### Trigger Sprinkler
Use this export to trigger a random Sprinkler inside the Alarm System closest to the provided position.

#### Export Name
```
triggerSprinklerAtPosition
```
#### Parameters

- `position` - `vector3`
	- Position to use to search for closest Alarm System.

#### Return Value
`void`

***

## Alarm Systems

### Get System by ID
Use this export to get an Alarm System if you have the ID of the system.

#### Export Name
```
getAlarmSystem
```
#### Parameters

- `alarmSystemId` - `int`
	- The ID of an Alarm System.
- `includeCompontents` - `bool`
  - If components (Pull Stations, Detectors, etc.) should be included in the return.

#### Return Value
[`AlarmSystem`](data.mdx#alarm-system) | `null`

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

### Get System Passcode
Use this export to get an Alarm System's passcode.

:::warning
Individual Control Panels can override this value, it may not correct for all Control Panels in the system.
:::

#### Export Name
```
getAlarmSystemPasscode
```
#### Parameters

- `alarmSystemId` - `int`
	- The ID of an Alarm System.

#### Return Value
`string` | `null`
