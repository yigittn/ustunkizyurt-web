/**
 * Dil ve yönlendirme yapılandırması.
 *
 * URL şeması: Türkçe öneksizdir (mevcut site URL'leri korunsun diye),
 * İngilizce `/en` öneki alır.
 *   /hakkimizda      → Türkçe
 *   /en/hakkimizda   → İngilizce
 */

export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** `<html lang>` ve Open Graph için tam dil etiketleri. */
export const localeTags: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-US",
};

/** Dil değiştiricide gösterilen etiketler. */
export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

export const pageKeys = [
  "home",
  "about",
  "services",
  "gallery",
  "contact",
] as const;

export type PageKey = (typeof pageKeys)[number];

/**
 * Sayfa anahtarı → URL parçası. İki dilde de aynı Türkçe slug kullanılır;
 * böylece yayındaki Türkçe adresler değişmez ve dil değiştirince
 * kullanıcı aynı sayfada kalır.
 */
export const pageSlugs: Record<PageKey, string> = {
  home: "",
  about: "hakkimizda",
  services: "hizmetlerimiz",
  gallery: "galeri",
  contact: "iletisim",
};

/** Bir sayfanın verilen dildeki mutlak yolu. */
export function localePath(locale: Locale, key: PageKey): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const slug = pageSlugs[key];
  if (!slug) return prefix || "/";
  return `${prefix}/${slug}`;
}

/**
 * Yoldaki dil önekini ayırır.
 *
 * Varsayılan dil de kontrol edilir: proxy `/hakkimizda` isteğini içeriden
 * `/tr/hakkimizda`ya yazdığı için `usePathname()` bazı render'larda önekli
 * yolu döndürebiliyor. Her iki biçim de aynı sonucu vermeli.
 */
export function stripLocale(pathname: string): {
  locale: Locale;
  rest: string;
} {
  for (const locale of locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return { locale, rest: pathname.slice(locale.length + 1) || "/" };
    }
  }
  return { locale: defaultLocale, rest: pathname || "/" };
}

/**
 * Geçerli yolun hedef dildeki karşılığı. Dil değiştirici kullanıcıyı
 * ana sayfaya atmak yerine aynı sayfada tutar.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const { rest } = stripLocale(pathname);
  if (target === defaultLocale) return rest;
  return rest === "/" ? `/${target}` : `/${target}${rest}`;
}
