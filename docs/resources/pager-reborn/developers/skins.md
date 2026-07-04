---
sidebar_position: 15
---

# Creating Custom Skins

Pager Reborn skins are made from two files in `ui/assets`:

- A `.png` file, which is the visible pager body.
- A `.xml` file, which tells Pager Reborn where the buttons, screen text, icons, and other UI elements sit on top of that image.

The easiest way to make the XML file is to use the Inferno Canvas Editor: [https://inferno-collection.com/canvas-editor/](https://inferno-collection.com/canvas-editor/)

:::info
This page only covers Pager Reborn skins. Fire Alarm Reborn skins use the same editor, but a different template and different runtime element IDs.
[See here](../../fire-alarm-reborn/developers/skins.md) for information on creating customer Fire Alarm Skins.
:::

## Before You Start

Create the pager artwork first, ideally a transparent PNG.

Pick a lowercase file name without spaces, for example `county_pager`. When the skin is installed, the resource should have:

```text
ui/assets/county_pager.png
ui/assets/county_pager.xml
```

The value used in [`ic_pr_skins`](../config.md#skins) must match that file name without the extension.

## Create a New Skin

1. Open the [Canvas Editor](https://inferno-collection.com/canvas-editor/).
2. Click "Create New".
3. Select "Pager Reborn Skin".
4. Choose the PNG image for your new pager.
5. Click "Create Scene".

The editor loads the Pager Reborn template, places your image behind it, and shows every editable element in the Elements list.

The editor automatically sizes the viewport from the first image in the XML. If the canvas size is wrong, update the "Viewport" width and height fields and click "Apply".

:::tip
By default, all elements are shown at once; we recommend using the "Hide All" button on the right-hand side panel, then showing only the element group you are currently positioning.
:::

## Move the Runtime Elements

The Pager Reborn template contains the elements the resource updates while players use the pager. You can move and resize them, but the `id` values need to stay the same.

Use the Elements list to select an item, or click it directly on the canvas. The Selected panel lets you edit its `x`, `y`, `width`, `height`, text preview, and text alignment where applicable.

| Type              | IDs                                                                                                                            | Purpose                                                          |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Buttons           | `button_up`, `button_down`, `button_left`, `button_right`, `button_red`, `button_green`                                        | Clickable areas for the pager controls.                          |
| Home screen icons | `image_folder_read_*`, `image_folder_unread_*`, `image_sound_on`, `image_sound_off`, `image_battery`                           | Icons that Pager Reborn shows or hides depending on pager state. |
| Home screen text  | `text_folder_total_count`, `text_folder_selection`, `text_unread_count`, `text_time`, `text_date`                              | Text shown on the pager home screen.                             |
| Message list text | `text_folder_list_0`, `text_folder_list_1`, `text_folder_list_2`                                                               | The visible message rows in a folder.                            |
| Message text      | `text_page_message_date`, `text_page_message_0`, `text_page_message_1`, `text_page_message_2`                                  | The opened page date/time and message body lines.                |
| Menu text         | `text_menu_title`, `text_menu_selector`, `text_alert_settings_title`, `text_alert_settings_folder`, `text_alert_settings_tone` | Main menu and alert settings menu labels.                        |

## Button Behavior

The same clickable ID can do different things depending on which screen the pager is showing. If a button is not handled on the current screen, it does nothing.

| Button ID      | What it does                                                                                                                                                                                                                                                                                                                |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `button_left`  | On the Home screen, cycles the selected folder/nature backwards through Emergency, Non-Emergency, and Administrative. In the main menu, cycles the selected menu option backwards. In Alert Settings, it changes the selected folder or tone backwards. It does nothing on message list and opened message screens.         |
| `button_right` | On the Home screen, cycles the selected folder/nature forwards through Emergency, Non-Emergency, and Administrative. In the main menu, cycles the selected menu option forwards. In Alert Settings, it changes the selected folder or tone forwards. It does nothing on message list and opened message screens.            |
| `button_up`    | In Alert Settings, moves between the Folder and Tone rows. In the message list, moves the selected message up, wrapping to the bottom. On an opened message, it jumps back to the first page of text when the message is long enough to scroll. It does nothing on Home and the main menu.                                  |
| `button_down`  | In Alert Settings, moves between the Folder and Tone rows. In the message list, moves the selected message down, wrapping to the top. On an opened message, it scrolls forward through long message text. It does nothing on Home and the main menu.                                                                        |
| `button_green` | On Home, opens the selected folder's message list if that folder has messages. In the message list, opens the selected message. On an opened message, it scrolls forward through long message text, the same as `button_down`. In the main menu, it selects the highlighted menu option. It does nothing in Alert Settings. |
| `button_red`   | On Home, opens the main menu. In the main menu, returns to Home. In the message list, returns to Home. On an opened message, returns to the message list. In Alert Settings, saves changes and returns to the main menu.                                                                                                    |

The main menu options selected with `button_left`, `button_right`, and `button_green` are Escape, sound/vibration mode, Alert Settings, mark all messages read, delete all messages, and power off. The mark-all-read, delete-all, and power-off options require pressing `button_green` once to show a confirmation prompt, then pressing it again to confirm.

## Editing Tips

- Turn on "Highlight all elements" when you need to see every text, image, and clickable area at once.
- Use the per-type "Show All" and "Hide All" to focus on one type of element, such as only `Text` or only `Clickable`.
- Drag an element to move it. Alignment guides appear when it lines up with nearby elements.
- Drag a corner handle to resize one selected element. Images and text keep their aspect ratio unless you hold Shift.
- Drag on empty canvas space to select multiple visible elements.
- Use "Undo" or `Ctrl+Z` to step back through edits.
- Use the XML panel to compare the loaded XML with the generated output.

For text elements, the preview text is only there to help you position the element. Pager Reborn replaces that text at runtime. Make the preview text long enough to test how the screen will handle realistic page content.

## Images and Asset Paths

The editor writes image references in the output XML as `assets/filename.ext` (e.g., `assets/my_pager.png`).

For Pager Reborn, those files need to exist in the resource's `ui/assets` folder. This includes the main pager PNG and all icon images.

When creating a new Pager Reborn skin from the template, the default XML includes the standard Pager Reborn icon images:

```text
assets/icons/folder_read.png
assets/icons/folder_unread.png
assets/icons/sound_on.png
assets/icons/sound_off.png
assets/icons/battery.png
```

If you keep using those icons, leave them in place. If you replace an image in the editor, copy the replacement file into `ui/assets` and make sure the generated XML points to the same file name.

:::tip
The skin file name in `ic_pr_skins` controls the `.png` and `.xml` pair Pager Reborn loads. The XML can also reference other images, so check every `<Image src="assets/...">` line before packaging the skin.
:::

## Edit an Existing Skin

To edit an existing skin, package the skin XML and its referenced image files into a ZIP, then click "Edit Existing" in the Canvas Editor and load that ZIP.

The editor looks for an XML file in the ZIP. If `scene.xml` exists, it will use that first; otherwise it uses the shortest XML path it finds. Image files in the ZIP are mapped by path and file name so the XML can render correctly.

When you download the edited XML, the editor appends `-edited` to the original XML file name. Rename it back to the skin file name you want to use before putting it in `ui/assets`.

## Download and Install

1. Click "Download XML".
2. Rename the XML to match the PNG file name, for example `county_pager.xml`.
3. Copy both files into `inferno-pager-reborn/ui/assets`.
4. Add the skin to [`ic_pr_skins`](../config.md#skins):

```cfg
setr ic_pr_skins {
	"Legendary Alpha": "legendary_alpha",
	"County Pager": "county_pager"
}
```

The first entry is the default skin for new players. Remove entries you do not want players to select.

## Quick Checklist

Before testing in-game, confirm:

- The PNG and XML are both in `ui/assets`.
- The PNG and XML have the same base file name.
- The `ic_pr_skins` value matches that base file name.
- All `<Image src="assets/...">` files referenced by the XML exist.
