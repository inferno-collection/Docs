---
sidebar_position: 20
---

# Configuration

Spotlight uses a `config.json` file to store config values. Invalid JSON syntax in this file will cause errors.

## Value List

|                      Name                       | Default Value |
|:-----------------------------------------------:|:-------------:|
|   [`SpotlightDistance`](#spotlight-distance)    |     `40`      |
| [`SpotlightBrightness`](#spotlight-brightness)  |     `8.5`     |
|  [`SpotlightRoundness`](#spotlight-roundness)   |      `7`      |
|     [`SpotlightRadius`](#spotlight-radius)      |     `20`      |
|    [`SpotlightFallOff`](#spotlight-falloff)     |     `30`      |
| [`SpotlightMinAngle`](#spotlight-minimum-angle) |     `-60`     |
| [`SpotlightMaxAngle`](#spotlight-maximum-angle) |     `65`      |
|        [`KickCheaters`](#kick-cheaters)         |    `false`    |
|              [`Command`](#command)              |  `spotlight`  |
| [`DefaultPrimaryKey`](#default-primary-keybind) |  `LCONTROL`   |
|      [`SecondaryKey`](#secondary-keybind)       |     `21`      |
|   [`VehicleExtras`](#vehicle-extras-mapping)    |     `[]`      |

## Values Explained

### Spotlight Distance
#### `SpotlightDistance`
This value controls the distance a spotlight will be drawn with.

### Spotlight Brightness
#### `SpotlightBrightness`
This value controls the brightness a spotlight will be drawn with.

### Spotlight Roundness
#### `SpotlightRoundness`
This value controls the roundness a spotlight will be drawn with.

### Spotlight Radius
#### `SpotlightRadius`
This value controls the radius a spotlight will be drawn with.

### Spotlight Falloff
#### `SpotlightFallOff`
This value controls the falloff a spotlight will be drawn with.

### Spotlight Minimum Angle
#### `SpotlightMinAngle`
This value controls how far to the left a spotlight can be angled.

### Spotlight Maximum Angle
#### `SpotlightMaxAngle`
This value controls how far to the right a spotlight can be angled.

### Kick Cheaters
#### `KickCheaters`
If `true`, the script will kick players it thinks are abusing the script.  
Even if `false`, script will log suspect players to the console.

### Command
#### `Command`
The name of the command that can be used instead of the keybinds to toggle the spotlight.

### Default Primary Keybind
#### `DefaultPrimaryKey`
The keyboard mapping name for the key to use for the primary keybind.  
For a full list of options, [see here](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/).

:::note
Because FiveM's keymapping is used for the primary keybind, once a player joins the server for the first time while Spotlight is running, the keybind will be saved. To change the keybind for existing players, they must go to their in-game settings > keybinds > FiveM > `Toggles vehicle spotlight`.
:::

### Secondary Keybind
#### `SecondaryKey`
The control id to use for the secondary keybind - by default this is mapped to Sprint / `Left Shift` (`21`).  
For a full list of options, [see here](https://docs.fivem.net/docs/game-references/controls/#controls).

### Vehicle Extras Mapping
#### `VehicleExtras`
Configuring this optional value will allow the resource to set the correct extras on a vehicle when the spotlight is toggled on or off.

For example, if we have a vehicle with the spawn name `police_car`, and it has 4 spotlight extras as below:
- Extra 1: Driver spotlight flipped down
- Extra 2: Driver spotlight flipped up
- Extra 3: Passenger spotlight flipped down
- Extra 4: Passenger spotlight flipped down

The config for the above would look like so:

```json
{
  "ModelName": "police_car",
  "DriversSide": true,
  "DisabledExtra": 1,
  "EnabledExtra": 2
},
{
  "ModelName": "police_car",
  "DriversSide": false,
  "DisabledExtra": 3,
  "EnabledExtra": 4
}
```

:::warning
JSON syntax is important: missing `,`s, or `[]`s will break the file. Check your JSON syntax with [this website](https://jsonformatter.org/).
:::

## Default Config File
``` showLineNumbers
{
  "SpotlightDistance": "40",
  "SpotlightBrightness": "8.5",
  "SpotlightRoundness": "7",
  "SpotlightRadius": "20",
  "SpotlightFallOff": "30",
  "SpotlightMinAngle": "-60",
  "SpotlightMaxAngle": "65",

  "KickCheaters": "false",

  "Command": "spotlight",

  "DefaultPrimaryKey": "LCONTROL",
  "SecondaryKey": "21",

  "VehicleExtras": []
}
```
