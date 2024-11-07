---
sidebar_position: 1
---

# Installation

Follow the steps below to install FAR onto your FiveM Server.

## Purchase the Resource
If you have not done so already, you will need to purchase the resource from [our store](https://store.inferno-collection.com/).

## Download from Cfx.re Keymaster
1. Go to [this url](https://keymaster.fivem.net/asset-grants).
2. Click 'Sign in'.
3. Sign in with the same Cfx.re account you used to purchase the resource.
4. In the search bar, type `inferno-collection`.
5. Download the item created by `ChristopherM`, named `inferno-collection-fire-alarm-reborn`.

## Installing the resource
1. In your Downloads folder on your computer, extract the file, then locate the folder named `[inferno-collection]` and copy it.
2. Go to the server's "resources" folder, or wherever you normally place resources.
3. Paste the entire folder.
   :::note
   If you have previously downloaded our resources, and already have a folder named `[inferno-collection]`, you can still paste the new folder; the files with merge as required.
   :::
4. Open `[inferno-collection]`, then open `inferno-fire-alarm-reborn`; inside you will see a file named `far.cfg`, copy this file.
5. Go to your "server-data" folder, or wherever your `server.cfg` file is located; paste the `far.cfg` file here.
6. Open your `server.cfg` file, at the very top add the following: `exec far.cfg`
   :::note
   If you have other entries starting with `exec` (such as for vMenu's `permissions.cfg` file), you can put these together.
   :::
7. Save and close your `server.cfg`.
