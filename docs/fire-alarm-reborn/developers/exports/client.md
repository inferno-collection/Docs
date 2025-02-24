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

***

## Sprinkler Valve

### Interact With Sprinkler Valve At Player Position
Use this export to open or close the Sprinkler Valve closest to the player.

#### Export Name
```
sprinklerValveInteraction
```

#### Return Value
`void`

## Miscellaneous

### Disable All Interactions
Use this export to disable or enable all Interactions.  
For example, you might disable all interactions if the player is handcuffed or dead.

#### Export Name
```
disableInteractions
```

#### Parameters

- `value` - `bool`
	- `true` to disable all interactions, `false` to enable all interactions.

#### Return Value
`void`
