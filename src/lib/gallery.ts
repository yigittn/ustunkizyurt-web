export type GalleryCategory = "Odalar" | "Ortak Alanlar" | "Bina";

export type GalleryItem = {
  /** public/galeri/ altındaki dosya yolu; eklenene kadar yer tutucu gösterilir. */
  src?: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryCategories: GalleryCategory[] = [
  "Odalar",
  "Ortak Alanlar",
  "Bina",
];

/**
 * Galeri içeriği. Gerçek fotoğraflar `public/galeri/` altına eklendikçe
 * her kaydın `src` alanı doldurulur.
 */
export const galleryItems: GalleryItem[] = [
  { alt: "Tek kişilik oda", category: "Odalar" },
  { alt: "İki kişilik oda", category: "Odalar" },
  { alt: "Üç kişilik oda", category: "Odalar" },
  { alt: "Oda çalışma masası", category: "Odalar" },
  { alt: "Oda dolapları", category: "Odalar" },
  { alt: "Banyo", category: "Odalar" },
  { alt: "Etüt salonu", category: "Ortak Alanlar" },
  { alt: "Dinlenme salonu", category: "Ortak Alanlar" },
  { alt: "Ziyaretçi odası", category: "Ortak Alanlar" },
  { alt: "Çamaşırhane", category: "Ortak Alanlar" },
  { alt: "Ütü alanı", category: "Ortak Alanlar" },
  { alt: "Mutfak", category: "Ortak Alanlar" },
  { alt: "Yurt binası dış görünüm", category: "Bina" },
  { alt: "Yurt girişi", category: "Bina" },
  { alt: "Koridor", category: "Bina" },
  { alt: "Bahçe", category: "Bina" },
];
