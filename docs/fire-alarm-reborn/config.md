---
sidebar_position: 20
---

# Configuration

FAR uses convars for config values. For information on how to correctly install the `far.cfg` file, [see here](install/#installing-the-resource).

## Value List

|                                         Name                                         |       Default Value       |
|:------------------------------------------------------------------------------------:|:-------------------------:|
|                   [`ic_far_disablePasscodes`](#disable-passcodes)                    |          `false`          |
|                       [`ic_far_kickCheaters`](#kick-cheaters)                        |          `false`          |
|                       [`ic_far_randomAlarms`](#random-alarms)                        |          `true`           |
|        [`ic_far_minutesBetweenRandomAlarms`](#minutes-between-random-alarms)         |           `30`            |
| [`ic_far_randomAlarmsOnlyIfNoActiveAlarms`](#random-alarms-only-if-no-active-alarms) |          `true`           |
|           [`ic_far_sprinklerChance`](#sprinkler-chance-to-extinguish-fire)           |           `100`           |
|                 [`ic_far_alarmSystemTimeout`](#alarm-system-timeout)                 |           `-1`            |
|           [`ic_far_allowBadResets`](#allow-badinvalid-alarm-system-resets)           |          `false`          |
|             [`ic_far_realisticAudio`](#use-realistic-audio-for-sounders)             |          `false`          |
|                             `ic_far_manualInteractions`                              |          `false`          |
|                     [`ic_far_access_token`](#http-access-token)                      |          *None*           |
|                      [`ic_far_whitelisted_ips`](#api-whitelist)                      |        *See Below*        |
|                      `ic_far_defaultControlPanelDistanceCheck`                       |            `2`            |
|                       `ic_far_defaultPullStationDistanceCheck`                       |            `1`            |
|                     `ic_far_defaultSprinklerValveDistanceCheck`                      |            `1`            |
|         [`ic_far_defaultControlPanelModels`](#default-control-panel-models)          |        *See Below*        |
|          [`ic_far_defaultPullStationModels`](#default-pull-station-models)           |        *See Below*        |
|              [`ic_far_defaultDetectorModels`](#default-detector-models)              |        *See Below*        |
|             [`ic_far_defaultSprinklerModels`](#default-sprinkler-models)             |        *See Below*        |
|                             `ic_far_defaultSounderModel`                             |     `prop_ic_sounder`     |
|                             `ic_far_defaultStrobeModel`                              |     `prop_ic_strobe`      |
|                         `ic_far_defaultSprinklerValveModel`                          | `prop_ic_sprinkler_valve` |
|                               [`ic_far_debug`](#debug)                               |          `false`          |

## Values Explained

### Disable Passcodes
#### `ic_far_disablePasscodes`
If this value is `true`, no Control Panels will require passcodes to access them. This means any player can access the Control Panel, including testing the panel, and making announcements.

:::note
This value does not override any Ace Permissions that have been set.
:::

### Kick Cheaters
#### `ic_far_kickCheaters`
If this value is `true`, the resource will kick any players it detects as "cheaters". Cheaters are determined by events sent to the server, and actions performed. False-positive as possible, but unlikely.

Regardless of this value, the resource will log events in the server console whenever it believes it has found a cheater.

### Random Alarms
#### `ic_far_randomAlarms`
If this value and [`ic_far_randomAlarms`](#random-alarms) are `true`, every [`ic_far_minutesBetweenRandomAlarms`](#minutes-between-random-alarms) the resource will make 6 attempts to find a random fire Alarm System that is currently in Standby. If none are found, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](#minutes-between-random-alarms) and repeat the process.

If a suitable system is found, the resource will make 3 attempts to find and activate a random component of the Alarm System, out of the Detectors, Sprinklers, and Pull Stations. If no suitable component is found, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](#minutes-between-random-alarms) and repeat the process from the beginning.

If a suitable component is found, the system will enter into alarm.

:::tip
You can use the `enableRandomAlarms` export to change this value while the server is running.  
For example, if you have a script that keeps track of online Firefighters, you might set [`ic_far_randomAlarms`](#random-alarms) to `false`, and then use `enableRandomAlarms` to only enable Random Alarms when more than X Firefighters are online.
:::

### Minutes Between [Random Alarms](#random-alarms)
#### `ic_far_minutesBetweenRandomAlarms`
This must be a whole number, more than `1`. Suggested value range: `20` - `40`.

### [Random Alarms](#random-alarms) Only If No Active Alarms
#### `ic_far_randomAlarmsOnlyIfNoActiveAlarms`
If this value and [`ic_far_randomAlarms`](config#ic_far_randomalarms) are `true`, every [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms) minutes the resource will first check if any alarms systems are current in alarm before selecting a random system to activate. If any system is active, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms) minutes and repeat the process from the beginning.

:::note
Systems in WalkTest do not count as 'in alarm', but systems with active Isolations, Alarms, are Silenced, or are being tested, do count as 'in alarm'.
:::

### Sprinkler Chance to Extinguish Fire
#### `ic_far_sprinklerChance`

This value determines what percentage chance an activated sprinkler should extinguish a fire. Value should be between `0` and `100`, where `0` is a 0% chance of the fire being extinguished, and `100` is a 100% chance of the fire being extinguished.

### Alarm System Timeout
#### `ic_far_alarmSystemTimeout`

This value determines how many minutes need to pass before an Alarm System can be in a non-standby status, before it is automatically reset to standby.  
By default the value is `-1`, which means Alarm Systems will never automatically reset.

For example, if you wanted all Alarm Systems that have been in Alarm for more than one hour to automatically reset, you would set this to `60`. 

### Allow Bad/Invalid Alarm System Resets
#### `ic_far_allowBadResets`

If this value is `true`, Alarm Systems will temporarily go back to non-alarm after being reset with active components.  
For example, resetting an Alarm System without resetting a Pull Station.  
Alarm Systems will re-enter into Alarm after several seconds.

When this value is `false`, Control Panels will display an error message when there are still active components, and not allow a reset to go through.

### Use Realistic Audio for Sounders
#### `ic_far_realisticAudio`

If this value is `true`, Sounders will add a short delay between the playing of the same audio file for Sounders, which adds a slight echo effect.

If this value is `false`, Sounder will play all audio files at the exact same time across all Sounders.

### Manual Interactions (Target/Third-Eye Resource Support)
#### `ic_far_manualInteractions` (replaces `ic_far_oxTargetSupport`)

If this value is `true`, "Press E ..." interaction pop-ups and keybindings will be disabled, and instead events will be fired that can be used in `editable/client/targeting.lua`; to enable support for [OxTarget](https://overextended.dev/ox_target), [QBTarget](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-target), or any other target/third-eye resource, changes will need to be made in this file.

For [OxTarget](https://overextended.dev/ox_target) or [QBTarget](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-target), simply uncomment the lines under the sections named either [OxTarget](https://overextended.dev/ox_target) or [QBTarget](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-target).  
For any other target/third-eye resource, use the provided event handlers and variables to add your own exports/events. Reach out in [Discord](https://inferno.gay/discord) if you need help adding other resources.

:::note
The events in `editable/client/targeting.lua` will not fire unless `ic_far_manualInteractions` is `true`.
:::

### HTTP Access Token
#### `ic_far_access_token`

This is an optional config value that is required if server owners wish to use the included [API](developers/api.mdx).  
This value is blank by default, and while blank, the [API](developers/api.mdx) will reject all HTTP requests.  
To enable the [API](developers/api.mdx) you must provide a value to be used as a token.

### API Whitelist
#### `ic_far_whitelisted_ips`

This is an optional config value that allows server owners to only allow HTTP requests from specific IP addresses.

To allow to requests from any IP address, set this value to `[]`.  
The default value, `127.0.0.1`, should allow access from the local machine only on most systems.

:::warning
Regardless of this config option, [`ic_far_access_token`](#http-access-token) is required.
:::

### Default Control Panel Models
#### `ic_far_defaultControlPanelModels`
These values determine which prop/model should be used for each alarm status. For example, when using the default props provided with FAR, there is a version of the prop with flashing LEDs for when the alarm is active.

The default value for this option is:
```cfg
set ic_far_defaultControlPanelModels {
	"Disabled":		"prop_ic_fire_panel",
	"Standby":		"prop_ic_fire_panel",
	"Announcement":		"prop_ic_fire_panel",
	"WalkTest":		"prop_ic_fire_panel",
	"Isolations":		"prop_ic_fire_panel",
	"Alarm":		"prop_ic_fire_panel_alarm",
	"Silenced":		"prop_ic_fire_panel_alarm",
	"Test":			"prop_ic_fire_panel"
}
```
### Default Pull Station Models
#### `ic_far_defaultPullStationModels`
These values determine which prop/model should be used for when the Pull Station is un/pulled.

The default value for this option is:
```cfg
set ic_far_defaultDetectorModels {
	"triggered":		"prop_ic_detector_triggered",
	"normal":		"prop_ic_detector"
}
```

### Default Detector Models
#### `ic_far_defaultDetectorModels`
These values determine which prop/model should be used for when the Detector is un/triggered.

The default value for this option is:
```cfg
set ic_far_defaultSprinklerModels {
	"triggered":		"prop_ic_sprinkler_triggered",
	"normal":		"prop_ic_sprinkler"
}
```

### Default Sprinkler Models
#### `ic_far_defaultSprinklerModels`
These values determine which prop/model should be used for when the Sprinkler is un/triggered.

The default value for this option is:
```cfg
set ic_far_defaultSprinklerModels {
	"triggered":		"prop_ic_sprinkler_triggered",
	"normal":		"prop_ic_sprinkler"
}
```

### Debug
#### `ic_far_debug`
If this value is `true`, a ton of extra logs will be outputted to both the client and server consoles. Not suggested at all for production use, nor for when using the [FAR Tool](developers/tool.md).

***
## Permissions
There are several permissions for FAR, they are as follows:

### Use Pull Stations
#### `InfernoFireAlarmReborn.PullStations`
This permission allows players to activate Pull Stations.
By default, this permission is granted to all players.

### Use Control Panels
#### `InfernoFireAlarmReborn.ControlPanels`
This permission allows players to interact with Control Panels.
By default, this permission is granted to all players.
:::note
This permission only allows players to open the Control Panel NUI, if a panel requires a passcode, this permission does not bypass that requirement.
:::

### Reset Pull Stations
#### `InfernoFireAlarmReborn.ResetPullStations`
This permission allows players to reset activated Pull Stations.
By default, this permission is granted to all players.
:::note
Resetting a Pull Station does not "turn off" an alarm if it has been activated.
:::
:::tip
We suggest changing this permission so only firefighters can do this.
:::

### Use Sprinkler Valves
#### `InfernoFireAlarmReborn.SprinklerValves`
This permission allows players to open and close sprinkler valves.
By default, this permission is granted to all players.

### Trigger Random Alarms via Command
#### `InfernoFireAlarmReborn.RandomAlarms`
This permission allows players to use the `/firealarm randomalarm` command to generate a random alarm.
By default, this permission is only granted to admins (`group.admin`).

### Use FAR Tool
#### `InfernoFireAlarmReborn.Tool`
This permission allows players to use the [FAR Tool](developers/tool.md).
By default, this permission is only granted to admins (`group.admin`).

***

## Default Config File
``` showLineNumbers
# Inferno Collection Fire Alarm Reborn
# 
# Copyright (c) 2019-2024, Christopher M, Inferno Collection. All rights reserved.

############################################################################
###                                NOTICE                                ###
### Be sure to check the documentation before changing these values.     ###
### https://docs.inferno-collection.com/fire-alarm-reborn/configuration/ ###
############################################################################

#####################
### Configuration ###
#####################

### General ###
###############

# Completely disable the need for passcodes on all control panels
set ic_far_disablePasscodes "false"

# Kick suspected cheaters
set ic_far_kickCheaters "false"

# Randomly select an alarm system every configured interval and activate it
set ic_far_randomAlarms "true"

# How many minutes between each random alarm
set ic_far_minutesBetweenRandomAlarms "30"

# If there is any active system, do not trigger a random alarm
set ic_far_randomAlarmsOnlyIfNoActiveAlarms	"true"

# Replace "Press E" interactions with OxTarget
setr ic_far_oxTargetSupport "false"

### Advanced ###
################

# Percentage chance that sprinklers will put out detected fires
set ic_far_sprinklerChance "100"

# Allow bad alarm system resets
set ic_far_allowBadResets "false"

# Enable Realistic Audio for Sounders
setr ic_far_realisticAudio "true"

# Distance to control panel before interaction option appears
setr ic_far_defaultControlPanelDistanceCheck "2"

# Distance to pull station before interaction option appears
setr ic_far_defaultPullStationDistanceCheck "1"

# Distance to sprinkler valve before interaction option appears
setr defaultSprinklerValveDistanceCheck "1"

# The default model to use for the Control Panel at each Alarm Status
set ic_far_defaultControlPanelModels {
	"Disabled":		"prop_ic_fire_panel",
	"Standby":		"prop_ic_fire_panel",
	"Announcement":		"prop_ic_fire_panel",
	"WalkTest":		"prop_ic_fire_panel",
	"Isolations":		"prop_ic_fire_panel",
	"Alarm":		"prop_ic_fire_panel_alarm",
	"Silenced":		"prop_ic_fire_panel_alarm",
	"Test":			"prop_ic_fire_panel"
}

# The default model to use for the Pull Stations
set ic_far_defaultPullStationModels {
	"pulled":	"prop_ic_pull_station_pulled",
	"normal":	"prop_ic_pull_station"
}

# The default model to use for the Detector
set ic_far_defaultDetectorModels {
	"triggered":		"prop_ic_detector_triggered",
	"normal":		"prop_ic_detector"
}

# The default model to use for the Sprinkler
set ic_far_defaultSprinklerModels {
	"triggered":		"prop_ic_sprinkler_triggered",
	"normal":		"prop_ic_sprinkler"
}

# The default model to use for the Sounder
set ic_far_defaultSounderModel "prop_ic_sounder"

# The default model to use for the Strobe
set ic_far_defaultStrobeModel "prop_ic_strobe"

# The default model to use for the Sprinkler Valve
set ic_far_defaultSprinklerValveModel "prop_ic_sprinkler_valve"

# HTTP Access Token
set ic_far_access_token ""

# List of whitelisted IPs to allow HTTP requests from
set ic_far_whitelisted_ips [
	"127.0.0.1"
]

# If the resource should run in debug mode
setr ic_far_debug "false"


###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoFireAlarmReborn.PullStations" allow
add_ace builtin.everyone "InfernoFireAlarmReborn.ControlPanels" allow
add_ace builtin.everyone "InfernoFireAlarmReborn.ResetPullStations" allow
add_ace builtin.everyone "InfernoFireAlarmReborn.SprinklerValve" allow

add_ace group.admin "InfernoFireAlarmReborn.RandomAlarms" allow
add_ace group.admin "InfernoFireAlarmReborn.Tool" allow
```
