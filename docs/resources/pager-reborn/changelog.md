---
sidebar_position: 999
---

# Changelog

This page documents the changes made to Pager Reborn.

## v1.0.*

### v1.0.4 - 03/23/2026

**Added**:
- [`getPagerTurnedOff`](developers/exports/server.md#get-pager-turned-off) server export. For more info, [see here](developers/exports/server.md#get-pager-turned-off).
  - Check from the server is a player's pager is turned off.
- Inventory support for [OxInventory](https://overextended.dev/ox_inventory) and [QBInventory](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-inventory). For more info, [see here](config.md#inventory-support).

**Fixed**:
- Maximum body length check incorrectly reading from [`ic_pr_maxAddressesPerPage`](config.md#max-addresses-per-page) instead of [`ic_pr_maxPageBodyLength`](config.md#max-page-body-length).

### v1.0.3 - 03/21/2026

**Added**:
- Scroll wheel zoom in/out support for the Pager UI.
  - Like with position, zoom level is saved between sessions.
- [`PageAnyAddress`](config.md#page-any-address) Ace Permission. For more info, [see here](config.md#page-any-address).
  - Players with this permission can page any address.

**Changed**:
- Pager UI can now be dragged using the Pager buttons.
  - Previously, all drag events were ignored if started from a button.

**Fixed**:
- `editable` files being escrowed by accident.
- [`/pager capcodes`](usage/commands.md#pager-capcodes) and [`/pager new`](usage/commands.md#pager-new) having no nodes to select from.
- Some client-side-only commands being accessible from the server console.
- Oversight where invalid player server IDs could be passed to server exports.

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
