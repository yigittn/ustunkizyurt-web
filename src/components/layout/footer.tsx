import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { FacebookIcon, InstagramIcon } from "@/components/brand/social-icons";
import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import { LeafDecor } from "@/components/ui/leaf-decor";
import { contact, navigation, site, social } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-cream/85">
      <LeafDecor className="absolute -right-6 -top-10 h-64 w-56 text-rose-200/15" />
      <LeafDecor
        flip
        className="absolute -bottom-12 -left-8 h-56 w-48 text-rose-200/10"
      />

      <div className="container-page relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              {site.tagline}. Öğrencilerimizin kendilerini güvende, huzurlu ve
              evlerinde hissedebilecekleri bir ortam sunuyoruz.
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/5 px-4 py-2">
              <ShieldCheck className="size-4 text-rose-300" />
              <span className="text-xs font-medium tracking-wide text-cream/80">
                T.C. Gençlik ve Spor Bakanlığı denetimindedir
              </span>
            </div>
          </div>

          <nav aria-label="Alt menü">
            <h2 className="font-display text-lg tracking-widest text-cream">
              Menü
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-rose-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg tracking-widest text-cream">
              İletişim
            </h2>
            <ul className="mt-6 flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={contact.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-cream/70 transition-colors hover:text-rose-200"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-rose-300" />
                  {contact.address}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 text-cream/70 transition-colors hover:text-rose-200"
                >
                  <Phone className="size-4 shrink-0 text-rose-300" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/70 transition-colors hover:text-rose-200"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-rose-300" />
                  {contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-cream/70 transition-colors hover:text-rose-200"
                >
                  <Mail className="size-4 shrink-0 text-rose-300" />
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <FooterSocial href={social.facebook} label="Facebook">
                <FacebookIcon className="size-4" />
              </FooterSocial>
              <FooterSocial href={social.instagram} label="Instagram">
                <InstagramIcon className="size-4" />
              </FooterSocial>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-cream/10 pt-8 text-center text-xs text-cream/50 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>{contact.addressShort}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-rose-300 hover:bg-cream/5 hover:text-rose-200"
    >
      {children}
    </a>
  );
}
