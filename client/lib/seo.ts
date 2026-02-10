import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/i18n";
import { withLang } from "@/lib/links";
import { siteConfig } from "@shared/site";

function ensureMeta(name: string, content: string) {
  if (!content) return;
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensureProperty(property: string, content: string) {
  if (!content) return;
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensureLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let tag = document.querySelector<HTMLLinkElement>(selector);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    if (hreflang) tag.setAttribute("hreflang", hreflang);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export function usePageMeta(titleKey: string, descriptionKey: string) {
  const { t, locale } = useI18n();
  const location = useLocation();

  useEffect(() => {
    const title = t(titleKey);
    const description = t(descriptionKey);
    const canonical = `${siteConfig.baseUrl}${withLang(location.pathname, locale)}`;
    const ogImage = `${siteConfig.baseUrl}/og-image.svg`;

    if (title) document.title = title;

    ensureMeta("description", description);
    ensureProperty("og:title", title);
    ensureProperty("og:description", description);
    ensureProperty("og:type", "website");
    ensureProperty("og:url", canonical);
    ensureProperty("og:image", ogImage);
    ensureMeta("twitter:card", "summary_large_image");
    ensureMeta("twitter:title", title);
    ensureMeta("twitter:description", description);
    ensureMeta("twitter:image", ogImage);

    ensureLink("canonical", canonical);
    siteConfig.locales.forEach((lang) => {
      const href = `${siteConfig.baseUrl}${withLang(location.pathname, lang)}`;
      ensureLink("alternate", href, lang);
    });
  }, [descriptionKey, locale, location.pathname, t, titleKey]);
}
