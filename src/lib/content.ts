import {
  Armchair,
  BadgeCheck,
  BedDouble,
  BookOpen,
  Bus,
  Cctv,
  Footprints,
  Shirt,
  Users,
  WashingMachine,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  label: string;
  description: string;
};

/** "İmkânlarımız" bölümündeki olanaklar. */
export const features: Feature[] = [
  {
    icon: BedDouble,
    label: "Tek, iki ve üç kişilik odalar",
    description:
      "Her odada kişiye özel dolap, çalışma masası ve rahat yatak; ihtiyacınıza göre oda seçeneği.",
  },
  {
    icon: WashingMachine,
    label: "Çamaşırhane",
    description:
      "Ücretsiz kullanabileceğiniz çamaşır makineleri ve kurutma alanı.",
  },
  {
    icon: Armchair,
    label: "Dinlenme alanları",
    description:
      "Ders arasında nefes alabileceğiniz, arkadaşlarınızla sohbet edebileceğiniz ortak salonlar.",
  },
  {
    icon: Users,
    label: "Ziyaretçi odası",
    description:
      "Ailenizi ve misafirlerinizi ağırlayabileceğiniz ayrı, ferah bir ziyaretçi salonu.",
  },
  {
    icon: BookOpen,
    label: "Etüt salonu",
    description:
      "Sınav dönemlerinde sessiz çalışabileceğiniz, 7/24 açık etüt salonu.",
  },
  {
    icon: Shirt,
    label: "Ütü alanı",
    description: "Ütü ve ütü masasının hazır bulunduğu ortak kullanım alanı.",
  },
  {
    icon: Cctv,
    label: "7/24 kamera sistemi",
    description:
      "Ortak alanlarda kesintisiz kamera kaydı ve gece gündüz görevli personel.",
  },
  {
    icon: Footprints,
    label: "Üniversiteye 5 dk yürüme mesafesi",
    description:
      "Uludağ Üniversitesi Görükle Kampüsü'ne yürüyerek beş dakika.",
  },
  {
    icon: Wifi,
    label: "Sınırsız wifi",
    description:
      "Tüm odalarda ve ortak alanlarda kotasız, yüksek hızlı internet.",
  },
  {
    icon: Bus,
    label: "Şehre kolay ulaşım",
    description:
      "Metro ve otobüs duraklarına yakın konum; şehir merkezine rahat erişim.",
  },
];

export type ValueCard = {
  title: string;
  body: string;
};

export const vision: ValueCard = {
  title: "Vizyonumuz",
  body: "Öğrencilerimizin kendilerini güvende, huzurlu ve evlerinde hissedebilecekleri; sakinliği, güveni ve kaliteli yaşam anlayışını bir arada sunan seçkin bir yurt olmak.",
};

export const mission: ValueCard = {
  title: "Misyonumuz",
  body: "Ailelerin gönül rahatlığıyla emanet ettiği her öğrenciye; güvenli bir barınma, düzenli bir çalışma ortamı ve samimi bir aile ortamı sunarak eğitim hayatlarına destek olmak.",
};

/** Ana sayfadaki güven şeridi. */
export const trustPoints = [
  {
    icon: BadgeCheck,
    tone: "sage",
    title: "Bakanlık denetiminde",
    text: "T.C. Gençlik ve Spor Bakanlığı ruhsatlı ve düzenli olarak denetlenen bir yurduz.",
  },
  {
    icon: Cctv,
    tone: "rose",
    title: "7/24 güvenlik",
    text: "Kartlı giriş, kamera sistemi ve gece gündüz görevli yurt personeli.",
  },
  {
    icon: Footprints,
    tone: "sage",
    title: "Kampüse 5 dakika",
    text: "Uludağ Üniversitesi Görükle Kampüsü'ne yürüme mesafesinde.",
  },
] as const;
