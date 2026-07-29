"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { FacebookIcon, InstagramIcon } from "@/components/brand/social-icons";
import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import { contact, navigation, social } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />

      <div className="border-b border-rose-100 bg-cream/95 backdrop-blur-sm">
        <div className="container-page flex h-20 items-center justify-between gap-6 lg:h-24">
          <Logo />

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

            <nav aria-label="Ana menü" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navigation.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative block px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                          active
                            ? "text-rose-600"
                            : "text-ink hover:text-rose-600",
                        )}
                      >
                        {item.label}
                        <span
                          className={cn(
                            "absolute inset-x-4 -bottom-0.5 h-px origin-center bg-rose-400 transition-transform duration-200",
                            active ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-rose-300 hover:text-rose-600 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        open={open}
        pathname={pathname}
        onNavigate={() => setOpen(false)}
      />
    </header>
  );
}

/** Telefon, adres ve sosyal medya bağlantılarını taşıyan ince üst şerit. */
function TopBar() {
  return (
    <div className="hidden border-b border-rose-100/70 bg-cream-deep md:block">
      <div className="container-page flex h-11 items-center justify-between text-xs text-ink-soft">
        <div className="flex items-center gap-6">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-rose-600"
          >
            <Phone className="size-3.5 text-rose-500" />
            <span className="font-medium">{contact.phone}</span>
          </a>
          <a
            href={contact.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-rose-600"
          >
            <MapPin className="size-3.5 text-rose-500" />
            <span>{contact.address}</span>
          </a>
        </div>

        <div className="flex items-center gap-1">
          <SocialLink href={social.facebook} label="Facebook">
            <FacebookIcon className="size-3.5" />
          </SocialLink>
          <SocialLink href={social.instagram} label="Instagram">
            <InstagramIcon className="size-3.5" />
          </SocialLink>
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
  pathname,
  onNavigate,
}: {
  open: boolean;
  pathname: string;
  /** Bir bağlantıya tıklanınca menüyü kapatır. */
  onNavigate: () => void;
}) {
  return (
    <div
      id="mobil-menu"
      hidden={!open}
      className="border-b border-rose-100 bg-cream shadow-card lg:hidden"
    >
      <nav aria-label="Mobil menü" className="container-page py-4">
        <ul className="flex flex-col">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block border-b border-rose-100/70 py-3.5 text-base font-medium transition-colors",
                    active ? "text-rose-600" : "text-ink hover:text-rose-600",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 flex flex-col gap-3">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
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
