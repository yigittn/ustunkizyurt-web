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
 * Galeri içeriği. Başlıklar sözlükten gelir, fotoğraflar `public/photos/`
 * altındadır. `src` boş olan kayıtlar yer tutucu gösterir — o kareler için
 * fotoğraf henüz çekilmedi.
 *
 * Kareler 4:5 dikey kırpılır; dikey çekilmiş fotoğraflar en az kırpılır.
 */
export const galleryItems: GalleryItem[] = [
  { id: "singleRoom", category: "rooms", src: "/photos/single_room.jpeg" },
  { id: "doubleRoom", category: "rooms", src: "/photos/double_room.jpeg" },
  { id: "tripleRoom", category: "rooms", src: "/photos/triple_room.jpeg" },
  { id: "deskArea", category: "rooms" }, // eksik
  {
    id: "wardrobes",
    category: "rooms",
    src: "/photos/double_room_inventory.jpeg",
  },
  { id: "bathroom", category: "rooms", src: "/photos/bathroom.jpeg" },
  { id: "studyHall", category: "common", src: "/photos/study_room.jpeg" },
  { id: "lounge", category: "common", src: "/photos/rest_room.jpeg" },
  { id: "guestRoom", category: "common", src: "/photos/visitior_room.jpeg" },
  { id: "laundry", category: "common", src: "/photos/laundry.jpeg" },
  { id: "ironing", category: "common" }, // eksik
  { id: "kitchen", category: "common", src: "/photos/kitchen.jpeg" },
  { id: "exterior", category: "building" }, // eksik
  { id: "entrance", category: "building" }, // eksik
  { id: "corridor", category: "building" }, // eksik
  { id: "garden", category: "building" }, // eksik
];
