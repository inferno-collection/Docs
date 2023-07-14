# Exports

The resource exports functions which can be used by external resources.

## `isTabletOpen`

Returns whether the tablet is currently open.

```ts
isTabletOpen(): boolean
```

## `registerApplication`

Registers an application.

```ts
interface Application {
    name: string
    displayName: string
    filePath: string
    iconUrl: string
    primaryColor: string
    manualNavigation?: boolean
}

registerApplication(application: Application): boolean
```

:::info
See [applications](applications.md#registering-applications) for more info about registering apps.
:::

## `sendMessage`

Sends an external message to an application.

```ts
sendMessage(applicationName: string, message: object): void
```

:::info
See [external messages](messages.md#external-messages) for more info about sending external messages.
:::