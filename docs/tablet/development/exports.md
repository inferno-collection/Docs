# Exports

The resource exports a couple of functions which can be used by external resources.

## isTabletOpen

Returns whether the tablet is currently open.

```ts
isTabletOpen(): boolean
```

## registerApplication

Registers an application, see [applications](apps.md#registering-applications) for more info about registering apps.

```ts
interface Application {
    name: string
    displayName: string
    filePath: string
    iconUrl: string
    primaryColor: string
    manualNavigation?: boolean
}

registerApplication(application: Application): bool
```

## sendMessage

Sends an external message to an application, see also [external messages](messages.md#external-messages).

```ts
sendMessage(message: object): void
```