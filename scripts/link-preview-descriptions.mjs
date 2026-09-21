import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';

const DESCRIPTION_LIMIT = 250;
const EMBED_SCRIPT_PATTERN = /(<script\b(?=[^>]*\bid="discord:component-embed")(?=[^>]*\btype="application\/json")[^>]*>)([\s\S]*?)(<\/script>)/;
const EXCLUDED_ELEMENTS = 'audio, button, form, iframe, img, picture, script, style, svg, video';

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return htmlFiles(entryPath);
      }

      return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    }),
  );

  return files.flat();
}

function renderMarkdown(nodes, canonicalUrl) {
  return nodes
    .map((node) => {
      if (node.type === 'text') {
        return node.data;
      }

      if (node.type !== 'tag') {
        return '';
      }

      const content = renderMarkdown(node.children ?? [], canonicalUrl);

      if (node.name !== 'a') {
        return content;
      }

      const href = node.attribs.href;
      const label = content.replace(/\s+/g, ' ').trim();

      if (!href || !label) {
        return label;
      }

      return `[${label}](${new URL(href, canonicalUrl).href})`;
    })
    .join('');
}

function truncateMarkdown(markdown, limit) {
  const linkPattern = /\[([^\]]+)\]\([^)]*\)/g;
  let result = '';
  let visibleLength = 0;
  let cursor = 0;
  let truncated = false;

  function appendText(text) {
    const remaining = limit - visibleLength;

    if (text.length <= remaining) {
      result += text;
      visibleLength += text.length;
      return true;
    }

    result += text.slice(0, remaining);
    visibleLength += remaining;
    truncated = true;
    return false;
  }

  for (const match of markdown.matchAll(linkPattern)) {
    if (!appendText(markdown.slice(cursor, match.index))) {
      break;
    }

    const [link, label] = match;
    const remaining = limit - visibleLength;

    if (label.length <= remaining) {
      result += link;
      visibleLength += label.length;
      cursor = match.index + link.length;
      continue;
    }

    appendText(label);
    truncated = true;
    break;
  }

  if (!truncated && !appendText(markdown.slice(cursor))) {
    truncated = true;
  }

  return `${result.trimEnd()}${truncated ? '...' : ''}`;
}

export function descriptionFromBody(html, canonicalUrl) {
  const $ = load(html);
  const paragraphs = $('.theme-doc-markdown > p').toArray();
  const body = paragraphs
    .map((paragraph) => {
      const clone = $(paragraph).clone();
      clone.find(EXCLUDED_ELEMENTS).remove();
      return renderMarkdown(clone.contents().toArray(), canonicalUrl)
        .replace(/\s+/g, ' ')
        .trim();
    })
    .filter(Boolean)
    .join(' ');

  return body ? truncateMarkdown(body, DESCRIPTION_LIMIT) : undefined;
}

async function updateLinkPreviewDescription(filePath) {
  const html = await readFile(filePath, 'utf8');
  const scriptMatch = html.match(EMBED_SCRIPT_PATTERN);

  if (!scriptMatch) {
    return;
  }

  const componentEmbed = JSON.parse(scriptMatch[2].trim());
  const section = componentEmbed.component.components[0];
  const description = descriptionFromBody(html, section.accessory.url);

  if (!description) {
    return;
  }

  const content = section.components[0].content;
  const lines = content.split('\n');
  const headingLines = lines[1]?.startsWith('### ') ? 2 : 1;

  section.components[0].content = [...lines.slice(0, headingLines), description].join('\n');
  const replacement = `${scriptMatch[1]}\n${JSON.stringify(componentEmbed)}\n${scriptMatch[3]}`;

  await writeFile(filePath, html.replace(EMBED_SCRIPT_PATTERN, replacement));
}

if (path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
  const files = await htmlFiles(path.resolve('build'));
  await Promise.all(files.map(updateLinkPreviewDescription));
}
