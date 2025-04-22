---
sidebar_position: 5
---

# Commands

This page documents the commands for SA.

SA has a single command that supports multiple parameters.  
This means all commands start with the same prefix: `/stationalert`.

:::note
Depending on how the [Ace Permissions](../config.md#permissions) are set up, not all the below options will be available to all players.
:::

## SA Tool
### `/stationalert tool`
#### Required Ace Permission: [`Tool`](../config#use-sa-tool)

Learn how to use the SA Tool by viewing the dedicated [page](../developers/tool.md).

***

## Draft Station Location Path
### `/stationalert path`
#### Required Ace Permission: Console Only

This command will output to the server console where on the server Draft Station Locations are being saved.

:::note
This command only works from the server console, and cannot be used from the client.
:::

***

## Alert Activation Log
### `/stationalert log`
#### Required Ace Permission: Console Only

This command will output to the server console a list of Alert activations since the last server restart.

:::note
This command only works from the server console, and cannot be used from the client.
:::

***

## Trigger Alert
### `/stationalert new`
#### Required Ace Permission: [`Command`](../config#create-alert-via-command)

This command opens a menu to create a new Station Alert from anywhere.

***

## Door Buzzer
### `/stationalert buzzer`
#### Required Ace Permission: [`Buzzer`](../config#use-buzzer)

This command opens the Buzzer menu, which allows the player to open/close Doors from outside a Station.


## Health Check
### `/stationalert health`
#### Required Ace Permission: Console Only

This command prints information to the console indicating the state of the resource.
