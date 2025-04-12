---
sidebar_position: 30
---

# Exports

These pages document the available client and server exports for SA.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
***
## How to Use

When using exports with SA, it is important to call them exactly as shown below:

```lua
exports["inferno-station-alert"]:exportNameHere(param1, param2)
```

You must put the resource name in square brackets and quotations, followed by a colon and the export name.
You **cannot** write `exports.inferno-station-alert`, and you **cannot** use a period (`.`) after the square brackets.
See the examples below:

```lua
exports["inferno-station-alert"]:getAllLocations(position) -- CORRECT

exports["inferno-station-alert"].getAllLocations(position) -- WRONG
                                    ^
exports.inferno-station-alert:getAllLocations(position) -- WRONG
       ^
exports.inferno-station-alert.getAllLocations(position) -- WRONG
       ^                         ^
```
