import Image from "next/image";

import { cn } from "@/lib/utils";

type PhotoFrameProps = {
  /** public/ altındaki görsel yolu. Boş bırakılırsa yer tutucu gösterilir. */
  src?: string;
  alt: string;
  className?: string;
  /** Yer tutucuda gösterilecek "Fotoğraf" / "Photo" etiketi */
  photoLabel: string;
  priority?: boolean;
};

/**
 * Fotoğraf çerçevesi. Gerçek fotoğraflar `public/` altına eklenene kadar
 * aynı ölçülerde bir yer tutucu gösterir; `src` verilince otomatik geçer.
 */
export function PhotoFrame({
  src,
  alt,
  className,
  photoLabel,
  priority,
}: PhotoFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-rose-100 ring-1 ring-rose-200/70",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-rose-100 via-cream-deep to-rose-200 p-6 text-center">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-rose-600">
            {photoLabel}
          </span>
          <span className="text-xs text-ink-muted">{alt}</span>
        </div>
      )}
    </div>
  );
}
