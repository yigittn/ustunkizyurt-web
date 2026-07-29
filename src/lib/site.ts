/**
 * Site geneli sabitler — iletişim bilgileri, navigasyon ve marka metinleri.
 * Tek kaynaktan yönetilir; bir yeri değişince tüm site güncellenir.
 */

export const site = {
  name: "Üstün Kız Öğrenci Yurdu",
  shortName: "Üstün Kız Yurdu",
  url: "https://ustunkizyurdu.com",
  tagline: "Görükle'de güvenli, huzurlu ve sıcak bir yuva",
  description:
    "Bursa Görükle'de, Uludağ Üniversitesi'ne 5 dakika yürüme mesafesinde, T.C. Gençlik ve Spor Bakanlığı denetimindeki kız öğrenci yurdu. 7/24 güvenlik, konforlu odalar ve samimi bir ortam.",
} as const;

export const contact = {
  phone: "0 (537) 685 04 07",
  phoneHref: "tel:+905376850407",
  whatsapp: "0533 579 99 25",
  whatsappHref: "https://wa.me/905335799925",
  email: "info@ustunkizyurdu.com",
  address: "Görükle, Üçoluk Cd. No:39, 16285 Nilüfer/Bursa",
  addressShort: "Görükle, Nilüfer / Bursa",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=G%C3%B6r%C3%BCkle+%C3%9C%C3%A7oluk+Cd.+No%3A39+16285+Nil%C3%BCfer+Bursa",
} as const;

export const social = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://x.com/",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];
