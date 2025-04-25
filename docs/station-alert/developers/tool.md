---
sidebar_position: 1
---

# Tool

This page explains how to create/edit station locations with the SA Tool.

The SA Tool is a powerful in-game feature that allows server owners to create new and edit existing station locations directly from their server.

When using the SA Tool, drafts are saved directly to the server's files, so server owners can delegate creation of station locations to trusted players without having the worry about the hassle of needing to send each other files.

:::tip
You must be in first-person to use the SA Tool.
:::

## First-Time Use

The very first time the SA Tool is used on your server, it will create a new directory in the root of your server files, this is *generally* the same location as your `resources` folder and `server.cfg` file, see the example below:

![Root Directory](assets/tool/root.png)

If you are ever unsure, you can use the `/stationalert path` command from your server console, it will tell you exactly where the directory is located.

## Drafts

### Creating a new Draft

To create a new draft, use the `/stationalert tool new` command.

### Editing an existing Draft

To edit an existing draft, use the `/stationalert tool` command, then make a selection from the list.

:::note
If a new draft is created automatically, then there are no drafts in your draft's directory.
:::

### Saving a Draft

If you created a new draft, you will need to give the draft a name, do this by using the `/stationalert tool <draft_name_here>` command (`<>` not required).

If you are editing an existing draft, you only need to type `/stationalert tool`.

### Discarding a Draft

If you wish to *not* save changes to a draft, you can use the `/stationalert tool cancel` command.

:::danger
This will immediately and irreversibly discard the changes you have made, and you cannot get them back.
:::

### Using a Draft

To use a draft as Station Location, you will need to copy the file from the Drafts folder and place it inside another FiveM resource.  
The draft can be placed in either an existing resource, or a new one, so long as this line is added at the bottom of the `fxmanifest.lua`:

```lua
locations "your_draft_name_here.lua"
```

Making sure to replace `your_draft_name_here` with the name of the draft `.lua` file.

Below is an example of a full `fxmanifest.lua`:
```lua showLineNumbers
fx_version "cerulean"
game "gta5"

locations "davis.lua"

dependency "inferno-station-alert"
```

## In-Game Tool

### Controls 

Below you will find the controls for the SA Tool. They will also display in the top left of your screen.

![Controls](assets/tool/controls.png)

In addition to the above, there are the following:

#### Arrow Keys
The Left and Right arrow keys will rotate the current prop left or right.  
The Up and Down arrow keys will move the current prop closer or further away from you.

:::tip
Holding Left Shift will increase the increment of the above changes.
:::

#### Left Mouse Button

If the bottom of your screen starts with `Place a`, then this will create a new prop of the type you have selected.

If it says `Hide a Prop`, then this will hide the prop highlighted in orange. [See here](#hidden-props).

:::tip
When looking at a previously placed prop (will have a white circle around it), you can Left-Click to move it to a new location.
:::

:::warning
Placing too many Ceiling Speakers can result in very loud, overlapping audio.  
We suggest placing one speaker every 5-10 meters.
:::

#### Right Mouse Button

If the bottom of your screen starts with `Place a`, then this will delete the selected prop.

If it says `Hide a Prop`, then this will unhide the selected prop.

#### Scroll Wheel

This changes between all the prop types, as well as the `Hide a Prop` option.

#### Tilda ( ` )

This creates a new station location.  
You must do this before you are able to place any props.

:::tip
You can have multiple station locations in a single draft.
:::

#### 1 (One)

This cycles through created station locations inside this draft file.

:::warning
If you see the warning below at the bottom of your screen, you are too far from your station location.

![Too far away!](assets/tool/distance.png)
:::

### Hidden Props

When a prop is hidden with the SA Tool, it will not appear in-game. The intention is to allow server owners to remove props that conflict with SA and replace them with SA props.

For example, if you have a MLO you purchased on Tebex, and it contains non-functional warning lights outside the building, you could hide these and replace them with SA Wall Lights.

### Coloured Radii
When in the tool, you may notice coloured radii (or circles) - these represent the approximate range of placed Speakers.  
The aim is to help prevent excess overlap of speakers, and aid in proper coverage of stations.

The colors will only appear when nearby to a Speaker.
