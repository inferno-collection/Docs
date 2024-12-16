---
sidebar_position: 30
---

# Exports

These pages document the available client and server exports for FAR.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
***
## How to Use

When using exports with FAR, it is important to call them exact as shown below:

```lua
exports["inferno-fire-alarm-reborn"]:exportNameHere(param1, param2)
```

You must put the resource name in square brackets and quotations, followed by a colon and the export name.
You **cannot** write `exports.inferno-fire-alarm-reborn`, and you **cannot** use a period (`.`) after the square brackets.
See the examples below:

```lua
exports["inferno-fire-alarm-reborn"]:getAlarmSystemNearPosition(position) -- CORRECT

exports["inferno-fire-alarm-reborn"].getAlarmSystemNearPosition(position) -- WRONG
                                    ^
exports.inferno-fire-alarm-reborn:getAlarmSystemNearPosition(position) -- WRONG
       ^
exports.inferno-fire-alarm-reborn.getAlarmSystemNearPosition(position) -- WRONG
       ^                         ^
```
