import type { Metadata } from "next";
import { HeartHandshake, Home, ShieldCheck, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { ValueCards } from "@/components/sections/value-cards";
import { LeafDecor } from "@/components/ui/leaf-decor";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Üstün Kız Öğrenci Yurdu, Bursa Görükle'de T.C. Gençlik ve Spor Bakanlığı denetiminde hizmet veren, güvenli ve huzurlu bir kız öğrenci yurdudur.",
};

const principles = [
  {
    icon: ShieldCheck,
    tone: "sage",
    title: "Güven önce gelir",
    text: "Kartlı giriş, 7/24 kamera kaydı ve her saat görevli personel. Ailelerin içi rahat olsun diye güvenlikten ödün vermiyoruz.",
  },
  {
    icon: Home,
    tone: "rose",
    title: "Evinizdeki huzur",
    text: "Ferah odalar, aydınlık ortak alanlar ve sıcak bir atmosfer. Yurdumuza girdiğinizde bir kurumda değil, evde hissedin.",
  },
  {
    icon: HeartHandshake,
    tone: "rose",
    title: "Samimi iletişim",
    text: "Öğrencilerimizi tanır, ihtiyaçlarını dinleriz. Kapımız her zaman açık; bir sorun olduğunda yanınızdayız.",
  },
  {
    icon: Sparkles,
    tone: "sage",
    title: "Düzen ve temizlik",
    text: "Ortak alanların günlük temizliği, düzenli bakım ve hijyen kontrolü rutinimizin bir parçası.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        title="Hakkımızda"
        description="Görükle'de yıllardır öğrencilerini ağırlayan, güveni ve huzuru bir arada sunan bir yurt."
      />

      <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <PhotoFrame
              alt="Üstün Kız Öğrenci Yurdu binası"
              caption="Yurt binamız"
              className="aspect-[4/5]"
            />
            <LeafDecor
              flip
              className="absolute -bottom-8 -right-6 h-48 w-40 text-rose-300/50"
            />
          </div>

          <div>
            <h2 className="heading-display text-3xl uppercase sm:text-4xl">
              Biz kimiz?
            </h2>
            <div className="mt-6 h-px w-24 bg-rose-300" />

            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Üstün Kız Öğrenci Yurdu, Bursa Nilüfer&apos;in Görükle
                bölgesinde, Uludağ Üniversitesi kampüsüne yürüme mesafesinde yer
                alan özel bir kız öğrenci yurdudur. T.C. Gençlik ve Spor
                Bakanlığı ruhsatlı olarak faaliyet gösteriyor, düzenli olarak
                denetleniyoruz.
              </p>
              <p>
                Üniversite hayatı, çoğu öğrenci için evden ilk kez ayrılmak
                demek. Bu geçişin ne kadar zor olabileceğini biliyoruz. Bu
                yüzden yurdumuzu yalnızca kalınacak bir yer olarak değil;
                çalışabileceğiniz, dinlenebileceğiniz ve kendinizi güvende
                hissedebileceğiniz bir yaşam alanı olarak tasarladık.
              </p>
              <p>
                Odalarımız tek, iki ve üç kişilik seçeneklerle sunulur. Etüt
                salonumuz sınav dönemlerinde 7/24 açıktır, ortak alanlarımız
                günlük olarak temizlenir ve ziyaretçilerinizi ağırlayabileceğiniz
                ayrı bir salonumuz bulunur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ValueCards />

      <section className="bg-cream py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title="Değerlerimiz"
            subtitle="Her kararımızın arkasında duran dört temel ilke."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
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
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Yurdumuzu yerinde görmek ister misiniz?"
        text="Randevu alarak odalarımızı ve ortak alanlarımızı gezebilir, tüm sorularınızı yüz yüze sorabilirsiniz."
      />
    </>
  );
}
