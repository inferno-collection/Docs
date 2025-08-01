---
sidebar_position: 20
---

# Configuration

IF uses convars for config values. For information on how to correctly install the `config.cfg` file, [see here](install.md).

## Value List

|                                      Name                                       | Default Value |
|:-------------------------------------------------------------------------------:|:-------------:|
|                          [`ic_if_language`](#language)                          |    `en-us`    |
|                    [`ic_if_slowTraffic`](#slow-traffic-down)                    |    `true`     |
|                        [`ic_if_animations`](#animations)                        |    `true`     |
|                     [`ic_if_kickCheaters`](#kick-cheaters)                      |    `false`    |
|                        [`ic_if_command`](#alias-command)                        |   `iflares`   |
| [`ic_if_manualInteractions`](#manual-interactions-third-eye--inventory-support) |    `false`    |
|             [`ic_if_disableCollisions`](#disable-iflare-collisions)             |    `false`    |
|      [`ic_if_deleteAllOnEmptyServer`](#clean-up-after-players-disconnect)       |    `true`     |
|                      [`ic_if_userLimit`](#per-user-limit)                       |      `7`      |
|                      [`ic_if_globalLimit`](#global-limit)                       |     `35`      |
|                             [`ic_if_debug`](#debug)                             |    `false`    |

## Values Explained

### Language
#### `ic_if_language`
This value is the short code for the language you'd like to use.  
You can check the list of available language by viewing [this page](../../translations).  
If your language has not been translated yet, feel free to check out our [Translation program](../../programs/translators.md#want-to-help-us-translate-a-resources), where you get rewarded for translating resources!

The default value is `en-us` for English.

### Animations
#### `ic_if_animations`
If this value is `true`, an animation will play when placing and picking up IFlares.

### Kick Cheaters
#### `ic_if_kickCheaters`
If this value is `true`, the resource will kick any players it detects as "cheaters". Cheaters are determined by events sent to the server, and actions performed. False-positive as possible, but unlikely.

Regardless of this value, the resource will log events in the server console whenever it believes it has found a cheater.

### Alias Command
#### `ic_if_command`
When this value is anything other than `iflares`, the value will be used to register an alias command.  
This alias command can be used instead of the full `iflares` command.  
For example, setting the value to `if` would allow the use of `/if` for commands.

Default value is `iflares`.

### Manual Interactions (Third-Eye & Inventory Support)
#### `ic_if_manualInteractions`
If this value is `true`, events will be fired that can be used in `editable/client/targeting.lua` and `editables/server/inventory.lua`; to enable support for [OxTarget](https://overextended.dev/ox_target), [OxInventory](https://overextended.dev/ox_inventory), [QBTarget](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-target), [QBInventory](https://docs.qbcore.org/qbcore-documentation/qbcore-resources/qb-inventory), or any other third-eye/inventory resource, changes will need to be made in these files.

:::note
The events in `editable/client/targeting.lua` and `editables/server/inventory.lua` will not fire unless `ic_if_manualInteractions` is `true`.
:::

For Ox or QB, simply uncomment the lines under the named sections in both files.
For any other resources, use the provided event handlers and variables to add your own exports/events. Reach out in [Discord](https://inferno.gay/discord) if you need help adding other resources.

:::tip
The "items.lua" entry for both Ox and QB are located at the top of `editables/server/inventory.lua`, and a 100x100 png image of an IFlare is located in `editables/server`.
:::

### Slow Traffic Down
#### `ic_if_slowTraffic`
If this value is `true`, traffic will slow down when it is near placed IFlares.

### Disable IFlare Collisions
#### `ic_if_disableCollisions`
If this value is `true`, placed IFlares will not have any collisions.  
If this value is `false`, placed IFlares will have collisions, and cannot be knocked over, driven through, etc.

### Clean-up After Players Disconnect
#### `ic_if_deleteAllOnEmptyServer`
If this value is `true`, all IFlares will be deleted once the server is empty.

### Per-User Limit
#### `ic_if_userLimit`
This value determines the max number of IFlares a single user can place, to prevent abuse.  
Setting this value to `-1` will disable the limit.

### Global Limit
#### `ic_if_globalLimit`
This value determines the max number of IFlares all users can place, to prevent abuse.  
Setting this value to `-1` will disable the limit.

### Debug
#### `ic_if_debug`
If this value is `true`, a ton of extra logs will be outputted to both the client and server consoles. Not suggested at all for production use.

***

## Permissions
There are a few permissions for IF, they are as follows:

### Command Access
#### `InfernoFlares.Command`
This permission allows players to place new IFlares, and delete their own IFlares using the `/iflares` command.  
When using the command, there are no placement limits other than the [per-user](#per-user-limit) and [global](#global-limit) placement limits.
By default, this permission is granted to all players.

### Inventory Access
#### `InfernoFlares.Inventory`
This permission allows players to place new IFlares, and delete their own IFlares using [third-eye/inventories](#manual-interactions-third-eye--inventory-support).  
By default, this permission is granted to all players.

### Delete other player's IFlares
#### `InfernoFlares.RemoveOthers`
This permission allows players to delete IFlares they did not place themselves.  
This is regardless of if the IFlare was placed via command or inventory.  
By default, this permission is granted to all players.

## Default Config File
```text showLineNumbers
# Inferno Collection Flares
# 
# Copyright (c) 2019-2025, Christopher M, Inferno Collection. All rights reserved.

###############################################################################
###                                 NOTICE                                  ###
###    Be sure to check the documentation before changing these values.     ###
###   https://docs.inferno-collection.com/resources/flares/configuration/   ###
###############################################################################

#####################
### Configuration ###
#####################

### General ###
###############

# Select language
setr ic_if_language "en-us"

# IFlares slow traffic
setr ic_if_slowTraffic "true"

# Kick suspected cheaters
set ic_if_kickCheaters "false"

# Play animations
setr ic_if_animations "true"

# Per-user placement limit
set ic_if_userLimit "7"

# Global placement limit
set ic_if_globalLimit "35"

### Advanced ###
################

# Change command name
set ic_if_command "iflares"

# Disable IFlare collisions
setr ic_if_disableCollisions "false"

# Delete IFlares on empty server
set ic_if_deleteAllOnEmptyServer "true"

# Enable events for third-eye interactions
setr ic_if_manualInteractions "false"

# If the resource should run in debug mode
setr ic_if_debug "false"

###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoFlares.Command" allow
add_ace builtin.everyone "InfernoFlares.RemoveOthers" allow
add_ace builtin.everyone "InfernoFlares.Inventory" allow
```
