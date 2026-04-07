---
sidebar_position: 10
---

# Events

This page documents the events that can be listened for in Pager Reborn.

Inside the Pager Reborn resource there is a directory called `editable`, then `editable/server`, and within that there is a file called `events.lua` (`editable/server/events.lua`).
That file documents all the available events for Pager Reborn, as well as their parameters.
This page serves to complement that file.

## Pages

### New Page Created - **Server**
Fired when a new page is created.

#### Event Name
```
Inferno-Collection:Server:PagerReborn:Editable:NewPage
```

#### Parameters

- `addresses` - `table`
	- The addresses/capcodes this page was sent to.
- `players` - `table`
	- The players that received the page.
- `message` - `string`
	- The page message body.

***

### Create Page - **Server**
Allows other resources to request that Pager Reborn create a new page.

#### Event Name
```
Inferno-Collection:Server:PagerReborn:Editable:CreatePage
```

#### Parameters

- `data` - `table`
	- Request payload used to build the page.
	- `addresses` - `table` (optional)
		- Capcodes/addresses to send the page to.
	- `players` - `table` (optional)
		- Player IDs to send the page to.
	- `coords` - `table` (optional)
		- Coordinates used for nearby-player paging.
		- Supports numeric arrays such as `{ x, y, z }`.
	- `pos` - `table` (optional)
		- Alias for `coords`.
	- `radius` - `number | string` (optional)
		- Radius for nearby-player paging when `coords`/`pos` is provided.
		- Defaults to `50`.
	- `nature` - `string | number` (optional)
		- [Page Nature](data.mdx#page-nature).
		- Accepts lowercase names (`emergency`, `nonemergency`, `administrative`) or enum values (`0`-`2`).
		- Defaults to `emergency`.
	- `message` - `string` (optional)
		- Explicit page body text. If set, this is always used.
	- `description` - `string` (optional)
		- Used to build body text when `message` is not provided.
	- `location` - `string` (optional)
		- Used to build body text when `message` is not provided.
	- `type` - `string` (optional)
		- Extra call type value from source data.
		- NOTE: Currently unused in the default implementation.
	- `extra` - `table` (optional)
		- Additional passthrough data for custom usage.
		- NOTE: Currently unused in the default implementation.

Body generation order:

1. `message`
2. `description` + `location` (joined with `, `), or whichever one exists
3. `"Fire Call!"`

Target resolution order:

1. If `addresses` or `players` are provided, Pager Reborn calls [`newPage`](exports/server.md#create-new-page).
2. Otherwise, if `coords`/`pos` is provided, Pager Reborn calls [`newPagePlayersAround`](exports/server.md#create-new-page-around-position) with `radius`.

At least one target input (`addresses`, `players`, `coords`, or `pos`) must be provided.

#### Example One
```lua
TriggerEvent("Inferno-Collection:Server:PagerReborn:Editable:CreatePage", {
	addresses = {"emg.fire.bc"},
	message = "Station 7, reported house fire, 123 Main St."
})
```

#### Example Two
```lua
TriggerEvent("Inferno-Collection:Server:PagerReborn:Editable:CreatePage", {
	players = {1},
	nature = "administrative",
	message = "Gear ready for collection at Fire Station 7"
})
```

#### Example Three
```lua
TriggerEvent("Inferno-Collection:Server:PagerReborn:Editable:CreatePage", {
	coords = {101.0, 202.0, 25.0},
	radius = 250,
	nature = "emergency",
	description = "Structure Fire",
	location = "123 Main St."
})
```

***

### Player Capcodes Changed - **Server**
Fired when a player's capcodes/addresses are changed.

#### Event Name
```
Inferno-Collection:Server:PagerReborn:Editable:PlayerCapcodesChanged
```

#### Parameters

- `player` - `number`
	- The player's server ID.
- `addresses` - `table`
	- The updated addresses/capcodes for that player.

***

## Miscellaneous

### Cheater Detected - **Server**
Fired when Pager Reborn flags a suspected cheater.

#### Event Name
```
Inferno-Collection:Server:PagerReborn:Editable:Cheater
```

#### Parameters

- `cheater` - `number`
	- The suspected cheater's server ID.
- `context` - `table`
	- Additional detection context for logging or moderation handling.
