---
sidebar_position: 20
---

# Configuration

Spotlight uses `config.cfg` for resource settings and `spotlights.json` for vehicle spotlight definitions. For information on installing `config.cfg`, [see here](install.md).

:::tip
Use the in-game [Spotlight Tool](developers/tool.md) to create and edit vehicle spotlight definitions. It generates the required `spotlights.json` entries and can save them to `draft-spotlights.json`.
:::

## Value List

|                                    Name                                     |      Default Value       |
|:---------------------------------------------------------------------------:|:------------------------:|
|                       [`ic_spot_language`](#language)                       |         `en-us`          |
|                  [`ic_spot_kickCheaters`](#kick-cheaters)                   |         `false`          |
|           [`ic_spot_defaultPrimaryKey`](#default-primary-keybind)           |        `LCONTROL`        |
|               [`ic_spot_secondaryKeyId`](#secondary-keybind)                |           `21`           |
|               [`ic_spot_disableFallback`](#disable-fallback)                |         `false`          |
|         [`ic_spot_ignoredVehicleClasses`](#ignored-vehicle-classes)         |    `Cycles`, `Trains`    |
|               [`ic_spot_ignoredVehicles`](#ignored-vehicles)                | `cablecar`, `metrotrain` |
| [`ic_spot_defaultSpotlightConfiguration`](#default-spotlight-configuration) |       *See below*        |
|                        [`ic_spot_command`](#command)                        |       `spotlight`        |
|                          [`ic_spot_debug`](#debug)                          |         `false`          |

## Values Explained

### Language
#### `ic_spot_language`
This value is the short code for the language Spotlight should use. Available languages are listed on the [translations page](../../translations).

### Kick Cheaters
#### `ic_spot_kickCheaters`
If this value is `true`, Spotlight kicks players it detects attempting unauthorized Spotlight actions. Suspected actions are still logged to the server console when this value is `false`.

### Default Primary Keybind
#### `ic_spot_defaultPrimaryKey`
This value sets the default keyboard mapping for the primary Spotlight keybind. Players can change it through **Pause Menu → Settings → Key Bindings → FiveM**.

For a full list of keyboard values, [see the FiveM documentation](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/).

### Secondary Keybind
#### `ic_spot_secondaryKeyId`
This value sets the control ID for the secondary Spotlight keybind. By default it is Sprint / `Left Shift` (`21`).

For a full list of control IDs, [see the FiveM documentation](https://docs.fivem.net/docs/game-references/controls/#controls).

### Disable Fallback
#### `ic_spot_disableFallback`
If this value is `true`, a vehicle must have an entry in `spotlights.json` before its spotlights can be used. If `false`, Spotlight can use compatible vehicle spotlights that do not have an explicit definition.

### Ignored Vehicle Classes
#### `ic_spot_ignoredVehicleClasses`
This value is a list of vehicle classes that cannot use spotlights.

<details>
  <summary>Vehicle class list</summary>

The classes must be written exactly as below. For example, use `OffRoad`, not `Off-Road`.

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

### Ignored Vehicles
#### `ic_spot_ignoredVehicles`
This value is a list of vehicle spawn names that cannot use spotlights.

### Default Spotlight Configuration
#### `ic_spot_defaultSpotlightConfiguration`
This value sets the default appearance and movement values used by all configured spotlights. Individual entries in `spotlights.json` can override any of these values.

| Property | Description | Default |
|:---|:---|:---:|
| `Brightness` | Brightness of the spotlight. | `8.5` |
| `Radius` | Radius of the spotlight. | `20` |
| `FallOff` | Falloff of the spotlight. | `30` |
| `InnerCone` | Inner cone angle of the spotlight. | `15` |
| `OuterCone` | Outer cone angle of the spotlight. | `45` |
| `MinAngle` | Furthest angle the spotlight can move left. | `-60` |
| `MaxAngle` | Furthest angle the spotlight can move right. | `65` |
| `RGB` | Spotlight colour, using `Red`, `Green`, and `Blue` values. | `221`, `221`, `221` |

### Command
#### `ic_spot_command`
This value changes the `/spotlight` command name. For a full list of commands, [see here](usage/commands.md).

### Debug
#### `ic_spot_debug`
If this value is `true`, extra debug logs are written to the client and server consoles. This is not recommended for production servers.

## Spotlight Definitions

`spotlights.json` stores the vehicle-specific spotlight definitions. It contains three lists:

- `extras` - spotlights controlled with vehicle extras.
- `mods` - spotlights controlled with vehicle modkits.
- `persistents` - permanent spotlights that cannot be raised, lowered, or hidden.

Each definition has a `modelName`, a `position` of either `driver` or `passenger`, and a vehicle-relative `lightSource` position with `x`, `y`, and `z` values. The optional `configuration` object overrides the default spotlight configuration for that definition.

:::note
Use the [Spotlight Tool](developers/tool.md) to generate vehicle definitions. It can preview extras and modkits, position the light source, and produce valid JSON for `spotlights.json`.
:::

### Per-Spotlight Configuration

When present in a vehicle definition, `configuration` can contain any of the following lower-camel-case properties. Omitted properties inherit from [`ic_spot_defaultSpotlightConfiguration`](#default-spotlight-configuration).

| Property | Description |
|:---|:---|
| `brightness` | Brightness of the spotlight. |
| `radius` | Radius of the spotlight. |
| `fallOff` | Falloff of the spotlight. |
| `innerCone` | Inner cone angle. |
| `outerCone` | Outer cone angle. |
| `minAngle` | Minimum movement angle. |
| `maxAngle` | Maximum movement angle. |
| `enableHighbeams` | Turns on the vehicle high beams with the spotlight. |
| `rgb` | Colour override with lowercase `red`, `green`, and `blue` properties. |

### Vehicle Extras

Entries in `extras` use `enabledExtra` and `disabledExtra` to select the vehicle extras to use while the spotlight is enabled and disabled.

```json
{
  "modelName": "police_car",
  "position": "driver",
  "lightSource": { "x": 0.45, "y": 0.8, "z": 0.6 },
  "enabledExtra": 2,
  "disabledExtra": 1
}
```

### Vehicle Modkits

Entries in `mods` use `up` and `down` objects. Each object contains the vehicle mod `type` and `index` to apply for the raised and lowered spotlight states.

```json
{
  "modelName": "police_car",
  "position": "passenger",
  "lightSource": { "x": -0.45, "y": 0.8, "z": 0.6 },
  "up": { "type": 49, "index": 1 },
  "down": { "type": 49, "index": 0 }
}
```

### Persistent Spotlights

Entries in `persistents` are for spotlights that are permanently modelled on the vehicle and do not require an extra or modkit.

```json
{
  "modelName": "police_car",
  "position": "driver",
  "lightSource": { "x": 0.45, "y": 0.8, "z": 0.6 },
  "configuration": {
    "enableHighbeams": true,
    "rgb": { "red": 255, "green": 255, "blue": 255 }
  }
}
```

## Permissions

### Use Spotlight
#### `InfernoSpotlight.UseSpotlight`
This permission allows players to use Spotlight. By default, it is granted to all players.

### Use Spotlight Tool
#### `InfernoSpotlight.Tool`
This permission allows players to access the Spotlight placement and configuration tool. By default, it is granted to `group.admin`.

## Default Config Files

```text showLineNumbers title="config.cfg"
# Inferno Collection Spotlight

#####################
### Configuration ###
#####################

### General ###

# Select language
setr ic_spot_language "en-us"

# Kick suspected cheaters
set ic_spot_kickCheaters "false"

# Default keybind key (players can change via Pause Menu -> Keybinds)
setr ic_spot_defaultPrimaryKey "LCONTROL"

# Control ID for second key, default is Sprint (Left Shift)
setr ic_spot_secondaryKeyId "21"

# If "true", vehicles require a config entry for spotlights to work
setr ic_spot_disableFallback "false"

# Vehicle classes to ignore
setr ic_spot_ignoredVehicleClasses [
  "Cycles",
  "Trains"
]

# Vehicle models to ignore
setr ic_spot_ignoredVehicles [
  "cablecar",
  "metrotrain"
]

### Advanced ###

setr ic_spot_defaultSpotlightConfiguration {
  "Brightness": "8.5",
  "Radius": "20",
  "FallOff": "30",
  "InnerCone": "15",
  "OuterCone": "45",
  "MinAngle": "-60",
  "MaxAngle": "65",
  "RGB": {
    "Red": "221",
    "Green": "221",
    "Blue": "221"
  }
}

# Change command name
set ic_spot_command "spotlight"

# If the resource should run in debug mode
setr ic_spot_debug "false"

###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoSpotlight.UseSpotlight" allow
add_ace group.admin "InfernoSpotlight.Tool" allow
```

```json showLineNumbers title="spotlights.json"
{
  "extras": [],
  "mods": [],
  "persistents": []
}
```
