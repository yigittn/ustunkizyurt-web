"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { BritishFlag, TurkishFlag } from "@/components/brand/flags";
import {
  localeNames,
  locales,
  switchLocalePath,
  type Locale,
} from "@/i18n/config";
import { cn } from "@/lib/utils";

const flags: Record<Locale, React.ComponentType<{ className?: string }>> = {
  tr: TurkishFlag,
  en: BritishFlag,
};

type Tone = "dark" | "light";

/** Yuvarlak çerçeve içine kırpılmış bayrak. */
function Flag({
  locale,
  tone,
  dimmed = false,
  className,
}: {
  locale: Locale;
  tone: Tone;
  dimmed?: boolean;
  className?: string;
}) {
  const Component = flags[locale];

  return (
    <span
      className={cn(
        "flex size-4 shrink-0 overflow-hidden rounded-full ring-1 transition-opacity",
        tone === "light" ? "ring-cream/25" : "ring-ink/10",
        dimmed ? "opacity-60" : "opacity-100",
        className,
      )}
    >
      <Component className="size-full" />
    </span>
  );
}

/**
 * Dil seçimi. Yalnızca geçerli dili gösterir; tıklanınca altından
 * diğer dil(ler) açılır. Seçim, kullanıcıyı ana sayfaya atmak yerine
 * bulunduğu sayfanın karşılığına götürür.
 */
export function LanguageSwitcher({
  locale,
  label,
  tone = "dark",
  className,
}: {
  locale: Locale;
  /** Ekran okuyucu etiketi */
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = `lang-${useId().replace(/:/g, "")}`;

  const isLight = tone === "light";
  const others = locales.filter((item) => item !== locale);

  // Sayfa değişince paneli kapat
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Dışarı tıklama ve Escape ile kapat
  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    // inline-block: blok bağlamda (footer sütunu) sarmalayıcı butona göre
    // daralsın, panel de sütun genişliğine yayılmasın
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${label}: ${localeNames[locale]}`}
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider transition-colors",
          isLight
            ? "border-cream/15 bg-cream/5 text-cream/80 hover:border-cream/30 hover:text-cream"
            : "border-rose-200/80 bg-surface/70 text-ink hover:border-rose-300 hover:bg-surface",
        )}
      >
        <Flag locale={locale} tone={tone} />
        {locale}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-3 transition-transform duration-200",
            isLight ? "text-cream/50" : "text-ink-muted",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute right-0 top-full z-50 mt-1.5 min-w-full overflow-hidden rounded-xl border p-1 shadow-card",
          isLight ? "border-cream/15 bg-ink" : "border-rose-200/80 bg-surface",
        )}
      >
        <ul>
          {others.map((item) => (
            <li key={item}>
              <Link
                href={switchLocalePath(pathname, item)}
                hrefLang={item}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider transition-colors",
                  isLight
                    ? "text-cream/70 hover:bg-cream/10 hover:text-cream"
                    : "text-ink-soft hover:bg-rose-50 hover:text-rose-700",
                )}
              >
                <Flag locale={item} tone={tone} />
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Mobil menü içindeki yan yana sürüm. Menü zaten açık bir panel
 * olduğu için burada ikinci bir açılır katman kurmak yerine
 * seçenekler doğrudan gösterilir.
 */
export function LanguageSwitcherInline({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-rose-200/80 bg-surface/70 p-0.5",
        className,
      )}
    >
      {locales.map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            href={switchLocalePath(pathname, item)}
            hrefLang={item}
            aria-current={active ? "true" : undefined}
            className={cn(
              "flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
              active
                ? "bg-surface text-ink shadow-soft"
                : "text-ink-muted hover:text-ink",
            )}
          >
            <Flag
              locale={item}
              tone="dark"
              dimmed={!active}
              className="size-5"
            />
            {item}
          </Link>
        );
      })}
    </div>
  );
}
