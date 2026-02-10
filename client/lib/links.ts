import type { Locale } from "@/i18n";

export function withLang(path: string, locale: Locale, hash?: string) {
  const [basePath, search = ""] = path.split("?");
  const params = new URLSearchParams(search);
  params.set("lang", locale);
  const suffix = params.toString() ? `?${params.toString()}` : "";
  const anchor = hash ? `#${hash.replace(/^#/, "")}` : "";
  return `${basePath}${suffix}${anchor}`;
}
