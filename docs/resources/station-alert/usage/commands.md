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

## DUI Fix
### `/stationalert duifix`
#### Required Ace Permission: None

The command will flip the DUI on the call screens.  
This is a "band-aid fix" for the [Flipped DUI Bug](https://forum.cfx.re/t/dui-rotation-bug/644418?u=christopherm) that some people have.  
If you don't have this bug, you do not need to use this command.

You only need to do the command once, then the script will remember your preference.  
If you ever need to un-flip the DUI, simply run the command again.

## Manual Message
### `/stationalert message`
#### Required Ace Permission: None

This command was added for players who's native language is not support by the standard in-game textbox used to write out messages.
To use this command, first start to create a new alert as normal using [`/stationalert new`](#stationalert-new).
Instead of clicking the menu item to enter a message, with the menu still open, open your chat and type `/stationalert message <your message here>`.  
Once entered, your message will be saved to the new alert.

:::note
The menu will attempt to display your message in the menu, **it may look broken/corrupted**.  
However, once submitted, it should work fine regardless.
:::

:::tip
This command can also be used if players want to copy/paste in a message, since the standard in-game textbox does not allow this.
:::
