import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { site } from "@/lib/site";

// Always-visible quick contact on the right edge, on every page and screen size.
export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:right-6">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sahasra Pure Veg on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 ring-2 ring-white/70 transition-transform hover:scale-105"
      >
        <FaWhatsapp size={30} aria-hidden />
      </a>
      <a
        href={site.phoneHref}
        aria-label={`Call Sahasra Pure Veg on ${site.phoneDisplay}`}
        className="grid size-14 place-items-center rounded-full bg-teal text-paper shadow-lg shadow-black/25 ring-2 ring-white/70 transition-transform hover:scale-105"
      >
        <FiPhone size={24} aria-hidden />
      </a>
    </div>
  );
}
