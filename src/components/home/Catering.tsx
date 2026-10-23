import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Kolam, TiffinCarrier } from "@/components/art";
import { Heading } from "@/components/ui";
import { site } from "@/lib/site";

const occasions = ["Weddings", "Housewarmings", "Poojas", "Birthdays", "Office events", "Family functions"];

export default function Catering() {
  return (
    <section id="catering" className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="reveal relative mx-auto w-full max-w-[15rem] sm:max-w-sm">
          <Kolam className="spin-slow absolute inset-0 text-turmeric/50" />
          <TiffinCarrier className="relative mx-auto w-3/4" />
        </div>

        <div>
          <Heading kicker="can't come to us?" title="We'll come to you." />
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-stone">
            Big fat wedding or a cosy housewarming, tell us the date and the headcount and we will bring
            Sahasra&apos;s kitchen to your celebration. No forms, no waiting. One call and it is sorted.
          </p>
          <ul className="reveal mt-8 flex flex-wrap gap-2">
            {occasions.map((o) => (
              <li key={o} className="rounded-full bg-parchment px-4 py-2 text-sm font-medium text-teal-ink">
                {o}
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 rounded-[2rem] bg-teal-ink p-6 text-paper sm:p-8">
            <p className="font-hand text-lg text-turmeric">one call is all it takes</p>
            <a href={site.phoneHref} className="font-display block text-4xl font-semibold tracking-tight hover:text-turmeric sm:text-5xl">
              {site.phoneDisplay}
            </a>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-turmeric px-7 py-3.5 font-semibold text-teal-ink transition-transform hover:-translate-y-0.5"
              >
                <FiPhone aria-hidden /> Call now
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
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
