import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.name} iletişim bilgileri: ${contact.address}. Telefon ${contact.phone}, WhatsApp ${contact.whatsapp}.`,
};

const channels = [
  {
    icon: MapPin,
    title: "Adres",
    lines: [contact.address],
    href: contact.mapsHref,
    linkLabel: "Haritada aç",
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: [contact.phone],
    href: contact.phoneHref,
    linkLabel: "Hemen ara",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    lines: [contact.whatsapp],
    href: contact.whatsappHref,
    linkLabel: "Mesaj gönder",
  },
  {
    icon: Mail,
    title: "E-posta",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
    linkLabel: "E-posta yaz",
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        title="İletişim"
        description="Sorularınız, oda rezervasyonu ve yurt gezisi randevusu için bize ulaşın."
      />

      <section className="bg-cream py-20 lg:py-24">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <article
                key={channel.title}
                className="flex flex-col items-center rounded-3xl border border-rose-200/70 bg-surface px-6 py-9 text-center transition-shadow hover:shadow-card"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <channel.icon className="size-6" />
                </span>
                <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  {channel.title}
                </h2>
                {channel.lines.map((line) => (
                  <p
                    key={line}
                    className="mt-3 text-sm leading-relaxed text-ink-soft"
                  >
                    {line}
                  </p>
                ))}
                <a
                  href={channel.href}
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-5 text-xs font-semibold uppercase tracking-widest text-rose-700 transition-colors hover:text-rose-500"
                >
                  {channel.linkLabel}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-surface px-6 py-8 text-center shadow-soft sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <Clock className="size-6" />
            </span>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                Ziyaret saatleri
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Yurdumuzu her gün 09:00 – 20:00 arasında gezebilirsiniz.
                Gelmeden önce arayarak randevu almanızı öneririz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            title="Bizi bulun"
            subtitle="Görükle merkezde, Uludağ Üniversitesi kampüsüne yürüme mesafesinde."
          />

          <div className="mt-12 overflow-hidden rounded-3xl shadow-card ring-1 ring-rose-200/70">
            <iframe
              title={`${site.name} konumu`}
              src="https://maps.google.com/maps?q=G%C3%B6r%C3%BCkle%20%C3%9C%C3%A7oluk%20Cd.%20No%3A39%2016285%20Nil%C3%BCfer%20Bursa&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full border-0"
            />
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={contact.whatsappHref} size="lg">
              <WhatsAppIcon className="size-5" />
              WhatsApp&apos;tan yazın
            </Button>
            <Button href={contact.phoneHref} size="lg" variant="outline">
              <Phone className="size-4" />
              {contact.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
