---
sidebar_position: 15
---

# Creating Custom Skins

Fire Alarm Reborn's control panel skin is made from two files in `ui/assets`:

- A `.png` file, which is the visible control panel body.
- A `.xml` file, which tells Fire Alarm Reborn where the buttons, LEDs, screen text, and other UI elements sit on top of that image.

The easiest way to make the XML file is to use the Inferno Canvas Editor:

- Short/embed URL: [http://inferno.codes/ca](http://inferno.codes/ca)
- Full URL: [https://inferno-collection.com/canvas-editor/](https://inferno-collection.com/canvas-editor/)

:::warning
Fire Alarm Reborn does not currently support multiple selectable control panel skins. Custom files replace the existing panel XML and image files, so make a backup of the original files before making changes.
:::

:::info
This page only covers Fire Alarm Reborn control panel skins. Pager Reborn uses the same editor, but supports multiple configured skins and has different runtime element IDs.
[See here](../../pager-reborn/developers/skins.md) for information on creating customer Pager Skins.
:::

## Before You Start

Create the control panel artwork first, ideally a transparent PNG.

Before replacing anything, copy the existing files somewhere safe:

```text
ui/assets/panel.png
ui/assets/panel.xml
```

Keep that backup outside the resource folder, or rename it clearly, so you can restore the default panel if your custom layout needs more work.

## Create a New Skin

1. Open the [Canvas Editor](https://inferno-collection.com/canvas-editor/).
2. Click "Create New".
3. Select "Fire Alarm Reborn Skin".
4. Choose the PNG image for your new control panel.
5. Click "Create Scene".

The editor loads the Fire Alarm Reborn template, places your image behind it, and shows every editable element in the Elements list.

The editor automatically sizes the viewport from the first image in the XML. If the canvas size is wrong, update the "Viewport" width and height fields and click "Apply".

:::tip
By default, all elements are shown at once; we recommend using the "Hide All" button on the right-hand side panel, then showing only the element group you are currently positioning.
:::

## Move the Runtime Elements

The Fire Alarm Reborn template contains the elements the resource updates while players use the control panel. You can move and resize them, but the `id` values need to stay the same.

Use the Elements list to select an item, or click it directly on the canvas. The Selected panel lets you edit its `x`, `y`, `width`, `height`, text preview, and text alignment where applicable.

| Type               | IDs                                                                                                                                                               | Purpose                                                    |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| Main buttons       | `fires`, `menu`, `isolate`, `faults`                                                                                                                              | Clickable areas for the top-level panel menus.             |
| Direction buttons  | `up`, `down`, `left`, `right`, `center`                                                                                                                           | Clickable areas for navigating panel menus and selections. |
| Bottom buttons     | `sound_alarm`, `silence_alarm`, `silence_buzzer`, `test`, `reset`, `function_one`, `function_two`                                                                 | Clickable areas for panel actions.                         |
| LEDs               | `led_fire_1`, `led_fire_2`, `led_power`, `led_alarm`, `led_buzzer`, `led_monitoring`, `led_delays`, `led_disabled`, `led_faults`, `led_isolated`, `led_walk_test` | Indicator lights shown or hidden depending on panel state. |
| Center text        | `center_1_1`, `center_1_2`, `center_2_1_1`, `center_2_1_2`                                                                                                        | Main screen text layouts.                                  |
| Passcode and menus | `passcode_top`, `passcode_bottom`, `main_menu_options`                                                                                                            | Text used while entering passcodes and browsing menus.     |
| Fire list text     | `fire_top_left_1`, `fire_top_left_2`, `fire_top_right`, `fire_bottom_left`, `fire_bottom_middle`, `fire_bottom_right`                                             | Text used for alarm/fire information.                      |

## Button Behavior

The same clickable ID can do different things depending on which screen the control panel is showing. If a button is not handled on the current screen, the panel plays a negative tone and does nothing else.

| Button ID                      | What it does                                                                                                                                                                                                                                               |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `center`                       | Opens the passcode screen from Home. On the passcode screen, it confirms the current passcode input. In the main menu, it selects the highlighted menu option. In fire review, it acknowledges the selected alarm if it has not already been acknowledged. |
| `up`, `down`                   | Used on the passcode screen. These do not navigate the main menu or fire review screen.                                                                                                                                                                    |
| `left`, `right`                | Used on the passcode screen. In the main menu, they cycle menu options. In fire review, they cycle active alarms.                                                                                                                                          |
| `menu`                         | Returns to Home from the passcode and main menu screens. In walk test mode, it exits walk test. It does nothing from Home.                                                                                                                                 |
| `fires`                        | From Home or the main menu, it shows a "no active alarms" message when there are no fires. From the active Fires screen, it opens fire review. In fire review, it cycles active alarms.                                                                    |
| `faults`                       | From Home or the main menu, it shows a "no active faults" message when there are no faults. It does not currently open a fault review workflow.                                                                                                            |
| `sound_alarm`                  | On the active Fires screen or fire review screen, it sounds alarms again if alarms are currently silenced. Otherwise it does nothing.                                                                                                                      |
| `silence_alarm`                | On the active Fires screen or fire review screen, it silences alarms if alarms are currently sounding. Otherwise it does nothing.                                                                                                                          |
| `silence_buzzer`               | On the active Fires screen or fire review screen, it silences the panel buzzer if the buzzer is currently sounding. Otherwise it does nothing.                                                                                                             |
| `reset`                        | Only works in fire review. It attempts a system reset when there is an active fire state; unacknowledged or unisolated alarms can prevent the reset.                                                                                                       |
| `isolate`                      | Only works in fire review. It toggles isolation for the selected alarm, except water flow alarms cannot be isolated from the panel.                                                                                                                        |
| `test`                         | From Home, it opens the test screen if passcodes are disabled; otherwise it prompts the user to log in. From the main menu, it opens the test screen.                                                                                                      |
| `function_one`, `function_two` | These are unprogrammed. Pressing them from Home or the main menu shows the unprogrammed response; on other screens they do nothing.                                                                                                                        |

The main menu options selected with `left`, `right`, and `center` are Walk Test, Test, monitoring enable/disable, system enable/disable, announce test, and announce all clear.

## Editing Tips

- Turn on "Highlight all elements" when you need to see every text, image, shape, and clickable area at once.
- Use the per-type "Show All" and "Hide All" to focus on one type of element, such as only `Text`, `Shape`, or `Clickable`.
- Drag an element to move it. Alignment guides appear when it lines up with nearby elements.
- Drag a corner handle to resize one selected element. Images and text keep their aspect ratio unless you hold Shift.
- Drag on empty canvas space to select multiple visible elements.
- Use "Undo" or `Ctrl+Z` to step back through edits.
- Use the XML panel to compare the loaded XML with the generated output.

For text elements, the preview text is only there to help you position the element. Fire Alarm Reborn replaces that text at runtime. Make the preview text long enough to test how the screen will handle realistic alarm and menu content.

## Images and Asset Paths

The editor writes image references in the output XML as `assets/filename.ext` (e.g., `assets/panel.png`).

For Fire Alarm Reborn, those files need to exist in the resource's `ui/assets` folder. This includes the main panel PNG and any additional images referenced by the XML.

When creating a new Fire Alarm Reborn skin from the template, the default XML references:

```text
assets/panel.png
```

If you replace the panel image in the editor, copy the replacement file into `ui/assets` and make sure the generated XML points to the same file name.

:::tip
Because FAR does not have a skin list like Pager Reborn, the practical path is to keep the expected `panel.png` and `panel.xml` names. If you use a different image file name inside the XML, confirm that image also exists in `ui/assets`.
:::

## Edit the Existing Panel

To edit the existing panel, package the current panel XML and its referenced image files into a ZIP, then click "Edit Existing" in the Canvas Editor and load that ZIP.

The editor looks for an XML file in the ZIP. If `scene.xml` exists, it will use that first; otherwise it uses the shortest XML path it finds. Image files in the ZIP are mapped by path and file name so the XML can render correctly.

When you download the edited XML, the editor appends `-edited` to the original XML file name. Rename it back to `panel.xml` before putting it in `ui/assets`.

## Download and Install

1. Confirm you have backed up the original `ui/assets/panel.xml` and `ui/assets/panel.png`.
2. Click "Download XML".
3. Rename the XML to `panel.xml`.
4. Rename your panel image to `panel.png`, unless your XML intentionally references a different image file.
5. Replace the existing files in `inferno-fire-alarm-reborn/ui/assets`.
6. Restart Fire Alarm Reborn and test the control panel in-game.

If the panel does not look right, restore your backed-up `panel.xml` and `panel.png`, then return to the Canvas Editor and adjust the layout.

## Quick Checklist

Before testing in-game, confirm:

- The original `panel.xml` and `panel.png` have been backed up.
- The replacement XML is named `panel.xml`.
- The replacement PNG is named `panel.png`, or the XML points to the intended file name.
- All `<Image src="assets/...">` files referenced by the XML exist in `ui/assets`.
- The button IDs still match the Fire Alarm Reborn template.
- The LED IDs still match the Fire Alarm Reborn template.
- The text IDs still match the Fire Alarm Reborn template.
