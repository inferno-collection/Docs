# Applications

Applications, or apps are interfaces that can be added to the tablet. Applications can be interacted with by the user and added to the home screen.

## Creating applications

Creating applications is easy, each application is given it's own [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) which allows full control over the content.

Create your app HTML file, for example `notes.html` and add it as `file` to your [resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/). This file will later be registered as your application.

```lua
fx_version 'cerulean'

file 'notes.html'
```

## Registering applications

Each application must be registered, this can be done by calling the `registerApplication` export on the client.

```lua
exports['inferno-tablet']:registerApplication({
    name = 'notes',
    displayName = 'Notes',

    filePath = 'notes.html',
    iconUrl = 'https://cfx-nui-resource/icon.png'
    primaryColor = '#FB922B'
})
```

See the table below for more information about each field.

| Name | Description | Required |
|------|-------------|----------|
| name              | The name of the application, this must only contain alphanumeric characters.  | Yes |
| displayName       | The display name of the application, this one is shown to the user.           | Yes |
| filePath          | The relative path to your application HTML file in the resource.              | Yes |
| iconUrl           | The full URL to the app icon, this can be a cfx-nui URL or a remote URL.      | Yes |
| primaryColor      | The primary color of your application.                                        | Yes |
| manualNavigation  | Whether manual navigation has been enabled. (default: `false`)                | No  |

## Navigation

The tablet features navigation buttons for the user to navigate, for example the home button will close the app and return to the home screen.

The action of the back button depends on whether manual navigation has been enabled. When manual navigation is disabled the back button will use the normal navigation of the browser and go back in history, if there is no history it will return to the home screen.

When manual navigation has been enabled the tablet will receive [back messages](messages.md#onback) when the back button has been pressed.

![The navigation bar](../assets/navigation.png)