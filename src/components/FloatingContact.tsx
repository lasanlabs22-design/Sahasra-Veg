"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { site } from "@/lib/site";

// Sections with their own call and WhatsApp buttons, where the floating pair would only cover them.
const ownButtons = ["hall", "catering"];

// Always-visible quick contact on the right edge, on every page and screen size.
export default function FloatingContact() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScreen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)));
        setHidden(onScreen.size > 0);
      },
      { threshold: 0.5 },
    );
    ownButtons.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-3 z-50 flex flex-col gap-2.5 transition-opacity duration-300 sm:right-6 ${hidden ? "pointer-events-none opacity-0" : ""}`}
      aria-hidden={hidden}
    >
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sahasra Pure Veg on WhatsApp"
        tabIndex={hidden ? -1 : undefined}
        className="grid size-12 sm:size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 ring-2 ring-white/70 transition-transform hover:scale-105"
      >
        <FaWhatsapp size={30} aria-hidden />
      </a>
      <a
        href={site.phoneHref}
        aria-label={`Call Sahasra Pure Veg on ${site.phoneDisplay}`}
        tabIndex={hidden ? -1 : undefined}
        className="grid size-12 sm:size-14 place-items-center rounded-full bg-teal text-paper shadow-lg shadow-black/25 ring-2 ring-white/70 transition-transform hover:scale-105"
      >
        <FiPhone size={24} aria-hidden />
      </a>
    </div>
  );
}
