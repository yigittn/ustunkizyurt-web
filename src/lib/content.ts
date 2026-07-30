import {
  Armchair,
  BadgeCheck,
  BedDouble,
  BookOpen,
  Bus,
  Cctv,
  Footprints,
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
  walkingDistance: Footprints,
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
  { id: "campus", icon: Footprints, tone: "sage" },
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
