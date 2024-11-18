---
sidebar_position: 50
---

# Example Snippets

This page provides some examples for how Developers can use FAR.

## Listening for Alarm Activation

In this example, we will listen for an Alarm Activation, and then send a message to chat.

```lua
RegisterServerEvent("Inferno-Collection:Server:FireAlarmReborn:Editable:AlarmActivation")
AddEventHandler("Inferno-Collection:Server:FireAlarmReborn:Editable:AlarmActivation", function(alarmSystem)
	TriggerClientEvent("chat:addMessage", -1, {
		color = { 255, 0, 0},
		multiline = true,
		args = {"Fire Alarm Activation", "Name: " .. alarmSystem.name .. ", Location: " .. alarmSystem.location}
	})
end)
```
