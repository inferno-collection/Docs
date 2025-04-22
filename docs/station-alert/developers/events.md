---
sidebar_position: 20
---

# Events

This pages documents the events that can be listened for in SA.

Inside the SA resource there is a directory called `editable`, then `editable/server`, and within that there is a file called `events.lua` (`editable/server/events.lua`).
That file documents all the available events for SA, as well as their parameters.
This page serves to compliment that file.

:::note
This page does not cover events inside of `editable/client/targeting.lua`, [see here](../config.md#manual-interactions-targetthird-eye-resource-support) for information on those events.
:::

Be sure to consult the [Data Structures](data.mdx) page to understand the structure of the parameters.

## Alerts

### Alert Activation - **Server**
Fired when an Alert is activated.

#### Event Name
```
Inferno-Collection:Server:StationAlert:Editable:NewAlert
```
#### Parameters

- `alert` - [`Alert`](data.mdx#alert)
	- The Alert that was activated.

***

## Miscellaneous

### Menu Opened - **Client**
Fired when any SA Menu is opened.

#### Event Name
```
Inferno-Collection:Client:StationAlert:MenuOpened
```

### Menu Closed - **Client**
Fired when any SA Menu is closed.

#### Event Name
```
Inferno-Collection:Client:StationAlert:MenuClosed
```
