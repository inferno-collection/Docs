---
sidebar_position: 40
---

# Developers

These pages are for Developers to expand FAR's usage.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
***

## Important Notes

### Component IDs are not unique across Alarm Systems

Components in this context being Pull Stations, Control Panels, etc.
For example, the ID of the first Pull Station in Alarm System #10 will be #0.
The ID of the first Pull Station in Alarm System #20 will also be #0.
Or put another way, component IDs are only unique within the system they belong to.

Alarm Systems IDs are unique across the resources (e.g. there can only be one Alarm System with the ID #10).
