---
sidebar_position: 2
---

# Configuration

FAR uses convars for config values. See [installation](../install.md) for information on how to correctly set up your `far.cfg` file.

## Overview

|                                          Name                                           | Description                                                                        |         Default Value         |
|:---------------------------------------------------------------------------------------:|------------------------------------------------------------------------------------|:-----------------------------:|
|                 [`ic_far_disablePasscodes`](./#ic_far_disablepasscodes)                 | Completely disable the need for passcodes on all control panels                    |            `false`            |
|                     [`ic_far_kickCheaters`](./#ic_far_kickcheaters)                     | Kick suspected cheaters                                                            |            `false`            |
|                     [`ic_far_randomAlarms`](./#ic_far_randomalarms)                     | Randomly select an alarm system every configured interval and activate it          |            `true`             |
|       [`ic_far_minutesBetweenRandomAlarms`](./#ic_far_minutesbetweenrandomalarms)       | How many minutes between each random alarm                                         |             `30`              |
| [`ic_far_randomAlarmsOnlyIfNoActiveAlarms`](./#ic_far_randomalarmsonlyifnoactivealarms) | If there is any active system, do not trigger a random alarm                       |            `true`             |
|                  [`ic_far_oxTargetSupport`](./#ic_far_oxtargetsupport)                  | Replace "Press E" interactions with [OxTarget](https://overextended.dev/ox_target) |            `false`            |
|                [`ic_far_sonoranCADSupport`](./#ic_far_sonorancadsupport)                | Enable support for [Sonoran CAD](https://sonorancad.com/)                          |            `false`            |
|                        `ic_far_defaultControlPanelDistanceCheck`                        | Distance to control panel before interaction option appear                         |              `2`              |
|                        `ic_far_defaultPullStationDistanceCheck`                         | Distance to pull station before interaction option appear                          |              `1`              |
|                           `ic_far_defaultControlPanelModels`                            | The default model to use for the Control Panel at each Alarm Status                |              tbd              |
|                        `ic_far_defaultPullStationUnpulledModel`                         | The default model to use for the Pull Station when not triggered                   |    `prop_ic_pull_station`     |
|                         `ic_far_defaultPullStationPulledModel`                          | The default model to use for the Pull Station when triggered                       | `prop_ic_pull_station_pulled` |
|                              `ic_far_defaultSounderModel`                               | The default model to use for the Sounder                                           |       `prop_ic_sounder`       |
|                              `ic_far_defaultDetectorModel`                              | The default model to use for the Detector when not triggered                       |      `prop_ic_detector`       |
|                         `ic_far_defaultDetectorTriggeredModel`                          | The default model to use for the Detector when triggered                           | `prop_ic_detector_triggered`  |
|                             `ic_far_defaultSprinklerModel`                              | The default model to use for the Sprinkler when not triggered                      |      `prop_ic_sprinkler`      |
|                         `ic_far_defaultSprinklerTriggeredModel`                         | The default model to use for the Sprinkler when triggered                          | `prop_ic_sprinkler_triggered` |
|                               `ic_far_defaultStrobeModel`                               | The default model to use for the Strobe                                            |       `prop_ic_strobe`        |
|                            [`ic_far_debug`](./#ic_far_debug)                            | If the resource should run in debug mode.                                          |            `false`            |

## Further Details

### `ic_far_disablePasscodes`
If this value is `true`, no control panels will require passcodes to access them. This means any player can access the control panel, including testing the panel, and making announcements.

:::note
This value does not change any Ace Permission requirements.
:::

### `ic_far_kickCheaters`
If this value is `true`, the resource will kick any players it detects as "cheaters". Cheaters are determined by events sent to the server, and actions performed. False-positive as possible, but unlikely.

Regardless of this value, the resource will log events in the server console whenever it believes it has found a cheater.

### `ic_far_randomAlarms`
If this value and [`ic_far_randomAlarms`](./#ic_far_randomalarms) are `true`, every [`ic_far_minutesBetweenRandomAlarms`](./#ic_far_minutesbetweenrandomalarms) minutes the resource will make 6 attempts to find a random fire alarm system that is currently in Standby. If none are found, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](./#ic_far_minutesbetweenrandomalarms) minutes and repeat the process.

If a suitable system is found, the resource will make 3 attempts to find and activate a random component of the alarm system, out of the detectors, sprinklers, and pull stations. If no suitable is found, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](./#ic_far_minutesbetweenrandomalarms) minutes and repeat the process from the beginning.

If a suitable component is found, the system will enter into alarm and all normal events will occur as if a player had activated the system.

### `ic_far_minutesBetweenRandomAlarms`
This must be a whole number, more than `1`. Suggested value range: `20` - `40`. Regardless of this value, the resource will only attempt to activate a random system at a minimum of every 60 seconds.

### `ic_far_randomAlarmsOnlyIfNoActiveAlarms`
If this value and [`ic_far_randomAlarms`](./#ic_far_randomalarms) are `true`, every [`ic_far_minutesBetweenRandomAlarms`](./#ic_far_minutesbetweenrandomalarms) minutes the resource will first check if any alarms systems are current in alarm before selecting a random system to activate. If any system is active, the resource will wait another [`ic_far_minutesBetweenRandomAlarms`](./#ic_far_minutesbetweenrandomalarms) minutes and repeat the process from the beginning.

:::note
Systems in WalkTest do not count as 'in alarm', but systems with active Isolations, Alarms, are Silenced, or are being tested, do count as 'in alarm'.
:::

### `ic_far_oxTargetSupport`
If this value is `true`, the default "Press E to ..." options are completely disabled, and are replaced with [OxTarget](https://overextended.dev/ox_target)'s third-eye system.
:::info
This feature requires [OxTarget](https://overextended.dev/ox_target) to be installed.
:::

### `ic_far_sonoranCADSupport`
If this value is `true`, on alarm system activation a 911 Call will be created in [Sonoran CAD](https://sonorancad.com/).
:::info
This feature requires a [Sonoran CAD](https://sonorancad.com/) [standard subscription](https://info.sonorancad.com/pricing/faq) or higher, and the [Sonoran CAD Framework](https://info.sonorancad.com/integration-plugins/integration-plugins/framework-installation) resource.
:::

### `ic_far_debug`
If this value is `true`, a ton of extra logs will be outputted to both the client and server consoles. Not suggested at all for production use, nor for when using the tool.
