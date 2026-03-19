---
sidebar_position: 20
---

# Configuration

Pager Reborn uses convars for config values. For information on how to correctly install the `config.cfg` file, [see here](install.md).

## Value List

|                            Name                             |     Default Value     |
|:-----------------------------------------------------------:|:---------------------:|
|                [`ic_pr_language`](#language)                |        `en-us`        |
|         [`ic_pr_statebagPrefix`](#statebag-prefix)          |         `""`          |
|           [`ic_pr_kickCheaters`](#kick-cheaters)            |        `false`        |
|            [`ic_pr_maxToneTime`](#max-tone-time)            |         `15`          |
| [`ic_pr_globalDefaultAddresses`](#global-default-addresses) |         `[]`          |
|                [`ic_pr_timezone`](#timezone)                | `Australia/Melbourne` |
|            [`ic_pr_timezoneTag`](#timezone-tag)             |        `en-AU`        |
| [`ic_pr_playersStartWithPager`](#players-start-with-pager)  |        `true`         |
|   [`ic_pr_maxAddressesPerPage`](#max-addresses-per-page)    |         `25`          |
|     [`ic_pr_maxPageBodyLength`](#max-page-body-length)      |         `256`         |
|    [`ic_pr_timeBetweenMessages`](#time-between-messages)    |          `2`          |
|       [`ic_pr_sortMessageOrder`](#sort-message-order)       |        `true`         |
|   [`ic_pr_suffixWithShortCode`](#suffix-with-short-code)    |        `true`         |
|        [`ic_pr_httpAccessToken`](#http-access-token)        |         `""`          |
|          [`ic_pr_whitelistedIps`](#api-whitelist)           |      *See Below*      |
|              [`ic_pr_command`](#alias-command)              |        `pager`        |
|                   [`ic_pr_debug`](#debug)                   |        `false`        |

## Values Explained

### Language
#### `ic_pr_language`
This value is the short code for the language you'd like to use.
You can check the list of available languages by viewing [this page](../../translations).

### Statebag Prefix
#### `ic_pr_statebagPrefix`
This value is an optional unique prefix to separate your server's saved client-side data from other servers.
If set, it must be at least four characters long and not contain any spaces.
If no prefix is set, a default 'shared' prefix will be used.

Client-side saved data includes:
- Tone/Vibration/Sound selection
- Sound Mode selection
- Page message history
- NUI Position
- NUI Volume

If you plan to make major changes to the resource's default audio, you should set a unique prefix.

### Kick Cheaters
#### `ic_pr_kickCheaters`
If this value is `true`, the resource will kick any players it detects as suspicious.
Even when `false`, suspected actions may still be logged to the server console.

### Max Tone Time
#### `ic_pr_maxToneTime`
This value determines the maximum number of seconds a pager tone can play before it is automatically stopped.

### Global Default Addresses
#### `ic_pr_globalDefaultAddresses`
This value is a list of addresses that all players are forced to join by default, regardless of roles or player overrides.

Example:
```text
set ic_pr_globalDefaultAddresses [
	"emg.all"
]
```

### Timezone
#### `ic_pr_timezone`
This value controls the timezone used by the resource for timestamp formatting.  
A full list of timezones can be found [here](https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a).

### Timezone Tag
#### `ic_pr_timezoneTag`
This value controls the locale tag used when formatting date/time text.  
A full list of timezone tags can be found [here](https://github.com/TiagoDanin/Locale-Codes?tab=readme-ov-file#locale-list) (see the `tag` column).

### Players Start with Pager
#### `ic_pr_playersStartWithPager`
If `true`, players join the server already having a pager. If `false`, pagers will need to be manually provided via exports.

:::warning
This value is superseded by the [`UsePager`](#use-pager) permission. Even if [`ic_pr_playersStartWithPager`](#players-start-with-pager) is `true`, players without the [`UsePager`](#use-pager) permission will not be able to open the Pager UI.
:::

### Max Addresses Per Page
#### `ic_pr_maxAddressesPerPage`
This value sets the maximum number of addresses that can be attached to a single page message.

### Max Page Body Length
#### `ic_pr_maxPageBodyLength`
This value sets the maximum character length of a page's body text.

### Time Between Messages
#### `ic_pr_timeBetweenMessages`
This value sets the seconds between sending page messages. This value is primarily for roleplaying purposes and can be set to any value.

:::tip
This value effects each address of a page. For example, if a page targets 3 capcodes and this value is set to 2, it would take 6 seconds for all addresses to be sent.
:::

### Sort Message Order
#### `ic_pr_sortMessageOrder`
If `true`, newer emergency pages will be prioritized ahead of older non-emergency/administrative pages.

:::tip
This value is useful if [`ic_pr_timeBetweenMessages`](#time-between-messages) is set to a high value.

For example, if a non-emergency page that targets 10 capcodes is sent and [`ic_pr_timeBetweenMessages`](#time-between-messages) is 2, it would take 20 seconds for all addresses to be sent. If `ic_pr_sortMessageOrder` is `true`, and halfway through the prior non-emergency page an emergency page is sent, the emergency page would be bumped to the top of the queue and sent first; then the remaining non-emergency page messages would be sent.
:::

### Suffix with Short Code
#### `ic_pr_suffixWithShortCode`
If `true`, page messages will include a short code suffix. This shortcode can either be defined in the Pager Network Designer, or if not provided, will be automatically generated.

### HTTP Access Token
#### `ic_pr_httpAccessToken`
This is an optional config value that is required if server owners wish to use the included [API](developers/api.mdx).  
This value is blank by default, and while blank, the [API](developers/api.mdx) will reject all HTTP requests.  
To enable the [API](developers/api.mdx) you must provide a value to be used as a token.

### API Whitelist
#### `ic_pr_whitelistedIps`
This is an optional config value that allows server owners to only allow HTTP requests from specific IP addresses.

To allow requests from any IP address, set this value to `[]`.  
The default value, `127.0.0.1`, should allow access from the local machine only on most systems.

:::warning
Regardless of this config option, [`ic_pr_httpAccessToken`](#http-access-token) is required.
:::

### Alias Command
#### `ic_pr_command`
When this value is anything other than `pager`, the value will be used to register an alias command.
For example, setting it to `pr` would allow `/pr`.

### Debug
#### `ic_pr_debug`
If this value is `true`, extra debug logs are written to both client and server consoles. Not suggested at all for production use.

---

## Permissions
Pager Reborn uses Ace permissions.

### Use Pager
#### `InfernoPagerReborn.UsePager`
Allows users to open the Pager UI.

:::warning
This permission supersedes [`ic_pr_playersStartWithPager`](#players-start-with-pager). If players lack this permission, regardless of [`ic_pr_playersStartWithPager`](#players-start-with-pager), they will not be able to open the Pager UI.
:::

### Page Emergency
#### `InfernoPagerReborn.PageEmergency`
Allows users to send emergency page messages.

### Page Non-Emergency
#### `InfernoPagerReborn.PageNonEmergency`
Allows users to send non-emergency page messages.

### Page Administrative
#### `InfernoPagerReborn.PageAdministrative`
Allows users to send administrative page messages.

### Page Any Player
#### `InfernoPagerReborn.PageAnyPlayer`
Allows users to page any player (bypass capcodes).  
By default, this permission is only granted to admins (`group.admin`).

:::note
Even with `InfernoPagerReborn.PageAnyPlayer`, users will still need to be granted access to one or more of the three page types above.
:::

---

## Default Config File
```cfg showLineNumbers title="config.cfg"
# Inferno Collection Pager Reborn
#
# Copyright (c) 2019-2026, Christopher M, Inferno Collection. All rights reserved.

######################################################################################
###                                     NOTICE                                     ###
###        Be sure to check the documentation before changing these values.        ###
###    https://docs.inferno-collection.com/resources/pager-reborn/configuration/   ###
######################################################################################

#####################
### Configuration ###
#####################

### General ###
###############

# Select language
setr ic_pr_language "en-us"

# A unique string to identify your community
setr ic_pr_statebagPrefix ""

# Kick suspected cheaters
set ic_pr_kickCheaters "false"

# Max seconds before pager sound stops
setr ic_pr_maxToneTime 15

# Addresses that *all* players will be forced to join
set ic_pr_globalDefaultAddresses []

setr ic_pr_timezone "Australia/Melbourne"

setr ic_pr_timezoneTag "en-AU"

### Advanced ###
################

# All players join the server with a pager
setr ic_pr_playersStartWithPager "true"

# Max number of addresses per page message
setr ic_pr_maxAddressesPerPage 25

# Max length of body text per page message
setr ic_pr_maxPageBodyLength 256

# Time in seconds between page messages being sent
set ic_pr_timeBetweenMessages 2

# Sort messages so new Emergency Pages get sent before older Non-Emg/Admin Pages
set ic_pr_sortMessageOrder "true"

# Place shortcodes at the end of page messages
set ic_pr_suffixWithShortCode "true"

# HTTP Access Token
set ic_pr_httpAccessToken ""

# List of whitelisted IPs to allow HTTP requests from
set ic_pr_whitelistedIps [
	"127.0.0.1"
]

# Change command name
set ic_pr_command "pager"

# If the resource should run in debug mode
setr ic_pr_debug "false"

###################
### Permissions ###
###################

add_ace builtin.everyone "InfernoPagerReborn.PageEmergency" allow
add_ace builtin.everyone "InfernoPagerReborn.PageNonEmergency" allow
add_ace builtin.everyone "InfernoPagerReborn.PageAdministrative" allow

add_ace group.admin "InfernoPagerReborn.PageAnyPlayer" allow

##########################
### ConVar Permissions ###
##########################

# Prevents other resources from reading these private values
add_convar_permission inferno-pager-reborn read ic_pr_httpAccessToken
add_convar_permission inferno-pager-reborn read ic_pr_whitelistedIps
```
