"use client";

import { useState } from "react";

import { PhotoFrame } from "@/components/ui/photo-frame";
import { galleryCategories, galleryItems } from "@/lib/gallery";
import { cn } from "@/lib/utils";

const ALL = "Tümü";

export function GalleryGrid() {
  const [active, setActive] = useState<string>(ALL);

  const visible =
    active === ALL
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Galeri kategorileri"
        className="flex flex-wrap justify-center gap-2"
      >
        {[ALL, ...galleryCategories].map((category) => {
          const selected = active === category;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                selected
                  ? "border-rose-400 bg-rose-400 text-white"
                  : "border-ink/12 text-ink-soft hover:border-rose-300 hover:text-rose-700",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {visible.map((item) => (
          <PhotoFrame
            key={item.alt}
            src={item.src}
            alt={item.alt}
            caption={item.alt}
            className="aspect-[4/5]"
          />
        ))}
      </div>
    </div>
  );
}
