---
sidebar_position: 20
---

# Configuration

Torches uses `config.cfg` for resource settings and `torches.json` for Ped and MP Ped torch presets. The in-game [Torch Tool](developers/tool.md) can create, edit, preview, and save preset definitions to `torches.draft.json`.

:::warning
Version 1.1.0 replaces `config.json` with `config.cfg`. Presets that were previously stored in `config.json` are now stored in `torches.json`. See the [migration guide](migration.md) before updating an existing installation.
:::

## Value List

|                                  Name                                  | Default Value |
|:----------------------------------------------------------------------:|:-------------:|
|                   [`ic_torches_language`](#language)                   |    `en-us`    |
|              [`ic_torches_kickCheaters`](#kick-cheaters)               |    `false`    |
|            [`ic_torches_defaultKeybind`](#default-keybind)             |    *None*     |
| [`ic_torches_disableKeybindInVehicles`](#disable-keybind-in-vehicles)  |    `false`    |
|       [`ic_torches_disableHeadMovement`](#disable-head-movement)       |    `true`     |
|          [`ic_torches_inventorySupport`](#inventory-support)           |    `false`    |
| [`ic_torches_defaultTorchConfiguration`](#default-torch-configuration) |  *See below*  |
|                    [`ic_torches_command`](#command)                    |    `torch`    |
|               [`ic_torches_allowAnyPed`](#allow-any-ped)               |    `false`    |
|                   [`ic_torches_defaults`](#defaults)                   |  *See below*  |
|                      [`ic_torches_debug`](#debug)                      |    `false`    |

## Values Explained

### Language
#### `ic_torches_language`
The short code for the language Torches should use. Available languages are listed on the [translations page](../../translations).

### Kick Cheaters
#### `ic_torches_kickCheaters`
When `true`, Torches kicks players who attempt unauthorized actions. Suspected actions are logged when this is `false`.

### Default Keybind
#### `ic_torches_defaultKeybind`
The default keyboard mapping for the torch keybind. By default, no keybind is configured. Players can add one through **Pause Menu → Settings → Key Bindings → FiveM**.

For available keyboard values, see the [FiveM documentation](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/).

### Disable Keybind in Vehicles
#### `ic_torches_disableKeybindInVehicles`
When `true`, the keybind for toggling a torch is disabled inside vehicles. The command and inventory toggles are not affected.

### Disable Head Movement
#### `ic_torches_disableHeadMovement`
When `true`, prevents head movement while moving the third-person camera, allowing the light source to stay attached to helmets.

### Inventory Support
#### `ic_torches_inventorySupport`
When `true`, enables inventory support for resources such as [OxInventory](https://overextended.dev/ox_inventory) and [QBInventory](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-inventory).

You must also configure `editable/server/inventory.lua`. That file is not run unless inventory support is enabled.

### Default Torch Configuration
#### `ic_torches_defaultTorchConfiguration`
Sets the default appearance of torches.

| Property | Description | Default |
|:---|:---|:---:|
| `brightness` | Torch brightness. | `1.5` |
| `radius` | Torch radius. | `20` |
| `fallOff` | Torch falloff. | `100` |
| `innerCone` | Inner cone angle. | `20` |
| `outerCone` | Outer cone angle. | `100` |
| `rgb` | Torch color using `red`, `green`, and `blue` values. | `221`, `221`, `221` |

### Command
#### `ic_torches_command`
Changes the command used to toggle a torch. The default is `/torch`.

### Allow Any Ped
#### `ic_torches_allowAnyPed`
When `false`, only Peds and MP Peds with a matching preset in `torches.json` can use torches. When `true`, any Ped or MP Ped can use torches, using the values in [`ic_torches_defaults`](#defaults) when no preset exists.

### Defaults
#### `ic_torches_defaults`
Sets the head and chest torch positions used when no matching preset exists. Each position contains `x`, `y`, and `z` offsets relative to the Ped.

### Debug
#### `ic_torches_debug`
When `true`, writes additional debug information to the client and server consoles. This is not recommended for production servers.

## Permissions

### Use Torches
#### `InfernoTorches.UseTorches`
Allows a player to use torches. The default config grants this permission to everyone.

### Use Torch Tool
#### `InfernoTorches.Tool`
Allows a player to open the Torch Tool. The default config grants this permission to `group.admin`.

## Preset Files

`torches.json` contains two preset collections:

- `peds` - presets for non-MP Peds. Each entry uses `model`, `componentId`, `drawableId`, `mountType`, and `position`.
- `mppeds` - presets for `male` and `female` freemode Peds. Each entry uses `collectionName`, `localIndex`, `isProp`, `variationId`, `mountType`, and `position`.

Each `position` contains `x`, `y`, and `z` offsets. Use the [Torch Tool](developers/tool.md) to generate valid entries. The tool reads existing entries from both `torches.json` and `torches.draft.json`, and saves new or edited entries to `torches.draft.json`.

```json showLineNumbers title="torches.json"
{
  "peds": [
    {
      "model": "s_m_y_fireman_01",
      "componentId": 0,
      "drawableId": 0,
      "mountType": "chest",
      "position": {
        "x": 0.16,
        "y": 0.212,
        "z": 0.148
      }
    }
  ],
  "mppeds": {
    "male": [
      {
        "collectionName": "mp_m_smuggler_01",
        "localIndex": 6,
        "isProp": true,
        "variationId": 0,
        "mountType": "head",
        "position": {
          "x": 0.15,
          "y": 0,
          "z": 0.15
        }
      },
      {
        "collectionName": "mp_m_heist3",
        "localIndex": 0,
        "isProp": false,
        "variationId": 8,
        "mountType": "chest",
        "position": {
          "x": 0.157,
          "y": 0.22,
          "z": 0.15
        }
      }
    ],
    "female": [
      {
        "collectionName": "mp_f_smuggler_01",
        "localIndex": 6,
        "isProp": true,
        "variationId": 0,
        "mountType": "head",
        "position": {
          "x": 0.1475,
          "y": 0.0575,
          "z": 0.1199
        }
      },
      {
        "collectionName": "mp_f_heist3",
        "localIndex": 0,
        "isProp": false,
        "variationId": 8,
        "mountType": "chest",
        "position": {
          "x": 0.155,
          "y": 0.222,
          "z": 0.15
        }
      }
    ]
  }
}

```

## Default Config File

```text showLineNumbers title="config.cfg"
# Inferno Collection Torches
# 
# Copyright (c) 2019-2026, Christopher M, Inferno Collection. All rights reserved.

############################################################################
###                              NOTICE                                  ###
###   Be sure to check the documentation before changing these values    ###
###    https://docs.inferno-collection.com/resources/torches/config/     ###
############################################################################

#####################
### Configuration ###
#####################

### General ###
###############

# Select language
setr ic_torches_language "en-us"

# Kick suspected cheaters
set ic_torches_kickCheaters "false"

# Default key (none, by default)
# Players can change via Pause Menu -> Keybinds
# https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
setr ic_torches_defaultKeybind ""

setr ic_torches_disableKeybindInVehicles "false"

# Prevents head movement when moving third-person camera
setr ic_torches_disableHeadMovement "true"

setr ic_torches_inventorySupport "false"

### Advanced ###
################

setr ic_torches_defaultTorchConfiguration {
    "brightness": 1.5,
    "radius": 20,
    "fallOff": 100,
    "innerCone": 20,
    "outerCone": 100,
    "rgb": {
        "red": 221,
        "green": 221,
        "blue": 221
    }
}

# Change command name
set ic_torches_command "torch"

# Allow any ped to use a Torch, even if no preset exists
setr ic_torches_allowAnyPed "false"

# Torch positions when none provided
setr ic_torches_defaults {
    "head": { "x": 0.15, "y": 0.0, "z": -0.15 },
    "chest": { "x": 0.16, "y": 0.225, "z": 0.15 }
}

setr ic_torches_debug "false"

###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoTorches.UseTorches" allow

add_ace group.admin "InfernoTorches.Tool" allow

```
