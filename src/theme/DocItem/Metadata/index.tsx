import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OriginalDocItemMetadata from '@theme-original/DocItem/Metadata';
import {
  createDiscordComponentEmbed,
  createStandardLinkPreview,
} from '@inferno-collection/link-previews';
import {resolveDocsLinkPreview} from '@site/src/link-previews/resource-overrides';

export default function DocItemMetadata(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {metadata} = useDoc();
  const {overrides, pageContent} = resolveDocsLinkPreview(
    metadata.permalink,
    siteConfig.url,
  );
  const preview = createStandardLinkPreview({
    ...overrides,
    canonicalUrl: new URL(metadata.permalink, siteConfig.url).href,
    ...(metadata.description ? {description: metadata.description} : {}),
  });
  const componentEmbed = createDiscordComponentEmbed(preview, {
    ...pageContent,
    heading: metadata.title,
  });

  return (
    <>
      <OriginalDocItemMetadata />
      <Head>
        <script id="discord:component-embed" type="application/json">
          {JSON.stringify(componentEmbed)}
        </script>
      </Head>
    </>
  );
}
