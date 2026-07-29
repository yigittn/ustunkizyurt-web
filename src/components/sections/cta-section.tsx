import { Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { LeafDecor } from "@/components/ui/leaf-decor";
import { contact } from "@/lib/site";

export function CtaSection({
  title = "Yerinizi ayırtmak için bize ulaşın",
  text = "Odalarımızı gezmek, fiyatlarımızı öğrenmek veya aklınıza takılan her soru için bir telefon kadar yakınız.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream lg:py-24">
      <LeafDecor className="absolute -left-8 top-0 h-72 w-64 text-rose-200/15" />
      <LeafDecor
        flip
        className="absolute -right-8 bottom-0 h-72 w-64 text-rose-200/15"
      />

      <div className="container-page relative flex flex-col items-center text-center">
        <h2 className="heading-display max-w-2xl text-3xl uppercase text-cream sm:text-4xl">
          {title}
        </h2>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-16 bg-rose-300/60" />
          <span className="size-1.5 rounded-full bg-rose-300" />
          <span className="h-px w-16 bg-rose-300/60" />
        </div>

        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-cream/75">
          {text}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={contact.whatsappHref} size="lg">
            <WhatsAppIcon className="size-5" />
            WhatsApp&apos;tan yazın
          </Button>
          <Button
            href={contact.phoneHref}
            size="lg"
            variant="outline"
            className="border-cream/25 text-cream hover:border-rose-300 hover:bg-cream/5 hover:text-rose-200"
          >
            <Phone className="size-4" />
            {contact.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
