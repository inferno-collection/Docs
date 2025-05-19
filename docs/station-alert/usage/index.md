---
sidebar_position: 30
---

# Usage

These pages explain how to use SA.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

## FAQs
### My config isn't loading / "The config.cfg file has not been executed correctly, please check the documentation!"
SA using convars stored in a `config.cfg` file - unlike other resources, you need to "execute" the config file before they will take effect.  
[See here](../install.md#installing-the-resource) for more info.

***

### I made changes to the config and restarted the resource, but nothing changed
SA using convars stored in a `config.cfg` file - unlike other resources, you need to "execute" the config file before they will take effect.  
When you restart the resource without re-executing the config, the resource will re-read the previous values.  
You either need to re-execute the config via the server console, or restart your server.  
The command for the console can be found [here](../install.md#installing-the-resource).

***

### How do I add more locations / How do I load my drafts?
Information on the SA Tool can be found [here](../developers/tool.md).

***

### I can see my locations in Sonoran CAD, but sending Alerts does nothing
Ensure Push Events are enabled, you can check by going to:  
Admin > Advanced > In-Game Integration > Live Map

:::note
Push Events require a Sonoran Plus subscription or higher. [See here](https://info.sonorancad.com/pricing/faq) for more info.
:::

Above your server(s) name, IP, and port, there should be a green button labeled "ENABLED".  
If you see a red button labeled "DISABLED", try clicking the button to enable it.  
For further assistance with Sonoran CAD, contact Sonoran Support [here](https://support.sonoransoftware.com/).

***

### How do I integrate SA with XYZ resource?
For documented integrations, see here.  
If your resource is not listed, contact us on [Discord](https://inferno.gay/discord) for support.

***

### My location has loaded, but I can't see select it / My location has loaded, but it's not showing in Sonoran
If your location has loaded successfully but is not appearing as an option to Alert, it may have been loaded as a [Dispatch Center](components.md#dispatch-centers).  
You can confirm this by either:

1. Restarting your server and watching the server console for the following log entry:
	- ```
   		Location "XYZ" has no lights and/or doors, it will be treated as a Dispatch Center.
   		```

2. Typing the following command into the server console, then checking the output:
    - Command:
	  ```
	  stationalert health
	  ```
   - Output:
	  ```
	  =====
	  Station Alert - Health Check
	  =====
  	  (...)
  
  	  =====
	  Station Alert - Station Names
	  =====
	  (...)
  	  XYZ (DC: true)
	  ```

To prevent a location from being treated as a Dispatch Center, add a light or a door.
