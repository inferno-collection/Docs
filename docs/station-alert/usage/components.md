---
sidebar_position: 10
---

# Components

This page documents each component in SA and how to use them.

A component is any part of the Station, such as the Traffic Lights, Door Controls, etc.  
Not all components can be directly interacted with, but the ones that can will show a prompt in the top left of the screen where applicable.

:::note
Depending on how the [Ace Permissions](../config.md#permissions) are set up, not all the below options will be available to all players.
:::

## Door Controls
Door Controls allow players to open and close doors from a panel within the station.  
Door Controls can be placed anywhere, but we suggest placing them inside the room where the bays are.  
Door Controls can also be access from a Station Computer.

***

## Traffic Lights
Interior Traffic Lights are linked to a specific door, and will change color depending on the door's state.  
When a door is closed, it will be red. When a door is opening or closing, it will flash yellow. When a door is open, it will be green.

***

## Station Computer
Station Computers are not standalone props, but instead a prop selected to act as a Computer.  
When nearby these props, a prompt will appear and players can access a menu to create a new Alert.  
From the Station Computer, the Door Controls can also be accessed.

***

## Ceiling Speakers
Ceiling Speakers are the sound sources for the 3D Audio played by SA.  
The speakers do not take walls into account, so placing a speaker inside a room will lead to people outside the room being able to hear it as well.

:::warning
Placing too many speakers can result in very loud, overlapping audio.  
We suggest placing one speaker every 5-10 meters.
:::

***

## Wall Lights
Wall Lights are designed to be placed outside of Stations, and will flash when an Alert is received.

***

## Unit Indicators 
Unit Indicators change color depending on what metadata was provided in an Alert.  
For example, medical calls could be blue, fire calls could be red, and everything else could be green.

***

## Call Screens
Call Screens will display information about the Station they are located in, and if configured, the current time.  
When Alerted, they will change screens to display information about the current Alert, which doors are open and closed, and how long since the Alert was received.

***

## Dispatch Centers
Dispatch Centers are not a physical thing, but rather a concept. When you create a Station Location without any Lights or Doors, it is removed from the list of Station Locations that can receive an alert, however, they can still create alerts.  
As such, they become "Dispatch Centers": locations that can create, but not receive, alerts.
