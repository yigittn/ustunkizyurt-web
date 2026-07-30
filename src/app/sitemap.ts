import type { MetadataRoute } from "next";

import { defaultLocale, localePath, locales, pageKeys } from "@/i18n/config";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const absolute = (path: string) => new URL(path, site.url).toString();

  return locales.flatMap((locale) =>
    pageKeys.map((key) => ({
      url: absolute(localePath(locale, key)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.8,
      // Arama motorlarına iki dilli sürümleri eşleştirir
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((item) => [item, absolute(localePath(item, key))]),
          ["x-default", absolute(localePath(defaultLocale, key))],
        ]),
      },
    })),
  );
}
