---
sidebar_position: 15
sidebar_label: 'Migration Guide'
---

# Migrating from v1.0.5 to v1.1.0

Spotlight v1.1.0 changes vehicle configuration from `config.json` to `spotlights.json`, with resource settings now stored in `config.cfg`. Your v1.0.5 vehicle mappings are not loaded directly by v1.1.0, so migrate them before replacing your live configuration.

:::danger
Back up your v1.0.5 `config.json` before updating Spotlight. Keep the backup until every vehicle has been tested in v1.1.0.
:::

## Overview

1. Back up your v1.0.5 `config.json`.
2. Update Spotlight to v1.1.0 and [install](install.md) its new [`config.cfg`](config.md).
3. Copy the backed-up configuration into the updated resource as `old-config.json`.
4. Run the in-game `/spotlight convert` command.
5. Replace the contents of `spotlights.json` with the generated configuration, review it, and restart Spotlight.

:::note
The converter migrates vehicle definitions only. Configure v1.1.0 resource settings, such as keybinds, ignored vehicles, permissions, and default spotlight appearance, in [`config.cfg`](config.md).
:::

## Values That Require Manual Review

The converter does not migrate the old global `config.json` values, including the command name, keybinds, ignored vehicles, and default spotlight appearance. Configure their v1.1.0 equivalents in [`config.cfg`](config.md).

Old `VehicleSpotlightIgnores` and `VehicleCustomRGB` entries also require manual review. v1.1.0 uses per-spotlight definitions and per-spotlight `configuration` overrides instead; use the [Spotlight Tool](developers/tool.md) to recreate the intended behaviour.

:::note
The global values in [`ic_spot_defaultSpotlightConfiguration`](config.md#default-spotlight-configuration) apply whenever a spotlight definition does not supply its own appearance or movement value.
:::

## Convert Vehicle Definitions In-Game

The in-game converter reads all three legacy vehicle-definition lists from the old configuration:

- `VehicleExtras` → `extras`
- `VehicleMods` → `mods`
- `VehiclePersistents` → `persistents`

For legacy extras, it temporarily spawns each vehicle model, applies the enabled extra, and finds the `extralight_1` through `extralight_4` bone nearest to the configured driver or passenger seat. This produces a vehicle-relative light-source position that a web tool cannot determine accurately.

Modkit and persistent entries retain their existing legacy `LightPosition`. The converter also preserves `EnableHighBeams` when it is set.

### Prepare the Old Configuration

1. Find the backed-up v1.0.5 `config.json` that contains your old `VehicleExtras`, `VehicleMods`, and/or `VehiclePersistents` entries.
2. Copy that file into the root of the updated `inferno-spotlight` resource folder—the same folder that contains `fxmanifest.lua`, `config.cfg`, and `spotlights.json`.
3. Rename the copied file to `old-config.json`.
4. Do not replace `spotlights.json` yet. `old-config.json` must contain the complete old `config.json` contents, not only one of its arrays.
5. Ensure the player running the command has the [`InfernoSpotlight.Tool`](config.md#use-spotlight-tool) ACE permission.

### Run the Conversion

Run the following command in-game:

```text
/spotlight convert
```

If you changed [`ic_spot_command`](config.md#command), replace `spotlight` with your configured command name.

The command shows a copyable, complete `spotlights.json` document with `extras`, `mods`, and `persistents` arrays.

Copy the entire generated document and replace the complete contents of the `spotlights.json` file in the root of the `inferno-spotlight` resource folder. Do not paste the generated document inside an individual array.

If you have already added v1.1.0 definitions to `spotlights.json`, merge the generated entries into its matching `extras`, `mods`, and `persistents` arrays instead, taking care not to duplicate a model and side.

:::warning
The converter skips invalid entries. Extra entries require a valid vehicle model, the configured seat bone, and an `extralight_*` bone. Modkit and persistent entries require a model name and legacy `LightPosition`; modkit entries also require `ModType`, `EnabledMod`, and `DisabledMod`. Check the client console for each skipped entry, then create it manually with the [Spotlight Tool](developers/tool.md).
:::

:::note
The converter preserves the legacy model name, side, enabled/disabled extras or mods, light position where available, and `EnableHighBeams`. Review the resulting placement and appearance in the [Spotlight Tool](developers/tool.md) before using it live.
:::

## Finish the Upgrade

1. Place the reviewed `spotlights.json` in the root of the `inferno-spotlight` resource folder.
2. Confirm `server.cfg` includes `exec @inferno-spotlight/config.cfg` before ensuring the resource. See the [installation guide](install.md).
3. Restart Spotlight.
4. Test each migrated vehicle from both the driver and passenger seats.
5. Use the [Spotlight Tool](developers/tool.md) to correct placement, extras, modkits, colours, high beams, or movement settings as needed.

Once every definition has been verified, you can remove `old-config.json` from the resource folder.

If you need assistance, feel free to [join the Discord](https://inferno.codes/discord).
