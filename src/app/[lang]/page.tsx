import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Footprints, ShieldCheck, Sparkles } from "lucide-react";

import { HouseHeart } from "@/components/brand/house-heart";
import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";
import { ValueCards } from "@/components/sections/value-cards";
import { Button } from "@/components/ui/button";
import { BlobDecor, LeafDecor } from "@/components/ui/leaf-decor";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, isLocale, locales, type Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { trustPoints } from "@/lib/content";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <>
      <Hero locale={lang} d={d} />
      <TrustStrip d={d} />
      <IntroSection locale={lang} d={d} />
      <FeaturesSection d={d} />
      <ValueCards d={d} />
      <GalleryPreview locale={lang} d={d} />
      <CtaSection
        title={d.cta.title}
        text={d.cta.text}
        whatsappLabel={d.cta.whatsapp}
      />
    </>
  );
}

function Hero({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--header-h))] items-center overflow-hidden bg-cream">
      <BlobDecor className="absolute -right-40 -top-32 size-[36rem] text-rose-100" />
      <BlobDecor className="absolute -bottom-56 -left-56 size-[38rem] text-sage-100/60" />
      <LeafDecor className="absolute right-4 top-24 hidden h-80 w-72 text-sage-300/50 lg:block" />

      <div className="container-page relative grid items-center gap-6 py-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sage-300 bg-sage-50 px-4 py-1.5 text-xs font-medium tracking-wide text-sage-700">
            <ShieldCheck className="size-3.5" />
            {d.common.ministryShort}
          </span>

          <h1 className="heading-display mt-4 text-[2rem] uppercase sm:mt-6 sm:text-5xl lg:text-6xl">
            {d.home.heroTitleTop}
            <span className="mt-2 block text-rose-600">
              {d.home.heroTitleBottom}
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-3 sm:mt-7">
            <span className="h-px w-20 bg-rose-300" />
            <HouseHeart className="size-5 text-rose-400" />
            <span className="h-px w-20 bg-rose-300" />
          </div>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:mt-7 sm:text-lg">
            {d.home.heroLead}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button href={localePath(locale, "contact")} size="lg">
              {d.home.heroCtaPrimary}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              href={localePath(locale, "gallery")}
              size="lg"
              variant="outline"
            >
              {d.home.heroCtaSecondary}
            </Button>
          </div>
        </div>

        <div className="relative">
          <HeroSlideshow
            photos={d.photos}
            photoLabel={d.common.photo}
            slideshowLabel={d.a11y.slideshow}
            goToSlideLabel={d.a11y.goToSlide}
          />

          {/*
            Mobilde slaytın altında ayrı bir satır olarak durur — fotoğrafı
            ve slayt noktalarını kapatmasın diye. lg'den itibaren köşeye
            oturan yüzen karta dönüşür.
          */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-soft lg:absolute lg:-bottom-6 lg:-left-8 lg:z-10 lg:mt-0 lg:px-5 lg:py-4 lg:shadow-card">
            <span className="flex size-10 items-center justify-center rounded-full bg-rose-200 text-rose-700 lg:size-11">
              <Footprints className="size-5" />
            </span>
            <span className="flex items-baseline gap-1.5 lg:flex-col lg:items-start lg:gap-0 lg:leading-tight">
              <span className="font-display text-lg text-ink lg:text-xl">
                {d.home.minutesValue}
              </span>
              <span className="text-xs text-ink-muted">
                {d.home.minutesLabel}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ d }: { d: Dictionary }) {
  return (
    <section className="border-y border-rose-100 bg-surface">
      <div className="container-page grid divide-y divide-rose-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {trustPoints.map((point) => (
          <div
            key={point.id}
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
              {d.trust[point.id].title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {d.trust[point.id].text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IntroSection({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <PhotoFrame
            alt={d.photos.lounge}
            photoLabel={d.common.photo}
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
            {d.home.introEyebrow}
          </span>

          <h2 className="heading-display mt-5 text-3xl uppercase sm:text-4xl">
            {d.home.introTitle}
          </h2>

          <div className="mt-6 h-px w-24 bg-rose-300" />

          <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft">
            {d.home.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <Link
            href={localePath(locale, "about")}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 transition-colors hover:text-rose-500"
          >
            {d.home.introLink}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview({ locale, d }: { locale: Locale; d: Dictionary }) {
  const shots = [
    d.photos.entrance,
    d.photos.doubleRoom,
    d.photos.studyHall,
    d.photos.guestRoom,
  ];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          title={d.home.galleryTitle}
          subtitle={d.home.gallerySubtitle}
        />

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {shots.map((alt) => (
            <PhotoFrame
              key={alt}
              alt={alt}
              photoLabel={d.common.photo}
              className="aspect-[4/5]"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href={localePath(locale, "gallery")}
            variant="outline"
            size="lg"
          >
            {d.home.galleryButton}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
