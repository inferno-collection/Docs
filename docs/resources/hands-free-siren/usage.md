---
sidebar_position: 30
---

# Usage

## Quick Start Guide

### How do I control the lights and sirens?
The resource has two keybinds, `Q` (`INPUT_VEH_RADIO_WHEEL`) to toggle lights, and `E` (`INPUT_VEH_HORN`) to activate the horn and control the siren.

To activate the lights, tap `Q` when the lights are off.  
To activate the lights and siren at the same time, double-tap `Q` when the lights are off.  
To deactivate the lights (and siren, if on), tap `Q` when the lights are on.

To activate the horn, tap or hold `E` when the lights are off, and hold `E` when the lights are on.  
To activate the siren, tap `E` when the lights are on and the siren is off.  
To change siren tone, tap `E` when the lights and siren are on.  
To deactivate the siren, double-tap `E` when the lights and siren are on.
***

## FAQs
### What is the purpose of this resource when other free resources like LVC exist?
Hands-Free Siren (HFS) is not designed to be a replacement for resources like LVC in terms of features or design, but instead an alternative. If you are looking for a fully fledged ELS script with UI, multiple keybinds, etc., you should check out the [LVC range](https://docs.luxartengineering.com/) from our friend [TrevorBarns](https://github.com/TrevorBarns).

HFS is designed as an alternative resource, taking a more simplistic and lightweight approach to ELS/siren controls.  
As the name suggests, it is designed around the hands-free (a.k.a. horn ring transfer) style of siren, which is conceptually different from other resources, such as LVC - the siren is entirely controlled via the horn, with no additional keybinds or buttons.

### My config isn't loading / "Error reading configuration from file, contents are invalid. Reverting to default configuration values."
You have one or more syntax errors in your `config.json`, use a website [like this](https://jsonformatter.org/) to check the file.

### How do I change the siren/horn for a specific vehicle or vehicles?
You can create vehicle overrides. [See here](config.md#vehicle-overrides) for more info on base-game sirens, and [see here](config.md#vehicle-overrides-1) for more info on server-sided sirens.

### Is the resource compatible with other ELS/siren scripts, such as LVC?
No, other resources like LVC will conflict with HFS.
