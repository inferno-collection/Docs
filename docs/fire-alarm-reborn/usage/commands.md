---
sidebar_position: 5
---

# Commands

This page documents the commands for FAR.

FAR has a single command that supports multiple parameters.  
This means all commands start with the same prefix: `/firealarm`.

:::note
Depending on how the [Ace Permissions](../config.md#permissions) are set up, not all the below options will be available to all players.
:::

## FAR Tool
### `/firealarm tool`
#### Required Ace Permission: [`Tool`](../config#use-far-tool)

Learn how to use the FAR Tool by viewing the dedicated [page](../developers/tool.md).

***

## Draft Fire Alarms Path
### `/firealarm path`
#### Required Ace Permission: Console Only

This command will output to the server console where on the server Draft Fire Alarms are being saved.

:::note
This command only works from the server console, and cannot be used from the client.
:::

***

## Fire Alarm Activations Log
### `/firealarm activations`
#### Required Ace Permission: Console Only

This command will output to the server console a list of all players who have triggered Fire Alarms since the last server restart.

:::note
This command only works from the server console, and cannot be used from the client.
:::

***

## Trigger Random Alarm
### `/firealarm randomalarm`
#### Required Ace Permission: [`RandomAlarms`](../config#trigger-random-alarms-via-command)

This command will trigger a Random Fire Alarm somewhere on the map.

***

## Reset all Alarm Systems
### `/firealarm resetall`
#### Required Ace Permission: [`ResetAlarm`](../config#reset-alarm-systems-via-command)

This command will forcefully reset all Alarm Systems.

:::warning
This is not a graceful reset: any isolations, closed Sprinkler Valves, etc. will all be reset to their default values/positions.
:::

***

## Reset last Alarm Systems
### `/firealarm resetlasr`
#### Required Ace Permission: [`ResetAlarm`](../config#reset-alarm-systems-via-command)

This command will forcefully reset the most recently triggered Alarm System.

:::warning
This is not a graceful reset: any isolations, closed Sprinkler Valves, etc. will all be reset to their default values/positions.
:::
