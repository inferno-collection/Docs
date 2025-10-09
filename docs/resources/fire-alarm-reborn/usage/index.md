---
sidebar_position: 30
---

# Usage

These pages explain how to use FAR.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

## FAQs
### Only some or none of the sounds are playing / "Failed to load audio bank after 5 seconds"

FAR uses Native 3D Audio, this means there are game engine limits that cannot be exceeded.  
The two relevant limits are the 10 Wavepack Limit, and the 214 Custom Sound Limit.  
If either or both of these limits are exceeded, you will be unable to load FAR sounds.

:::tip
The two limits apply regardless of the other. For example, if you only have 2 Wavepacks, but 100 sounds in each, you would still only have 14 sounds left over (100 + 100 = 200, 214 - 200 = 14).
:::

By far the most common cause of the limit being exceeded is excessive use of server sided siren scripts.  
If you use a server sided siren script, ensure you are only loaded Wavepacks you are using; do not load every single siren.

To resolve this issue, you will need to either:

1. Ensure resources are unloading sounds when finished with them (by calling `ReleaseNamedScriptAudioBank()`).
   - Some scripts forget or don't know to do this.

2. Edit or remove other scripts using Wavepacks.
   - Even if a script is escrowed, you can check if a script using it by searching for `AUDIO_WAVEPACK` in the `fxmanifest.lua`.

***

### My config isn't loading / "The config.cfg file has not been executed correctly, please check the documentation!"
FAR using convars stored in a `config.cfg` file - unlike other resources, you need to "execute" the config file before they will take effect.  
[See here](../install.md#installing-the-resource) for more info.

***

### I made changes to the config and restarted the resource, but nothing changed
FAR using convars stored in a `config.cfg` file - unlike other resources, you need to "execute" the config file before they will take effect.  
When you restart the resource without re-executing the config, the resource will re-read the previous values.  
You either need to re-execute the config via the server console, or restart your server.  
The command for the console can be found [here](../install.md#installing-the-resource).

***

### How do I change the sounds
To replace the sounds FAR uses, you will need to edit the Audio Wave Container (`.awc`) file, and Dat 54 (`.dat54`) file.  
You can read a guide about how to do this [here](https://github.com/ChatDisabled/nativeAudio/tree/master/SimpleSound).  
For assistance, join our [Discord](https://inferno.codes/discord).

***

### How do I add more locations / How do I load my drafts?
Information on the FAR Tool can be found [here](../developers/tool.md).
