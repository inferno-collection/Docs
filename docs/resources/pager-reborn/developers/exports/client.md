---
sidebar_position: 0
---

# Client Exports

This page documents the client exports that can be used with Pager Reborn.

All the exports listed below are **client** exports, not server exports.  
For server exports, see [here](server.md).

## Pager State

### Has Pager
Use this export to check if the local player currently has a pager.

#### Export Name
```
hasPager
```

#### Parameters
*None*

#### Example
```lua
local hasPager = exports["inferno-pager-reborn"]:hasPager()
```

#### Return Value
`bool`

### Get Pager Turned Off
Use this export to check whether the local player's pager is currently turned off.

#### Export Name
```
getPagerTurnedOff
```

#### Parameters
*None*

#### Example
```lua
local isTurnedOff = exports["inferno-pager-reborn"]:getPagerTurnedOff()
```

#### Return Value
`bool`

### Set Pager Turned Off
Use this export to set whether the local player's pager is turned off.

#### Export Name
```
setPagerTurnedOff
```

#### Parameters
- `turnedOff` - `bool`

#### Example
```lua
exports["inferno-pager-reborn"]:setPagerTurnedOff(true)
```

#### Return Value
`void`

### Toggle Pager
Use this export to toggle the local player's Pager UI.

#### Export Name
```
togglePager
```

#### Parameters
*None*

#### Example
```lua
exports["inferno-pager-reborn"]:togglePager()
```

#### Return Value
`void`

***

## Paging

### Create New Local Page
Use this export to create a local page on the client.

#### Export Name
```
newLocalPage
```

#### Parameters
- `request` - `table`
	- `nature` - `string | number`
		- Page nature.
		- Accepts lowercase names (`emergency`, `nonemergency`, `administrative`) or enum values (`0`-`2`).
	- `body` - `string`
		- Page message body text.

#### Example
```lua
local success = exports["inferno-pager-reborn"]:newLocalPage({
    ["nature"] = "administrative",
    ["body"] = "Training drill at Station 1."
})
```

#### Return Value
`bool`
