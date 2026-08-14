"use client";

import { useEffect, useState } from "react";

import { PhotoFrame } from "@/components/ui/photo-frame";
import { fill } from "@/i18n";
import type { Dictionary } from "@/i18n";
import { heroSlides } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Slaytların kendiliğinden ilerleme aralığı. */
const INTERVAL_MS = 5000;

/**
 * Hero fotoğraf slaytı. Fotoğraflar üst üste durur, aralarında
 * yumuşak geçiş yapılır; böylece geçiş sırasında yerleşim oynamaz.
 *
 * İçerik `heroSlides` dizisinden gelir — fotoğraf eklemek için
 * bu bileşene dokunmak gerekmez.
 */
export function HeroSlideshow({
  photos,
  photoLabel,
  slideshowLabel,
  goToSlideLabel,
}: {
  photos: Dictionary["photos"];
  photoLabel: string;
  slideshowLabel: string;
  /** `{n}` yer tutucusu içeren etiket */
  goToSlideLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = heroSlides.length;

  useEffect(() => {
    if (paused || count < 2) return;

    // Hareketi azaltma tercihi olanlarda kendiliğinden dönmesin
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % count);
    }, INTERVAL_MS);

    return () => clearTimeout(timer);
    // `index` bağımlılığı bilinçli: noktaya tıklanınca sayaç baştan başlasın,
    // yoksa kullanıcı seçtiği fotoğrafı yarım saniye görüp geçebiliyor.
  }, [paused, count, index]);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={slideshowLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative"
    >
      {/* Mobilde daha yatık: dikey alan kısıtlı, fotoğraf katlamanın altında kalmasın */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:aspect-[4/3]">
        {heroSlides.map((slide, position) => {
          const active = position === index;

          return (
            <div
              key={slide.id}
              aria-hidden={!active}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-out",
                active ? "opacity-100" : "opacity-0",
              )}
            >
              <PhotoFrame
                src={slide.src}
                alt={photos[slide.id]}
                photoLabel={photoLabel}
                // İlk kare LCP olduğu için öncelikli; diğerleri saniyeler
                // içinde gösterileceğinden lazy değil eager yüklenir.
                priority={position === 0}
                loading={position === 0 ? undefined : "eager"}
                className="size-full rounded-3xl"
              />
            </div>
          );
        })}
      </div>

      {count > 1 ? (
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {heroSlides.map((slide, position) => {
            const active = position === index;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setIndex(position)}
                aria-label={fill(goToSlideLabel, { n: position + 1 })}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full ring-1 ring-ink/10 transition-all duration-300",
                  active
                    ? "w-6 bg-rose-500"
                    : "w-2 bg-surface/80 hover:bg-rose-200",
                )}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
