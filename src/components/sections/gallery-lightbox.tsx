"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { Dictionary } from "@/i18n";
import { cn } from "@/lib/utils";

export type LightboxPhoto = {
  src?: string;
  alt: string;
};

/**
 * Galeri fotoğrafını tam ekran gösteren katman.
 *
 * Kapatma: X, Escape, arka plana tıklama. Gezinme: oklar, ← → tuşları
 * ve dokunmatikte kaydırma. Açılınca odak katmana taşınır ve içeride
 * hapsedilir; kapanınca tıklanan küçük görsele geri döner.
 */
export function GalleryLightbox({
  photos,
  index,
  onClose,
  onNavigate,
  a11y,
}: {
  photos: LightboxPhoto[];
  index: number;
  onClose: () => void;
  /** Yeni indeksi verir; liste başında/sonunda başa sarar. */
  onNavigate: (nextIndex: number) => void;
  a11y: Dictionary["a11y"];
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = photos.length;
  const photo = photos[index];

  const goPrev = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate],
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % total),
    [index, total, onNavigate],
  );

  // Klavye: Escape kapatır, oklar gezinir, Tab katman içinde döner
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowLeft" && total > 1) {
        event.preventDefault();
        goPrev();
        return;
      }
      if (event.key === "ArrowRight" && total > 1) {
        event.preventDefault();
        goNext();
        return;
      }
      if (event.key !== "Tab") return;

      const odaklanabilir = panelRef.current?.querySelectorAll<HTMLElement>(
        "button:not([disabled])",
      );
      if (!odaklanabilir || odaklanabilir.length === 0) return;

      const ilk = odaklanabilir[0];
      const son = odaklanabilir[odaklanabilir.length - 1];
      if (event.shiftKey && document.activeElement === ilk) {
        event.preventDefault();
        son.focus();
      } else if (!event.shiftKey && document.activeElement === son) {
        event.preventDefault();
        ilk.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, goPrev, goNext, total]);

  // Açıkken arka planın kaymasını engelle
  useEffect(() => {
    const eski = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = eski;
    };
  }, []);

  // Odağı katmana al
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={a11y.lightbox}
      ref={panelRef}
      onClick={(event) => {
        // Yalnızca boşluğa tıklandığında kapat
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const baslangic = touchStartX.current;
        touchStartX.current = null;
        if (baslangic === null || total < 2) return;
        const fark = (event.changedTouches[0]?.clientX ?? baslangic) - baslangic;
        if (Math.abs(fark) < 50) return;
        if (fark > 0) goPrev();
        else goNext();
      }}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/70 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <span
          className="text-sm font-medium tabular-nums text-cream drop-shadow"
          aria-hidden="true"
        >
          {index + 1} / {total}
        </span>

        <button
          type="button"
          ref={closeRef}
          onClick={onClose}
          aria-label={a11y.closePhoto}
          className="flex size-11 items-center justify-center rounded-full border border-cream/30 bg-ink/50 text-cream transition-colors hover:border-cream/50 hover:bg-ink/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-2 sm:px-16">
        {photo.src ? (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            // Tam fotoğraf görünsün diye kırpılmaz
            className="object-contain p-1 drop-shadow-2xl"
            priority
          />
        ) : (
          <span className="text-cream/60">{photo.alt}</span>
        )}

        {total > 1 ? (
          <>
            <NavButton
              side="left"
              label={a11y.prevPhoto}
              onClick={goPrev}
            />
            <NavButton
              side="right"
              label={a11y.nextPhoto}
              onClick={goNext}
            />
          </>
        ) : null}
      </div>

      <p className="px-4 pb-6 pt-2 text-center text-sm text-cream drop-shadow sm:text-base">
        {photo.alt}
      </p>
    </div>
  );
}

function NavButton({
  side,
  label,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 bg-ink/60 text-cream transition-colors hover:border-cream/50 hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:size-12",
        side === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4",
      )}
    >
      {side === "left" ? (
        <ChevronLeft className="size-6" />
      ) : (
        <ChevronRight className="size-6" />
      )}
    </button>
  );
}
