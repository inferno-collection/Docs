---
sidebar_position: 20
---

# Configuration

Torches uses a `config.json` file to store config values. Invalid JSON syntax in this file will cause errors.

## Value List

|                   Name                   | Default Value |
|:----------------------------------------:|:-------------:|
|     [`allowAnyPed`](#allow-any-ped)      |    `false`    |
|   [`torchesDistance`](#torch-distance)   |     `30`      |
| [`torchesBrightness`](#torch-brightness) |     `1.5`     |
|  [`torchesRoundness`](#torch-roundness)  |     `0.5`     |
|     [`torchesRadius`](#torch-radius)     |     `20`      |
|    [`torchesFallOff`](#torch-falloff)    |     `100`     |
|          [`command`](#command)           |    `torch`    |
|   [`defaultKeybind`](#default-keybind)   |    *None*     |
|         [`defaults`](#defaults)          |  *See Below*  |
|             [`peds`](#peds)              |  *See Below*  |
|           [`mppeds`](#mp-peds)           |  *See Below*  |

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
      }
    ]
  }
}
```
