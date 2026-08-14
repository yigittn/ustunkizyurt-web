import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { ValueCards } from "@/components/sections/value-cards";
import { LeafDecor } from "@/components/ui/leaf-decor";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, isLocale, locales } from "@/i18n";
import { aboutPhoto, principles } from "@/lib/content";
import { alternatesFor } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hakkimizda">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return {
    title: d.about.title,
    description: d.about.metaDescription,
    alternates: alternatesFor(lang, "about"),
  };
}

export default async function AboutPage({
  params,
}: PageProps<"/[lang]/hakkimizda">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <>
      <PageHeader
        locale={lang}
        title={d.about.title}
        description={d.about.description}
        homeLabel={d.nav.home}
        breadcrumbLabel={d.a11y.breadcrumb}
      />

      <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <PhotoFrame
              src={aboutPhoto.src}
              alt={d.photos[aboutPhoto.id]}
              photoLabel={d.common.photo}
              className="aspect-[4/5]"
            />
            <LeafDecor
              flip
              className="absolute -bottom-8 -right-6 h-48 w-40 text-rose-300/50"
            />
          </div>

          <div>
            <h2 className="heading-display text-3xl uppercase sm:text-4xl">
              {d.about.whoTitle}
            </h2>
            <div className="mt-6 h-px w-24 bg-rose-300" />

            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft">
              {d.about.whoParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ValueCards d={d} />

      <section className="bg-cream py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title={d.about.valuesTitle}
            subtitle={d.about.valuesSubtitle}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.id}
                className={cn(
                  "flex gap-5 rounded-3xl border bg-surface p-7 transition-shadow hover:shadow-card",
                  item.tone === "sage" ? "border-sage-200" : "border-rose-200",
                )}
              >
                <span
                  className={cn(
                    "flex size-14 shrink-0 items-center justify-center rounded-full",
                    item.tone === "sage"
                      ? "bg-sage-100 text-sage-600"
                      : "bg-rose-100 text-rose-600",
                  )}
                >
                  <item.icon className="size-7" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-ink">
                    {d.about.principles[item.id].title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {d.about.principles[item.id].text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={d.about.ctaTitle}
        text={d.about.ctaText}
        whatsappLabel={d.cta.whatsapp}
      />
    </>
  );
}
