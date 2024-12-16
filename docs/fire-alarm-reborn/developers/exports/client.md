---
sidebar_position: 0
---

# Client Exports

This page documents the clients exports that can be used with FAR.

Be sure to consult the [Data Structures](../data.mdx) page to understand the structure of the parameters.

All the exports listed below are **client** exports, not server exports.  
For server exports, see [here](server.md).

## Pull Stations

### Interact With Pull Station At Player Position
Use this export to trigger or reset the Pull Station closest to the player.

#### Export Name
```
pullStationInteraction
```

#### Return Value
`void`

***

## Control Panels

### Interact With Control Panel At Player Position
Use this export to open the Control Panel closest to the player.

#### Export Name
```
controlPanelInteraction
```

#### Return Value
`void`
