# Messages

Applications can receive messages by the [window message event](https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event). These messages are either sent by the tablet or by the owning resources.

```js
window.addEventListener('message', (event) => {
    console.log(event.data)
})
```

## System messages

The tablet will send messages about events happening to your app, this will always be annotated by the `tabletAction` key.

```js
{
    tabletAction: 'onOpen'
}
```

### onOpen

Sent when your app has been opened.

### onClose

Sent when your app has been closed. This event does not mean your app will be unloaded.

### onBack

Sent when the back navigation button is pressed and manual navigation has been enabled. See also [navigation](applications.md#navigation).

## External messages

The owning resource can send 'external' messages to your application. For this the `sendMessage` export exists on the client.

```lua
exports['inferno-tablet']:sendMessage({ hello = "world!" })
```