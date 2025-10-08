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
### My config isn't loading / "Error reading configuration from file, contents are invalid. Reverting to default configuration values."
You have one or more syntax errors in your `config.json`, use a website [like this](https://jsonformatter.org/) to check the file.

***

### How do I create presets for my MP/Peds
You can create presets using the in-game tool. [See here](../developers) for more info.

***

### The light/corona isn't following the ped properly
Due to the way the GTA V Ped skeleton moves, the torch corona and/or light source may not always follow the ped movements exactly.  
For example, while climbing, rolling, etc. Generally, it "catches up" very quickly.
