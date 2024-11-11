---
sidebar_position: 20
---

# Configuration

FAR uses convars for config values. For information on how to correctly install the `far.cfg` file, [see here](install/#installing-the-resource).

## Overview

|                                            Name                                             | Description                                                                        |   Default Value   |
|:-------------------------------------------------------------------------------------------:|------------------------------------------------------------------------------------|:-----------------:|
|                 [`ic_far_disablePasscodes`](config#ic_far_disablepasscodes)                 | Completely disable the need for passcodes on all control panels                    |      `false`      |
|                     [`ic_far_kickCheaters`](config#ic_far_kickcheaters)                     | Kick suspected cheaters                                                            |      `false`      |
|                     [`ic_far_randomAlarms`](config#ic_far_randomalarms)                     | Randomly select an alarm system every configured interval and activate it          |      `true`       |
|       [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms)       | How many minutes between each random alarm                                         |       `30`        |
| [`ic_far_randomAlarmsOnlyIfNoActiveAlarms`](config#ic_far_randomalarmsonlyifnoactivealarms) | If there is any active system, do not trigger a random alarm                       |      `true`       |
|                  [`ic_far_oxTargetSupport`](config#ic_far_oxtargetsupport)                  | Replace "Press E" interactions with [OxTarget](https://overextended.dev/ox_target) |      `false`      |
|                          `ic_far_defaultControlPanelDistanceCheck`                          | Distance to control panel before interaction option appear                         |        `2`        |
|                          `ic_far_defaultPullStationDistanceCheck`                           | Distance to pull station before interaction option appear                          |        `1`        |
|        [`ic_far_defaultControlPanelModels`](config#ic_far_defaultcontrolpanelmodels)        | The default models to use for the Control Panel                                    |    *See Below*    |
|         [`ic_far_defaultPullStationModels`](config#ic_far_defaultpullstationmodels)         | The default models to use for the Pull Station                                     |    *See Below*    |
|            [`ic_far_defaultDetectorModels`](config#ic_far_defaultdetectormodels)            | The default models to use for the Detector                                         |    *See Below*    |
|           [`ic_far_defaultSprinklerModels`](config#ic_far_defaultsprinklermodels)           | The default model to use for the Sprinkler                                         |    *See Below*    |
|                                `ic_far_defaultSounderModel`                                 | The default model to use for the Sounder                                           | `prop_ic_sounder` |
|                                 `ic_far_defaultStrobeModel`                                 | The default model to use for the Strobe                                            | `prop_ic_strobe`  |
|                            [`ic_far_debug`](config#ic_far_debug)                            | If the resource should run in debug mode                                           |      `false`      |

## Further Details

### `ic_far_disablePasscodes`
If this value is `true`, no control panels will require passcodes to access them. This means any player can access the control panel, including testing the panel, and making announcements.

:::note
This value does not change override Ace Permission.
:::

### `ic_far_kickCheaters`
If this value is `true`, the resource will kick any players it detects as "cheaters". Cheaters are determined by events sent to the server, and actions performed. False-positive as possible, but unlikely.

Regardless of this value, the resource will log events in the server console whenever it believes it has found a cheater.

### `ic_far_randomAlarms`
If this value and [`ic_far_randomAlarms`](config#ic_far_randomalarms) are `true`, every [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms) minutes the resource will make 6 attempts to find a random fire alarm system that is currently in Standby. If none are found, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms) minutes and repeat the process.

If a suitable system is found, the resource will make 3 attempts to find and activate a random component of the alarm system, out of the detectors, sprinklers, and pull stations. If no suitable is found, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms) minutes and repeat the process from the beginning.

If a suitable component is found, the system will enter into alarm and all normal events will occur as if a player had activated the system.

### `ic_far_minutesBetweenRandomAlarms`
This must be a whole number, more than `1`. Suggested value range: `20` - `40`. Regardless of this value, the resource will only attempt to activate a random system at a minimum of every 60 seconds.

### `ic_far_randomAlarmsOnlyIfNoActiveAlarms`
If this value and [`ic_far_randomAlarms`](config#ic_far_randomalarms) are `true`, every [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms) minutes the resource will first check if any alarms systems are current in alarm before selecting a random system to activate. If any system is active, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](config#ic_far_minutesbetweenrandomalarms) minutes and repeat the process from the beginning.

:::note
Systems in WalkTest do not count as 'in alarm', but systems with active Isolations, Alarms, are Silenced, or are being tested, do count as 'in alarm'.
:::

### `ic_far_oxTargetSupport`
If this value is `true`, the default "Press E to ..." options are completely disabled, and are replaced with [OxTarget](https://overextended.dev/ox_target)'s third-eye system.
:::info
This feature requires [OxTarget](https://overextended.dev/ox_target) to be installed.
:::

### `ic_far_defaultControlPanelModels`
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

### `ic_far_defaultPullStationModels`
These values determine which prop/model should be used for when the Pull Station is un/pulled.

The default value for this option is:
```cfg
set ic_far_defaultDetectorModels {
	"triggered":		"prop_ic_detector_triggered",
	"normal":		"prop_ic_detector"
}
```

### `ic_far_defaultDetectorModels`
These values determine which prop/model should be used for when the Detector is un/triggered.

The default value for this option is:
```cfg
set ic_far_defaultSprinklerModels {
	"triggered":		"prop_ic_sprinkler_triggered",
	"normal":		"prop_ic_sprinkler"
}
```

### `ic_far_defaultSprinklerModels`
These values determine which prop/model should be used for when the Sprinkler is un/triggered.

The default value for this option is:
```cfg
set ic_far_defaultSprinklerModels {
	"triggered":		"prop_ic_sprinkler_triggered",
	"normal":		"prop_ic_sprinkler"
}
```

### `ic_far_debug`
If this value is `true`, a ton of extra logs will be outputted to both the client and server consoles. Not suggested at all for production use, nor for when using the tool.

***
## Permissions
There are several permissions for FAR, they are as follows:

### `InfernoFireAlarmReborn.PullStations`
This permission allows players to activate Pull Stations.
By default, this permission is granted to all players.

### `InfernoFireAlarmReborn.ControlPanels`
This permission allows players to interact with Control Panels.
By default, this permission is granted to all players.
:::note
This permission only allows players to open the Control Panel NUI, if a panel requires a passcode, this permission does not bypass that requirement.
:::

### `InfernoFireAlarmReborn.ResetPullStations`
This permission allows players to reset activated Pull Stations.
By default, this permission is granted to all players.
:::note
Resetting a Pull Station does not "turn off" an alarm if it has been activated.
:::
:::tip
We suggest changing this permission so only firefighters can do this.
:::

### `InfernoFireAlarmReborn.RandomAlarms`
This permission allows players to use the `/firealarm randomalarm` command to generate a random alarm.
By default, this permission is only granted to admins (`group.admin`).

### `InfernoFireAlarmReborn.Tool`
This permission allows players to use the `/firealarm tool` command to access the Tool.
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

# Distance to control panel before interaction option appear
setr ic_far_defaultControlPanelDistanceCheck "2"

# Distance to pull station before interaction option appear
setr ic_far_defaultPullStationDistanceCheck "1"

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

# If the resource should run in debug mode
setr ic_far_debug "false"


###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoFireAlarmReborn.PullStations" allow
add_ace builtin.everyone "InfernoFireAlarmReborn.ControlPanels" allow
add_ace builtin.everyone "InfernoFireAlarmReborn.ResetPullStations" allow

add_ace group.admin "InfernoFireAlarmReborn.RandomAlarms" allow
add_ace group.admin "InfernoFireAlarmReborn.Tool" allow
```
