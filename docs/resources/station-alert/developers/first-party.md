---
sidebar_position: 50
---

# First-Party Resources
This page explains how to integrate SA with first-party resources (other Inferno Collection resources).

:::tip
First-party resource integrations only work with the [Standalone Version](../index.md#station-alert-1) of SA.
:::

## Fire Alarm Reborn
Follow the steps below to create alerts when a fire alarm is activated.

1. Inside `inferno-fire-alarm-reborn`, open `editable/server/events.lua`.
2. Locate the `Inferno Station Alert - Uncomment below to use`, then uncomment (remove the `--`) the section below.
   ![FAR 1](assets/first-party/far/1.png)

You can customize the `exports` to your liking by editing `editables/server/station-alert.lua`. For more information on `exports`, see [here](exports/server.md).


## Pager Reborn
Follow the steps below to create alerts when a specific capcode is paged.  
For example, you could have one capcode per fire station, allowing you to alert specific stations via the Pager network. 

1. Inside `inferno-station-alert`, open `editable/server/events.lua`.
2. Locate the `Inferno Pager Reborn`, then uncomment (remove the `--`) the section below.
   ![PR 1](assets/first-party/pr/1.png)
3. Update `links` as needed, where the key is the capcode address and the value is the station name.

You can customize the `exports` to your liking. For more information on `exports`, see [here](exports/server.md).
