"use client";

import { useRef, useState } from "react";
import { Expand } from "lucide-react";

import { GalleryLightbox } from "@/components/sections/gallery-lightbox";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { fill, type Dictionary } from "@/i18n";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategoryId,
} from "@/lib/gallery";
import { cn } from "@/lib/utils";

const ALL = "all" as const;

type Filter = typeof ALL | GalleryCategoryId;

export function GalleryGrid({
  gallery,
  photoLabel,
  categoriesLabel,
  a11y,
}: {
  gallery: Dictionary["gallery"];
  /** Yer tutucudaki "Fotoğraf" etiketi */
  photoLabel: string;
  categoriesLabel: string;
  a11y: Dictionary["a11y"];
}) {
  const [active, setActive] = useState<Filter>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Katman kapanınca odak, tıklanan küçük görsele geri döner
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const visible =
    active === ALL
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  const filters: Filter[] = [ALL, ...galleryCategories];

  const photos = visible.map((item) => ({
    src: item.src,
    alt: gallery.items[item.id],
  }));

  function closeLightbox() {
    const acilanIndeks = openIndex;
    setOpenIndex(null);
    if (acilanIndeks !== null) {
      thumbRefs.current[acilanIndeks]?.focus();
    }
  }

  return (
    <div>
      {/*
        Sekme (tab) rolü yerine basılı-durum düğmeleri: gerçek sekme
        yapısı ayrı bir tabpanel ve ok tuşu gezinmesi gerektirir; burada
        yapılan iş bir filtre, ekran okuyucuya da öyle bildirilmeli.
      */}
      <div
        role="group"
        aria-label={categoriesLabel}
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => {
          const selected = active === filter;
          const label =
            filter === ALL ? gallery.all : gallery.categories[filter];

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setActive(filter);
                // Liste değişince katmandaki indeks anlamını yitirir
                setOpenIndex(null);
              }}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                selected
                  ? "border-rose-400 bg-rose-400 text-ink"
                  : "border-ink/12 text-ink-soft hover:border-rose-300 hover:text-rose-700",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {visible.map((item, index) => {
          const alt = gallery.items[item.id];

          return (
            <button
              key={item.id}
              type="button"
              ref={(el) => {
                thumbRefs.current[index] = el;
              }}
              onClick={() => setOpenIndex(index)}
              aria-label={fill(a11y.openPhoto, { alt })}
              className="group relative block cursor-zoom-in overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
            >
              <PhotoFrame
                src={item.src}
                alt={alt}
                photoLabel={photoLabel}
                // lg'de 4 sütun, altında 2 sütun
                sizes="(min-width: 1024px) 23vw, 48vw"
                // İlk sıra katlamanın üstünde ve LCP adayı; lazy kalırsa
                // sayfa geç açılıyormuş gibi görünüyor.
                priority={index === 0}
                loading={index < 4 ? "eager" : undefined}
                className="aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Büyütülebildiğini gösteren üst katman */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-3xl bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/25 group-hover:opacity-100 group-focus-visible:bg-ink/25 group-focus-visible:opacity-100"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-cream/95 text-ink shadow-card">
                  <Expand className="size-5" />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {openIndex !== null ? (
        <GalleryLightbox
          photos={photos}
          index={openIndex}
          onClose={closeLightbox}
          onNavigate={setOpenIndex}
          a11y={a11y}
        />
      ) : null}
    </div>
  );
}
