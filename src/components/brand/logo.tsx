import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Marka sembolü: wordmark'ın üzerine kemer gibi oturan çatı ve
 * çatının altındaki dört bölmeli pencere.
 */
export function LogoMark({
  className,
  windowClassName,
}: {
  /** Yalnızca genişlik verin; yükseklik en-boy oranından gelir. */
  className?: string;
  /** Pencere karelerinin rengi (varsayılan: gül aksan) */
  windowClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-auto w-14", className)}
    >
      <path
        d="M8 44 L60 6 L112 44"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className={cn("text-rose-400", windowClassName)} fill="currentColor">
        <rect x="49.75" y="17" width="9" height="9" rx="1.2" />
        <rect x="61.25" y="17" width="9" height="9" rx="1.2" />
        <rect x="49.75" y="28.5" width="9" height="9" rx="1.2" />
        <rect x="61.25" y="28.5" width="9" height="9" rx="1.2" />
      </g>
    </svg>
  );
}

type Tone = "dark" | "light";

const toneStyles: Record<
  Tone,
  {
    mark: string;
    window: string;
    wordmark: string;
    subline: string;
    rule: string;
    dot: string;
    tagline: string;
  }
> = {
  dark: {
    mark: "text-ink",
    window: "text-rose-400",
    wordmark: "text-ink",
    subline: "text-ink-muted",
    rule: "bg-rose-300",
    dot: "bg-rose-500",
    tagline: "text-rose-600",
  },
  light: {
    mark: "text-cream",
    window: "text-rose-300",
    wordmark: "text-cream",
    subline: "text-cream/60",
    rule: "bg-cream/25",
    dot: "bg-rose-300",
    tagline: "text-rose-200",
  },
};

/**
 * Navbar için kompakt logo kilidi: çatı + ÜSTÜN + alt satır.
 * Açık zeminde `dark`, koyu zeminde `light` tonu kullanılır.
 */
export function Logo({
  className,
  tone = "dark",
  href,
  label,
  subline,
}: {
  className?: string;
  tone?: Tone;
  /** Geçerli dilin ana sayfası */
  href: string;
  /** Ekran okuyucu etiketi */
  label: string;
  /** "Kız Öğrenci Yurdu" — dile göre değişir */
  subline: string;
}) {
  const t = toneStyles[tone];

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group inline-flex flex-col items-center transition-opacity hover:opacity-85",
        className,
      )}
    >
      <LogoMark
        className={cn("w-[3.4rem] sm:w-[3.8rem]", t.mark)}
        windowClassName={t.window}
      />

      {/* Çatının ayakları Ü'nün noktalarına binmesin diye boşluk bırakıldı */}
      <span
        className={cn(
          "mt-1 whitespace-nowrap pl-[0.3em] text-[1.35rem] font-bold uppercase leading-none tracking-[0.3em] sm:text-2xl",
          t.wordmark,
        )}
      >
        Üstün
      </span>

      <span
        className={cn(
          "mt-2 whitespace-nowrap pl-[0.24em] text-[0.55rem] font-medium uppercase leading-none tracking-[0.24em] sm:text-[0.6rem]",
          t.subline,
        )}
      >
        {subline}
      </span>
    </Link>
  );
}

/**
 * Tam logo kilidi: kompakt sürümün altına ince ayraç ve el yazısı slogan
 * ekler. Footer ve büyük kullanımlar için.
 */
export function LogoStacked({
  className,
  tone = "dark",
  tagline,
  subline,
  label,
  href,
}: {
  className?: string;
  tone?: Tone;
  /** El yazısı slogan; boş verilirse gösterilmez. */
  tagline?: string;
  /** "Kız Öğrenci Yurdu" — dile göre değişir */
  subline: string;
  label: string;
  /** Boş verilirse bağlantı değil, düz blok olarak render edilir. */
  href?: string | null;
}) {
  const t = toneStyles[tone];

  const content = (
    <>
      <LogoMark
        className={cn("w-[5.5rem] sm:w-24", t.mark)}
        windowClassName={t.window}
      />

      <span
        className={cn(
          "mt-2 whitespace-nowrap pl-[0.34em] text-[2rem] font-bold uppercase leading-none tracking-[0.34em] sm:text-[2.35rem]",
          t.wordmark,
        )}
      >
        Üstün
      </span>

      <span
        className={cn(
          "mt-3.5 whitespace-nowrap pl-[0.3em] text-[0.7rem] font-medium uppercase leading-none tracking-[0.3em] sm:text-xs",
          t.subline,
        )}
      >
        {subline}
      </span>

      <span className="mt-4 flex w-full max-w-[15rem] items-center gap-2">
        <span className={cn("h-px flex-1", t.rule)} />
        <span className={cn("size-1.5 rounded-full", t.dot)} />
        <span className={cn("h-px flex-1", t.rule)} />
      </span>

      {tagline ? (
        <span
          className={cn(
            "mt-3 text-center font-script text-xl leading-snug sm:text-2xl",
            t.tagline,
          )}
        >
          {tagline}
        </span>
      ) : null}
    </>
  );

  const wrapper = cn("inline-flex flex-col items-center", className);

  if (!href) {
    return <div className={wrapper}>{content}</div>;
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(wrapper, "transition-opacity hover:opacity-85")}
    >
      {content}
    </Link>
  );
}
