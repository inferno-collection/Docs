---
sidebar_position: 10
---

# Server Exports

This page documents the server exports that can be used with SA.

Be sure to consult the [Data Structures](../data.mdx) page to understand the structure of the parameters.

All the exports listed below are **server** exports, not client exports.

:::info
All the exports on this page required Station Alert, and do not work for Sonoran Edition.  
For more info, [see here](../../index.md#available-versions).
:::

## Locations
### Get All Locations
Use this export to get all Station Locations.

#### Export Name
```
getAllLocations
```

#### Parameters
*None*

#### Example
```lua
local value = exports["inferno-station-alert"]:getAllLocations()
```

#### Return Value
[`Location`](../data.mdx#station-location)[]

### Get All Locations With Players
Use this export to get all Station Locations with players nearby.

#### Export Name
```
getAllLocationsWithPlayers
```

#### Parameters
*None*

#### Example
```lua
local value = exports["inferno-station-alert"]:getAllLocationsWithPlayers()
```

#### Return Value
[`Location`](../data.mdx#station-location)[]

### Get All Locations With Players Nearest To Position
Use this export to get all Station Locations with players ordered by their distance to the provided position.

#### Export Name
```
getAllLocationsWithPlayersNearestToPosition
```

#### Parameters
- `position` - `vector3`
	- Position to use to search for nearest Station Location.

#### Example
```lua
local value = exports["inferno-station-alert"]getAllLocationsWithPlayersNearestToPosition(vec3(1,1,1))
```

#### Return Value
[`Location`](../data.mdx#station-location)[]

### Get Nearest Location To Position
Use this export to get the nearest Station Location to a given position within a radius.

#### Export Name
```
getNearestLocationToPosition
```

#### Parameters
- `position` - `vector3`
  - Position to use to search for nearest Station Location.
- `radius`
  - Search radius in meters. -1 for no radius.

#### Example
```lua
local value = exports["inferno-station-alert"]:getNearestLocationToPosition(vec3(1, 1, 1))
```

#### Return Value
[`Location`](../data.mdx#station-location) | `null`

### Get Nearest Location With Players To Position
Use this export to get the nearest Station Location to a given position only if it has players nearby.

#### Export Name
```
getNearestLocationWithPlayersToPosition
```

#### Parameters
- `position` - `vector3`
	- Position to use to search for nearest Station Location.

#### Example
```lua
local value = exports["inferno-station-alert"]:getNearestLocationWithPlayersToPosition(vec3(1, 1, 1))
```

#### Return Value
[`Location`](../data.mdx#station-location) | `null`

***

## Alerts
### Create New Alert
Use this export to create a new Alert.

#### Export Name
```
newAlert
```

#### Parameters
- `alert` - `table`
  - `locations` - `table`
    - Location - `object`
      - Location Name - `string`
      - Door Names - `table`
        - Door Name - `string`
      - If empty table provided, all doors will open.
      - If table with single empty string provided, no doors will open.
  - `message` - `string`
    - Optional Text-to-Speech message.
    - Requires Voice Turnout Addon, [see here](../../config.md#voice-turnout-addon-values-explained) for details.
  - `displayMessage` - `string`
    - Optional message to show on call screens.
    - If not provided, `message` will be used.
    - If neither provided, `New Alert` will show on call screens.
  - `unitColors` - `table`
    - Color Name - `string`
    - Optionally provide unit indicator colors, or no colors show.
  - `tone` - `string`
    - Optionally provide a specific tone to use, or default tone is used.
  - `tones` - `table`
    - Optionally provide a specific tone for each location.
    - If provided, `tone` is ignored.
    - Example:
      - ```lua
        ["tones"] = {
        	["Station One"] = "Tone One",
        	["Station Two"] = "Tone Two",
	    },
        ```

#### Example
```lua
local success = exports["inferno-station-alert"]:newAlert({
    ["message"] = "Some message.",
    ["locations"] = {
        ["Davis"] = {"Bay One", "Bay Three"},
    },
    ["unitColors"] = {"blue", "red"},
    ["tone"] = "Tone 1"
})
```

#### Return Value
`bool`

### Create New Alert At Nearest Station
Use this export to create a new Alert at the Station Location nearest to the provided position within a radius.

#### Export Name
```
newAlertNearestStation
```

#### Parameters
- `position` - `vector3`
  - Position to use to search for nearest Station Location.
- `radius`
	- Search radius in meters. -1 for no radius.
- `alert` - `table`
	- `message` - `string`
		- Optional Text-to-Speech message.
		- Requires Voice Turnout Addon, [see here](../../config.md#voice-turnout-addon-values-explained) for details.
    - `displayMessage` - `string`
      - Optional message to show on call screens.
      - If not provided, `message` will be used.
      - If neither provided, `New Alert` will show on call screens.
	- `unitColors` - `table`
		- Color Name - `string`
		- Optionally provide unit indicator colors, or no colors show.
	- `tone` - `string`
		- Optionally provide a specific tone to use, or default tone is used.
	- `tones` - `table`
		- Optionally provide a specific tone for each location.
		- If provided, `tone` is ignored.
          - Example:
            - ```lua
              ["tones"] = {
	          	["Station One"] = "Tone One",
	           	["Station Two"] = "Tone Two",
	          },
	          ```

#### Example
```lua
local success = exports["inferno-station-alert"]:newAlertNearestStation(vec3(1, 1, 1), 300, {
    ["message"] = "Some message.",
    ["unitColors"] = {"blue", "red"},
    ["tone"] = "Tone 1"
})
```

#### Return Value
`bool`

### Create New Alert At Nearest Station With Players
Use this export to create a new Alert at the Station Location nearest to the provided position only if it has players nearby.

#### Export Name
```
newAlertNearestStationWithPlayers
```

#### Parameters
- `position` - `vector3`
	- Position to use to search for nearest Station Location.
- `alert` - `table`
	- `message` - `string`
		- Optional Text-to-Speech message.
		- Requires Voice Turnout Addon, [see here](../../config.md#voice-turnout-addon-values-explained) for details.
	- `displayMessage` - `string`
      - Optional message to show on call screens.
      - If not provided, `message` will be used.
      - If neither provided, `New Alert` will show on call screens.
	- `unitColors` - `table`
		- Color Name - `string`
		- Optionally provide unit indicator colors, or no colors show.
	- `tone` - `string`
		- Optionally provide a specific tone to use, or default tone is used.
	- `tones` - `table`
		- Optionally provide a specific tone for each location.
		- If provided, `tone` is ignored.
			- Example:
              - ```lua
                ["tones"] = {
                  	["Station One"] = "Tone One",
                   	["Station Two"] = "Tone Two",
                },
                ```

#### Example
```lua
local success = exports["inferno-station-alert"]:newAlertNearestStationWithPlayers(vec3(1, 1, 1), {
    ["message"] = "Some message.",
    ["unitColors"] = {"blue", "red"},
    ["tone"] = "Tone 1"
})
```

#### Return Value
`bool`

### Create New Message
Use this export to send a message to one or more stations.

#### Export Name
```
newMessage
```

#### Parameters
- `message` - `table`
	- `locations` - `table`
      - Location Name - `string`
	- `message` - `string`
		- Requires Voice Turnout Addon, [see here](../../config.md#voice-turnout-addon-values-explained) for details.
	- `displayMessage` - `string`
		- Optional message to show on call screens.

#### Example
```lua
local success = exports["inferno-station-alert"]:newMessage({
    ["message"] = "Some message.",
    ["locations"] = {"Davis", "red"}
})
```

#### Return Value
`bool`

## Doors
### Update Doors
Use this export to update the door states of doors at one or more stations.

#### Export Name
```
updateDoors
```

#### Parameters
- `doors` - `table`
	- `open` - `table`
		- Location - `object`
			- Location Name - `string`
			- Door Names - `table`
				- Door Name - `string`
			- If empty table provided, all doors will open.
	- `close` - `table`
		- Location - `object`
			- Location Name - `string`
			- Door Names - `table`
				- Door Name - `string`
			- If empty table provided, all doors will close.

#### Example
```lua
local value = exports["inferno-station-alert"]:updateDoors({
    ["open"] = {
        ["Station One"] = {"Door One", "Door Three"},
    },
    ["close"] = {
        ["Station Two"] = {"Door Two", "Door Four"},
    }
})
```

#### Return Value
`bool`


### Update Door Isolations
Use this export to update the door isolation states of doors at one or more stations.

#### Export Name
```
updateDoorIsolations
```

#### Parameters
- `doors` - `table`
	- `open` - `table`
		- Location - `object`
			- Location Name - `string`
			- Door Names - `table`
				- Door Name - `string`
			- If empty table provided, all doors will lock open.
	- `close` - `table`
		- Location - `object`
			- Location Name - `string`
			- Door Names - `table`
				- Door Name - `string`
			- If empty table provided, all doors will lock closed.
	- `deisolate` - `table`
		- Location - `object`
			- Location Name - `string`
			- Door Names - `table`
				- Door Name - `string`
			- If empty table provided, all doors will deisolate.

#### Example
```lua
local value = exports["inferno-station-alert"]:updateDoorIsolations({
    ["open"] = {
        ["Station One"] = {"Bay Two"},
    },
    ["close"] = {
        ["Station One"] = {"Bay Four"},
    },
    ["deisolate"] = {
        ["Station One"] = {"Bay Three"},
    }
})
```

#### Return Value
`bool`
