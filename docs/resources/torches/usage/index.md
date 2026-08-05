---
sidebar_position: 30
---

# Usage

These pages explain how to use Torches.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

## FAQs
### My config isn't loading / "The config.cfg file has not been executed correctly"
Torches reads its settings from `config.cfg`. Confirm that your `server.cfg` contains `exec @inferno-torches/config.cfg` before the resource is started, as described in the [installation guide](../install.md).

If the problem continues, compare your file with the [default configuration](../config.md#default-config-file) and check any JSON objects inside `config.cfg` for valid syntax.

***

### How do I create presets for my MP/Peds
You can create presets using the in-game tool. [See here](../developers/tool.md) for more info.

***

### The light/corona isn't following the ped properly
Due to the way the GTA V Ped skeleton moves, the torch corona and/or light source may not always follow the ped movements exactly.  
For example, while climbing, rolling, etc. Generally, it "catches up" very quickly.

***

### My preset isn't loading
Confirm that the matching Ped or MP Ped preset is in `torches.json`, that its mount and clothing or prop target match the current Ped, and that the resource has been restarted after changing the file. You can use the [Torch Tool](../developers/tool.md) to edit the preset and check its placement.
