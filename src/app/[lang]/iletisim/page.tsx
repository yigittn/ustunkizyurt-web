import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, isLocale, locales, type Dictionary } from "@/i18n";
import { alternatesFor } from "@/lib/metadata";
import { contact } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/iletisim">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return {
    title: d.contact.title,
    description: `${d.contact.description} ${contact.address}`,
    alternates: alternatesFor(lang, "contact"),
  };
}

function buildChannels(d: Dictionary) {
  return [
    {
      icon: MapPin,
      title: d.common.address,
      line: contact.address,
      href: contact.mapsHref,
      linkLabel: d.contact.openMap,
    },
    {
      icon: Phone,
      title: d.common.phone,
      line: contact.phone,
      href: contact.phoneHref,
      linkLabel: d.contact.callNow,
    },
    {
      icon: WhatsAppIcon,
      title: d.common.whatsapp,
      line: contact.whatsapp,
      href: contact.whatsappHref,
      linkLabel: d.contact.sendMessage,
    },
    {
      icon: Mail,
      title: d.common.email,
      line: contact.email,
      href: `mailto:${contact.email}`,
      linkLabel: d.contact.writeEmail,
    },
  ];
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/iletisim">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const channels = buildChannels(d);

  return (
    <>
      <PageHeader
        locale={lang}
        title={d.contact.title}
        description={d.contact.description}
        homeLabel={d.nav.home}
        breadcrumbLabel={d.a11y.breadcrumb}
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
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {channel.line}
                </p>
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
                {d.contact.hoursTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {d.contact.hoursText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            title={d.contact.mapTitle}
            subtitle={d.contact.mapSubtitle}
          />

          <div className="mt-12 overflow-hidden rounded-3xl shadow-card ring-1 ring-rose-200/70">
            <iframe
              title={d.a11y.mapTitle}
              src={contact.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full border-0"
            />
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={contact.whatsappHref} size="lg">
              <WhatsAppIcon className="size-5" />
              {d.cta.whatsapp}
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
