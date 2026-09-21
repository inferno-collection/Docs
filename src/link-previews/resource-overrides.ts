import type {
  DiscordLinkButton,
  DiscordPageContent,
  LinkPreview,
} from '@inferno-collection/link-previews';

interface DocsPreviewDefinition {
  imagePath: string;
  imageAlt: string;
  buttons?: DiscordLinkButton[];
}

const DOCS_PREVIEW_DEFAULT: DocsPreviewDefinition = {
  imagePath: '/img/links/docs.png',
  imageAlt: 'Inferno Collection documentation',
};

/**
 * Resource-specific preview presentation. Add an entry here when a resource
 * needs its own banner or a replacement action row.
 */
const RESOURCE_PREVIEW_OVERRIDES: Record<string, DocsPreviewDefinition> = {
  'fire-alarm-reborn': {
    imagePath: '/img/links/far.png',
    imageAlt: 'Fire Alarm Reborn',
	buttons: [
		{
		  label: 'Install',
		  url: 'https://docs.inferno-collection.com/resources/fire-alarm-reborn/install',
		},
		{
			label: 'Config',
			url: 'https://docs.inferno-collection.com/resources/fire-alarm-reborn/config',
		},
		{
			label: 'Devs',
			url: 'https://docs.inferno-collection.com/resources/fire-alarm-reborn/developers/',
		},
		{
			label: 'Changelog',
			url: 'https://docs.inferno-collection.com/resources/fire-alarm-reborn/changelog',
		},
		{
		  label: 'Discord',
		  url: 'https://discord.com/invite/5GZ3Jzt',
		  emoji: {
			  name: 'discord',
			  id: '1551442516341956638',
			  animated: true,
		  },
		},
	],
  },
  'hands-free-siren': {
    imagePath: '/img/links/hfs.png',
    imageAlt: 'Hands-Free Siren',
    buttons: [
      {
        label: 'Install',
        url: 'https://docs.inferno-collection.com/resources/hands-free-siren/install',
      },
      {
        label: 'Config',
        url: 'https://docs.inferno-collection.com/resources/hands-free-siren/config',
      },
      {
        label: 'Usage',
        url: 'https://docs.inferno-collection.com/resources/hands-free-siren/usage',
      },
      {
        label: 'Changelog',
        url: 'https://docs.inferno-collection.com/resources/hands-free-siren/changelog',
      },
      {
        label: 'Discord',
        url: 'https://discord.com/invite/5GZ3Jzt',
        emoji: {
          name: 'discord',
          id: '1551442516341956638',
          animated: true,
        },
      },
    ],
  },
  flares: {
    imagePath: '/img/links/iflares.png',
    imageAlt: 'IFlares',
    buttons: [
      {
        label: 'Install',
        url: 'https://docs.inferno-collection.com/resources/flares/install',
      },
      {
        label: 'Config',
        url: 'https://docs.inferno-collection.com/resources/flares/config',
      },
      {
        label: 'Devs',
        url: 'https://docs.inferno-collection.com/resources/flares/developers/',
      },
      {
        label: 'Changelog',
        url: 'https://docs.inferno-collection.com/resources/flares/changelog',
      },
      {
        label: 'Discord',
        url: 'https://discord.com/invite/5GZ3Jzt',
        emoji: {
          name: 'discord',
          id: '1551442516341956638',
          animated: true,
        },
      },
    ],
  },
  'pager-reborn': {
    imagePath: '/img/links/pr.png',
    imageAlt: 'Pager Reborn',
    buttons: [
      {
        label: 'Install',
        url: 'https://docs.inferno-collection.com/resources/pager-reborn/install',
      },
      {
        label: 'Config',
        url: 'https://docs.inferno-collection.com/resources/pager-reborn/config',
      },
      {
        label: 'Devs',
        url: 'https://docs.inferno-collection.com/resources/pager-reborn/developers/',
      },
      {
        label: 'Changelog',
        url: 'https://docs.inferno-collection.com/resources/pager-reborn/changelog',
      },
      {
        label: 'Discord',
        url: 'https://discord.com/invite/5GZ3Jzt',
        emoji: {
          name: 'discord',
          id: '1551442516341956638',
          animated: true,
        },
      },
    ],
  },
  'station-alert': {
    imagePath: '/img/links/sa.png',
    imageAlt: 'Station Alert',
    buttons: [
      {
        label: 'Install',
        url: 'https://docs.inferno-collection.com/resources/station-alert/install',
      },
      {
        label: 'Config',
        url: 'https://docs.inferno-collection.com/resources/station-alert/config',
      },
      {
        label: 'Devs',
        url: 'https://docs.inferno-collection.com/resources/station-alert/developers/',
      },
      {
        label: 'Changelog',
        url: 'https://docs.inferno-collection.com/resources/station-alert/changelog',
      },
      {
        label: 'Discord',
        url: 'https://discord.com/invite/5GZ3Jzt',
        emoji: {
          name: 'discord',
          id: '1551442516341956638',
          animated: true,
        },
      },
    ],
  },
  spotlight: {
    imagePath: '/img/links/spotlight.png',
    imageAlt: 'Spotlight',
    buttons: [
      {
        label: 'Install',
        url: 'https://docs.inferno-collection.com/resources/spotlight/install',
      },
      {
        label: 'Config',
        url: 'https://docs.inferno-collection.com/resources/spotlight/config',
      },
      {
        label: 'Devs',
        url: 'https://docs.inferno-collection.com/resources/spotlight/developers/',
      },
      {
        label: 'Changelog',
        url: 'https://docs.inferno-collection.com/resources/spotlight/changelog',
      },
      {
        label: 'Discord',
        url: 'https://discord.com/invite/5GZ3Jzt',
        emoji: {
          name: 'discord',
          id: '1551442516341956638',
          animated: true,
        },
      },
    ],
  },
  torches: {
    imagePath: '/img/links/torches.png',
    imageAlt: 'Torches',
    buttons: [
      {
        label: 'Install',
        url: 'https://docs.inferno-collection.com/resources/torches/install',
      },
      {
        label: 'Config',
        url: 'https://docs.inferno-collection.com/resources/torches/config',
      },
      {
        label: 'Devs',
        url: 'https://docs.inferno-collection.com/resources/torches/developers/',
      },
      {
        label: 'Changelog',
        url: 'https://docs.inferno-collection.com/resources/torches/changelog',
      },
      {
        label: 'Discord',
        url: 'https://discord.com/invite/5GZ3Jzt',
        emoji: {
          name: 'discord',
          id: '1551442516341956638',
          animated: true,
        },
      },
    ],
  },
};

function resourceIdFromPermalink(permalink: string): string | undefined {
  return permalink.match(/^\/resources\/([^/]+)/)?.[1];
}

export function resolveDocsLinkPreview(
  permalink: string,
  siteUrl: string,
): {
  overrides: Partial<LinkPreview>;
  pageContent: Pick<DiscordPageContent, 'buttons'>;
} {
  const resourceId = resourceIdFromPermalink(permalink);
  const definition =
    (resourceId && RESOURCE_PREVIEW_OVERRIDES[resourceId]) ??
    DOCS_PREVIEW_DEFAULT;

  return {
    overrides: {
      imageUrl: new URL(definition.imagePath, siteUrl).href,
      imageWidth: 1229,
      imageHeight: 301,
      imageAlt: definition.imageAlt,
      imageType: 'image/png',
    },
    pageContent: definition.buttons ? {buttons: definition.buttons} : {},
  };
}
