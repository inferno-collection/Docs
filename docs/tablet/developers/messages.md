# Messages

Applications can receive messages by the [window message event](https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event). These messages are either sent by the tablet or by the owning resources.

```js
window.addEventListener('message', (event) => {
    console.log(event.data);
});
```

## System messages

The tablet will send messages regarding events targeting your App, this will always be annotated by the `tabletAction` key.

```js
{
    tabletAction: '...' // Where `...` is a system message.
}
```

### `onOpen`

Sent when your App has been opened.

### `onClose`

Sent when your App has been closed.

:::note
This event does not mean your app will be unloaded, only that the player returned to the home screen, or another app.
:::

### `onBack`

Sent when the back navigation button is pressed and manual navigation has been enabled.

:::info
This event will not be sent unless `manualNavigation` has been set to `true` in the App's registration. See [navigation](applications.md#navigation) for more information.
:::

## External messages

The owning resource can send 'external' messages to your application. For this the `sendMessage` export exists on the client.

### Sending messages

```lua
exports['inferno-tablet']:sendMessage("application_name", { hello = "world!" })
```

:::tip
This export is the equivalent of the [`SendNUIMessage`](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/SendNUIMessage/) function, and works exactly the same way. If you are converting an existing resource to be compatible with Inferno Tablet, you can replace calls to `SendNUIMessage` with `exports['inferno-tablet']:sendMessage()` if you include your application name.
:::

### Receiving messages

Messages sent via the export are received in the NUI exactly the same as if they had been sent via [`SendNuiMessage`](https://docs.fivem.net/natives/?_0x78608ACB).