import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Tek, iki ve üç kişilik odalar, etüt salonu, çamaşırhane, sınırsız wifi, 7/24 kamera sistemi ve daha fazlası. Üstün Kız Öğrenci Yurdu'nun sunduğu tüm imkânlar.",
};

const roomTypes = [
  {
    name: "Tek kişilik oda",
    text: "Kendi alanına ihtiyaç duyanlar için; kişisel dolap, geniş çalışma masası ve tek yatak.",
  },
  {
    name: "İki kişilik oda",
    text: "En çok tercih edilen seçenek. Her öğrenciye ayrı dolap, ayrı çalışma masası ve kendi yatağı.",
  },
  {
    name: "Üç kişilik oda",
    text: "Daha ekonomik ve sosyal bir seçenek; ferah metrekaresiyle üç öğrenciye rahat bir düzen.",
  },
];

export default function HizmetlerimizPage() {
  return (
    <>
      <PageHeader
        title="Hizmetlerimiz"
        description="Odalarımızdan ortak alanlarımıza, yurdumuzda sizi neler bekliyor?"
      />

      <FeaturesSection />

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title="Odalarımız"
            subtitle="İhtiyacınıza ve bütçenize göre üç farklı oda seçeneği."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {roomTypes.map((room) => (
              <article key={room.name} className="flex flex-col">
                <PhotoFrame
                  alt={room.name}
                  caption={room.name}
                  className="aspect-[4/3]"
                />
                <h3 className="heading-display mt-6 text-xl uppercase">
                  {room.name}
                </h3>
                <span className="mt-3 h-px w-12 bg-rose-400" />
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {room.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
            Tüm odalarımızda merkezi ısıtma, sıcak su, kişiye özel dolap ve
            çalışma masası standart olarak bulunur. Güncel doluluk ve fiyat
            bilgisi için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title="Detaylar"
            subtitle="Her bir imkânımızın kapsamı."
          />

          <dl className="mx-auto mt-14 grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.label} className="flex gap-4">
                <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <feature.icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {feature.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaSection
        title="Fiyat ve doluluk bilgisi için arayın"
        text="Dönemlik ücretlerimiz ve boş oda durumumuz hakkında en güncel bilgiyi telefonla veya WhatsApp'tan alabilirsiniz."
      />
    </>
  );
}
