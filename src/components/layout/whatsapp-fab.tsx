import { WhatsAppIcon } from "@/components/brand/whatsapp-icon";
import { contact } from "@/lib/site";

/** Her sayfada sağ altta duran sabit WhatsApp butonu. */
export function WhatsAppFab() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ile yazın: ${contact.whatsapp}`}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
