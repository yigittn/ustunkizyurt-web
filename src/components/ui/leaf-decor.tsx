import { cn } from "@/lib/utils";

/**
 * Görsellerdeki ince çizgili yaprak süslemesi. Bölüm köşelerinde
 * dekoratif olarak kullanılır, ekran okuyuculardan gizlenir.
 */
export function LeafDecor({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", flip && "-scale-x-100", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      >
        <path d="M18 208C18 208 52 150 88 112C124 74 172 44 172 44" />
        <path d="M96 104c-6-22 2-44 20-56 6 20-2 42-20 56Z" />
        <path d="M104 96c22 4 42-6 52-24-20-6-42 4-52 24Z" />
        <path d="M66 138c-8-20-3-42 13-56 8 19 2 41-13 56Z" />
        <path d="M74 130c21 6 42-2 54-19-20-8-43 0-54 19Z" />
        <path d="M38 176c-9-19-6-41 9-56 9 18 5 41-9 56Z" />
        <path d="M46 168c21 7 42 1 55-15-20-9-43-3-55 15Z" />
      </g>
    </svg>
  );
}

/** Yumuşak, organik arka plan lekesi (görsellerdeki bej dalgalar). */
export function BlobDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <path
        fill="currentColor"
        d="M321 62c34 32 51 87 42 137-9 50-44 95-90 118s-104 24-142-3c-38-27-57-82-52-135 5-53 34-104 76-125 42-21 97-12 131 8Z"
      />
    </svg>
  );
}
