---
sidebar_position: 0
---

# Start Here

So you've just purchased PR, and now you're wondering...

> **How do I make this work in my server?**

PR has a lot to offer Developers, but the bare minimum required to build a functional setup is as follows:

1. Creating a Pager Network
2. Setting up permissions
3. Deciding how to create Pages.

***

## Creating a Pager Network
Creating a network is made easy by using our Pager Network Designer, located here:

> [https://inferno-collection.com/pager-network-designer](https://inferno.codes/pnd)

You can watch a YouTube video demonstration [here](https://www.youtube.com/watch?v=z_4yNaRmlpQ&t=639s).

With this editor you can create a new network from scratch, or edit an existing network by uploading your `nodes.lua`.  
When starting from scratch, you can choose from a Blank Network, a Simple Network, or a Complex Network.

The Blank Network is a blank canvas from which you have total control over how you create your network.  
The Simple Network is a pre-configured network that contains two broad groups for Fire and EMS, and for Los Santos and Blaine County respectively.  
The Complex Network is a pre-configured network that contains groups for Fire, EMS, and Law Enforcement and has capcodes for all base-game locations (fire station, hospital, police station, etc.).

If it is your first time creating a network, we suggest the Simple or Complex Network and playing around with the options to see what you like best.  
There is a 'Help' button in the top-right corner of the editor that provides additional information and guidance.

When finished, ensure to click 'Export Nodes' to download your `nodes.lua` file.  
This file needs to go in the Pager Reborn resource folder.

## Setting up permissions
Once you've created your network in the Pager Network Designer, click the 'Permissions' button in the top-left corner of the editor.  
If editing an existing network, you can also upload an existing `permissions.lua` file.

You can watch a YouTube video explanation [here](https://www.youtube.com/watch?v=z_4yNaRmlpQ&t=443s).

Permissions are role-based, allowing you to create different roles for the various types of players in your server.  
When adding player identifiers to a role (or player override), ensure to include the prefix:

> GOOD: `license:749dd9f14e664f89164c5106d11a35932caf26e1`  
> BAD: `749dd9f14e664f89164c5106d11a35932caf26e1`

The "Name" field in the table is for your reference only, to help you tell players apart, and does not need to be their username.

For information on what each option does, see the 'Help' button in the top-right corner of the editor.  
When finished, ensure to click 'Export Permissions' to download your `permissions.lua` file.  
This file needs to go in the Pager Reborn resource folder.

### Ace Permissions
Roles support an optional "Ace Permission" input. When the server loads, this will automatically assign the Pager Role to any players with the matching Ace Permission. For example, you might have the principal `group.fire_chiefs`. You could then create an ace called `all_fire_calls` and assign it to that group (`add_ace group.fire_chiefs "all_fire_calls" allow`). In the Ace Permission field, you would enter `all_fire_calls` and assign all Fire capcodes to that role. As a result, any player in `group.fire_chiefs` will automatically receive all Fire capcodes.

## Deciding how to create Pages.

PR provides several ways to create Page messages, these include:

- In-game via the Page Creation UI.
- Using server Exports.
- Using the built-in HTTP API.

There are also integrations for common third-party resources, [see here](third-party.md).

## "I'm not good with coding" / "How do I make it work with XYZ script?" / Etc.

If you need help adding PR to your server, join our [Discord server](https://inferno.codes/discord) and create a post in our Priority Support channel.
