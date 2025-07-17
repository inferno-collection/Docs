---
sidebar_position: 20
---

# Configuration

Spotlight uses a `config.json` file to store config values. Invalid JSON syntax in this file will cause errors.

## Value List

|                                 Name                                 | Default Value |
|:--------------------------------------------------------------------:|:-------------:|
|                    [`ic_if_language`](#language)                     |    `en-us`    |
|              [`ic_if_slowTraffic`](#slow-traffic-down)               |    `true`     |
|                [`ic_if_kickCheaters`](#kick-cheaters)                |    `false`    |
|                  [`ic_if_command`](#alias-command)                   |   `iflares`   |
|       [`ic_if_disableCollisions`](#disable-iflare-collisions)        |    `false`    |
| [`ic_if_deleteAllOnEmptyServer`](#clean-up-after-players-disconnect) |    `true`     |
|                       [`ic_if_debug`](#debug)                        |    `false`    |

## Values Explained

### Language
#### `ic_if_language`
This value is the short code for the language you'd like to use.  
You can check the list of available language by viewing [this page](../../translations).  
If your language has not been translated yet, feel free to check out our [Translation program](../../programs/translators.md#want-to-help-us-translate-a-resources), where you get rewarded for translating resources!

The default value is `en-us` for English.

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

### Debug
#### `ic_if_debug`
If this value is `true`, a ton of extra logs will be outputted to both the client and server consoles. Not suggested at all for production use.

***

## Permissions
There are a few permissions for IF, they are as follows:

### Create and Delete IFlares
#### `InfernoFlares.Create`
This permission allows players to place new IFlares, and delete their own IFlares.  
By default, this permission is granted to all players.

### Delete other player's IFlares
#### `InfernoFlares.RemoveOthers`
This permission allows players to delete IFlares they did not place themselves.  
By default, this permission is granted to all players.

## Default Config File
``` showLineNumbers
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

### Advanced ###
################

# Change command name
set ic_if_command "stationalert"

# Disable IFlare collisions
setr ic_if_disableCollisions "false"

# Delete IFlares on empty server
set ic_if_deleteAllOnEmptyServer "true"

# If the resource should run in debug mode
setr ic_if_debug "false"

###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoFlares.Create" allow
add_ace builtin.everyone "InfernoFlares.RemoveOthers" allow
```
