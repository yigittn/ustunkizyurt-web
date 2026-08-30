import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, isLocale, locales } from "@/i18n";
import { featureIcons, featureOrder, roomOrder, roomPhotos } from "@/lib/content";
import { alternatesFor } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hizmetlerimiz">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return {
    title: d.services.title,
    description: d.services.metaDescription,
    alternates: alternatesFor(lang, "services"),
  };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/hizmetlerimiz">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <>
      <PageHeader
        locale={lang}
        title={d.services.title}
        description={d.services.description}
        homeLabel={d.nav.home}
        breadcrumbLabel={d.a11y.breadcrumb}
      />

      <FeaturesSection d={d} />

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title={d.services.roomsTitle}
            subtitle={d.services.roomsSubtitle}
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {roomOrder.map((id) => (
              <article key={id} className="flex flex-col">
                {/* 4:5 dikey: oda fotoğraflarının çoğu dikey çekildi,
                    ayrıca galerideki kadrajla aynı oran olsun diye */}
                <PhotoFrame
                  src={roomPhotos[id]}
                  alt={d.services.rooms[id].name}
                  photoLabel={d.common.photo}
                  // lg'de 3 sütun, altında tek sütun
                  sizes="(min-width: 1024px) 31vw, 100vw"
                  className="aspect-[4/5]"
                />
                <h3 className="heading-display mt-6 text-xl uppercase">
                  {d.services.rooms[id].name}
                </h3>
                <span className="mt-3 h-px w-12 bg-rose-400" />
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {d.services.rooms[id].text}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
            {d.services.roomsNote}
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title={d.services.detailsTitle}
            subtitle={d.services.detailsSubtitle}
          />

          <dl className="mx-auto mt-14 grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2">
            {featureOrder.map((id) => {
              const Icon = featureIcons[id];

              return (
                <div key={id} className="flex gap-4">
                  <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                      {d.features[id].label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {d.features[id].description}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <CtaSection
        title={d.services.ctaTitle}
        text={d.services.ctaText}
        whatsappLabel={d.cta.whatsapp}
      />
    </>
  );
}
