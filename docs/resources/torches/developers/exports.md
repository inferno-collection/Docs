---
sidebar_position: 20
---

# Exports

This pages documents the exports that can be called in Torches.

:::note
These are client-side exports.
:::

***
## How to Use

When using exports with Torches, it is important to call them exactly as shown below:

```lua
exports["inferno-torches"]:exportNameHere(param1, param2)
```

You must put the resource name in square brackets and quotations, followed by a colon and the export name.
You **cannot** write `exports.inferno-torches`, and you **cannot** use a period (`.`) after the square brackets.
See the examples below:

```lua
exports["inferno-torches"]:exportNameHere(param1, param2) -- CORRECT

exports["inferno-torches"].exportNameHere(param1, param2) -- WRONG
                          ^
exports.inferno-torches:exportNameHere(param1, param2) -- WRONG
       ^
exports.inferno-torches.exportNameHere(param1, param2) -- WRONG
       ^               ^
```

***

### Toggle Torch
Call this export to toggle a ped's torch.

#### Export Name
```
toggleTorch
```

#### Return Value
`void`
