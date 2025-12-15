---
sidebar_position: 20
---

# Configuration

Torches uses a `config.json` file to store config values. Invalid JSON syntax in this file will cause errors.

## Value List

|                            Name                            | Default Value |
|:----------------------------------------------------------:|:-------------:|
|              [`allowAnyPed`](#allow-any-ped)               |    `false`    |
|            [`torchesDistance`](#torch-distance)            |     `30`      |
|          [`torchesBrightness`](#torch-brightness)          |     `1.5`     |
|           [`torchesRoundness`](#torch-roundness)           |     `0.5`     |
|              [`torchesRadius`](#torch-radius)              |     `20`      |
|             [`torchesFallOff`](#torch-falloff)             |     `100`     |
|                   [`command`](#command)                    |    `torch`    |
|            [`defaultKeybind`](#default-keybind)            |    *None*     |
|      [`disableHeadMovement`](#disable-head-movement)       |    `true`     |
| [`disableKeybindInVehicles`](#disable-keybind-in-vehicles) |    `false`    |
|          [`inventorySupport`](#inventory-support)          |    `false`    |
|                  [`defaults`](#defaults)                   |  *See Below*  |
|                      [`peds`](#peds)                       |  *See Below*  |
|                    [`mppeds`](#mp-peds)                    |  *See Below*  |

## Values Explained

### Allow Any Ped
#### `allowAnyPed`
If this value is `false`, only preconfigured Peds and MP Peds will be able to use Torches.  
If this value is `true`, any Ped or MP Ped can use Torches. Where no preset exists, [defaults](#defaults) will be used.

### Torch Distance
#### `torchDistance`
This value controls the distance a Torch will be drawn with.

### Torch Brightness
#### `torchBrightness`
This value controls the brightness a Torch will be drawn with.

### Torch Roundness
#### `torchRoundness`
This value controls the roundness a Torch will be drawn with.

### Torch Radius
#### `torchRadius`
This value controls the radius a Torch will be drawn with.

### Torch Falloff
#### `torchFallOff`
This value controls the falloff a Torch will be drawn with.

### Command
#### `Command`
The name of the command.

### Default Keybind
#### `defaultKeybind`
The keyboard mapping name for the key to use for the keybind.  
For a full list of options, [see here](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/).

By default, no default is provided, meaning there is no keybind.  
Players can add one via their GTA V/FiveM Keybind Settings

### Disable Head Movement
#### `disableHeadMovement`
When enabled, prevents head movement when moving third-person camera, allowing light source to stay "attached" to helmets.

| `DisableHeadMovement` Disabled       | `DisableHeadMovement` Enabled       |
|--------------------------------------|-------------------------------------|
| ![Disabled](assets/head_before.webp) | ![Disabled](assets/head_after.webp) |

### Disable Keybind in Vehicles
#### `disableKeybindInVehicles`
When enabled, the keybind to toggle the torch will be disabled.

:::note
The command and inventory toggles (if configured) are not impacted, and can still be used in vehicles.
:::

### Inventory Support
#### `inventorySupport`
When this value is `true`, inventory support for resources such as [OxInventory](https://overextended.dev/ox_inventory) and [QBInventory](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-inventory) will be enabled.

:::note
You must also uncomment/edit the `editable/server/inventory.lua` file in addition to setting this value to `true` in order for inventory resources to work.
Code inside `editable/server/inventory.lua` will not run unless `inventorySupport` is `true`.
:::

Inside the `editable/server/inventory.lua` file, server owners/developers can either uncomment the code for [OxInventory](https://overextended.dev/ox_inventory) or [QBInventory](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-inventory), or add their own inventory code as required.
Reach out in [Discord](https://inferno.codes/discord) if you need help adding other resources.

:::tip
The "items.lua" entry for both Ox and QB are located at the top of `editables/server/inventory.lua`, and 100x100 png images are located in the download root directory.
:::

### Defaults
#### `defaults`
The values listed in the `defaults` are values used when no other matching preset can be found.  
There are two default entries, one for `head` and one for `chest`.  
Changing these values will change the default torch positions on a ped.

### Peds
#### `peds`
This config option is where you list presets for non-MP Peds, such as base game peds or addon peds.  
Unlike [MP Peds](#mp-peds), this config option **is not** split into Male and Female.

Entries for this config option can be created in-game using the Tool. [See here](developers/tool.md) for more info.

Below is an example of an entry:
```json
{
  "model": "s_m_y_fireman_01",
  "mountType": "Chest",
  "source": {
    "X": 0.16,
    "Y": 0.212,
    "Z": 0.148
  },
  "corona": {
    "X": 0.16,
    "Y": 0.212,
    "Z": 0.148
  }
}
```

- `model` is the spawn name of the model
- `mountType` is either `head` or `chest`
- `source` is a Vector3 offset from the ped for where the torch's light source should appear from
- `corona` is a Vector3 offset from the ped for where the torch's corona should appear from

### MP Peds
#### `mppeds`
This config option is where you list presets for MP Peds.  
This config option is split into Male and Female.

Entries for this config option can be created in-game using the Tool. [See here](developers/tool.md) for more info.

Below is an example of an entry:
```json
{
	"collectionName": "mp_m_smuggler_01",
	"localIndex": 6,
	"isProp": true,
	"variationId": 0,
	"mountType": "Head",
	"source": {
		"X": 0.15,
		"Y": 0,
		"Z": 0.15
	},
	"corona": {
		"X": 0.148,
		"Y": 0.0735,
		"Z": 0.115
	}
}
```

- `collectionName` is the cloth collection the preset item is set to
- `localIndex` is the local id of the selected cloth item within the selected collection
- `isProp` is `true` if using a prop, or `false` if using a component
- `variationId` is the type of prop or component of the preset item
- `mountType` is either `head` or `chest`
- `source` is a Vector3 offset from the ped for where the torch's light source should appear from
- `corona` is a Vector3 offset from the ped for where the torch's corona should appear from

## Default Config File
```json showLineNumbers title="config.json"
{
	"allowAnyPed": false,

	"torchDistance": "30",
	"torchBrightness": "1.5",
	"torchRoundness": "0.5",
	"torchRadius": "20",
	"torchFallOff": "100",

	"command": "torch",
	"defaultKeybind": "",

	"disableHeadMovement": true,
	"inventorySupport": false,
	"disableKeybindInVehicles": false,

	"defaults": {
		"head": {
			"source": {
				"X": 0.15,
				"Y": 0,
				"Z": -0.15
			},
			"corona": {
				"X": 0.15,
				"Y": 0,
				"Z": -0.15
			}
		},

		"chest": {
			"source": {
				"X": 0.16,
				"Y": 0.225,
				"Z": 0.15
			},
			"corona": {
				"X": 0.16,
				"Y": 0.2,
				"Z": 0.15
			}
		}
	},

	"peds": [
		{
			"model": "s_m_y_fireman_01",
			"mountType": "Chest",
			"source": {
				"X": 0.16,
				"Y": 0.212,
				"Z": 0.148
			},
			"corona": {
				"X": 0.16,
				"Y": 0.212,
				"Z": 0.148
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
				"mountType": "Head",
				"source": {
					"X": 0.15,
					"Y": 0,
					"Z": 0.15
				},
				"corona": {
					"X": 0.148,
					"Y": 0.0735,
					"Z": 0.115
				}
			},
			{
				"collectionName": "mp_m_heist3",
				"localIndex": 0,
				"isProp": false,
				"variationId": 8,
				"mountType": "Chest",
				"source": {
					"X": 0.157,
					"Y": 0.22,
					"Z": 0.15
				},
				"corona": {
					"X": 0.157,
					"Y": 0.215,
					"Z": 0.15
				}
			}
		],

		"female": [
			{
				"CollectionName": "mp_f_smuggler_01",
				"LocalIndex": 6,
				"IsProp": true,
				"VariationId": 0,
				"MountType": "Head",
				"Source": {
					"X": 0.1475,
					"Y": 0.0575,
					"Z": 0.1199
				},
				"Corona": {
					"X": 0.1475,
					"Y": 0.0525,
					"Z": 0.1199
				}
			},

			{
				"collectionName": "mp_f_heist3",
				"localIndex": 0,
				"isProp": false,
				"variationId": 8,
				"mountType": "Chest",
				"source": {
					"X": 0.155,
					"Y": 0.222,
					"Z": 0.15
				},
				"corona": {
					"X": 0.155,
					"Y": 0.217,
					"Z": 0.15
				}
			}
		]
	}
}
```
