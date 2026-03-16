---
sidebar_position: 30
---

# Exports

These pages document the available client and server exports for PR.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
***
## How to Use

When using exports with PR, it is important to call them exactly as shown below:

```lua
exports["inferno-pager-reborn"]:exportNameHere(param1, param2)
```

You must put the resource name in square brackets and quotations, followed by a colon and the export name.
You **cannot** write `exports.inferno-pager-reborn`, and you **cannot** use a period (`.`) after the square brackets.
See the examples below:

```lua
exports["inferno-pager-reborn"]:hasPager(player) -- CORRECT

exports["inferno-pager-reborn"].hasPager(player) -- WRONG
                               ^
exports.inferno-pager-reborn:hasPager(player) -- WRONG
       ^
exports.inferno-pager-reborn.hasPager(player) -- WRONG
       ^                    ^
```
