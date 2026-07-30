import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { getDictionary, isLocale, locales } from "@/i18n";
import { alternatesFor } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/galeri">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return {
    title: d.gallery.title,
    description: d.gallery.metaDescription,
    alternates: alternatesFor(lang, "gallery"),
  };
}

export default async function GalleryPage({
  params,
}: PageProps<"/[lang]/galeri">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <>
      <PageHeader
        locale={lang}
        title={d.gallery.title}
        description={d.gallery.description}
        homeLabel={d.nav.home}
        breadcrumbLabel={d.a11y.breadcrumb}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="container-page">
          <GalleryGrid
            gallery={d.gallery}
            photoLabel={d.common.photo}
            categoriesLabel={d.a11y.galleryCategories}
          />
        </div>
      </section>

      <CtaSection
        title={d.gallery.ctaTitle}
        text={d.gallery.ctaText}
        whatsappLabel={d.cta.whatsapp}
      />
    </>
  );
}
