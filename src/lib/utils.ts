import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Koşullu class isimlerini birleştirir ve çakışan Tailwind sınıflarını
 * (ör. `text-ink` + `text-cream`) sondaki kazanacak şekilde tekilleştirir.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
