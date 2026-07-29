import { cn } from "@/lib/utils";

/** Marka sembolü: kalp taşıyan ev — "kendini evinde hissetmek". */
export function HouseHeart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <path
        d="M6 21.5 24 6l18 15.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22v18a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 36.5c-.3 0-6.5-4-6.5-8.2a3.6 3.6 0 0 1 6.5-2 3.6 3.6 0 0 1 6.5 2c0 4.2-6.2 8.2-6.5 8.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
