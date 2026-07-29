import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Üstün Kız Öğrenci Yurdu'nun odaları, etüt salonu, dinlenme alanları ve binasından fotoğraflar.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        title="Galeri"
        description="Odalarımızı, ortak alanlarımızı ve binamızı yakından görün."
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>

      <CtaSection
        title="Yerinde görmek en iyisi"
        text="Fotoğraflar bir fikir verir ama yurdumuzu gezmek çok daha iyisidir. Randevu için bize ulaşın."
      />
    </>
  );
}
