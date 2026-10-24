import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Kolam, TiffinCarrier } from "@/components/art";
import { Heading } from "@/components/ui";
import { site } from "@/lib/site";

const occasions = ["Weddings", "Housewarmings", "Poojas", "Birthdays", "Office events", "Family functions"];

export default function Catering() {
  return (
    <section id="catering" className="screen relative overflow-hidden bg-paper">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-[clamp(1rem,4dvh,3rem)] sm:px-6 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:px-8">
        <div className="relative mx-auto hidden aspect-square h-[min(60dvh,26rem)] lg:block">
          <Kolam className="spin-slow absolute inset-0 text-turmeric/50" />
          <TiffinCarrier className="relative mx-auto h-full" />
        </div>

        <div>
          <div className="flex items-end gap-3">
            <TiffinCarrier className="mb-1 h-24 shrink-0 lg:hidden" />
            <Heading kicker="can't come to us?" title="We'll come to you." />
          </div>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-stone sm:text-lg">
            Big fat wedding or a cosy housewarming, tell us the date and the headcount and we will bring
            Sahasra&apos;s kitchen to your celebration. No forms, no waiting. One call and it is sorted.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {occasions.map((o) => (
              <li key={o} className="rounded-full bg-parchment px-3 py-1.5 text-xs font-medium text-teal-ink sm:px-4 sm:py-2 sm:text-sm">
                {o}
              </li>
            ))}
          </ul>

          <div className="mt-[clamp(1rem,3dvh,2rem)] rounded-[1.75rem] bg-teal-ink p-5 text-paper sm:p-7">
            <p className="font-hand text-base text-turmeric sm:text-lg">one call is all it takes</p>
            <a href={site.phoneHref} className="font-display block text-3xl font-semibold tracking-tight hover:text-turmeric sm:text-5xl">
              {site.phoneDisplay}
            </a>
            <div className="mt-4 flex gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-turmeric px-5 py-3 text-sm font-semibold text-teal-ink transition-transform hover:-translate-y-0.5 sm:px-7 sm:text-base"
              >
                <FiPhone aria-hidden /> Call now
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:px-7 sm:text-base"
              >
                <FaWhatsapp aria-hidden /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
