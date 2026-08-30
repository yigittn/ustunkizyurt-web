import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Dancing_Script, Playfair_Display, Poppins } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { getDictionary, isLocale, localeTags, locales } from "@/i18n";
import { alternatesFor } from "@/lib/metadata";
import { site } from "@/lib/site";
import "../globals.css";

// latin-ext, Türkçe karakterler (ı, İ, ğ, ş) için gerekli
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Yalnızca logo sloganında kullanılıyor
const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: d.meta.title,
      template: `%s | ${d.common.brandName}`,
    },
    description: d.meta.description,
    keywords: [...d.meta.keywords],
    alternates: alternatesFor(lang, "home"),
    openGraph: {
      type: "website",
      locale: localeTags[lang].replace("-", "_"),
      url: site.url,
      siteName: d.common.brandName,
      title: d.meta.title,
      description: d.meta.description,
      // WhatsApp/Instagram/Facebook önizlemesinde görünen kare.
      // 1672x941 (~16:9), platformların beklediği 1.91:1'e çok yakın.
      images: [
        {
          url: site.ogImage,
          width: 1672,
          height: 941,
          alt: d.photos.sittingArea,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.description,
      images: [site.ogImage],
    },
    // `robots` bilerek belirtilmiyor: yokluğu zaten "indeksle" demek ve
    // 404 sayfasında Next'in eklediği noindex ile çakışmasını önlüyor.
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${poppins.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <Navbar
          locale={lang}
          nav={d.nav}
          a11y={d.a11y}
          logoSubline={d.common.logoSubline}
          languageLabel={d.common.languageLabel}
        />
        <main className="flex-1">{children}</main>
        <Footer locale={lang} d={d} />
        <WhatsAppFab label={d.a11y.whatsappFab} />
      </body>
    </html>
  );
}
