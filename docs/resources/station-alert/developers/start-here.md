---
sidebar_position: 0
---

# Start Here

So you've just purchased SA, and now you're wondering...

> **How do I make this work in my server?**

SA has a lot to offer Developers, but the bare minimum required to build a functional set up is as follows:

1. Creating Station Locations using the [SA Tool](tool.md).
2. Deciding how to activate Alerts.

***

## Creating Station Locations

Creating Station Locations is the proces of placing the required props for SA to work, as well as linking existing doors fire station MLOs so they open and close as required.

The process is make easy by the SA Tool, an in-game feature that allows Server Owners or Developers to easily create and edit drafts before deploying them to their live servers.

For more information on the [SA Tool](tool.md), [see here](tool.md).

## Deciding how to activate Alerts

SA provides several ways to create Alerts, these include:

- In-game via a Computer at a Station Location
- In-game via a command that opens a menu.
- Using server Exports to create an Alert at a specific station. [See here](exports/server.md#create-new-alert).
- Using server Exports to create an Alert at the station nearest to a specific position. [See here](exports/server.md#create-new-alert-at-nearest-station).
- Using the built-in HTTP API. [See here](api.mdx).

In-game options aside, the simplest way to add activate an Alert using other resources is the [`newAlertNearestStation`](exports/server.md#create-new-alert-at-nearest-station) server export, which only requires a set of coordinates to create an Alert.  
With this export you can place it in existing resources, such as Fire Scripts, 911 Scripts, etc., and automatically create Alerts without needing to figure out which Station to send the Alert to.

## "I'm not good with coding" / "How do I make it work with XYZ script?" / Etc.

If you need help adding SA to your server, join our [Discord server](https://inferno.codes/discord) and create a post in our Priority Support channel.
