---
sidebar_position: 10
---

# Components

This page documents each component in FAR and how to use them.

A component is any part of the Alarm System, such as the Pull Stations, Detectors, etc.  
Not all components can be directly interacted with, but the ones that can will show a prompt in the top left of the screen where applicable.

:::note
Depending on how the [Ace Permissions](../config.md#permissions) are set up, not all the below options will be available to all players.
:::

## Pull Stations

Pull Stations have two kinds of interaction: a trigger interaction, and a reset interaction.  
The trigger interaction allows players to pull the t-bar and activate the Fire Alarm.  
The reset interaction allows players to reset the Pull Station to an "unpulled" state.

Where a Pull Station has been pulled, for an Alarm System to be fully reset, the Pull Station by be reset.

***

## Detectors & Sprinklers

Detectors and Sprinklers will activate an Alarm System when they detect smoke or fire around their position.  
Neither have direct interaction options.

FAR detects smoke/fire from two sources:
- [Base Game](#base-game)
- [Fire Scripts](#fire-scripts)

### Base Game

Any Base Game GTA V incendiary/explosive will trigger both Detectors and Sprinklers, and FAR Sprinklers will put out Base Game fires (e.g. ones started by Molotov cocktails).

### Fire Scripts

So long as the server runs a Fire Script that is [compatible](../index.md#fire-script-compatibility-list) with FAR, smoke/fire from Fire Scripts will trigger Detectors and Sprinklers, and where indicated on our [compatibility chart](../index.md#fire-script-compatibility-list) as being Sprinkler compatible, FAR Sprinklers will put our Fire Script fires.

:::note
Some Fire Scripts have "smoke" options as well as fires, however, compatability was determined off of whether FAR could successfully detect fires, not smoke. FAR will correctly detect smoke only (i.e. Sprinklers will not activate) in some Fire Scripts, however, in others it may not react at all. Please report these scripts to us, and we will do our best to work with the respective Fire Script authors to add better compatability.
:::

Where a Detector has been triggered, for an Alarm System to be fully reset, the smoke or fire must be cleared around the Detector.

Where a Sprinkler has been triggered, for an Alarm System to be fully reset, the smoke or fire must be cleared around the Detector.  
Additionally, where an Alarm System has a [Sprinkler Valve](#sprinkler-valves), the Sprinkler Valve must be placed in the Closed position before the Alarm System can be reset.

***

## Strobes

Strobes flash a red environmental light when an Alarm System is active, even when an Alarm System is silenced.  
Strobes do not have a direct interaction option.

Strobes will automatically reset along with the reset of the Alarm System.

***

## Sounders

Sounders play 3D Audio when an Alarm System is active, but not when an Alarm is silenced.  
Sounders do not have a direct interaction option.

Strobes will automatically reset along with the reset of the Alarm System.

***

## Control Panels

Learn how to use the Control Panel by viewing the dedicated [page](panel.md).

***

## Sprinkler Valves

Sprinkler Valves control the flow of water through a building's Sprinklers.  
Sprinkler Valves can be found by following the sound of the Sprinkler Bell, where an Alarm System is active and one or more Sprinklers have been triggered.

Sprinkler Valves have two interactions and matching positions:
- [Open](#open)
- [Closed](#closed)
 
### Open

When a Sprinkler Valve is open:
- Sprinklers can activate.
- Activated Sprinklers will show water.
- The Sprinkler Bell will sound from the position of the Sprinkler Valve.

### Closed

When a Sprinkler Valve is closed:
- Sprinklers will not activate.
- Activated Sprinklers will stop showing water while the Sprinkler Valves remains closed.
  - If the Sprinkler Valve is opened again, activated Sprinklers will show water again.
- The Sprinkler Valve.

:::note
Sprinkler Valves are optional and will not always be part of an Alarm System, even if Sprinklers are present.
:::

:::warning
Sprinkler Valves will "reset" or change back to the Open position after an Alarm System has been reset. You must return the Sprinkler Valve to the Open position manually, or Sprinklers will not activate for any further fires.
:::

***

## Sprinkler Bell

The Sprinkler Bell is not a physical component, but rather a sound effect that plays when one or more Sprinklers have activated in an Alarm System.

Where a [Sprinkler Valve](#sprinkler-valves) is present, the Sprinkler Bell sound with originate from the Sprinkler Valve's location.
Otherwise, the Sprinkler Bell sound will originate from the center of the Alarm System.

:::note
If a [Sprinkler Valve](#sprinkler-valves) is part of the Alarm System, the Sprinkler Valve must be in the Open position or the Sprinkler Bell will not sound.
:::

***

## Exceptions

When a component is triggered, the Alarm System will nearly always go into alarm, even if it was silenced, except in a few notable circumstances:
- When the Alarm System is in WalkTest mode.
- When the component has been isolated at the Control Panel.
- When the entire Alarm System is disabled.
