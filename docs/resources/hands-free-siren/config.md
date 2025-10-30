---
sidebar_position: 20
---

# Configuration

HFS uses a `config.json` file to store config values. Invalid JSON syntax in this file will cause errors.

## Value List

|                       Name                       | Default Value |
|:------------------------------------------------:|:-------------:|
|             [`Horn`](#horn-settings)             |  *See Below*  |
| [`UseServerSideSirens`](#siren-source-selection) |    `false`    |
|      [`BaseGameSirens`](#base-game-sirens)       |  *See Below*  |
|    [`ServerSideSirens`](#server-sided-sirens)    |  *See Below*  |

## Values Explained

### Horn Settings
#### `Horn`
This config option determines which type of horn (either Car Horn or Airhorn) will be used for the respective horn natures.

The horn natures are as follows:

| Horn Nature  | Description                                                                |
|--------------|----------------------------------------------------------------------------|
| `Normal`     | The horn to use when emergency lighting is not active, and horn is active. |
| `ToneChange` | The horn to use when changing between siren tones.                         |
| `Alert`      | The horn to use when emergency lighting is active, and horn is activated.  |

The value horn types are as follows:

| Horn Type | Description              |
|-----------|--------------------------|
| `CarHorn` | A standard vehicle horn. |
| `AirHorn` | An airhorn.              |

The default configuration is as follows:
```json
"Horn": {
  "Normal": "CarHorn",
  "ToneChange": "CarHorn",
  "Alert": "AirHorn"
},
```

Using the above configuration, when no lights are active and when changing siren tone, a normal car horn is used.  
Only when the lights are active and the horn is held down is an air horn applied.

:::tip
To make emergency vehicles always have an air horn or car horn, change all the values to be the same.
:::

### Siren Source Selection
#### `UseServerSideSirens`
This config option determines if sirens should be sourced from the base-game/the client, or from the server.

When this value is `false`, the [`ServerSideSirens`](#server-sided-sirens) section of the config is ignored.  
When this value is `true`, the [`BaseGameSirens`](#base-game-sirens) section of the config is ignored.

The default value is `false`.

### Base Game Sirens
#### `BaseGameSirens`
This config option contains all the various horn and siren settings for when [`UseServerSideSirens`](#siren-source-selection) is `false`.  
This option can be broken down into four main components:

| Component          | Explanation                                                                          |
|--------------------|--------------------------------------------------------------------------------------|
| `Sirens`           | Default siren sounds for all vehicles, where an override does not apply.             |
| `CarHorn`          | Default car horn sound for all vehicles, where an override does not apply.           |
| `AirHorn`          | Default air horn sound for all vehicles, where an override does not apply.           |
| `VehicleOverrides` | A list of overrides that replace the default sirens and horns for specific vehicles. |

##### Sirens
The sirens component is a list of base game siren sounds.  
There is no limit on the number of sirens that can be listed here, and all will be cycled through when changing siren tones in-game.

Below is a list of all possible siren sounds:
```text
VEHICLES_HORNS_SIREN_1
VEHICLES_HORNS_SIREN_2
VEHICLES_HORNS_POLICE_WARNING
VEHICLES_HORNS_AMBULANCE_WARNING
RESIDENT_VEHICLES_SIREN_WAIL_01
RESIDENT_VEHICLES_SIREN_QUICK_01
RESIDENT_VEHICLES_SIREN_WAIL_02
RESIDENT_VEHICLES_SIREN_QUICK_02
RESIDENT_VEHICLES_SIREN_WAIL_03
RESIDENT_VEHICLES_SIREN_QUICK_03
```

##### Car Horn
The car horn component is a horn sound name that is used for vehicles when a normal car horn is required.

Below is a list of possible horn sounds:

```text
BULLOCK_HORN
BURRITO_HORN
BUS_HORN
CABBY_HORN
CADDY_HORN
CAVALCADE_HORN
CAVALCADE_MULTI_HORN
CHAVOS_HORN
CHAVOS_MULTI_HORN
COGNOSCENTI_HORN
COGNOSCIENTI_MULTI_HORN
COP_HORN
COQUETTE_MULTI_HORN
DESPERADO_HORN
DF8-90_HORN
DF890_MULTI_HORN
DILETTANTE_HORN
DUKES_HORN
E109_HORN
E109_MULTI_HORN
EMPEROR_HORN
ESPERANTO_HORN
ESPERANTO_MULTI_HORN
EXT_HORN
EXT_MUTLI_HORN
FACTION_MULTI_HORN
FAGGIO-Z_HORN
FBI_MULTI_HORN
FELTZER_MULTI_HORN
MUSICAL_HORN_PATTERN_1
MUSICAL_HORN_PATTERN_2
MUSICAL_HORN_PATTERN_3
MUSICAL_HORN_PATTERN_4
MUSICAL_HORN_PATTERN_5
CLOWN_VAN_HORN
SIRENS_AIRHORN
ADMIRAL_HORN
ADMIRAL_MULTI_HORN
AMBULANCE_HORN
BANSHEE_MULTI_HORN
BARONY_HORN
BENSON_HORN
BIFF_HORN
BLISTA_HORN
BOBBER_HORN
BOBBER_HORN_MT
BOBCAT_HORN
BOBCAT_MULTI_HORN
BOXVILLE_HORN
BUCCANEER_HORN
FEROCI_HORN
FEROCI_MULTI_HORN
FIRE_HORN
FLATBED_HORN
FORKLIFT_HORN
FORTUNE_HORN
FUTO_HORN
HABANERO_HORN
HAKUMAI_HORN
HELLFURY_HORN_MT
INFERNUS_HORN
INFERNUS_MULTI_HORN
INGOT_HORN
INTRUDER_MULTI_HORN
LANDSTALKER_HORN
LANDSTALKER_MULTI_HORN
LOKUS_HORN
LOKUS_MULTI_HORN
MAJESTIC_HORN
MANARA_HORN
MANARA_MULTI_HORN
MARBELLA_HORN
MERIT_HORN
MERIT_MULTI_HORN
MINIVAN_HORN
MOONBEAM_HORN
MR_TASTY_HORN
MULE_HORN
NRG_HORN
NRG_HORN_MT
ORACLE_HORN
ORACLE_MULTI_HORN
PACKER_HORN
PATRIOT_MULTI_HORN
PCJ_HORN_MT
PEYOTE_HORN
PEYOTE_MULTI_HORN
PHANTOM_HORN
PINNACLE_HORN
PINNACLE_MULTI_HORN
PMP600_MULTI_HORN
PMP_600_HORN
POLPAT_MULTI_HORN
PONY_HORN
PREMIER_HORN
PREMIER_MULTI_HORN
PRESIDENTE_HORN
PRESIDENTE_MULTI_HORN
PREVION_HORN
PRIMO_HORN
PRIMO_MULTI_HORN
RANCHER_HORN
RANCHER_MULTI_HORN
REBLA_HORN
ROMERO_HORN
ROMERO_MULTI_HORN
ROM_HORN
ROM_MULTI_HORN
RUINER_HORN
VEHICLES_HORNS_CAR_HORN_MED_10
VEHICLES_HORNS_CAR_HORN_MED_2
VEHICLES_HORNS_CAR_HORN_MED_3
VEHICLES_HORNS_CAR_HORN_MED_4
VEHICLES_HORNS_CAR_HORN_MED_5
VEHICLES_HORNS_CAR_HORN_MED_6
VEHICLES_HORNS_CAR_HORN_MED_7
VEHICLES_HORNS_CAR_HORN_MED_8
VEHICLES_HORNS_CAR_HORN_MED_9
VEHICLES_HORNS_TRAWLER_HORN
VEHICLES_HORNS_TUG_HORN
VEHICLES_TUG_HORN_PITCHED
VIGARO_HORN
VIGERO2_BROKEN_HORN
VIGERO2_BROKEN_MULTITRACK
VIGERO2_BROKEN_PITCH_1
VIGERO2_BROKEN_PITCH_2
VINCENT_HORN
VINCENT_MULTI_HORN
VIRGO_HORN
VIRGO_MULTI_HORN
VOODOO_HORN
VOODOO_MULTI_HORN
```

:::warning
The above horn names are extracted from GTA's files and may be missing entries; they have also not been extensively tested.  
Please report any broken/inaccurate entries so that we can remove them.
:::

##### Air Horn
The air horn component is a horn sound name that is used for vehicles when an air horn is required.

Refer to the list above under ["Car Horn"](#car-horn) for a list of possible car horns.  
The default air horn is `SIRENS_AIRHORN`.

##### Vehicle Overrides
The vehicle override component is the section that allows server owners/developers to add overrides for specific vehicles or groups of vehicles.  
The `VehicleOverrides` section is a list of individual override entries; an override entry consists of the following:

| Component   | Explanation                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------|
| `ModelName` | The name of the vehicle to apply this override - also supports wildcards, see below for more info. |
| `Sirens`    | Siren sounds to use for matching vehicles.                                                         |
| `CarHorn`   | Car horn sound to use for matching vehicles.                                                       |
| `AirHorn`   | Air horn sound to use for matching vehicles.                                                       |

:::tip
`ModelName` supports wildcards, meaning one entry can apply to multiple vehicles.

For example, if your fire department vehicles were named something like: `fd1`, `fd2`, `fd3`, etc., you could use a wildcard to apply the same siren to FD vehicles. This would be archived by having `ModeName` entry set to `fd*`. The `fd` being the prefix, then the `*` indicating a wildcard.

:::warning
The wildcard system is simplistic, and operates on a first come, first served basis.  
For example, if your vehicle was named `fd21`, and you have two entries: `fd*` and `fd2*` - `fd21` would match to whichever override is *first* in the list of overrides.
:::


Refer to the list above under ["Sirens"](#sirens) for a list of possible sirens.
Refer to the list above under ["Car Horn"](#car-horn) for a list of possible car and air horns.

Where `CarHorn` or `AirHorn` is left blank (`""`), the override will inherit these values from `BaseGameSirens`.

### Server-Sided Sirens
#### `ServerSideSirens`
This config option contains all the various horn and siren settings for when [`UseServerSideSirens`](#siren-source-selection) is `true`.  
This option can be broken down into four main components:

| Component          | Explanation                                                                          |
|--------------------|--------------------------------------------------------------------------------------|
| `Sirens`           | Default siren sounds for all vehicles, where an override does not apply.             |
| `CarHorn`          | Default car horn sound for all vehicles, where an override does not apply.           |
| `AirHorn`          | Default air horn sound for all vehicles, where an override does not apply.           |
| `VehicleOverrides` | A list of overrides that replace the default sirens and horns for specific vehicles. |

Below are a few helpful resources for setting up/testing server-sided resources:
- [Server Side Audio Tester](https://github.com/TrevorBarns/Server-Side-Audio-Tester) by [TrevorBarns](https://github.com/TrevorBarns)
- [Server Sided Sounds and Sirens](https://github.com/fk-1997/Server-Sided-Sounds-and-Sirens) by [kwok](https://forum.cfx.re/u/kwok) ([fk-1997](https://github.com/fk-1997))

To facilitate the use of server-sided sirens, server-sided audio entries are used in numerous places in the config.  
Audio entries can be broken down into three components:

| Component   | Explanation                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| `BankName`  | The matching [Script Audio Bank](https://docs.fivem.net/natives/?_0x2F844A8B08D76685) name. |
| `SetName`   | The matching sound set name.                                                                |
| `AudioName` | The name of the sound.                                                                      |

Using an example from the Server Sided Sounds and Sirens resource [linked above](#server-sided-sirens), an entry might look like this:

```json
{
  "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
  "SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
  "AudioName": "oiss_ssa_vehaud_bcso_old_siren_adam"
}
```

##### Sirens
The sirens component is a list of server-sided audio entries tied to siren sounds.  
There is no limit on the number of sirens that can be listed here, and all will be cycled through when changing siren tones in-game.

Using an example from the Server Sided Sounds and Sirens resource [linked above](#server-sided-sirens), a siren list might look like this:

```json
"Sirens": [
  {
	"BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
	"SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
	"AudioName": "oiss_ssa_vehaud_bcso_old_siren_adam"
  },
  {
	"BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
	"SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
	"AudioName": "oiss_ssa_vehaud_bcso_old_siren_boy"
  },
  {
	"BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
	"SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
	"AudioName": "oiss_ssa_vehaud_bcso_old_siren_charles"
  }
]
```

##### Car Horn
The car horn component is a horn sound name that is used for vehicles when a normal car horn is required.

Refer to the list under ["Car Horn"](#car-horn) for a list of possible car horns.  

:::warning
`CarHorn` does not support server-sided audio entries and should be provided with a valid base-game horn name.
:::

##### Air Horn
The air horn component is a horn sound name that is used for vehicles when an air horn is required.  
A server-sided audio entry should be provided.

Using an example from the Server Sided Sounds and Sirens resource [linked above](#server-sided-sirens), an air horn entry might look like this:

```json
"AirHorn": {
  "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
  "SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
  "AudioName": "oiss_ssa_vehaud_bcso_old_horn"
}
```

:::tip
The `AirHorn` option also supports base-game horns; to use a base-game horn, leave `BankName` and `SetName` blank (`""`), then entry the base-game horn name in `AudioName`.
:::

##### Vehicle Overrides
The vehicle override component is the section that allows server owners/developers to add overrides for specific vehicles or groups of vehicles.  
The `VehicleOverrides` section is a list of individual override entries; an override entry consists of the following:

| Component   | Explanation                                                                                                             |
|-------------|-------------------------------------------------------------------------------------------------------------------------|
| `ModelName` | The name of the vehicle to apply this override - also supports wildcards, [see here](#vehicle-overrides) for more info. |
| `Sirens`    | List of audio entries to use for matching vehicles.                                                                     |
| `CarHorn`   | Car horn sound to use for matching vehicles.                                                                            |
| `AirHorn`   | Audio entry to use for matching vehicles - also supports base-game horns, see below for more info.                      |


Refer to the list above under ["Car Horn"](#car-horn) for a list of possible car and air horns.  
Where `CarHorn`  is left blank (`""`), the override will inherit these values from `ServerSideSirens`'s `CarHorn` entry.

A base-game horn can also be used for `AirHorn`, see the tip [here](#air-horn-1) for more info.

## Default Config File
```json showLineNumbers title="config.json"
{
  "Horn": {
    "Normal": "CarHorn",
    "ToneChange": "CarHorn",
    "Alert": "AirHorn"
  },

  "UseServerSideSirens": false,

  "BaseGameSirens": {
    "Sirens": [
      "RESIDENT_VEHICLES_SIREN_WAIL_03",
      "RESIDENT_VEHICLES_SIREN_QUICK_03",
      "VEHICLES_HORNS_POLICE_WARNING"
    ],
    "CarHorn": "RANCHER_MULTI_HORN",
    "AirHorn": "SIRENS_AIRHORN",

    "VehicleOverrides": [
      {
        "ModelName": "fire*",
        "Sirens": [
          "RESIDENT_VEHICLES_SIREN_FIRETRUCK_WAIL_01",
          "RESIDENT_VEHICLES_SIREN_FIRETRUCK_QUICK_01",
          "VEHICLES_HORNS_AMBULANCE_WARNING"
        ],
        "CarHorn": "FLATBED_HORN",
        "AirHorn": "VEHICLES_HORNS_FIRETRUCK_WARNING"
      },

      {
        "ModelName": "ambulance",
        "Sirens": [
          "RESIDENT_VEHICLES_SIREN_WAIL_01",
          "RESIDENT_VEHICLES_SIREN_QUICK_01",
          "VEHICLES_HORNS_AMBULANCE_WARNING"
        ],
        "CarHorn": "",
        "AirHorn": ""
      }
    ]
  }
}
```

## Complete Server-Sided Siren Example
Below is a complete example of what server-sided siren configuration might look like.  
The below example is based off the Server Sided Sounds and Sirens resource [linked above](#server-sided-sirens).

:::note
Only the `ServerSideSirens` entry is included below - this is not a copy/paste ready config.
:::

```json showLineNumbers
"ServerSideSirens": {
    "Sirens": [
      {
        "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
        "SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
        "AudioName": "oiss_ssa_vehaud_bcso_old_siren_adam"
      },
      {
        "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
        "SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
        "AudioName": "oiss_ssa_vehaud_bcso_old_siren_boy"
      },
      {
        "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
        "SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
        "AudioName": "oiss_ssa_vehaud_bcso_old_siren_charles"
      }
    ],
    "CarHorn": "RANCHER_MULTI_HORN",
    "AirHorn": {
      "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD",
      "SetName": "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET",
      "AudioName": "oiss_ssa_vehaud_bcso_old_horn"
    },

    "VehicleOverrides": [
      {
        "ModelName": "fire*",
        "Sirens": [
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSFD_OLD",
            "SetName": "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_lsfd_old_siren_adam"
          },
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSFD_OLD",
            "SetName": "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_lsfd_old_siren_boy"
          },
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSFD_OLD",
            "SetName": "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_lsfd_old_siren_charles"
          }
        ],
        "CarHorn": "FLATBED_HORN",
        "AirHorn": {
          "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSFD_OLD",
          "SetName": "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET",
          "AudioName": "oiss_ssa_vehaud_lsfd_old_horn"
        }
      },

      {
        "ModelName": "ambulance",
        "Sirens": [
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_OLD",
            "SetName": "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_sanfire_old_siren_adam"
          },
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_OLD",
            "SetName": "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_sanfire_old_siren_boy"
          },
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_OLD",
            "SetName": "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_sanfire_old_siren_charles"
          },
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_OLD",
            "SetName": "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_sanfire_old_siren_david"
          },
          {
            "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_OLD",
            "SetName": "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET",
            "AudioName": "oiss_ssa_vehaud_sanfire_old_siren_edward"
          }
        ],
        "CarHorn": "",
        "AirHorn": {
          "BankName": "DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_OLD",
          "SetName": "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET",
          "AudioName": "oiss_ssa_vehaud_sanfire_old_horn"
        }
      }
    ]
  }
```
