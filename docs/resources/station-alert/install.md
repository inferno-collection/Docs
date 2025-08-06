---
sidebar_position: 10
---

# Installation

Follow the steps below to install SA on your FiveM Server.

## Purchase the Resource
If you have not done so already, you will need to purchase the resource from [our store](https://store.inferno-collection.com/).

## Download from Cfx.re Keymaster
1. Go to [this url](https://portal.cfx.re/assets/granted-assets?search=Inferno+Collection).
2. Click 'Sign in'.
3. Sign in with the same Cfx.re account you used to purchase the resource.
4. Download the item created by `ChristopherM`, named `Station Alert - Inferno Collection`.

## Installing the resource
1. In your Downloads folder on your computer, extract the file, then locate the folder named `[inferno-collection]` and copy it.
2. Go to the server's "resources" folder, or wherever you normally place resources.
3. Paste the entire folder.
   :::tip
   If you have previously downloaded our resources, and already have a folder named `[inferno-collection]`, you can still paste the new folder; the files will merge as required.
   :::
4. Go to your `server-data` folder and open your `server.cfg` file, at the very top add the following: `exec @inferno-station-alert/config.cfg`
   :::note
   If you have other entries starting with `exec` (such as for vMenu's `permissions.cfg` file), you can put these together.
   :::
5. If you have not already, add `ensure [inferno-collection]` somewhere in your `server.cfg`.
6. Save and close your `server.cfg`.

## Optional - Install Pre-Created Locations
:::note
Pre-created locations are generously create and provided by the community.  
If the MLOs/Interiors you use are not available, you can create them using the [SA Tool](developers/tool.md), and then optionally [provide them for others](https://github.com/inferno-collection/Station-Locations) to use!
:::

1. [Download the files](https://github.com/inferno-collection/Station-Locations/releases/latest) from GitHub.
2. Go to the server's "resources" folder, or wherever you normally place resources.
3. Paste the entire folder.
   :::tip
   If you have previously downloaded our resources, and already have a folder named `[inferno-collection]`, you can still paste the new folder; the files with merge as required.
   :::
