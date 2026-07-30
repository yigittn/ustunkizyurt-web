import type { Metadata } from "next";

import { defaultLocale, localePath, locales, type Locale, type PageKey } from "@/i18n/config";

/**
 * Bir sayfanın kanonik adresi ve hreflang alternatifleri.
 * Arama motorlarının iki dilli sürümleri eşleştirmesini sağlar.
 */
export function alternatesFor(locale: Locale, key: PageKey): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const item of locales) {
    languages[item] = localePath(item, key);
  }
  languages["x-default"] = localePath(defaultLocale, key);

  return {
    canonical: localePath(locale, key),
    languages,
  };
}
