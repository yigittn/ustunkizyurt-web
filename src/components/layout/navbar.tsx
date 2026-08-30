"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { InstagramIcon } from "@/components/brand/social-icons";
import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import {
  LanguageSwitcher,
  LanguageSwitcherInline,
} from "@/components/layout/language-switcher";
import type { Dictionary } from "@/i18n";
import {
  localePath,
  pageKeys,
  stripLocale,
  type Locale,
  type PageKey,
} from "@/i18n/config";
import { contact, social } from "@/lib/site";
import { cn } from "@/lib/utils";

type NavbarProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
  logoSubline: string;
  languageLabel: string;
};

export function Navbar({
  locale,
  nav,
  a11y,
  logoSubline,
  languageLabel,
}: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Dil önekinden arındırılmış yol — aktif bağlantıyı bulmak için
  const { rest } = stripLocale(pathname);

  // Sayfa değişince mobil menüyü kapat. Effect yerine render sırasında
  // ayarlanır; böylece fazladan bir render turu oluşmaz.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = pageKeys.map((key) => ({
    key,
    label: nav[key],
    href: localePath(locale, key),
    active: isActive(key, rest),
  }));

  return (
    <header className="sticky top-0 z-50">
      <TopBar
        locale={locale}
        languageSwitcherLabel={a11y.languageSwitcher}
      />

      <div className="border-b border-rose-100 bg-cream/95 backdrop-blur-sm">
        <div className="container-page flex h-20 items-center justify-between gap-6 lg:h-24">
          <Logo
            href={localePath(locale, "home")}
            label={a11y.homeLink}
            subline={logoSubline}
          />

          <div className="flex items-center gap-4">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-3 border-l border-rose-200 pl-6 transition-opacity hover:opacity-80 xl:flex"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-[#25D366]/12 text-[#128C4A]">
                <WhatsAppIcon className="size-6" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                  Whatsapp
                </span>
                <span className="text-sm font-semibold text-ink">
                  {contact.whatsapp}
                </span>
              </span>
            </a>

            <nav aria-label={a11y.mainMenu} className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {items.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      className={cn(
                        "relative block px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                        item.active
                          ? "text-rose-600"
                          : "text-ink hover:text-rose-600",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-px origin-center bg-rose-400 transition-transform duration-200",
                          item.active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label={open ? a11y.closeMenu : a11y.openMenu}
              className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-rose-300 hover:text-rose-600 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        open={open}
        items={items}
        locale={locale}
        a11y={a11y}
        languageLabel={languageLabel}
      />
    </header>
  );
}

/** Ana sayfa yalnızca tam eşleşmede, diğerleri alt yollarda da aktiftir. */
function isActive(key: PageKey, rest: string) {
  const path = localePath("tr", key);
  return key === "home" ? rest === "/" : rest.startsWith(path);
}

/** Telefon, adres, sosyal medya ve dil seçimini taşıyan ince üst şerit. */
function TopBar({
  locale,
  languageSwitcherLabel,
}: {
  locale: Locale;
  languageSwitcherLabel: string;
}) {
  return (
    <div className="hidden border-b border-rose-100/70 bg-cream-deep md:block">
      <div className="container-page flex h-12 items-center justify-between gap-4 text-xs text-ink-soft">
        <div className="flex min-w-0 items-center gap-6">
          <a
            href={contact.phoneHref}
            className="flex shrink-0 items-center gap-2 transition-colors hover:text-rose-600"
          >
            <Phone className="size-3.5 text-rose-500" />
            <span className="font-medium">{contact.phone}</span>
          </a>
          <a
            href={contact.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-center gap-2 transition-colors hover:text-rose-600"
          >
            <MapPin className="size-3.5 shrink-0 text-rose-500" />
            <span className="truncate">{contact.address}</span>
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <SocialLink href={social.instagram} label="Instagram">
            <InstagramIcon className="size-3.5" />
          </SocialLink>

          <span className="h-4 w-px bg-rose-200" />

          <LanguageSwitcher locale={locale} label={languageSwitcherLabel} />
        </div>
      </div>
    </div>
  );
}

function SocialLink({
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
      className="flex size-7 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-rose-100 hover:text-rose-600"
    >
      {children}
    </a>
  );
}

function MobileMenu({
  open,
  items,
  locale,
  a11y,
  languageLabel,
}: {
  open: boolean;
  items: { key: PageKey; label: string; href: string; active: boolean }[];
  locale: Locale;
  a11y: Dictionary["a11y"];
  languageLabel: string;
}) {
  return (
    <div
      id="mobil-menu"
      hidden={!open}
      // Menü açıkken body kilitleniyor; yatay çevrilmiş telefonda menü
      // ekrandan taşarsa alt butonlara ulaşılamıyordu — kendi içinde kaysın.
      className="max-h-[calc(100svh-var(--header-h))] overflow-y-auto overscroll-contain border-b border-rose-100 bg-cream shadow-card lg:hidden"
    >
      <nav aria-label={a11y.mobileMenu} className="container-page py-4">
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "block border-b border-rose-100/70 py-3.5 text-base font-medium transition-colors",
                  item.active ? "text-rose-600" : "text-ink hover:text-rose-600",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
            {languageLabel}
          </span>
          <LanguageSwitcherInline
            locale={locale}
            label={a11y.languageSwitcher}
          />
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            // WhatsApp'ın koyu yeşili: açık #25D366 üzerinde beyaz yazı
            // 1.98:1 ile okunmuyordu, bu tonda 5.2:1.
            className="flex items-center justify-center gap-2 rounded-full bg-[#0F7A6C] px-5 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="size-5" />
            Whatsapp: {contact.whatsapp}
          </a>
          <a
            href={contact.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink"
          >
            <Phone className="size-4 text-rose-500" />
            {contact.phone}
          </a>
        </div>
      </nav>
    </div>
  );
}
