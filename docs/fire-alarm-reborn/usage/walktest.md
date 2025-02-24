---
sidebar_position: 30
---

# WalkTest

WalkTesting allows players to RP testing individual [Components](components.md) of an Alarm System.  
When WalkTest is enabled and a component such as a Pull Station is activated, instead of triggering an Alarm, the [Components](components.md)'s ID is read out loud for all nearby players to here.  
For example: "Pull Station 10".

## Enabling/Disabling WalkTest

To enable WalkTest, access a Control Panel, enter the passcode if required, then select the WalkTest option.

## Using WalkTest

So long as WalkTest is enabled, simpling activating [Components](components.md) as normal will return the audio response expected.

## Detector Tester Spray Can

As Detectors do not have a direct interaction option, a separate Detector Spray Can is available.  
To collect the Spray Can, use the command [`/firealarm tester`](commands.md#collect-or-store-detector-tester-spray-can).  
To store the Spray Can, use the same command again, swap weapons, or enter a vehicle.

Once equipped, walking below a Detector will make a prompt appear, and players can spray the can to activate the smoke detector.

:::warning
If the Alarm System has not been put into WalkTest, the system will activate as if the Detector had detected actual smoke.
:::
