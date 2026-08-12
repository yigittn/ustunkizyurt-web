import type { Dictionary } from "@/i18n";

export type GalleryCategoryId = keyof Dictionary["gallery"]["categories"];
export type GalleryItemId = keyof Dictionary["gallery"]["items"];

export const galleryCategories: GalleryCategoryId[] = [
  "rooms",
  "common",
  "building",
];

export type GalleryItem = {
  id: GalleryItemId;
  category: GalleryCategoryId;
  /** public/galeri/ altındaki dosya yolu; eklenene kadar yer tutucu gösterilir. */
  src?: string;
};

/**
 * Galeri içeriği. Gerçek fotoğraflar `public/galeri/` altına eklendikçe
 * her kaydın `src` alanı doldurulur. Başlıklar sözlükten gelir.
 */
export const galleryItems: GalleryItem[] = [
  { id: "singleRoom", category: "rooms", src: "/test.jpeg" },
  { id: "doubleRoom", category: "rooms", src: "/test.jpeg" },
  { id: "tripleRoom", category: "rooms", src: "/test.jpeg" },
  { id: "deskArea", category: "rooms", src: "/test.jpeg" },
  { id: "wardrobes", category: "rooms", src: "/test.jpeg" },
  { id: "bathroom", category: "rooms", src: "/test.jpeg" },
  { id: "studyHall", category: "common" },
  { id: "lounge", category: "common" },
  { id: "guestRoom", category: "common" },
  { id: "laundry", category: "common" },
  { id: "ironing", category: "common" },
  { id: "kitchen", category: "common" },
  { id: "exterior", category: "building" },
  { id: "entrance", category: "building" },
  { id: "corridor", category: "building" },
  { id: "garden", category: "building" },
];
