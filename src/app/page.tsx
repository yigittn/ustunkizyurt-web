import Link from "next/link";
import { ArrowRight, Footprints, ShieldCheck, Sparkles } from "lucide-react";

import { HouseHeart } from "@/components/brand/house-heart";
import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ValueCards } from "@/components/sections/value-cards";
import { Button } from "@/components/ui/button";
import { BlobDecor, LeafDecor } from "@/components/ui/leaf-decor";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustPoints } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <FeaturesSection />
      <ValueCards />
      <GalleryPreview />
      <CtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <BlobDecor className="absolute -right-40 -top-32 size-[36rem] text-rose-100" />
      <BlobDecor className="absolute -bottom-56 -left-56 size-[38rem] text-sage-100/60" />
      <LeafDecor className="absolute right-4 top-24 hidden h-80 w-72 text-sage-300/50 lg:block" />

      <div className="container-page relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sage-300 bg-sage-50 px-4 py-1.5 text-xs font-medium tracking-wide text-sage-700">
            <ShieldCheck className="size-3.5" />
            T.C. Gençlik ve Spor Bakanlığı denetiminde
          </span>

          <h1 className="heading-display mt-6 text-4xl uppercase sm:text-5xl lg:text-6xl">
            Görükle&apos;de
            <span className="mt-2 block text-rose-600">ikinci yuvanız</span>
          </h1>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-20 bg-rose-300" />
            <HouseHeart className="size-5 text-rose-400" />
            <span className="h-px w-20 bg-rose-300" />
          </div>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Uludağ Üniversitesi&apos;ne beş dakika yürüme mesafesinde, güvenliği
            ve huzuru bir arada sunan kız öğrenci yurdu. Ailenizin gönül
            rahatlığıyla emanet edebileceği, sizin de kendinizi evinizde
            hissedeceğiniz bir ortam.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/iletisim" size="lg">
              Yerinizi ayırtın
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/galeri" size="lg" variant="outline">
              Yurdumuzu gezin
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame
              alt="Yurt binası dış görünüm"
              caption="Yurt binası"
              priority
              className="col-span-2 aspect-[16/10]"
            />
            <PhotoFrame
              alt="Öğrenci odası"
              caption="Odalarımız"
              className="aspect-square"
            />
            <PhotoFrame
              alt="Etüt salonu"
              caption="Etüt salonu"
              className="aspect-square"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-surface px-5 py-4 shadow-card sm:-left-8">
            <span className="flex size-11 items-center justify-center rounded-full bg-rose-200 text-rose-700">
              <Footprints className="size-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-xl text-ink">5 dakika</span>
              <span className="text-xs text-ink-muted">
                Üniversite kampüsüne
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-rose-100 bg-surface">
      <div className="container-page grid divide-y divide-rose-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {trustPoints.map((point) => (
          <div
            key={point.title}
            className="flex flex-col items-center px-2 py-9 text-center sm:px-6"
          >
            <span
              className={cn(
                "flex size-12 items-center justify-center rounded-full",
                point.tone === "sage"
                  ? "bg-sage-100 text-sage-600"
                  : "bg-rose-100 text-rose-600",
              )}
            >
              <point.icon className="size-6" strokeWidth={1.5} />
            </span>
            <h2 className="mt-4 font-display text-lg tracking-wide text-ink">
              {point.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <PhotoFrame
            alt="Dinlenme salonu"
            caption="Ortak dinlenme alanı"
            className="aspect-[4/5]"
          />
          <LeafDecor
            flip
            className="absolute -bottom-8 -right-6 h-48 w-40 text-rose-300/50"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600">
            <Sparkles className="size-3.5" />
            Hoş geldiniz
          </span>

          <h2 className="heading-display mt-5 text-3xl uppercase sm:text-4xl">
            Sadece bir yurt değil, sıcak bir ev
          </h2>

          <div className="mt-6 h-px w-24 bg-rose-300" />

          <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Üstün Kız Öğrenci Yurdu, Bursa Görükle&apos;de yıllardır
              öğrencilerini ağırlıyor. Şehre yeni gelen bir öğrenci için evden
              uzakta olmanın ne demek olduğunu biliyoruz; bu yüzden yurdumuzu
              bir konaklama yeri gibi değil, bir yaşam alanı gibi kurguladık.
            </p>
            <p>
              Kartlı giriş sistemi, 7/24 kamera kaydı ve her saat görevli
              personelimizle güvenliğinizi; ferah odalarımız, etüt salonumuz ve
              ortak alanlarımızla da konforunuzu güvence altına alıyoruz.
            </p>
          </div>

          <Link
            href="/hakkimizda"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 transition-colors hover:text-rose-500"
          >
            Hakkımızda daha fazlası
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const shots = [
    { alt: "Yurt girişi", caption: "Giriş" },
    { alt: "İki kişilik oda", caption: "İki kişilik oda" },
    { alt: "Çalışma alanı", caption: "Etüt salonu" },
    { alt: "Ziyaretçi odası", caption: "Ziyaretçi odası" },
  ];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          title="Galeriden"
          subtitle="Yurdumuzun odalarını ve ortak alanlarını yakından görün."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {shots.map((shot) => (
            <PhotoFrame
              key={shot.caption}
              alt={shot.alt}
              caption={shot.caption}
              className="aspect-[4/5]"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/galeri" variant="outline" size="lg">
            Tüm fotoğraflar
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
