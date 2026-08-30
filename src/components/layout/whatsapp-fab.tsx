import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import { fill } from "@/i18n";
import { contact } from "@/lib/site";

/** Her sayfada sağ altta duran sabit WhatsApp butonu. */
export function WhatsAppFab({ label }: { label: string }) {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={fill(label, { n: contact.whatsapp })}
      // Koyu yeşil: açık tonda beyaz ikon 1.98:1 ile ayırt edilemiyordu
      // (ikonlar için eşik 3:1), bu tonda 5.2:1.
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#0F7A6C] text-white shadow-card transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
