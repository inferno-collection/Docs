---
sidebar_position: 0
---

# Flare Types
This page explains how to edit the `flare-types.json` file in IF.

## Structure
Each entry contains two parameters:

- `Name`
  - The human-readable name that will display to the player.
- `ModelName`
  - The name of the prop model to use for the IFlare. 

## Replacing an existing type
If, for example, you replaced the [textures](textures.md) on one or more flare types, you can then come to this file and change the `name` to match.

:::warning
Do not rename the model, either here or the actual model file, unless you know what you are doing (this means you've updated the `ytyp` file!).  
The model name is not shown anywhere in-game, and can be kept the same even if the textures have been replaced and the `name` changed.
:::

## Default Flare Types

```json showLineNumbers
[
  {
    "Name": "IFlare w/ Cone",
    "ModelName": "prop_ic_flare_cone"
  },
  {
    "Name": "IFlare w/ Cone (DUI)",
    "ModelName": "prop_ic_flare_cone_dui"
  },
  {
    "Name": "IFlare w/ Cone (FIRE)",
    "ModelName": "prop_ic_flare_cone_fire"
  },
  {
    "Name": "IFlare w/ Cone (LEO)",
    "ModelName": "prop_ic_flare_cone_leo"
  },
  {
    "Name": "IFlare w/ Cone (TOW)",
    "ModelName": "prop_ic_flare_cone_tow"
  }
]
```
