# agricuIt Landing

Landing page for **agricult** (React + Vite + Express) with bilingual FR/EN support, dynamic SEO metadata, and sitemap generation.

## Stack
- React 18 + Vite + TypeScript
- TailwindCSS 3 + Radix UI + Lucide
- Express (integrated with Vite dev server)
- PNPM

## Features
- SPA with React Router
- FR/EN language switch (`?lang=fr|en`)
- Dynamic SEO per page (title, description, og/tw, canonical, hreflang)
- Sitemap generation with language alternates

## Getting Started

```bash
pnpm install
pnpm dev
```

Dev server: `http://localhost:8080`

## Docker (Dev)

```bash
docker compose up
```

## Build

```bash
pnpm build
```

## Sitemap

Generate sitemap manually:

```bash
pnpm sitemap
```

Sitemap is auto-generated before `pnpm build`.

## i18n

Language is controlled by `?lang=fr|en` in the URL and kept across navigation.  
Translations live in:

- `client/i18n.tsx`

## SEO

Per-page metadata is defined in `client/i18n.tsx` and applied via:

- `client/lib/seo.ts`

OpenGraph image:

- `public/og-image.svg`

## Project Structure

```
client/
  pages/
  components/
  global.css
server/
  index.ts
  routes/
shared/
  site.ts
scripts/
  generate-sitemap.ts
public/
  sitemap.xml
  sitemap-index.xml
  robots.txt
```

## Domain

Current domain for SEO/sitemaps:

```
https://agricult.orbitinno.com
```

Update in:
- `shared/site.ts`
- `public/robots.txt`
