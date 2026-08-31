import {
  Armchair,
  BadgeCheck,
  BedDouble,
  BookOpen,
  Bus,
  BusFront,
  Cctv,
  HeartHandshake,
  Home,
  ShieldCheck,
  Shirt,
  Sparkles,
  Users,
  WashingMachine,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import type { Dictionary } from "@/i18n";

/**
 * Dile bağlı olmayan içerik yapısı: sıra, ikonlar ve renk tonları.
 * Metinler `src/i18n/dictionaries` içinde, buradaki anahtarlarla eşleşir.
 */

export type FeatureId = keyof Dictionary["features"];

/** "İmkânlarımız" bölümündeki sıra ve ikonlar. */
export const featureOrder: FeatureId[] = [
  "rooms",
  "laundry",
  "lounge",
  "guestRoom",
  "studyHall",
  "ironing",
  "cameras",
  "walkingDistance",
  "wifi",
  "transport",
];

export const featureIcons: Record<FeatureId, LucideIcon> = {
  rooms: BedDouble,
  laundry: WashingMachine,
  lounge: Armchair,
  guestRoom: Users,
  studyHall: BookOpen,
  ironing: Shirt,
  cameras: Cctv,
  walkingDistance: BusFront,
  wifi: Wifi,
  transport: Bus,
};

export type Tone = "rose" | "sage";

export type TrustId = keyof Dictionary["trust"];

export const trustPoints: {
  id: TrustId;
  icon: LucideIcon;
  tone: Tone;
}[] = [
  { id: "ministry", icon: BadgeCheck, tone: "sage" },
  { id: "security", icon: Cctv, tone: "rose" },
  { id: "campus", icon: BusFront, tone: "sage" },
];

export type PrincipleId = keyof Dictionary["about"]["principles"];

export const principles: {
  id: PrincipleId;
  icon: LucideIcon;
  tone: Tone;
}[] = [
  { id: "security", icon: ShieldCheck, tone: "sage" },
  { id: "home", icon: Home, tone: "rose" },
  { id: "communication", icon: HeartHandshake, tone: "rose" },
  { id: "cleanliness", icon: Sparkles, tone: "sage" },
];

export type RoomId = keyof Dictionary["services"]["rooms"];

export const roomOrder: RoomId[] = ["single", "double", "triple"];

/** Hizmetlerimiz sayfasındaki oda tipi kartları (4:5 dikey kırpılır). */
export const roomPhotos: Record<RoomId, string | undefined> = {
  single: "/photos/services1_singleroom.jpeg",
  double: "/photos/services2_doubleroom.jpeg",
  triple: "/photos/services3_tripleroom.jpeg",
};

export type PhotoId = keyof Dictionary["photos"];

/**
 * Ana sayfadaki hero slaytı.
 *
 * `src` boş bırakılırsa aynı ölçüde yer tutucu gösterilir.
 * Sıra buradaki sıradır; kayıt ekleyip çıkarmak yeterlidir.
 * `id`, fotoğrafın alt metnini sözlükten çeker.
 *
 * Mobilde 16:10, masaüstünde 4:3 kırpılır — hepsi yatay fotoğraf olmalı.
 */
export const heroSlides: { id: PhotoId; src?: string }[] = [
  { id: "sittingArea", src: "/photos/slide1.jpeg" },
  { id: "lounge", src: "/photos/rest_room.jpeg" },
  { id: "studentRoom", src: "/photos/single_room.jpeg" },
  { id: "doubleRoom", src: "/photos/double_room.jpeg" },
  { id: "workArea", src: "/photos/double_room_inventory.jpeg" },
];

/**
 * Ana sayfadaki tekil fotoğraflar (hepsi 4:5 dikey kırpılır).
 * `intro` = "Sadece bir yurt değil" bölümü, `preview` = galeri önizleme.
 */
export const homePhotos: {
  intro: { id: PhotoId; src?: string };
  preview: { id: PhotoId; src?: string }[];
} = {
  intro: { id: "guestRoom", src: "/photos/visitior_room.jpeg" },
  preview: [
    { id: "exterior", src: "/photos/building.jpeg" },
    { id: "entrance", src: "/photos/building_entrance.jpeg" },
    { id: "studyHall", src: "/photos/study_room.jpeg" },
    { id: "lounge", src: "/photos/rest_room.jpeg" },
  ],
};

/** Hakkımızda sayfasındaki fotoğraf (4:5 dikey). */
export const aboutPhoto: { id: PhotoId; src?: string } = {
  id: "entrance",
  src: "/photos/building_entrance.jpeg",
};
