import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const feedUrl = "https://medium.com/feed/@prasetyoputra";
const outputPath = resolve(projectRoot, "public/medium-posts.json");

function decodeEntities(value) {
  return value
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function unwrapCdata(value = "") {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
}

function readTag(xml, tagName) {
  const escapedTag = tagName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = xml.match(new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escapedTag}>`, "i"));
  return match ? decodeEntities(unwrapCdata(match[1])) : "";
}

function readAttribute(xml, tagName, attributeName) {
  const escapedTag = tagName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedAttribute = attributeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const tag = xml.match(new RegExp(`<${escapedTag}\\b[^>]*>`, "i"))?.[0] ?? "";
  const match = tag.match(new RegExp(`(?:^|\\s)${escapedAttribute}=["']([^"']+)["']`, "i"));
  return match ? decodeEntities(match[1]) : "";
}

function htmlToText(html) {
  return decodeEntities(
    html
      .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<\/(p|h[1-6]|li|blockquote|figcaption)>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  ).replace(/\s+/g, " ").trim();
}

function makeExcerpt(html) {
  const text = htmlToText(html);
  if (text.length <= 190) return text;

  const excerpt = text.slice(0, 187).replace(/\s+\S*$/, "");
  return `${excerpt}…`;
}

function readThumbnail(item, content) {
  const imageTag = content.match(/<img\b[^>]*>/i)?.[0] ?? "";
  const imageUrl = readAttribute(imageTag, "img", "src")
    || readAttribute(imageTag, "img", "data-src")
    || readAttribute(item, "media:content", "url")
    || readAttribute(item, "media:thumbnail", "url");

  try {
    const parsedUrl = new URL(imageUrl);
    return parsedUrl.protocol === "https:" ? parsedUrl.toString() : "";
  } catch {
    return "";
  }
}

function parseFeed(xml) {
  return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
    .map(([, item]) => {
      const content = readTag(item, "content:encoded") || readTag(item, "description");
      const link = readTag(item, "link");
      const title = htmlToText(readTag(item, "title"));
      const publishedAt = readTag(item, "pubDate");

      try {
        const parsedLink = new URL(link);
        if (parsedLink.protocol !== "https:" || !title) return null;

        return {
          title,
          link: parsedLink.toString(),
          publishedAt: Number.isNaN(new Date(publishedAt).getTime()) ? "" : new Date(publishedAt).toISOString(),
          excerpt: makeExcerpt(content),
          thumbnail: readThumbnail(item, content),
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((first, second) => new Date(second.publishedAt) - new Date(first.publishedAt))
    .slice(0, 3);
}

try {
  const response = await fetch(feedUrl, {
    headers: { "user-agent": "qa-portfolio-medium-feed-sync/1.0" },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`Medium RSS returned HTTP ${response.status}`);

  const articles = parseFeed(await response.text());
  if (!articles.length) throw new Error("The Medium RSS feed did not contain any readable articles.");

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(articles, null, 2)}\n`);
  console.log(`Synced ${articles.length} Medium articles to public/medium-posts.json.`);
} catch (error) {
  try {
    const cachedArticles = JSON.parse(await readFile(outputPath, "utf8"));
    if (Array.isArray(cachedArticles) && cachedArticles.length) {
      console.warn(`Medium sync failed; keeping ${cachedArticles.length} cached articles. ${error.message}`);
      process.exit(0);
    }
  } catch {
    // No valid cache exists, so stop the deployment before publishing an empty article section.
  }

  console.error(`Medium sync failed and no cached articles are available: ${error.message}`);
  process.exitCode = 1;
}
