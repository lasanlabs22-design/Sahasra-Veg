import { FaWhatsapp } from "react-icons/fa";
import { HandArrow, Kolam, LeafSpread, Thoranam, VegMark } from "@/components/art";
import { site } from "@/lib/site";

// Dish names, with a playful line in turmeric every few items.
const ticker: [string, boolean][] = [
  ["Idly", false],
  ["Dosa o'clock is every o'clock", true],
  ["Pesarattu", false],
  ["Pongal", false],
  ["Butter makes it better", true],
  ["Bangalore Benne Dosa", false],
  ["South Indian Meals", false],
  ["North Indian Meals", false],
  ["Pure veg, pure joy", true],
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Thoranam />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-2 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8 lg:pb-28">
          <div className="relative z-10">
            <p className="rise font-hand text-2xl text-kumkum">have you eaten yet?</p>
            <h1
              className="rise font-display mt-3 text-[3.6rem] leading-[0.92] font-semibold tracking-tight text-teal-ink sm:text-7xl xl:text-[6rem]"
              style={{ animationDelay: "100ms" }}
            >
              Come hungry.
              <span className="mt-3 block text-[0.62em] leading-[1] font-normal italic text-brass">
                Leave with butter on your fingers.
              </span>
            </h1>
            <p className="rise mt-7 max-w-lg text-lg leading-relaxed text-stone" style={{ animationDelay: "200ms" }}>
              Pillow-soft idly at sunrise, a benne dosa whenever the craving hits, and full South and North Indian
              meals at noon. Pure veg, made fresh, right here in Chittoor.
            </p>
            <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "300ms" }}>
              <a
                href="#menu"
                className="group rounded-full bg-teal px-8 py-4 font-semibold text-paper shadow-[0_6px_0_0_var(--color-teal-ink)] transition-transform hover:-translate-y-0.5"
              >
                Flip through the menu{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-teal-ink/80 px-7 py-[0.85rem] font-semibold text-teal-ink transition-colors hover:bg-teal-ink hover:text-paper"
              >
                <FaWhatsapp aria-hidden className="text-lg" /> Say hi on WhatsApp
              </a>
            </div>
            <p className="rise mt-8 flex items-center gap-2 text-sm text-stone" style={{ animationDelay: "400ms" }}>
              <VegMark /> 100% pure veg. No exceptions, no compromises.
            </p>
          </div>

          <div className="rise relative mx-auto aspect-square w-full max-w-[36rem]" style={{ animationDelay: "150ms" }}>
            <Kolam className="spin-slow absolute inset-[-4%] text-teal/20" />
            <LeafSpread className="relative size-full" />
            <div className="absolute bottom-[7%] left-[6%] hidden items-end gap-1 text-kumkum sm:flex">
              <p className="font-hand text-lg leading-tight">
                crisp, golden,
                <br />
                made to order
              </p>
              <HandArrow className="mb-6 w-12 -scale-y-100" />
            </div>
            <div className="absolute right-[34%] top-[13%] hidden text-right text-kumkum sm:block">
              <p className="font-hand text-lg leading-tight">softer than your pillow</p>
              <HandArrow className="ml-auto mr-[-1rem] w-12" />
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-4 border-double border-turmeric/70 bg-teal-ink py-4 text-paper">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {ticker.map(([t, accent]) => (
                <li key={t} className="flex items-center px-6">
                  <span className={`font-display text-2xl italic ${accent ? "text-turmeric" : ""}`}>{t}</span>
                  <svg viewBox="0 0 22 72" className="ml-12 h-6 w-2 rotate-45 text-leaf-light" aria-hidden>
                    <path d="M11 2 C20 16 20 46 11 70 C2 46 2 16 11 2 Z" fill="currentColor" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
