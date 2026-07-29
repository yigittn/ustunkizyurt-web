import Link from "next/link";

import { HouseHeart } from "@/components/brand/house-heart";
import { cn } from "@/lib/utils";

/**
 * Logo kilidi: ev-kalp sembolü + "üstün" kelime markası +
 * "Kız Öğrenci Yurdu" alt satırı.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  /** Açık zeminde "dark", koyu zeminde "light" kullanılır. */
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`Üstün Kız Öğrenci Yurdu — ana sayfa`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-full transition-colors",
          isLight
            ? "bg-white/10 text-rose-200 group-hover:bg-white/15"
            : "bg-rose-100 text-rose-600 group-hover:bg-rose-200",
        )}
      >
        <HouseHeart className="size-6" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-2xl lowercase tracking-[0.28em] sm:text-[1.7rem]",
            isLight ? "text-white" : "text-ink",
          )}
        >
          üstün
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] sm:text-[0.68rem]",
            isLight ? "text-rose-100/80" : "text-ink-muted",
          )}
        >
          Kız Öğrenci Yurdu
        </span>
      </span>
    </Link>
  );
}
