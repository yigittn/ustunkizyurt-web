import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Görsellerdeki oval imkân kartı: kesikli halka içinde gül kurusu daire,
 * altında büyük harfli etiket ve kısa çizgi.
 */
export function FeatureOval({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center rounded-[3rem] border border-rose-200 bg-surface/60 px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:bg-surface hover:shadow-card",
        className,
      )}
    >
      <span className="rounded-full border border-dashed border-rose-300 p-1.5">
        <span className="flex size-20 items-center justify-center rounded-full bg-rose-200 text-ink transition-colors group-hover:bg-rose-300">
          <Icon className="size-9" strokeWidth={1.5} />
        </span>
      </span>

      <h3 className="mt-6 text-balance text-sm font-semibold uppercase leading-snug tracking-[0.08em] text-ink">
        {label}
      </h3>

      <span className="mt-4 h-px w-10 bg-rose-400" />
    </div>
  );
}
