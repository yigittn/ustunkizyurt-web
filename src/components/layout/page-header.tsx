import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { BlobDecor, LeafDecor } from "@/components/ui/leaf-decor";
import { localePath, type Locale } from "@/i18n/config";

/** İç sayfaların üst başlık bloğu — başlık, açıklama ve breadcrumb. */
export function PageHeader({
  locale,
  title,
  description,
  homeLabel,
  breadcrumbLabel,
}: {
  locale: Locale;
  title: string;
  description?: string;
  /** Breadcrumb'daki "Ana Sayfa" metni */
  homeLabel: string;
  /** Breadcrumb navigasyonunun ekran okuyucu etiketi */
  breadcrumbLabel: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-rose-100 bg-cream-deep">
      <BlobDecor className="absolute -right-32 -top-40 size-[30rem] text-rose-100" />
      <LeafDecor className="absolute -left-6 bottom-0 h-56 w-48 text-sage-300/50" />

      <div className="container-page relative flex flex-col items-center py-14 text-center lg:py-20">
        <nav aria-label={breadcrumbLabel}>
          <ol className="flex items-center gap-1.5 text-xs text-ink-muted">
            <li>
              <Link
                href={localePath(locale, "home")}
                className="transition-colors hover:text-rose-600"
              >
                {homeLabel}
              </Link>
            </li>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <li aria-current="page" className="font-medium text-rose-700">
              {title}
            </li>
          </ol>
        </nav>

        <h1 className="heading-display mt-5 text-3xl uppercase sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-16 bg-rose-300" />
          <span className="size-1.5 rounded-full bg-rose-400" />
          <span className="h-px w-16 bg-rose-300" />
        </div>

        {description ? (
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-ink-soft">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
