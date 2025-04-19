---
sidebar_position: 20
---

# Configuration

SA uses convars for config values. For information on how to correctly install the `config.cfg` file, [see here](install.md).

## Value List

|                                        Name                                         |         Default Value         |
|:-----------------------------------------------------------------------------------:|:-----------------------------:|
|                       [`ic_sa_kickCheaters`](#kick-cheaters)                        |            `false`            |
|             [`ic_sa_secondsTillDoorsClose`](#seconds-till-doors-close)              |             `150`             |
|            [`ic_sa_secondsTillLightsReset`](#seconds-till-lights-reset)             |             `150`             |
|                         [`ic_sa_tones`](#alert-tone-sounds)                         |          *See Below*          |
|                 [`ic_sa_enableAddon`](#enable-voice-turnout-addon)                  |            `false`            |
|       [`ic_sa_addonPaymentReference`](#tebex-subscription-payment-reference)        |             `""`              |
|                   [`ic_sa_ttsLanguage`](#text-to-speech-language)                   |            `en-us`            |
|                      [`ic_sa_ttsVoice`](#text-to-speech-voice)                      |            `Mary`             |
|                    [`is_sa_ttsSpeechRate`](#text-to-speech-rate)                    |             `-1`              |
|                [`ic_sa_followUpAlertMessages`](#follow-up-messages)                 |            `true`             |
|                 [`ic_sa_repeatMessage`](#repeat-tts-message-twice)                  |            `true`             |
|                  [`ic_sa_endingTone`](#repeat-tone-at-end-of-tts)                   |            `true`             |
| [`ic_sa_manualInteractions`](#manual-interactions-targetthird-eye-resource-support) |            `false`            |
|                        [`ic_sa_slowerDoors`](#slower-doors)                         |             `true             |
|                [`ic_sa_wallLightModels`](#default-wall-light-models)                |          *See Below*          |
|             [`ic_sa_trafficLightModels`](#default-traffic-light-models)             |          *See Below*          |
|            [`ic_sa_unitIndicatorModels`](#default-unit-indicator-models)            |          *See Below*          |
|              [`ic_sa_doorControlsModel`](#default-door-controls-model)              |    `prop_ic_door_controls`    |
|            [`ic_sa_ceilingSpeakerModel`](#default-ceiling-speaker-model)            | `v_serv_metro_ceilingspeaker` |
|                    [`ic_sa_httpAccessToken`](#http-access-token)                    |             `""`              |
|                      [`ic_sa_whitelistedIps`](#api-whitelist)                       |          *See Below*          |
|                               [`ic_sa_debug`](#debug)                               |            `false`            |

## Values Explained

### Kick Cheaters
#### `ic_sa_kickCheaters`
If this value is `true`, the resource will kick any players it detects as "cheaters". Cheaters are determined by events sent to the server, and actions performed. False-positive as possible, but unlikely.

Regardless of this value, the resource will log events in the server console whenever it believes it has found a cheater.

### Seconds Till Doors Close
#### `ic_sa_secondsTillDoorsClose`
This must be a whole number, more than or equal to `-1`. Suggested value range: `140` - `160`.  
This is the number of seconds after an Alert is activated, that any doors that were opened are automatically closed.  
If value is `-1`, doors will stay open until manually closed.

### Seconds Till Lights Reset
#### `ic_sa_secondsTillLightsReset`
This must be a whole number, more than 0. Suggested value range: `125` - `150`.  
This is the number of seconds after an Alert is activated, that Wall Lights and Unit Indicators will reset.

### Alert Tone Sounds
#### `ic_sa_tones`
These values define what tones can be played. Each entry contains "human-readable name", and a "file name".  
The human-readable name can be anything, but the file name must be the name of the sound file including the file extension.

Audio files must be placed inside the `ui/assets` folder.  
Tones can be any length and any audio file extension.  
Tones can also not be tones, but re-recorded turnout messages; for example, one tone for each type of appliance.

The default value for this option is:
```cfg
setr ic_sa_tones {
    "Tone 1":   "alert1.mp3",
    "Tone 2":   "alert2.mp3",
    "Tone 3":   "alert3.mp3"
}
```

### Manual Interactions (Target/Third-Eye Resource Support)
#### `ic_sa_manualInteractions`
If this value is `true`, "Press E ..." interaction pop-ups and keybindings will be disabled, and instead events will be fired that can be used in `editable/client/targeting.lua`; to enable support for [OxTarget](https://overextended.dev/ox_target), [QBTarget](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-target), or any other target/third-eye resource, changes will need to be made in this file.

For [OxTarget](https://overextended.dev/ox_target) or [QBTarget](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-target), simply uncomment the lines under the sections named either [OxTarget](https://overextended.dev/ox_target) or [QBTarget](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-target).  
For any other target/third-eye resource, use the provided event handlers and variables to add your own exports/events. Reach out in [Discord](https://inferno.gay/discord) if you need help adding other resources.

:::note
The events in `editable/client/targeting.lua` will not fire unless `ic_sa_manualInteractions` is `true`.
:::

### Slower Doors
#### `ic_sa_slowerDoors`
When this value is `true`, doors will open and closer slower than normal to be more realistic.  
If you do not want the resource to change the speed of the doors, set this value to `false`.

If this value is `true` and your doors do not open like they should, or need to be bumped/hit to be open, change this value to `false` and it should resolve the issue.

### HTTP Access Token
#### `ic_sa_httpAccessToken`
This is an optional config value that is required if server owners wish to use the included [API](developers/api.mdx).  
This value is blank by default, and while blank, the [API](developers/api.mdx) will reject all HTTP requests.  
To enable the [API](developers/api.mdx) you must provide a value to be used as a token.

### API Whitelist
#### `ic_sa_whitelistedIps`
This is an optional config value that allows server owners to only allow HTTP requests from specific IP addresses.

To allow to requests from any IP address, set this value to `[]`.  
The default value, `127.0.0.1`, should allow access from the local machine only on most systems.

:::warning
Regardless of this config option, [`ic_sa_httpAccessToken`](#http-access-token) is required.
:::

### Default Wall Light Models
#### `ic_sa_wallLightModels`
These values determine which prop/model should be used for de/activated Wall Lights.

The default value for this option is:
```cfg
setr ic_sa_wallLightModels {
	"off":	"hei_prop_wall_alarm_off",
	"on":	"prop_ic_wall_light"
}
```

### Default Traffic Light Models
#### `ic_sa_trafficLightModels`
These values determine which prop/model should be used for Traffic Lights.

The default value for this option is:
```cfg
setr ic_sa_trafficLightModels {
	"Red":		"prop_ic_traffic_light_r",
	"Yellow":	"prop_ic_traffic_light_y",
	"Green":	"prop_ic_traffic_light_g"
}
```

### Default Unit Indicator Models
#### `ic_sa_unitIndicatorModels`
These values determine which prop/model should be used for Unit Indicators.

The default value for this option is:
```cfg
setr ic_sa_trafficLightModels {
	"None":		"prop_ic_unit_indicator",
	"Red":		"prop_ic_unit_indicator_r",
	"Green":	"prop_ic_unit_indicator_g",
	"Blue":		"prop_ic_unit_indicator_b"
}
```

### Default Door Controls Model
#### `ic_sa_doorControlsModel`
These values determine which prop/model should be used for Door Controls.

The default value for this option is:
```cfg
setr ic_sa_doorControlsModel "prop_ic_door_controls"
```

### Default Ceiling Speaker Model
#### `ic_sa_ceilingSpeakerModel`
These values determine which prop/model should be used for Ceiling Speakers.

The default value for this option is:
```cfg
setr ic_sa_ceilingSpeakerModel "v_serv_metro_ceilingspeaker"
```

### Debug
#### `ic_sa_debug`
If this value is `true`, a ton of extra logs will be outputted to both the client and server consoles. Not suggested at all for production use, nor for when using the [SA Tool](developers/tool.md).

## Voice Turnout Addon Values Explained

The Voice Turnout Addon is an optional, subscription based, addon for SA.  
You can purchase it from our Tebex Store [here](https://store.inferno-collection.com/package/station-alert-addon).  
The options below require a valid subscription, or they will not work.

### Enable Voice Turnout Addon
#### `ic_sa_enableAddon`
This value must be set to `true` to enable to Text-to-Speech features of SA.  
Default value is `false`; changing to `true` without a valid subscription will result in an error.

### Tebex Subscription Payment Reference
#### `ic_sa_addonPaymentReference`
This value is the Subscription specific Payment Reference, not the normal Payment Reference.  
You can tell the two apart, as the Subscription Payment Reference starts with `tbx-r-` and *not* `tbx-`.  
You can find the Subscription Payment Reference in three places:

1. On the payment confirmation screen after completing your purchase.
2. In your subscription confirmation email from Tebex after purchase.
3. In your Tebex Payment History, located [here](https://checkout.tebex.io/payment-history).

:::danger
Treat your Subscription Payment Reference like a password.  
**Do not** post it publicly.  
**Do not** share it other people/server owners/developers.

Text-to-Speech usage is monitored, and abuse will result in consequences.
:::

### Text-to-Speech Language
#### `ic_sa_ttsLanguage`
This value determines which language the TTS should use.  
The default value is `en-us` for American English.

The following languages are available:

| Language                | Value   |
|-------------------------|---------|
| Arabic (Egypt)          | `ar-eg` |
| Arabic (Saudi Arabia)   | `ar-sa` |
| Bulgarian               | `bg-bg` |
| Catalan                 | `ca-es` |
| Chinese (China)         | `zh-cn` |
| Chinese (Hong Kong)     | `zh-hk` |
| Chinese (Taiwan)        | `zh-tw` |
| Croatian                | `hr-hr` |
| Czech                   | `cs-cz` |
| Danish                  | `da-dk` |
| Dutch (Belgium)         | `nl-be` |
| Dutch (Netherlands)     | `nl-nl` |
| English (Australia)     | `en-au` |
| English (Canada)        | `en-ca` |
| English (Great Britain) | `en-gb` |
| English (India)         | `en-in` |
| English (Ireland)       | `en-ie` |
| English (United States) | `en-us` |
| Finnish                 | `fi-fi` |
| French (Canada)         | `fr-ca` |
| French (France)         | `fr-fr` |
| French (Switzerland)    | `fr-ch` |
| German (Austria)        | `de-at` |
| German (Germany)        | `de-de` |
| German (Switzerland)    | `de-ch` |
| Greek                   | `el-gr` |
| Hebrew                  | `he-il` |
| Hindi                   | `hi-in` |
| Hungarian               | `hu-hu` |
| Indonesian              | `id-id` |
| Italian                 | `it-it` |
| Japanese                | `ja-jp` |
| Korean                  | `ko-kr` |
| Malay                   | `ms-my` |
| Norwegian               | `nb-no` |
| Polish                  | `pl-pl` |
| Portuguese (Brazil)     | `pt-br` |
| Portuguese (Portugal)   | `pt-pt` |
| Romanian                | `ro-ro` |
| Russian                 | `ru-ru` |
| Slovak                  | `sk-sk` |
| Slovenian               | `sl-si` |
| Spanish (Mexico)        | `es-mx` |
| Spanish (Spain)         | `es-es` |
| Swedish                 | `sv-se` |
| Tamil                   | `ta-in` |
| Thai                    | `th-th` |
| Turkish                 | `tr-tr` |
| Vietnamese              | `vi-vn` |

### Text-to-Speech Voice
#### `ic_sa_ttsVoice`
This value determines which voice the TTS should use.  
The default value is `Mary` which works with `en-us`.  
Not all voices work with all languages.

The following voices are available:

| Language name           | Voice    | Voice gender |
|-------------------------|----------|--------------|
| Arabic (Egypt)          | `Oda`    | Female       |
| Arabic (Saudi Arabia)   | `Salim`  | Male         |
| Bulgarian               | `Dimo`   | Male         |
| Catalan                 | `Rut`    | Female       |
| Chinese (China)         | `Luli`   | Female       |
|                         | `Shu`    | Female       |
|                         | `Chow`   | Female       |
|                         | `Wang`   | Male         |
| Chinese (Hong Kong)     | `Jia`    | Female       |
|                         | `Xia`    | Female       |
|                         | `Chen`   | Male         |
| Chinese (Taiwan)        | `Akemi`  | Female       |
|                         | `Lin`    | Female       |
|                         | `Lee`    | Male         |
| Croatian                | `Nikola` | Male         |
| Czech                   | `Josef`  | Male         |
| Danish                  | `Freja`  | Female       |
| Dutch (Belgium)         | `Daan`   | Male         |
| Dutch (Netherlands)     | `Lotte`  | Female       |
|                         | `Bram`   | Male         |
| English (Australia)     | `Zoe`    | Female       |
|                         | `Isla`   | Female       |
|                         | `Evie`   | Female       |
|                         | `Jack`   | Male         |
| English (Canada)        | `Rose`   | Female       |
|                         | `Clara`  | Female       |
|                         | `Emma`   | Female       |
|                         | `Mason`  | Male         |
| English (Great Britain) | `Alice`  | Female       |
|                         | `Nancy`  | Female       |
|                         | `Lily`   | Female       |
|                         | `Harry`  | Male         |
| English (India)         | `Eka`    | Female       |
|                         | `Jai`    | Female       |
|                         | `Ajit`   | Male         |
| English (Ireland)       | `Oran`   | Male         |
| English (United States) | `Linda`  | Female       |
|                         | `Amy`    | Female       |
|                         | `Mary`   | Female       |
|                         | `John`   | Male         |
|                         | `Mike`   | Male         |
| Finnish                 | `Aada`   | Female       |
| French (Canada)         | `Emile`  | Female       |
|                         | `Olivia` | Female       |
|                         | `Logan`  | Female       |
|                         | `Felix`  | Male         |
| French (France)         | `Bette`  | Female       |
|                         | `Iva`    | Female       |
|                         | `Zola`   | Female       |
|                         | `Axel`   | Male         |
| French (Switzerland)    | `Theo`   | Male         |
| German (Austria)        | `Lukas`  | Male         |
| German (Germany)        | `Hanna`  | Female       |
|                         | `Lina`   | Female       |
|                         | `Jonas`  | Male         |
| German (Switzerland)    | `Tim`    | Male         |
| Greek                   | `Neo`    | Male         |
| Hebrew                  | `Rami`   | Male         |
| Hindi                   | `Puja`   | Female       |
|                         | `Kabir`  | Male         |
| Hungarian               | `Mate`   | Male         |
| Indonesian              | `Intan`  | Male         |
| Italian                 | `Bria`   | Female       |
|                         | `Mia`    | Female       |
|                         | `Pietro` | Male         |
| Japanese                | `Hina`   | Female       |
|                         | `Airi`   | Female       |
|                         | `Fumi`   | Female       |
|                         | `Akira`  | Male         |
| Korean                  | `Nari`   | Female       |
| Malay                   | `Aqil`   | Male         |
| Norwegian               | `Marte`  | Female       |
|                         | `Erik`   | Male         |
| Polish                  | `Julia`  | Female       |
|                         | `Jan`    | Male         |
| Portuguese (Brazil)     | `Marcia` | Female       |
|                         | `Ligia`  | Female       |
|                         | `Yara`   | Female       |
|                         | `Dinis`  | Male         |
| Portuguese (Portugal)   | `Leonor` | Female       |
| Romanian                | `Doru`   | Male         |
| Russian                 | `Olga`   | Female       |
|                         | `Marina` | Female       |
|                         | `Peter`  | Male         |
| Slovak                  | `Beda`   | Male         |
| Slovenian               | `Vid`    | Male         |
| Spanish (Mexico)        | `Juana`  | Female       |
|                         | `Silvia` | Female       |
|                         | `Teresa` | Female       |
|                         | `Jose`   | Male         |
| Spanish (Spain)         | `Camila` | Female       |
|                         | `Sofia`  | Female       |
|                         | `Luna`   | Female       |
|                         | `Diego`  | Male         |
| Swedish                 | `Molly`  | Female       |
|                         | `Hugo`   | Male         |
| Tamil                   | `Sai`    | Male         |
| Thai                    | `Ukrit`  | Male         |
| Turkish                 | `Omer`   | Male         |
| Vietnamese              | `Chi`    | Male         |

### Text-to-Speech Rate
#### `is_sa_ttsSpeechRate`
This value determines how fast the TTS will be read.  
The default value is `-1`, valid values are between `-10` and `10`.  
Suggested values are between `-2` and `0`.

### Follow-Up Messages
#### `ic_sa_followUpAlertMessages`
If this value is `true`, "90 seconds" and "120 seconds" will be read automatically.  
This is to inform firefighters on station how long it has been since an Alert was activated.

### Repeat TTS Message Twice
#### `ic_sa_repeatMessage`
If this value is `true`, the TTS message will be repeated twice when it is read.

### Repeat Tone At End Of TTS
#### `ic_sa_repeatMessage`
If this value is `true`, the selected Tone for an Alert will be played again at the end of the TTS.

***
## Permissions
There are several permissions for SA, they are as follows:

### Use Door Controls
#### `InfernoStationAlert.DoorControls`
This permission allows players to interact with the Door Controls to open/close Doors.  
By default, this permission is granted to all players.

### Use Station Computer
#### `InfernoStationAlert.Computer`
This permission allows players to interact with the Station Computer to create Alerts.  
By default, this permission is granted to all players.

### Use Buzzer
#### `InfernoStationAlert.Buzzer`
This permission allows players to use the [`/stationalert buzzer`](usage/commands.md#stationalert-buzzer) command to open/close Doors from outside the Station.  
By default, this permission is granted to all players.

### Create Alert via Command
#### `InfernoStationAlert.Command`
This permission allows players to use the [`/stationalert new`](usage/commands.md#stationalert-new) command to create Alerts anywhere via Command.  
By default, this permission is only granted to admins (`group.admin`).

### Use SA Tool
#### `InfernoStationAlert.Tool`
This permission allows players to use the [SA Tool](developers/tool.md).  
By default, this permission is only granted to admins (`group.admin`).

***
## Language
The config contains a Language section which allows for customization of most written language in the resource.  
You can check if the resource has already been translated in your language by viewing [this page](../translations/resources/station-alert.mdx).  
If there is an existing translation, copy it and replace the entire language section in your `config.cfg`.

If your language has not been translated yet, feel free to check out our [Translation program](../translations/index.md#want-to-help-us-translate-a-resources), where you get rewarded for translating resources!  
You can find the default translation in the section below.
***

## Default Config File
``` showLineNumbers
# Inferno Collection Station Alert
# 
# Copyright (c) 2019-2025, Christopher M, Inferno Collection. All rights reserved.

############################################################################
###                                NOTICE                                ###
###   Be sure to check the documentation before changing these values.   ###
###   https://docs.inferno-collection.com/station-alert/configuration/   ###
############################################################################

#####################
### Configuration ###
#####################

### General ###
###############

# Kick suspected cheaters
set ic_sa_kickCheaters "false"

# How many seconds after an alert should doors close
set ic_sa_secondsTillDoorsClose "150"

# How many seconds after an alert should lights reset
set ic_sa_secondsTillLightsReset "150"

# Labels and files names for tones
setr ic_sa_tones {
    "Tone 1":   "alert1.mp3",
    "Tone 2":   "alert2.mp3",
    "Tone 3":   "alert3.mp3"
}

### SA Addon ###
################

# Enable use of the Station Alert Addon
# Requires subscription, see docs for details
set ic_sa_enableAddon "false"

# Tebex Subscription Payment Reference
set ic_sa_addonPaymentReference ""

# Text-to-Speech Language
set ic_sa_ttsLanguage "en-us"

# Text-to-Speech Voice
set ic_sa_ttsVoice "Mary"

# Text-to-Speech Speech Rate
set is_sa_ttsSpeechRate "-1"

# Send "90 seconds" & "120 seconds" follow up messages
set ic_sa_followUpAlertMessages "true"

# Read the Text-to-Speech message twice
setr ic_sa_repeatMessage "true"

# Play the selected tone again after the Text-to-Speech message
setr ic_sa_endingTone "true"

### Advanced ###
################

# Don't display "Press E to..." interactions
setr ic_sa_manualInteractions "false"

# The model to use for the wall lights
setr ic_sa_wallLightModels {
	"off":	"hei_prop_wall_alarm_off",
	"on":	"prop_ic_wall_light"
}

# The model to use for the traffic lights
setr ic_sa_trafficLightModels {
	"Red":		"prop_ic_traffic_light_r",
	"Yellow":	"prop_ic_traffic_light_y",
	"Green":	"prop_ic_traffic_light_g"
}

# The model to use for the unit indicators
setr ic_sa_unitIndicatorModels {
	"None":		"prop_ic_unit_indicator",
	"Red":		"prop_ic_unit_indicator_r",
	"Green":	"prop_ic_unit_indicator_g",
	"Blue":         "prop_ic_unit_indicator_b"
}

# The model to use for the door controls
setr ic_sa_doorControlsModel "prop_ic_door_controls"

# The model to use for the ceiling speaker
setr ic_sa_ceilingSpeakerModel "v_serv_metro_ceilingspeaker"

# HTTP Access Token
set ic_sa_httpAccessToken ""

# List of whitelisted IPs to allow HTTP requests from
set ic_sa_whitelistedIps [
	"127.0.0.1"
]

# If the resource should run in debug mode
setr ic_sa_debug "false"


###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoStationAlert.DoorControls" allow
add_ace builtin.everyone "InfernoStationAlert.Computer" allow
add_ace builtin.everyone "InfernoStationAlert.Buzzer" allow

add_ace group.admin "InfernoStationAlert.Tool" allow
add_ace group.admin "InfernoStationAlert.Command" allow

###################
###  Language   ###
###################

setr ic_sa_language {
    "DoorControls":                         "Door Controls",
    "AccessDoorControls":                   "Access Door Controls",
    "NoDoorsToControl":                     "This location has no doors to control!",
    "OpenAll":                              "Open All",
    "CloseAll":                             "Close All",
    "OpenAllDoors":                         "Open all doors",
    "CloseAllDoors":                        "Close all doors",
    "OpenDoor":                             "Open door",
    "CloseDoor":                            "Close door",
    
    "StationComputer":                      "Station Computer",
    "AccessComputer":                       "Access Computer",
    "CreateANewAlert":                      "Create a new Alert for any Station Location.",
    "CreateANewMessage":                    "Create a new Message to be read at only this Station Location.",
    "StationAlert":                         "Station Alert",
    "ActivateStationAlert":                 "Activate a local Station Alert.",
    
    "NewAlert":                             "New Alert",
    "NewMessage":                           "New Message",
    "CurrentMessage":                       "Current Message",
    "SelectLocations":                      "Select Station Locations",
    "SelectWhichLocation":                  "Select which Station Locations the Alert will be sent to.",
    "SelectDoors":                          "Select Doors",
    "SelectWhichDoors":                     "Select which doors at which Station Locations should open. If none selected, all doors at all selected Station Locations will open.",
    "EnterMessage":                         "Enter Message",
    "ProvideAMessage":                      "Optionally provide a message with the Alert.",
    "SelectTone":                           "Select Tone",
    "SelectATone":                          "Optionally select a tone to use with the Alert. If not selected, default tone will be used.",
    "SelectColors":                         "Select Unit Colors",
    "SelectUnitColors":                     "Optionally select unit colors to use with this tone",
    "SendAlert":                            "Send Alert",
    "SendTheAlert":                         "Send the Alert to the selected Station Locations",
    
    "LocationSelection":                    "Station Location Selection",
    "SendAlertTo":                          "Send Alert to",
    
    "DoorSelection":                        "Door Selection",
    "Open":                                 "Open",
    "At":                                   "At",
    
    "Close":                                "Close",
    "CloseMenu":                            "Close menu",
    "Selected":                             "Selected",
    "Provided":                             "Provided",
    "Confirm":                              "Confirm",
    "ConfirmYourSelection":                 "Confirm Your Selection",
    
    "ToneSelection":                        "Tone Selection",
    "UseTone":                              "Use Tone",
    
    "UnitColorSelection":                   "Unit Color Selection",
    "UseColor":                             "Use Color",
    
    "YouDoNotHavePermission":               "You do not have permission to use this command!",
    "CommandIsClientOnly":                  "This command needs to be run from the client!",
    "CommandIsServerOnly":                  "This command needs to be run from the console!",
    "MustBeInVehicle":                      "You must be in a vehicle to use this command!",
    "UnknownCommand":                       "Unknown command!",
    
    "StationLocation":                      "Station Location",
    "Place":                                "Place",
    "PlaceA":                               "Place a",
    "SelectA":                              "Select a",
    "HideAProp":                            "Hide a Prop",
    "TooFar":                               "Too far away from",
    "Name":                                 "Name",
    "New":                                  "New",
    "Remove":                               "Remove",
    "Change":                               "Change",
    "LinkedTo":                             "Linked To",
    "MustBeUpright":                        "Must be upright",
    "FirstPersonRequired":                  "Enter First-Person to use the Tool",
    "CannotPlaceThere":                     "Cannot place there",
    "TooFarFromSurface":                    "Too far from any surfaces",
    
    "InvalidAimLocation":                   "This is not a valid aiming location",
    "InvalidDoorName":                      "Invalid door name",
    "DoorNameAlreadyInUse":                 "Door name already in use",
    "NoDoorsAddedYet":                      "No doors added yet",
    "NoDoorSelected":                       "No door selected",
    "NoDoorCloseEnough":                    "No door close enough",
    "NoDoorFound":                          "No door found",
    
    "NoPropSelected":                       "No prop selected",
    "NoHiddenPropSelected":                 "No prop selected, aim for blue circle",
    "CannotCreateWhileEditing":             "Cannot create Station Location while editing prop",
    "CannotChangeLocationWhileEditing":     "Cannot change Locations while editing prop",
    "CannotChangePropWhileEditing":         "Cannot change Prop Type while editing prop",
    "InvalidLocationName":                  "Invalid Station Location name",
    "NoLocationCreatedYet":                 "No Station Location created yet!",
    "PropAlreadyHidden":                    "Prop already hidden. Right Click to unhide",
    "NothingToHide":                        "Nothing found to hide",
    
    "PropAlreadyAComputer":                 "Selected Prop is already a Computer",
    "NoComputerSelected":                   "No Computer selected",
    "NoPropFound":                          "No prop found",
    
    "TrafficLightSelection":                "Traffic Light Selection",
    "ConnectThisTrafficLight":              "Connect this traffic light to"
}
```
