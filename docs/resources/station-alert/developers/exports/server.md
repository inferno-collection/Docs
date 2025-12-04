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

### Get All Locations by Group
Use this export to get all Station Locations sorted by Group.

#### Export Name
```
getAllLocationsByGroup
```

#### Parameters
*None*

#### Example
```lua
local value = exports["inferno-station-alert"]:getAllLocationsByGroup()
```

#### Return Value
`Dictionary`\<`string`, [`Location`](../data.mdx#station-location)[]\>
	- Where the `string` is the name of a group

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
Use this export to create a new Alert sent to one or more specific Station Locations.

#### Export Name
```
newAlert
```

#### Parameters

* `alert` - `table`
	* `locations` - `table`
		* Key: Location Name (`string`)
		* Value: Door Names (`table`)
			* Each entry is a door name (`string`)
			* If an empty table is provided, all doors will open
            	* E.g. `[]`
			* If a table with a single empty string is provided, **no doors will open**
            	* E.g. `['']`
          
	* `message` - `string`
		* Optional Text-to-Speech message
		* Requires [Voice Turnout Addon](../../config.md#voice-turnout-addon-values-explained)
      
	* `displayMessage` - `string`
		* Optional message for call screens
		* Defaults to `message`
      
	* `unitColors` - `table`
		* Optional indicator colors

	* `tone` - `string`
		* Optional
		* Applies a single tone to all locations, *unless a toneset entry overrides it*
		* If omitted, a default tone is used

	* `toneset` - `table`
		* Allows for one or more tones per location
		* Example:

		  ```lua
		  ["toneset"] = {
			  ["Station One"] = {"Tone One", "Tone Two"},
			  ["Station Two"] = {"Tone Three"},
		  }
		  ```

    * *`tones` - `table` (obsolete)*
        :::warning
        `tones` is obsolete, please use `toneset` instead.
        :::
        * One tone per location

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
This export automatically finds the nearest Station Location within a radius and sends an alert there.

#### Export Name
```
newAlertNearestStation
```

#### Parameters

* `position` - `vector3`
* `radius`
	* Search radius in meters
	* `-1` = unlimited
* `alert` - `table`
	* `message`, `displayMessage`, `unitColors` (same as [`newAlert`](#create-new-alert))
    * `tone` - `string`
        * Optional
        * Single tone applied to the selected station

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
This export automatically finds the nearest Station Location with players nearby.  
Useful for finding the nearest crewed fire station.

#### Export Name
```
newAlertNearestStationWithPlayers
```

#### Parameters

* `position` - `vector3`
* `alert` - `table`
	* `message`, `displayMessage`, `unitColors` (same as [`newAlert`](#create-new-alert))
	* `tone` - `string`
		* Optional
		* Single tone applied to the selected station

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

### Create New Alert For Group of Stations
Sends an alert to all stations in a group, [see here](../tool.md#adding-groups) for info on how to assign groups.

#### Export Name
```
newGroupAlert
```

#### Parameters
* `group` - `string`
* `alert` - `table`
	* `message`, `displayMessage`, `unitColors` (same as [`newAlert`](#create-new-alert))
	* `tone` - `string`
		* Optional
		* Acts as a default for the entire group
		* Only applies to locations not already defined in toneset
	* `toneset` - `table`
		* One tone per location
		* Multiple tones per location
		* Accepts a partial definition
          * Missing entries will fall back to `tone` or default tone

#### Example
```lua
local success = exports["inferno-station-alert"]:newGroupAlert("Some Group Name", {
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
