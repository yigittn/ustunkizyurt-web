import { en } from "./dictionaries/en";
import { tr, type Dictionary } from "./dictionaries/tr";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { tr, en };

/** Verilen dilin sözlüğünü döndürür. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** `{n}` gibi yer tutucuları doldurur. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export type { Dictionary };
export * from "./config";
