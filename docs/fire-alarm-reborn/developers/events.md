---
sidebar_position: 20
---

# Events

This pages documents the events that can be listened for in FAR.

Inside the FAR resource there is a directory called `editable`, and within that there is a file called `events.lua`.
That file documents all the available events for FAR, as well as their parameters.
This page serves to compliment that file.

Be sure to consult the [Data Structures](data.mdx) page to understand the structure of the parameters.

## Pull Stations

### Pulled
Fired when a Pull Station is pulled.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:PullStationTriggered
```
#### Parameters

- `source` - `string`
  - Server handle of the player who pulled the Pull Station.
- `pullStation` - [`PullStation`](data.mdx#pull-station)
  - Pull Station that was pulled.

### Reset
Fired when a Pull Station is reset.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:PullStationReset
```
#### Parameters

- `source` - `string`
	- Server handle of the player who reset the Pull Station.
- `pullStation` - [`PullStation`](data.mdx#pull-station)
	- Pull Station that was reset.

***

## Control Panels

### Opened
Fired when a Control Panel is opened.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:OpenControlPanel
```
#### Parameters

- `source` - `string`
	- Server handle of the player who opened the Control Panel.
- `controlPanel` - [`ControlPanel`](data.mdx#control-panel)
	- Control Panel that was opened.

### Closed
Fired when a Control Panel is closed.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:CloseControlPanel
```
#### Parameters

- `source` - `string`
	- Server handle of the player who closed the Control Panel.
- `controlPanel` - [`ControlPanel`](data.mdx#control-panel)
	- Control Panel that was closed.

***

## Detectors

### Triggered
Fired when a Detector is triggered.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:DetectorActivation
```
#### Parameters

- `position` - `table`
	- Position of the activation, in a table, as a Vector3.
      - ```lua
          local position = vector3(position.x, position.y, position.z)
          ```

***

## Sprinklers

### Triggered
Fired when a Sprinkler is triggered.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:SprinklerActivation
```
#### Parameters

- `position` - `table`
	- Position of the activation, in a table, as a Vector3.
		- ```lua
          local position = vector3(position.x, position.y, position.z)
          ```

***

## Alarm Systems

### Muted
Fired when an Alarm System that was in alarm, is muted via the Control Panel.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:AlarmMuted
```
#### Parameters

- `source` - `string`
	- Server handle of the player who muted the Alarm System.
- `alarmSystem` - [`AlarmSystem`](data.mdx#alarm-system)
	- Alarm System that was muted.

### Sounded
Fired when an Alarm System that was muted, is sounded again via the Control Panel.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:AlarmSounded
```
#### Parameters

- `source` - `string`
	- Server handle of the player who sounded the Alarm System.
- `alarmSystem` - [`AlarmSystem`](data.mdx#alarm-system)
	- Alarm System that was sounded.

### Test
Fired when an Alarm System is tested via the Control Panel.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:SystemTest
```
#### Parameters

- `source` - `string`
	- Server handle of the player who tested the Alarm System.
- `alarmSystem` - [`AlarmSystem`](data.mdx#alarm-system)
	- Alarm System that was tested.

### Announcement
Fired when an Alarm System plays an announcement via the Control Panel.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:SystemAnnouncement
```
#### Parameters

- `source` - `string`
	- Server handle of the player who played the announcement.
- `alarmSystem` - [`AlarmSystem`](data.mdx#alarm-system)
	- Alarm System that played the announcement.

### WalkTest
Fired when an Alarm System is placed into or out of WalkTest mode.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:WalkTest
```
#### Parameters

- `source` - `string`
	- Server handle of the player who made the change.
- `alarmSystem` - [`AlarmSystem`](data.mdx#alarm-system)
	- Alarm System change applied to.
- `enabled` - `bool`
  - `true` if WalkTest enabled, `false` if WalkTest disabled.

### Disabled
Fired when an Alarm System is disabled or enabled.

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:SystemDisabled
```
#### Parameters

- `source` - `string`
	- Server handle of the player who made the change.
- `alarmSystem` - [`AlarmSystem`](data.mdx#alarm-system)
	- Alarm System change applied to.
- `enabled` - `bool`
	- `true` if system enabled, `false` if system disabled.

### Random Activation
Fired when a random Alarm System is activated, either via Command or [scheduled Random Alarms](../config.md#random-alarms).

#### Event Name
```
Inferno-Collection:Server:FireAlarmReborn:Editable:SystemDisabled
```
#### Parameters

- `alarmSystem` - [`AlarmSystem`](data.mdx#alarm-system)
	- Alarm System that has been triggered.
- `activationType` - `int`
	- `1` - Detector activation
    - `2` - Sprinkler activation
    - `3` - Pull Station activation
- `activationComponent` - [`Detector`](data.mdx#detector) | [`Sprinkler`](data.mdx#sprinkler) | [`Pull Station`](#pull-stations)
  - The component that was activated.
