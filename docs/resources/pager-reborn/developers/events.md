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
