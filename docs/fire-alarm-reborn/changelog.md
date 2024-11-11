---
sidebar_position: 999
---

# Changelog

## v1.1 - 11/11/2024
**Added**:
- `IgnoreProximity` flag for Alarm Systems which removes the warning in the server console when one or more systems are within 30 units of each other.
:::warning
We suggest only using this if you're confident you've set up your alarm systems far enough away from each other not to overlap.
:::
- Error message to the server console that appears when the `config.cfg` file has not been executed.
- `triggerPullStationAtPosition` Export which allows for the activation of a random Pull Station of a system within 50 units of the provided position.
- `getAlarmSystemPasscode` Export which returns just an alarm system's passcode.

**Fixed**:
- Space Bar missing from the Tool controls helper.
- Typos 😔
- Outdated docs link.
- Bug that prevent all but the first alarm system's control panel from opening.
- Postal codes not being loaded from alarm system files.
- Missing sounders in some of the stock resources.

***
## v1 - 11/11/2024
Initial resource release.
