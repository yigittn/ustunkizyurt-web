import type { Metadata } from "next";
import { Dancing_Script, Playfair_Display, Poppins } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { site } from "@/lib/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Bursa Görükle Kız Yurdu`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Bursa kız yurdu",
    "Görükle kız yurdu",
    "Uludağ Üniversitesi yurt",
    "Nilüfer öğrenci yurdu",
    "özel kız öğrenci yurdu",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Bursa Görükle Kız Yurdu`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${poppins.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
