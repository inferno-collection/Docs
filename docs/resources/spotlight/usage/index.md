---
sidebar_position: 30
---

# Usage

These pages explain how to use Spotlight.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

## FAQs
### My config isn't loading / "The config.cfg file has not been executed correctly, please check the documentation!"
Spotlight convars are stored in a `config.cfg` file - unlike other resources, you need to "execute" the config file before they will take effect. [See here](../install.md#installing-the-resource) for more info.

***

### I made changes to the config and restarted the resource, but nothing changed
Spotlight uses convars stored in a `config.cfg` file - unlike other resources, you need to "execute" the config file before they will take effect. When you restart the resource without re-executing the config, the resource will re-read the previous values. You either need to re-execute the config via the server console, or restart your server. The command for the console can be found [here](../install.md#installing-the-resource).

***

### How do I make the vehicle extras/modkits change with the spotlight?
Use the [Spotlight Tool](../developers/tool.md), for more info [see here](../developers/tool.md).

***

### I'm modeling a vehicle, how do I make it compatible with Spotlight?
[See here](../developers).
