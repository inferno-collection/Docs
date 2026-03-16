---
sidebar_position: 10
---

# Server Exports

This page documents the server exports that can be used with Pager Reborn.

All the exports listed below are **server** exports, not client exports.  
For client exports, see [here](client.md).

## Pager Management

### Give Pager
Use this export to give a pager to a player.

#### Export Name
```
givePager
```

#### Parameters
- `player` - `string`
	- The player's server ID as a string.

#### Example
```lua
exports["inferno-pager-reborn"]:givePager(player)
```

#### Return Value
`void`

### Take Pager
Use this export to take a pager from a player.

#### Export Name
```
takePager
```

#### Parameters
- `player` - `string`
	- The player's server ID as a string.

#### Example
```lua
exports["inferno-pager-reborn"]:takePager(player)
```

#### Return Value
`void`

### Has Pager
Use this export to check if a player currently has a pager.

#### Export Name
```
hasPager
```

#### Parameters
- `player` - `string`
	- The player's server ID as a string.

#### Example
```lua
local hasPager = exports["inferno-pager-reborn"]:hasPager(player)
```

#### Return Value
`bool`

***

## Paging

### Create New Page
Use this export to create a new page.

#### Export Name
```
newPage
```

#### Parameters
- `request` - `table`
	- `addresses` - `table`
		- List of capcodes/addresses.
	- `players` - `table`
		- Optional list of target player server IDs.
	- `nature` - `string | number`
		- Page nature.
		- Accepts lowercase names (`emergency`, `nonemergency`, `administrative`) or enum values (`0`-`2`).
	- `body` - `string`
		- Page message body text.

#### Example
```lua
local success = exports["inferno-pager-reborn"]:newPage({
    ["addresses"] = {"emg.fire.bc", "emg.ems.bc"},
    ["nature"] = "administrative",
    ["body"] = "Training drill at Station 1."
})
```

#### Return Value
`bool`
