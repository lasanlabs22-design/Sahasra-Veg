import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

const occasions = ["Weddings", "Housewarmings", "Poojas", "Birthdays", "Office events", "Family functions"];

export default function Catering() {
  return (
    <section id="catering" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Catering" title="Sahasra at your celebration">
          <p>
            We bring our pure vegetarian kitchen to your event. Call or WhatsApp us directly to plan your
            menu, quantities and dates.
          </p>
        </SectionHeading>

        <ul className="reveal mt-10 flex flex-wrap justify-center gap-3">
          {occasions.map((o) => (
            <li key={o} className="rounded-full border border-gold/50 px-4 py-2 text-sm text-teal-deep">
              {o}
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 rounded-3xl bg-ink p-8 text-center shadow-2xl shadow-ink/20 sm:p-12">
          <p className="font-caps text-xs tracking-[0.4em] text-gold">Speak to us directly</p>
          <a
            href={site.phoneHref}
            className="mt-4 block font-display text-4xl text-cream transition-colors hover:text-gold sm:text-5xl"
          >
            {site.phoneDisplay}
          </a>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-caps text-sm tracking-[0.2em] text-ink transition-colors hover:bg-gold-soft"
            >
              <FiPhone aria-hidden /> Call Now
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-caps text-sm tracking-[0.2em] text-white transition-opacity hover:opacity-90"
            >
              <FaWhatsapp aria-hidden /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
