---
sidebar_position: 5
---

# Commands

This page documents the commands for Pager Reborn.

Pager Reborn uses `/pager` as the base command.

## Open Pager UI
### `/pager`
Opens the Pager UI. For more info, [see here](quick-start.md#open-the-pager).

***

## Open Capcode Selection UI
### `/pager capcodes`
Opens the UI to select Capcodes. For more info, [see here](quick-start.md#joining-capcodes).

***

## Open Page Creation UI
### `/pager new`
Opens the UI to create a new Page. For more info, [see here](quick-start.md#creating-a-page).

***

## Open Pager Settings UI
### `/pager settings`
Opens the Pager Settings UI. For more info, [see here](quick-start.md#pager-settings).

***

## Toggle Pager Power
### `/pager power`
Toggles your Pager's power on or off. You can also turn your Pager off from the Pager UI's menu.  
While your Pager is turned off, you cannot open it, and it will not receive any new messages.

***

## Clear Saved Data
### `/pager clearkvp`
Deletes all saved data from your machine. For info on what gets deleted, [see here](quick-start.md#pager-settings). Can also be done from the [Pager Settings](#open-pager-settings-ui).

***

## Health Check
### `/pager health`
#### Console Only

This command prints information to the console indicating the state of the resource.

***

## Permission Debug
### `/pager permissiondebug [server ID]`
This command prints to the console the paging permissions for the specified player.  
If executed from the client, it will print that player's permissions to the server console.  
If executed from the server, a server ID must be specified.
