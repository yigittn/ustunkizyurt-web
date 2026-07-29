import { HeartHandshake, Telescope } from "lucide-react";

import { BlobDecor } from "@/components/ui/leaf-decor";
import { mission, vision, type ValueCard } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ValueCards() {
  return (
    <section className="relative overflow-hidden bg-cream-deep py-20 lg:py-28">
      <BlobDecor className="absolute -left-24 -top-24 size-96 text-rose-200/45" />
      <BlobDecor className="absolute -bottom-32 -right-24 size-[28rem] text-sage-100/70" />

      <div className="container-page relative grid gap-8 lg:grid-cols-2 lg:gap-10">
        <ValuePanel
          card={vision}
          icon={<Telescope className="size-8" />}
          tone="rose"
        />
        <ValuePanel
          card={mission}
          icon={<HeartHandshake className="size-8" />}
          tone="sage"
        />
      </div>
    </section>
  );
}

const tones = {
  rose: {
    medallion: "bg-rose-200 text-rose-700",
    frame: "border-rose-300/70",
    line: "bg-rose-300",
    dot: "bg-rose-400",
  },
  sage: {
    medallion: "bg-sage-200 text-sage-700",
    frame: "border-sage-300/70",
    line: "bg-sage-300",
    dot: "bg-sage-400",
  },
} as const;

/** Görsellerdeki ikon madalyonlu, ince çerçeveli beyaz kart. */
function ValuePanel({
  card,
  icon,
  tone,
}: {
  card: ValueCard;
  icon: React.ReactNode;
  tone: keyof typeof tones;
}) {
  const t = tones[tone];

  return (
    <article className="relative rounded-[2rem] bg-surface px-6 pb-10 pt-16 shadow-card sm:px-10">
      <span
        className={cn(
          "absolute -top-9 left-1/2 flex size-[4.5rem] -translate-x-1/2 items-center justify-center rounded-full ring-8 ring-cream-deep",
          t.medallion,
        )}
      >
        {icon}
      </span>

      <div className={cn("rounded-[1.5rem] border px-4 py-8 text-center sm:px-8", t.frame)}>
        <h2 className="heading-display text-2xl uppercase sm:text-3xl">
          {card.title}
        </h2>

        <div className="mx-auto mt-5 flex w-40 items-center gap-2">
          <span className={cn("h-px flex-1", t.line)} />
          <span className={cn("size-1.5 rounded-full", t.dot)} />
          <span className={cn("h-px flex-1", t.line)} />
        </div>

        <p className="mt-6 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {card.body}
        </p>
      </div>
    </article>
  );
}
