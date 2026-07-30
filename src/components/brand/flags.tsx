"use client";

import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * Dil seçimindeki bayraklar. Yuvarlak bir çerçeve içinde kırpılacak
 * şekilde çizilir; bu yüzden kenar oranları kareye yakın tutulmuştur.
 */

/** Türk bayrağı — resmî oranlarla (ay ve yıldız konumu 2:3 bayrağa göre). */
export function TurkishFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      aria-hidden="true"
      className={cn("size-5", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="60" height="40" fill="#E30A17" />
      {/* Ay: büyük beyaz daire, üzerine kaydırılmış kırmızı daire */}
      <circle cx="25" cy="20" r="10" fill="#fff" />
      <circle cx="28.75" cy="20" r="8" fill="#E30A17" />
      {/* Beş köşeli yıldız, bir ucu aya dönük */}
      <path
        fill="#fff"
        d="M36 20 L39.455 18.877 L39.455 15.245 L41.590 18.184 L45.045 17.061 L42.910 20 L45.045 22.939 L41.590 21.816 L39.455 24.755 L39.455 21.123 Z"
      />
    </svg>
  );
}

/** Birleşik Krallık bayrağı — "English" dili için yerleşik simge. */
export function BritishFlag({ className }: { className?: string }) {
  // Aynı sayfada birden çok kez render edildiği için kırpma
  // tanımlarının kimlikleri benzersiz olmalı.
  const rawId = useId();
  const clipId = `uk-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 60 30"
      aria-hidden="true"
      className={cn("size-5", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <clipPath id={clipId}>
        {/* Kırmızı çaprazların dönüşümlü (counterchanged) yarımları */}
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>

      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${clipId})`}
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
