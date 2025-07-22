---
sidebar_position: 10
---

# Flash Patterns
This page explains how to edit the `flash-patterns.json` file in IF.

## Structure
An entry can contain the following parameters:

- `Name`
  - The human-readable name that will display in the menu.
- `Red`
  - A value from `0` to `255`. [See here](#rgb) for more info.
- `Green`
  - A value from `0` to `255`. [See here](#rgb) for more info.
- `Blue`
  - A value from `0` to `255`. [See here](#rgb) for more info.
- `NoLight`
  - When `true`, `Red`, `Green`, & `Blue` are ignored, and for the length of `duration` no light is produced.
  - Use this to add gaps in your flash patterns.
  - Default is `false`, and does not need to be included when `Red`, `Green`, & `Blue` are provided.
- `Duration`
  - How long this flash should last in milliseconds.
  - When value is `-1`, the `Red`, `Green`, & `Blue` values are used to create a solid color.

## RGB
To get the RGB (Red, Green, & Blue) values for the color you want, use [this tool](https://g.co/kgs/9aAhTDC).

## Editing entries
To add a new entry, copy an existing entry, then paste it at the bottom of the array and edit as required.  

:::warning
JSON syntax is important: missing `,`s, `[]`s, etc. will break the file. Check your JSON syntax with [this website](https://jsonformatter.org/).
:::

## Default Flash Patterns

```json showLineNumbers
[
  {
    "Name": "Red/Blue Flash",
    "Entries": [
      {
        "Red": 255,
        "Green": 0,
        "Blue": 0,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      },
      {
        "Red": 0,
        "Green": 0,
        "Blue": 255,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      }
    ]
  },

  {
    "Name": "Red Red/Blue Blue Flash",
    "Entries": [
      {
        "Red": 255,
        "Green": 0,
        "Blue": 0,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      },
      {
        "Red": 255,
        "Green": 0,
        "Blue": 0,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      },
      {
        "Red": 0,
        "Green": 0,
        "Blue": 255,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      },
      {
        "Red": 0,
        "Green": 0,
        "Blue": 255,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      }
    ]
  },

  {
    "Name": "Red Flash",
    "Entries": [
      {
        "Red": 255,
        "Green": 0,
        "Blue": 0,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      }
    ]
  },

  {
    "Name": "Blue Flash",
    "Entries": [
      {
        "Red": 0,
        "Green": 0,
        "Blue": 255,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      }
    ]
  },

  {
    "Name": "Red Solid",
    "Entries": [
      {
        "Red": 255,
        "Green": 0,
        "Blue": 0,
        "Duration": -1
      }
    ]
  },

  {
    "Name": "Blue Solid",
    "Entries": [
      {
        "Red": 0,
        "Green": 0,
        "Blue": 255,
        "Duration": -1
      }
    ]
  },

  {
    "Name": "Road Works Flash",
    "Entries": [
      {
        "Red": 160,
        "Green": 120,
        "Blue": 0,
        "Duration": 500
      },
      {
        "NoLight": true,
        "Duration": 500
      }
    ]
  },

  {
    "Name": "Road Works Slow",
    "Entries": [
      {
        "Red": 160,
        "Green": 120,
        "Blue": 0,
        "Duration": 1000
      },
      {
        "NoLight": true,
        "Duration": 1000
      }
    ]
  },

  {
    "Name": "Road Works Solid",
    "Entries": [
      {
        "Red": 160,
        "Green": 120,
        "Blue": 0,
        "Duration": -1
      }
    ]
  },

  {
    "Name": "Hazard",
    "Entries": [
      {
        "Red": 160,
        "Green": 120,
        "Blue": 0,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      },
      {
        "Red": 255,
        "Green": 255,
        "Blue": 255,
        "Duration": 150
      },
      {
        "NoLight": true,
        "Duration": 150
      }
    ]
  },

  {
    "Name": "Command Point",
    "Entries": [
      {
        "Red": 0,
        "Green": 120,
        "Blue": 0,
        "Duration": 1000
      },
      {
        "NoLight": true,
        "Duration": 1000
      }
    ]
  },

  {
    "Name": "Water Point",
    "Entries": [
      {
        "Red": 0,
        "Green": 120,
        "Blue": 0,
        "Duration": 350
      },
      {
        "NoLight": true,
        "Duration": 350
      }
    ]
  },

  {
    "Name": "White Strobe",
    "Entries": [
      {
        "Red": 255,
        "Green": 255,
        "Blue": 255,
        "Duration": 50
      },
      {
        "NoLight": true,
        "Duration": 50
      }
    ]
  },

  {
    "Name": "White Solid",
    "Entries": [
      {
        "Red": 255,
        "Green": 255,
        "Blue": 255,
        "Duration": -1
      }
    ]
  }
]
```
