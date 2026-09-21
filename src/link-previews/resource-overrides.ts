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
  },
  'hands-free-siren': {
    imagePath: '/img/links/hfs.png',
    imageAlt: 'Hands-Free Siren',
  },
  flares: {
    imagePath: '/img/links/iflares.png',
    imageAlt: 'I-Flares',
  },
  'pager-reborn': {
    imagePath: '/img/links/pr.png',
    imageAlt: 'Pager Reborn',
  },
  'station-alert': {
    imagePath: '/img/links/sa.png',
    imageAlt: 'Station Alert',
  },
  spotlight: {
    imagePath: '/img/links/spotlight.png',
    imageAlt: 'Spotlight',
  },
  torches: {
    imagePath: '/img/links/torches.png',
    imageAlt: 'Torches',
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
