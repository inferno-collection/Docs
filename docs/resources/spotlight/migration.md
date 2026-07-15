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
3. Use the [Spotlight Migration Tool](https://inferno-collection.com/spotlight-migration-tool) to convert modkit and persistent spotlight entries.
4. Convert legacy extra-based spotlight entries with the in-game `/spotlight convert` command.
5. Combine the converted entries into `spotlights.json`, review them, and restart Spotlight.

:::note
The migration tool converts vehicle definitions only. Configure v1.1.0 resource settings, such as keybinds, ignored vehicles, permissions, and default spotlight appearance, in [`config.cfg`](config.md).
:::

## Use the Spotlight Migration Tool

Open the [Spotlight Migration Tool](https://inferno-collection.com/spotlight-migration-tool), then either upload your backed-up `config.json` or paste its contents into the tool.

The tool converts these v1.0.5 sections into the new `spotlights.json` structure:

- `VehicleMods` → `mods`
- `VehiclePersistents` → `persistents`

The converted file contains the `extras`, `mods`, and `persistents` lists required by v1.1.0. Select **Download** to save the generated file as `spotlights.json`.

:::warning
Review every warning shown by the migration tool before using its output. A missing light position is replaced with a default position for modkit and persistent entries; load those vehicles in the [Spotlight Tool](developers/tool.md) and reposition the light source.
:::

### Values That Require Manual Review

The migration tool does not convert the old global `config.json` values, including the command name, keybinds, ignored vehicles, and default spotlight appearance. Configure their v1.1.0 equivalents in [`config.cfg`](config.md).

Old `VehicleSpotlightIgnores` and `VehicleCustomRGB` entries also require manual review. v1.1.0 uses per-spotlight definitions and per-spotlight `configuration` overrides instead; use the [Spotlight Tool](developers/tool.md) to recreate the intended behaviour.

:::note
The global values in [`ic_spot_defaultSpotlightConfiguration`](config.md#default-spotlight-configuration) apply whenever a spotlight definition does not supply its own appearance or movement value.
:::

## Convert Extra-Based Spotlights In-Game

Legacy `VehicleExtras` entries do not include a light-source position, so the web migration tool cannot convert them accurately. v1.1.0 includes an in-game conversion command that finds the most suitable `extralight_*` bone for each old extra-based spotlight.

### Prepare the Old Configuration

1. Copy your backed-up v1.0.5 `config.json` into the root of the v1.1.0 `inferno-spotlight` resource folder.
2. Rename the copied file to `old-config.json`.
3. Ensure the file still contains the old `VehicleExtras` array.
4. Ensure the player running the command has the [`InfernoSpotlight.Tool`](config.md#use-spotlight-tool) ACE permission.

### Run the Conversion

Run the following command in-game:

```text
/spotlight convert
```

If you changed [`ic_spot_command`](config.md#command), replace `spotlight` with your configured command name.

The command temporarily spawns each configured vehicle model, applies its enabled extra, and finds the `extralight_1` through `extralight_4` bone nearest to the configured driver or passenger seat. It then shows the converted extra definitions in a copyable JSON window.

Copy the generated array entries into the `extras` array in `spotlights.json`.

:::warning
The in-game converter can only convert valid vehicle models with the required seat and `extralight_*` bones. Check the client or server console for any entries it could not convert, then create those entries manually with the [Spotlight Tool](developers/tool.md).
:::

:::note
The in-game extra converter uses the legacy model name, side, enabled extra, and disabled extra values. Re-enable high beams and make any appearance adjustments in the [Spotlight Tool](developers/tool.md) after conversion.
:::

## Finish the Upgrade

1. Place the reviewed `spotlights.json` in the root of the `inferno-spotlight` resource folder.
2. Confirm `server.cfg` includes `exec @inferno-spotlight/config.cfg` before ensuring the resource. See the [installation guide](install.md).
3. Restart Spotlight.
4. Test each migrated vehicle from both the driver and passenger seats.
5. Use the [Spotlight Tool](developers/tool.md) to correct placement, extras, modkits, colours, high beams, or movement settings as needed.

Once every definition has been verified, you can remove `old-config.json` from the resource folder.

If you need assistance, feel free to [join the Discord](https://inferno.codes/discord).
