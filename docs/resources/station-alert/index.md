---
sidebar_position: 20
---

# Station Alert

A standalone, in-depth Station Alerting script for FiveM, with easy customization and support for multiple languages.

[Click here](https://store.inferno-collection.com/category/sa) to view Tebex Store.

**YouTube Video**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/V0MBgqLFetA?si=TdPrVDRjLnBW1gBG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
***

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

***

## Available Versions
There are two versions of Station Alert, and one [optional addon](usage/tts.md).

### Station Alert
The standalone version of Station Alert is just called "Station Alert" or "Station Alert (Standalone)".  
It supports all features, with some caveats:

- Text-to-Speech is supported, but requires the Voice Turnout Addon ([see here](usage/tts.md)).
- Sonoran CAD is supported, but requires at least the Plus version of Sonoran CAD ([see here](https://sonorancad.com/pricing)).

Station Alert can be purchased [here](https://store.inferno-collection.com/category/sa).

### Station Alert - Sonoran Edition
Sonoran Edition is a lite version of Station Alert that is provided to Sonoran CAD Pro customers for free.  
Some important notes for Sonoran Edition:

- Only works for the lifetime of the subscription.
  - Downgrading or canceling will result in Sonoran Edition ceasing to function.
- Text-to-Speech is included for free for the duration of the Sonoran Pro subscription.
  - Voice Turnout Addon *is not* required.
- Only Sonoran CAD integration works.
  - All other activation types (menu, command, exports, third-party resources, etc.) will not work.

Station Alert - Sonoran Edition can be downloaded [here](https://store.inferno-collection.com/package/station-alert-sonoran-edition).

### Feature Comparison

| Feature                                                                | Station Alert<br/>Sonoran Edition | Station Alert<br/>(Standalone) |
|------------------------------------------------------------------------|:---------------------------------:|:------------------------------:|
| Create Alerts in-game via Menu or Command                              |                 ❌                 |               ✅                |
| Create Alerts and get data via [Exports](developers/exports)           |                 ❌                 |               ✅                |
| Create Alerts and get data via [API](developers/api.mdx)               |                 ❌                 |               ✅                |
| Create Alerts via [Third-Party Resources](developers/third-party.md)      |                 ❌                 |               ✅                |
| Working Traffic Lights, Door Controls, Lights, Speakers, & Call Screen |                 ✅                 |               ✅                |
| [SA Tool](developers/tool.md) for Location creation                    |                 ✅                 |               ✅                |
| Sonoran CAD Support                                                    |                 ✅                 |              ✅\^               |
| Support Text-to-Speech                                                 |                ✅\#                |              ✅\*               |

\^ - Requires the Plus or Pro version of Sonoran CAD.  
\# - Free for the duration of the Sonoran Subscription.  
\* - Requires the Voice Turnout Addon ([see here](usage/tts.md)).

***

## Third-Party Resource Integrations

Below is a list of resources that we have added optional compatibility with, should you wish to connect them with SA.

:::tip
Third-Party Resource Integrations only work with the [Standalone Version](#station-alert-1) of SA.
:::

| Resource                                                                                                                                                             | Features                                                         | How to enable                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------|
| [zFires](https://forum.cfx.re/t/paid-standalone-esx-qbcore-z-fire/5244464?u=christopherm) by Zea                                                                     | - Alert on player started fire<br/>- Alert on automatic incident | [See here](developers/third-party.md#zfires)             |
| [CD_Dispatch](https://forum.cfx.re/t/paid-codesign-police-dispatch/2007097?u=christopherm) by Codesign                                                               | - Alert on notification per job                                  | [See here](developers/third-party.md#cd_dispatch)        |
| [Emergency Dispatch](https://love-rp.tebex.io/package/4887641) by LoveRP                                                                                             | - Alert on notification per station                              | [See here](developers/third-party.md#emergency-dispatch) |
| [SmartFires](https://forum.cfx.re/t/smart-fires-automatic-fires-fire-smoke-types-many-integrations-standalone-paid-resource/4792695?u=christopherm) by LondonStudios | - Alert on player started fire<br/>- Alert on automatic fire     | [See here](developers/third-party.md#smart-fires)        |
| [Fire Alarm Reborn](../fire-alarm-reborn)                                                                                                                            | - Alert on Fire Alarm activation                                 | [See here](developers/third-party.md#fire-alarm-reborn)  |

For more information, see [here](developers/third-party.md).

Just because a resource is not listed below, does not mean it will not work with SA: if you can add an export, it will likely work with SA. 
If you would like to check if a resource is compatible before purchase, ask us in our [Discord](https://inferno.gay/discord).
