---
sidebar_position: 20
---

# Configuration

Spotlight uses a `config.json` file to store config values.

:::danger
JSON syntax is important: missing `,`s, or `[]`s will break the file. Check your JSON syntax with [this website](https://jsonformatter.org/).
:::

## Value List

|                             Name                             | Default Value |
|:------------------------------------------------------------:|:-------------:|
|          [`SpotlightDistance`](#spotlight-distance)          |     `40`      |
|        [`SpotlightBrightness`](#spotlight-brightness)        |     `8.5`     |
|         [`SpotlightRoundness`](#spotlight-roundness)         |      `7`      |
|            [`SpotlightRadius`](#spotlight-radius)            |     `20`      |
|           [`SpotlightFallOff`](#spotlight-falloff)           |     `30`      |
|       [`SpotlightMinAngle`](#spotlight-minimum-angle)        |     `-60`     |
|       [`SpotlightMaxAngle`](#spotlight-maximum-angle)        |     `65`      |
|               [`KickCheaters`](#kick-cheaters)               |    `false`    |
|                    [`Command`](#command)                     |  `spotlight`  |
|       [`DefaultPrimaryKey`](#default-primary-keybind)        |  `LCONTROL`   |
|             [`SecondaryKey`](#secondary-keybind)             |     `21`      |
|          [`VehicleExtras`](#vehicle-extras-mapping)          |     `[]`      |
|            [`VehicleMods`](#vehicle-mod-mapping)             |     `[]`      |
| [`VehiclePersistents`](#vehicles-with-persistent-spotlights) |     `[]`      |
|       [`VehicleSpotlightIgnores`](#spotlight-ignoring)       |     `[]`      |
|      [`VehicleCustomRGB`](#custom-spotlight-rgb-colors)      |     `[]`      |
|     [`IgnoredVehicleClasses`](#ignored-vehicle-classes)      |     `[]`      |
|            [`IgnoredVehicles`](#ignored-vehicles)            |     `[]`      |

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
[
	{
	  "ModelName": "police_car",
	  "DriversSide": true,
	  "DisabledExtra": 1,
	  "EnabledExtra": 2, 
	  "EnableHighBeams": false
	},
	{
	  "ModelName": "police_car",
	  "DriversSide": false,
	  "DisabledExtra": 3,
	  "EnabledExtra": 4, 
	  "EnableHighBeams": false
	}
]
```

### Vehicle Mod Mapping
#### `VehicleMods`
Configuring this optional value will allow the resource to use mod kits as spotlights, on vehicles that don't have existing functional spotlights. When configured, the resource will change the mod kit based on the spotlight on/off state (i.e., flipped up for on, down for off). 

The steps required to add a vehicle mod are covered on [here](developers/index.md#server-owners--developers).

### Vehicles with Persistent Spotlights
#### `VehiclePersistents`
For vehicles that have spotlights that are persistent or permanent, meaning that cannot be removed via extra or mod kits, they can be added to this config option.  
All that is required is the vehicle model name, if the spotlight is the driver's or passenger's, and the position of the spotlight.

The config for the above would look like so:

```json
[
	{
	  "ModelName": "police_car",
	  "DriversSide": true,
	  "LightPosition": { "x": 1.0, "y": 1.0, "z": 1.0 }, 
	  "EnableHighBeams": false
	}
]
```

To get the light position, use the [Placement Tool](developers/index.md#spotlight-placement).

### Spotlight Ignoring
#### `VehicleSpotlightIgnores`
Configuring this optional value will tell the resource to ignore specific spotlights.

For example, if we have a vehicle with the spawn name `police_car`, and it has 4 functional 'spotlights'.  
If however, one of these spotlights is part of the headlight assemble instead of a spotlight, you can tell the resource to ignore it.

Entries for this config option look like the below:

```json
[
	{
	  "ModelName": "police_car",
	  "SpotlightNumber": 2
	}
]
```

- `ModelName` is the name of the vehicle model.
- `SpotlightNumber` is the spotlight index on that specific vehicle, use the [`/spotlight debug`](usage/commands.md#spotlight-debugging) command to find it.

### Custom Spotlight RGB Colors
#### `VehicleCustomRGB`
Configuring this optional value will tell the resource to use a specific RGB color value for designated model spotlights.

Entries for this config option look like the below:

```json
[
	{
	  "ModelName": "police_car", 
	  "RGB": { "r": 255, "g": 0, "b": 255 }
	}
]
```

- `ModelName` is the name of the vehicle model.
- `RGB` is the color code to use, [see here](https://share.google/Eskx96nQ8MkC8btNO).

:::warning
`r`, `g`, and `b` **must** be lowercase.
:::

### Ignored Vehicle Classes
#### `IgnoredVehicleClasses`
Configuring this optional value will tell the resource to disallow spotlights on the listed vehicle classes.  

:::tip
This only applies for automatically detected spotlights; if a vehicle has an entry in `VehicleExtras`, `VehicleMods`, or `VehiclePersistents`, they will ignore this config option and work regardless.
:::

<details>
  <summary>Vehicle class list</summary>
	:::warning
	The classes must be worded exactly as below.  
	For example, `OffRoad` cannot be `Off-Road`.
	:::

	- `Compacts`
	- `Sedans`
	- `SUVs`
	- `Coupes`
	- `Muscle`
	- `SportsClassics`
	- `Sports`
	- `Super`
	- `Motorcycles`
	- `OffRoad`
	- `Industrial`
	- `Utility`
	- `Vans`
	- `Cycles`
	- `Boats`
	- `Helicopters`
	- `Planes`
	- `Service`
	- `Emergency`
	- `Military`
	- `Commercial`
	- `Trains`
</details>

Entries for this config option look like the below:

```json
[
	"Cycles",
	"Trains"
]
```

### Ignored Vehicles
#### `IgnoredVehicles`
Configuring this optional value will tell the resource to disallow spotlights on the listed vehicles.

:::tip
This config option takes priority overs, meaning even if a vehicle is listed in `VehicleExtras`, `VehicleMods`, or `VehiclePersistents`, if it is listed here, it will be disallowed.
:::

Entries for this config option look like the below:

```json
[
	"police",
	"police2"
]
```

## Default Config File
```json showLineNumbers title="config.json"
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

  "VehicleExtras": [],
  "VehicleMods": [], 
  "VehiclePersistents": [],
  "VehicleSpotlightIgnores": [],

  "VehicleCustomRGB": [],

  "IgnoredVehicleClasses": [],
  "IgnoredVehicles": []
}
```
