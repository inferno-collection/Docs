---
sidebar_position: 15
sidebar_label: 'Migration Guide'
---

# Migrating from v1.0.3 to v1.1.0

Torches v1.1.0 changes resource settings from `config.json` to `config.cfg`, and moves Ped and MP Ped presets into `torches.json`. Use the in-game converter to migrate your existing presets before replacing your live configuration.

:::danger
Back up your v1.0.3 `config.json` before updating Torches. Keep the backup until every migrated preset has been tested in v1.1.0.
:::

## Overview

1. Back up your v1.0.3 `config.json`.
2. Update Torches to v1.1.0 and install the new [`config.cfg`](config.md).
3. Copy the backed-up configuration into the updated resource folder as `old-config.json`.
4. Give the player running the command the [`InfernoTorches.Tool`](config.md#use-torch-tool) ACE permission.
5. Run `/torch convert` in-game.
6. Copy the generated JSON into `torches.json`, review it, and restart Torches.

:::note
The converter migrates presets only. Configure resource settings such as the command, keybinds, inventory support, defaults, and permissions in [`config.cfg`](config.md).
:::

## Prepare the Old Configuration

1. Find the backed-up v1.0.3 `config.json` containing your old `peds`, `mpped`, and/or `mppeds` sections.
2. Copy it into the root of the updated `inferno-torches` resource folder - the same folder that contains `fxmanifest.lua`, `config.cfg`, and `torches.json`.
3. Rename the copied file to `old-config.json`.
4. Keep the complete old configuration in the file. Do not copy only one preset section.
5. Confirm the player running the command has the [`InfernoTorches.Tool`](config.md#use-torch-tool) ACE permission.

The converter accepts both the legacy `mpped` and `mppeds` property names. If both are present, their male and female entries are combined.

## Run the Conversion

Run the following command in-game:

```text
/torch convert
```

If you changed [`ic_torches_command`](config.md#command), replace `torch` with your configured command name.

The command validates and converts `old-config.json`, then opens a copyable `torches.json` document in the Torch Tool UI. It does not automatically overwrite the live `torches.json` file.

Copy the complete generated document and replace the complete contents of `torches.json` in the root of the `inferno-torches` resource folder. Do not paste the generated document inside an individual `peds` or `mppeds` array.

:::warning
The converter skips invalid entries. Check the server console for conversion errors and create skipped presets manually with the [Torch Tool](developers/tool.md).
:::

## Converted Values

### Ped Presets

Legacy `peds` entries are written to the new `peds` array. The converter preserves the model, mount type, and any component or drawable values that were present.

If a legacy preset only contains a model, mount type, and position, its component and drawable fields remain omitted in the converted file. This preserves the old model-wide behavior: the preset can match the model regardless of which component or drawable the Ped is currently wearing. Do not add `componentId: 0` or `drawableId: 0` to these entries unless you intentionally want to restrict them to that specific component and drawable.

Legacy entries that explicitly contain both component and drawable values remain component-specific and will only match when the current Ped is wearing that combination.

Legacy source and corona values become the new single `position` value. Review each converted position in-game, especially when the old source and corona positions were different.

### MP Ped Presets

Legacy male and female MP Ped groups remain separate in the new `mppeds` object. The converter preserves `collectionName`, `localIndex`, `isProp`, `variationId`, and `mountType`, and converts the legacy position values as described above.

The new format does not use a sex field. Male and female entries are selected by the freemode model and remain under the `male` and `female` keys in `torches.json`.

## Finish the Upgrade

1. Place the reviewed `torches.json` in the root of the `inferno-torches` resource folder.
2. Confirm `server.cfg` ensures the resource after the required `config.cfg` is loaded.
3. Restart Torches.
4. Test each migrated Ped and MP Ped preset.
5. Use the [Torch Tool](developers/tool.md) to correct clothing targets, mount types, or positions as needed.
6. Remove `old-config.json` once the migration is complete.

If you need assistance, feel free to [join the Discord](https://inferno.codes/discord).
