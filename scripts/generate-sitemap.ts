import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "../shared/site";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function buildUrl(baseUrl: string, path: string, lang: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const query = normalized.includes("?") ? "&" : "?";
  return `${baseUrl}${normalized}${query}lang=${lang}`;
}

const lastmod = today();
const { baseUrl, locales } = siteConfig;

function getRoutesFromApp(): string[] {
  try {
    const appPath = join(process.cwd(), "client", "App.tsx");
    const content = readFileSync(appPath, "utf8");
    const matches = [...content.matchAll(/path="([^"]+)"/g)].map((m) => m[1]);
    const cleaned = matches
      .filter((p) => p && p.startsWith("/") && p !== "*")
      .map((p) => p.trim())
      .filter(Boolean);
    return Array.from(new Set(cleaned));
  } catch {
    return [];
  }
}

const routes = getRoutesFromApp();
const finalRoutes = routes.length > 0 ? routes : siteConfig.routes;

const urls = finalRoutes.flatMap((route) =>
  locales.map((lang) => ({
    loc: buildUrl(baseUrl, route, lang),
    lastmod,
    changefreq: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? "1.0" : "0.7",
  })),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((u) => {
    const lang = new URL(u.loc).searchParams.get("lang") ?? "fr";
    const alternates = locales
      .map((alt) => {
        const href = buildUrl(baseUrl, new URL(u.loc).pathname, alt);
        return `    <xhtml:link rel="alternate" hreflang="${alt}" href="${href}" />`;
      })
      .join("\n");
    return `  <url>
    <loc>${u.loc}</loc>
${alternates}
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;

const publicDir = join(process.cwd(), "public");
writeFileSync(join(publicDir, "sitemap.xml"), sitemap);
writeFileSync(join(publicDir, "sitemap-index.xml"), sitemapIndex);
