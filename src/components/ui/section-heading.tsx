import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Başlığın üstünde, iki çizgi arasında duran süsleme ikonu */
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  /** Başlığın altındaki kalp ayracı */
  divider?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

/**
 * Sitenin imza başlık bloğu: ikon + yatay çizgiler, geniş harf aralıklı
 * serif başlık, alt açıklama ve kalp ayracı.
 */
export function SectionHeading({
  icon,
  title,
  subtitle,
  divider = true,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {icon ? (
        <div className="flex w-full max-w-md items-center gap-3 sm:gap-4">
          <Ornament side="left" />
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-rose-200 text-rose-700 sm:size-16">
            {icon}
          </span>
          <Ornament side="right" />
        </div>
      ) : null}

      <Tag
        className={cn(
          "heading-display mt-5 text-3xl uppercase sm:text-4xl lg:text-5xl",
          !icon && "mt-0",
        )}
      >
        {title}
      </Tag>

      {subtitle ? (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {subtitle}
        </p>
      ) : null}

      {divider ? (
        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-16 bg-rose-300 sm:w-24" />
          <Heart className="size-4 fill-rose-400 text-rose-400" />
          <span className="h-px w-16 bg-rose-300 sm:w-24" />
        </div>
      ) : null}
    </div>
  );
}

function Ornament({ side }: { side: "left" | "right" }) {
  return (
    <span
      className={cn(
        "flex flex-1 items-center",
        side === "left" ? "justify-end" : "flex-row-reverse justify-end",
      )}
    >
      <span className="size-1.5 rounded-full bg-rose-400" />
      <span className="h-px flex-1 bg-rose-300" />
    </span>
  );
}
