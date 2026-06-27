---
sidebar_position: 1
---

# Updating a Resource

This page explains the general update process for Inferno Collection resources.

Updates should be treated differently from first-time installs. Do not blindly paste the new download over the old resource folder, as old files that were removed in the new version may be left behind, and customized files may be overwritten.

## Before Updating

1. Stop your server.
2. Make a backup of the resource you are updating.
3. Read the resource's changelog for breaking changes, especially notes mentioning configs, `editable` files, exports, events, integrations, or data files.
4. Make a note of any files you have changed by hand.

## Download from CFX Portal

1. Go to [CFX Portal](https://portal.cfx.re/assets/granted-assets?search=Inferno+Collection).
2. Sign in with the same Cfx.re account you used to purchase the resource.
3. Find the item created by `ChristopherM`.
4. Download the latest normal release for the resource.

:::warning
Do not select a release candidate, `RC`, or similarly labelled pre-release version unless you specifically mean to test that version.
:::

## Replace the Resource Files

After downloading and extracting the resource, locate the new resource folder inside `[inferno-collection]`.

In your server's existing resource folder:

1. Keep your existing config file.
2. Keep any `editable` files you have changed.
3. Keep any resource-specific data files you own, such as Pager Reborn's `nodes.lua` and `permissions.lua`, or IFlares' `flare-types.json` and `flash-patterns.json` if you changed them yourself.
4. Delete the rest of the old resource files and folders.
5. Copy in the new files from the download.
6. Do not overwrite the config, `editable` files, or owned data files you kept.

:::tip
If your `[inferno-collection]` folder contains more than one resource, only replace the folder for the resource you are updating.
:::

## Update Configs by Hand

Configs should be merged by hand, not overwritten.

- Resources that use `config.cfg`: Pager Reborn, Fire Alarm Reborn, Station Alert, and Flares.
- Resources that use `config.json`: Spotlight, Torches, and Hands-Free Siren.

Open the config from the new download next to your current config, then copy across any new, renamed, or removed options. Keep your existing values where they are still valid.

For `config.json` files, check the final file with a JSON validator before starting the server. Missing commas, brackets, or quotes can prevent the resource from loading.

## Update Editable Files by Hand

The `editable` files are intended for server-specific changes, so do not overwrite them without checking what changed.

When a new update includes changed `editable` files:

1. Open your current file and the newly downloaded file side by side.
2. Copy across the new default changes.
3. Re-apply your custom code, uncommented integrations, event handlers, targeting support, or inventory support.
4. Check the changelog for any specific files called out as changed.

This is especially important for files such as:

- `editable/server/events.lua`
- `editable/client/targeting.lua`
- `editable/client/inventory.lua`
- `editable/server/inventory.lua`
- resource-specific integration files under `editable/server`

## Start and Check

After the files are replaced and hand-merged:

1. Start the server.
2. Watch the server console for config, syntax, permission, or missing file errors.
3. Run the resource's health check command if it has one.
4. Test the specific features you changed or merged, such as inventory items, targeting, dispatch integrations, custom sounds, custom skins, pager networks, or station/alarm data.

## Resource-Specific Notes

### Pager Reborn

- If [`ic_pr_dataSource`](../resources/pager-reborn/config.md#data-source) is set to local files, keep and hand-check your `nodes.lua` and `permissions.lua` files. These contain your Pager Network and role permissions.
- If you added custom pager skins, keep the extra `.png` and `.xml` files in `ui/assets`, and hand-merge [`ic_pr_skins`](../resources/pager-reborn/config.md#skins).
- Inventory support uses `editable/client/inventory.lua` and `editable/server/inventory.lua`, so hand-merge those files if you have enabled OxInventory, QBInventory, or a custom inventory integration.

### Fire Alarm Reborn

- Alarm System draft files should live in another resource, such as `inferno-alarms`, not inside `inferno-fire-alarm-reborn`. Do not delete your alarm location resource when updating FAR.
- Third-party dispatch and first-party integrations are enabled from `editable/server/events.lua` and related files such as `editable/server/pager.lua`, `editable/server/station-alert.lua`, or other dispatch integration files. Hand-merge these files if you use them.
- Target/third-eye support uses `editable/client/targeting.lua`. If [`ic_far_manualInteractions`](../resources/fire-alarm-reborn/config.md#manual-interactions-targetthird-eye-resource-support) is enabled, check this file carefully.
- Pre-created alarm locations are downloaded separately from the resource. Update those separately if you use them.

### Station Alert

- Station Location draft files should live in another resource, not inside `inferno-station-alert`. Do not delete your location resource when updating Station Alert.
- If you have custom tones or turnout audio in `ui/assets`, keep those files and hand-merge [`ic_sa_tones`](../resources/station-alert/config.md#alert-tone-sounds).
- Inventory and targeting support use `editable/client/inventory.lua`, `editable/server/inventory.lua`, and `editable/client/targeting.lua`. Hand-merge these if you use Ox, QB, or another integration.
- Dispatch, Pager Reborn, Fire Alarm Reborn, and other integrations commonly rely on `editable/server/events.lua` or files under `editable/server`. Keep your custom changes.

### Flares

- Manual interaction support uses `editable/client/targeting.lua` and the server inventory editable. Keep any Ox, QB, or custom third-eye/inventory changes.
- If you changed IFlares' `flare-types.json` or `flash-patterns.json` yourself, keep and hand-merge those files so your custom flare names, models, RGB values, and flash timings are not lost.
- If you edited textures, keep your edited texture files when replacing the rest of the resource.

### Torches

- Torches uses `config.json`; hand-merge any new options and validate the JSON before starting the server.
- If you created Ped or MP Ped torch presets with the tool, keep those entries in the `peds` and `mpped` config sections when merging.
- Inventory support uses `editable/server/inventory.lua`, so keep any OxInventory, QBInventory, or custom inventory code.

### Spotlight

- Spotlight uses `config.json`; hand-merge new options and validate the JSON before starting the server.
- Keep custom vehicle entries in `VehicleExtras`, `VehicleMods`, `VehiclePersistents`, `VehicleSpotlightIgnores`, and any custom RGB spotlight color entries.
- If an update changes vehicle config structure, rebuild or adjust your custom entries using the Spotlight developer docs before starting the server.

### Hands-Free Siren

- Hands-Free Siren uses `config.json`; hand-merge new options and validate the JSON before starting the server.
- Keep any custom base-game siren, server-sided siren, horn, vehicle override, and audio entry changes when merging.
