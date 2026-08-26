---
sidebar_position: 5
---

# Commands

This page documents the commands for Torches.

Torches has a single command that supports multiple parameters. This means all commands start with the same prefix: `/torch`.

:::note
If [`ic_torches_allowAnyPed`](../config.md#allow-any-ped) is `false` and no preset exists, torch commands will fail and inform the player that no preset exists for their current Ped.
:::

## Toggle Torch
### `/torch`

Toggles your torch on or off. Uses an existing preset if one exists, or the default chest position otherwise.

If both a head and chest preset exists, the head preset is chosen.

***

## Toggle Head Torch
### `/torch head`

Toggles your head torch on or off.

***

## Toggle Chest Torch
### `/torch chest`

Toggles your chest torch on or off.

***

## Torch Tool
### `/torch tool`

Starts the [Torch Tool](../developers/tool.md). The player needs the [`InfernoTorches.Tool`](../config.md#use-torch-tool) ACE permission. [See here](../developers/tool.md) for more info.

***

## Convert Legacy Configuration
### `/torch convert`
#### In-Game Only

Converts a legacy `config.json` into a `torches.json` preset file. The player running the command needs the `InfernoTorches.Tool` permission. Follow the [migration guide](../migration.md) for the required file locations and copy steps.

***

## Health Check
### `/torch health`
#### Console Only

Prints the state of the Torches configuration and ACE permissions to the server console.
