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

### Get Pager Turned Off
Use this export to check whether a player's pager is currently turned off.

#### Export Name
```
getPagerTurnedOff
```

#### Parameters
- `player` - `string`
	- The player's server ID as a string.

#### Example
```lua
local isTurnedOff = exports["inferno-pager-reborn"]:getPagerTurnedOff(player)
```

#### Return Value
`bool`
	- Returns `false` if the player is invalid, not found, or has no pager.

:::tip
The player controls whether their pager is turned off. To turn it off, use the [`setPagerTurnedOff`](client#set-pager-turned-off) client export.  
Alternatively, use the [`givePager`](#give-pager) and [`takePager`](#take-pager) server exports to give or take a pager from a player.
:::

***

## Role Management

### Get Player Roles
Use this export to get the role names currently assigned to a player.

#### Export Name
```
getPlayerRoles
```

#### Parameters
- `player` - `string`
	- The player's server ID as a string.

#### Example
```lua
local roles = exports["inferno-pager-reborn"]:getPlayerRoles(player)
```

#### Return Value
`table`
	- A list of role names (`string`).
	- Returns an empty list if the player is invalid or not found.

### Set Player Roles
Use this export to replace a player's role assignments.

#### Export Name
```
setPlayerRoles
```

#### Parameters
- `player` - `string`
	- The player's server ID as a string.
- `roles` - `table`
	- A list of role names (`string`) to assign to the player.
	- Every role name must already exist in the permissions file.

:::tip
To remove all roles, pass an empty table `{}` for `roles`.
:::

#### Example
```lua
exports["inferno-pager-reborn"]:setPlayerRoles(player, {"Dispatch", "EMS"})
```

#### Return Value
`void`

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
	- `addresses` - `table` (optional)
		- List of capcodes/addresses.
	- `players` - `table` (optional)
		- Optional list of target player server IDs.
	- `nature` - `string | number`
		- [Page nature](../data.mdx#page-nature).
		- Accepts lowercase names (`emergency`, `nonemergency`, `administrative`) or enum values (`0`-`2`).
	- `body` - `string`
		- Page message body text.

At least one of `addresses` or `players` must be provided.

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

### Create New Page Around Position
Use this export to create a new page for players with pagers within range of a position.

#### Export Name
```
newPagePlayersAround
```

#### Parameters
- `request` - `table`
	- `nature` - `string | number`
		- [Page nature](../data.mdx#page-nature).
		- Accepts lowercase names (`emergency`, `nonemergency`, `administrative`) or enum values (`0`-`2`).
	- `body` - `string`
		- Page message body text.
	- `addresses` - `table` (ignored)
		- This export rebuilds targets from nearby players.
	- `players` - `table` (ignored)
		- This export rebuilds targets from nearby players.
- `position` - `vector3`
	- Position to measure distance from.
- `radius` - `number | string`
	- Search radius as a number (or string parseable to a float).
	- If less than `0` or greater than `9999`, it is treated as `9999`.

#### Example
```lua
local success = exports["inferno-pager-reborn"]:newPagePlayersAround({
    ["nature"] = "emergency",
    ["body"] = "Stage for welfare check at 101 Main St."
}, vector3(101.0, 202.0, 25.0), 250)
```

#### Return Value
`bool`
	- Returns `false` for invalid input, invalid page data, or if no players with pagers are found within range.

***

## Node Subscriptions

### Subscribe To Nodes
Use this export to subscribe your resource to pageable nodes.

#### Export Name
```
subscribeToNodes
```

#### Parameters
- `subscriptions` - `table`
	- A object where each key is a node address (`string`, for example `emg.fire.bc`).
	- Each value is a list/set of custom strings associated with that node subscription.
- `eventName` - `string`
	- Server event name to trigger for matching node subscription activity.
	- Must not be empty.

#### Example
```lua
exports["inferno-pager-reborn"]:subscribeToNodes({
    ["emg.fire.bc"] = {"district-1", "priority-high"},
    ["emg.ems.bc"] = {"district-1"}
}, "my-resource:server:onNodePage")

AddEventHandler("my-resource:server:onNodePage", function(customStrings, page)
	print(json.encode(customStrings)) -- E.g.: ["district-1", "priority-high"]
	print(page.body) -- E.g.: "This is a test page."
end)
```

#### Return Value
`void`
	- This export does not return success/failure data. It only attempts to register subscriptions.

#### Event Parameters
When a subscribed node matches, the provided `eventName` is triggered with:
- `customStrings` - `table`
	- The custom string values configured for the matching node subscription.
- `page` - [`Page Message`](../data.mdx#page-message)
	- The page payload for the triggered subscription.

:::tip
Subscriptions are only added for nodes that exist and are pageable. Duplicate subscriptions are ignored.
:::
