# Prop Textures

This page covers the editable textures in FAR.

While the models of the props included with FAR are protected with Escrow, the texture dictionaries (a.k.a. the YTD files) are not, and can be freely edited.
See the information below for an explanation of each texture and what is it used for.

## Detector

### `detector_body_d`
This texture is used to color the entire Detector, except for the red LED.

Used on:
- `prop_ic_detector`
- `prop_ic_detector_triggered`

:::note
Unlike other `*_d` files, this is not a true diffuse map, and can only be used to make the Detector a solid color.
:::


### `detector_bulb_d`
This texture is used to color the red LED on the Detector.

Used on:
- `prop_ic_detector_triggered`

:::note
Unlike other `*_d` files, this is not a true diffuse map, and can only be used to make the Detector's LED a solid color.
:::

***

## Control Panel

### `fire_panel_alarm_d`
This texture is used for the screen of the Control Panel when it is in alarm.

Used on:
- `prop_ic_fire_panel_alarm`

:::tip
This texture has a matching entry in the `hi` YTD file.
:::

### `fire_panel_d`
This texture is used for the screen of the Control Panel when it is in standby.

Used on:
- `prop_ic_fire_panel`

:::tip
This texture has a matching entry in the `hi` YTD file.
:::


### `fire_panel_frame_d`
This texture is used for the metal frame that encompasses the Control Panel screen.

Used on:
- `prop_ic_fire_panel`
- `prop_ic_fire_panel_alarm`


### `fire_panel_frame_n`
This texture is a normal/bump map for the metal frame that encompasses the Control Panel screen.

Used on:
- `prop_ic_fire_panel`
- `prop_ic_fire_panel_alarm`


### `fire_panel_leds_d`
This texture is used for the LEDs on the Control Panel screen.

Used on:
- `prop_ic_fire_panel`
- `prop_ic_fire_panel_alarm`

***

## Pull Station

### `pull_station_d`
This texture is a diffuse texture applied to the Pull Station.

Used on:
- `prop_ic_pull_station`
- `prop_ic_pull_station_pulled`

:::tip
This texture has a matching entry in the `hi` YTD file.
:::


### `pull_station_n`
This texture is a normal/bump map for the Pull Station.

Used on:
- `prop_ic_pull_station`
- `prop_ic_pull_station_pulled`


### `pull_station_s`
This texture is a specular map for the Pull Station.

Used on:
- `prop_ic_pull_station`
- `prop_ic_pull_station_pulled`

***

## Sounder

### `sounder_d`
This texture is a diffuse texture applied to the Sounder.

Used on:
- `prop_ic_sounder`


### `sounder_n`
This texture is a normal/bump map for the Sounder.

Used on:
- `prop_ic_sounder`


### `sounder_s`
This texture is a specular map for the Sounder.

Used on:
- `prop_ic_sounder`

***

## Sprinkler

### `sprinkler_bulb_d`
This texture is used to color the red bulb/vial on the Sprinkler.

Used on:
- `prop_ic_sprinkler`

:::note
Unlike other `*_d` files, this is not a true diffuse map, and can only be used to make the Sprinkler's bulb a solid color.
:::

### `sprinkler_d`
This texture is a diffuse texture applied to the Sprinkler.

Used on:
- `prop_ic_sprinkler`
- `prop_ic_sprinkler_triggered`

## Strobe

### `strobe_d`
This texture is a diffuse texture applied to the Strobe.

## Miscellaneous

### `bump_n`
This texture is a normal/bump map that is reused across multiple props, we suggest not editing this texture.

Used on:
- `prop_ic_fire_panel_alarm`
- `prop_ic_fire_panel`
- `prop_ic_strobe`

### `glass_d`
This texture is a glass texture reused across multiple props, we suggest not editing this texture.

Used on:
- `prop_ic_fire_panel_alarm`
- `prop_ic_fire_panel`
- `prop_ic_strobe`

### `glass_s`
This texture is a glass specular map that is reused across multiple props, we suggest not editing this texture.

Used on:
- `prop_ic_fire_panel_alarm`
- `prop_ic_fire_panel`
- `prop_ic_strobe`
