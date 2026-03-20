---
sidebar_position: 999
---

# Changelog

This page documents the changes made to Pager Reborn.

## v1.0.*

### v1.0.2 - 03/20/2026

**Added**:
- [`CreatePage`](developers/events.md#create-page---server) server event. For more info, [see here](developers/events.md#create-page---server).
	- Event is a work-in-progress while in Early Access and may change.
	- Allows for creating page messages via events.
- [`togglePager`](developers/exports/client.md#toggle-pager) client export. For more info, [see here](developers/exports/client.md#toggle-pager).
  - Allows for toggling the Pager UI via an export.
- `/pager permissiondebug` command. For more info, [see here](usage/commands.md#permission-debug).
  - Prints a player's paging permissions to the server console.

**Changed**:
- Improved the logic that checks for unread messages and players' chirp sounds.

**Fixed**:
- Edge case where [`setPagerTurnedOff`](developers/exports/client.md#set-pager-turned-off) could be called while the Pager UI was open.

### v1.0.1 - 03/19/2026

**Added**:
- [`UsePager`](config.md#use-pager) Ace permission. For more info, [see here](config.md#use-pager).
  - Players without this permission will not be able to use the Page UI.

**Fixed**:
- [Global Defaults](config.md#global-default-addresses) not being applied when a player had no other role/player permissions.


### v1 - 03/17/2024
Easy Access release.
