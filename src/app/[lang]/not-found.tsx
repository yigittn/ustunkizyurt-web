"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { HouseHeart } from "@/components/brand/house-heart";
import { Button } from "@/components/ui/button";
import { BlobDecor, LeafDecor } from "@/components/ui/leaf-decor";
import { getDictionary } from "@/i18n";
import { localePath, stripLocale } from "@/i18n/config";

/**
 * 404 sayfası.
 *
 * `not-found.tsx` params almadığı için dil, adresten çözülür; bu yüzden
 * istemci bileşeni. Sayfa `[lang]` düzeninin içinde render edildiğinden
 * navbar ve footer olduğu gibi görünür.
 */
export default function NotFound() {
  const pathname = usePathname();
  const { locale } = stripLocale(pathname);
  const d = getDictionary(locale);

  return (
    <section className="relative flex min-h-[calc(100svh-var(--header-h))] items-center overflow-hidden bg-cream">
      <BlobDecor className="absolute -right-40 -top-32 size-[36rem] text-rose-100" />
      <BlobDecor className="absolute -bottom-56 -left-56 size-[38rem] text-sage-100/60" />
      <LeafDecor className="absolute right-6 top-20 hidden h-72 w-64 text-sage-300/50 lg:block" />

      <div className="container-page relative flex flex-col items-center py-16 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-rose-200 text-rose-700">
          <HouseHeart className="size-8" />
        </span>

        <p className="heading-display mt-8 text-5xl text-rose-600 sm:text-6xl">
          {d.notFound.code}
        </p>

        <h1 className="heading-display mt-4 text-3xl uppercase sm:text-4xl">
          {d.notFound.title}
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-16 bg-rose-300" />
          <span className="size-1.5 rounded-full bg-rose-400" />
          <span className="h-px w-16 bg-rose-300" />
        </div>

        <p className="mt-6 max-w-md text-pretty leading-relaxed text-ink-soft">
          {d.notFound.text}
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={localePath(locale, "home")} size="lg">
            {d.notFound.button}
            <ArrowRight className="size-4" />
          </Button>
          <Link
            href={localePath(locale, "contact")}
            className="text-sm font-semibold text-rose-700 transition-colors hover:text-rose-500"
          >
            {d.notFound.contactLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
