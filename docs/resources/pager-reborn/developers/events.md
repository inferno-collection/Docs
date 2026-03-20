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

:::warning Work in Progress
This event is a work in progress and may change without notice.
:::

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
		- Coordinates payload.
        - NOTE: Currently unused
	- `nature` - `string` (optional)
		- [Page Nature](data.mdx#page-nature).
        - Defaults to `emergency`.
	- `message` - `string` (optional)
		- Explicit page body text.
	- `description` - `string` (optional)
		- Used for body text if `message` is not provided.
	- `location` - `string` (optional)
		- Used for body text if `message` is not provided.
	- `type` - `string` (optional)
		- Extra call type value from source data.
        - NOTE: Currently unused
	- `extra` - `table` (optional)
		- Additional passthrough data for custom usage.
        - NOTE: Currently unused

At least one target (`addresses` or `players`) must currently be provided to create a page.

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
	addresses = {"emg.fire.bc"},
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
