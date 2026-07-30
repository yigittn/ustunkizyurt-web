import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";

/**
 * Dil yönlendirmesi.
 *
 * Türkçe (varsayılan dil) öneksiz adreslerde kalır — yayındaki mevcut
 * URL'ler bozulmasın diye. Bunu sağlamak için `/hakkimizda` isteği
 * içeriden `/tr/hakkimizda`ya yeniden yazılır; tarayıcıdaki adres değişmez.
 *
 * Önekli diller (`/en/...`) olduğu gibi geçer. Birisi açıkça `/tr/...`
 * isterse çift içerik oluşmasın diye kanonik öneksiz adrese yönlendirilir.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === `/${defaultLocale}` ||
    pathname.startsWith(`/${defaultLocale}/`)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const hasPrefix = locales.some(
    (locale) =>
      locale !== defaultLocale &&
      (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)),
  );
  if (hasPrefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // _next, api ve uzantılı dosyalar (favicon.ico, robots.txt, sitemap.xml) hariç
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
