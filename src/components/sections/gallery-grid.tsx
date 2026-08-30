"use client";

import { useState } from "react";

import { PhotoFrame } from "@/components/ui/photo-frame";
import type { Dictionary } from "@/i18n";
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
}: {
  gallery: Dictionary["gallery"];
  /** Yer tutucudaki "Fotoğraf" etiketi */
  photoLabel: string;
  categoriesLabel: string;
}) {
  const [active, setActive] = useState<Filter>(ALL);

  const visible =
    active === ALL
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  const filters: Filter[] = [ALL, ...galleryCategories];

  return (
    <div>
      <div
        role="tablist"
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
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                selected
                  ? "border-rose-400 bg-rose-400 text-white"
                  : "border-ink/12 text-ink-soft hover:border-rose-300 hover:text-rose-700",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {visible.map((item) => (
          <PhotoFrame
            key={item.id}
            src={item.src}
            alt={gallery.items[item.id]}
            photoLabel={photoLabel}
            // lg'de 4 sütun, altında 2 sütun
            sizes="(min-width: 1024px) 23vw, 48vw"
            className="aspect-[4/5]"
          />
        ))}
      </div>
    </div>
  );
}
