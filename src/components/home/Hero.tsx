import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Kolam, Thoranam, VegMark } from "@/components/art";
import { Plate } from "@/components/ui";
import { photos } from "@/lib/photos";
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
  ["Open 6 AM to 10 PM", true],
];

export default function Hero() {
  return (
    <section id="top" className="screen relative flex flex-col overflow-hidden">
      <Thoranam className="shrink-0" />
      <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col gap-4 px-4 pb-4 sm:px-6 lg:grid lg:grid-cols-[1.05fr_1fr] lg:grid-rows-[minmax(0,1fr)] lg:items-center lg:gap-8 lg:px-8">
        <div className="relative z-10 shrink-0">
          <p className="rise font-hand text-lg text-kumkum sm:text-2xl">have you eaten yet?</p>
          <h1
            className="rise font-display mt-1 text-[clamp(2.2rem,min(8dvh,12vw),5.75rem)] leading-[0.92] font-semibold tracking-tight text-teal-ink"
            style={{ animationDelay: "100ms" }}
          >
            Come hungry.
            <span className="mt-2 block text-[0.62em] leading-[1] font-normal italic text-brass">
              Leave with butter on your fingers.
            </span>
          </h1>
          <p
            className="rise mt-[clamp(0.75rem,2.5dvh,1.75rem)] max-w-lg text-[0.95rem] leading-relaxed text-stone sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Pillow-soft idly at sunrise, a benne dosa whenever the craving hits, and full South and North Indian
            meals for lunch and dinner. Pure veg, made fresh, right here in Chittoor.
          </p>
          <div className="rise mt-[clamp(1rem,3dvh,2.25rem)] flex flex-wrap items-center gap-3" style={{ animationDelay: "300ms" }}>
            <a
              href="#menu"
              className="group rounded-full bg-teal px-6 py-3 text-sm font-semibold text-paper shadow-[0_5px_0_0_var(--color-teal-ink)] transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-base"
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
              className="flex items-center gap-2 rounded-full border-2 border-teal-ink/80 px-5 py-2.5 text-sm font-semibold text-teal-ink transition-colors hover:bg-teal-ink hover:text-paper sm:px-7 sm:py-[0.85rem] sm:text-base"
            >
              <FaWhatsapp aria-hidden className="text-lg" /> WhatsApp
            </a>
          </div>
          <p className="rise mt-5 hidden items-center gap-2 text-sm text-stone sm:flex [@media(max-height:760px)]:hidden" style={{ animationDelay: "400ms" }}>
            <VegMark /> 100% pure veg. Open every day, {site.hours.display}.
          </p>
        </div>

        {/* The photo takes whatever height is left, so the hero always fits one screen. */}
        <div className="rise relative flex min-h-0 flex-1 items-center justify-center lg:h-full" style={{ animationDelay: "150ms" }}>
          <Kolam className="spin-slow absolute left-1/2 top-1/2 h-[115%] -translate-x-1/2 -translate-y-1/2 text-teal/20" />
          <div className="relative aspect-[4/5] h-full max-h-[36rem] max-w-full">
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-t-full border-2 border-gold/70" aria-hidden />
            <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-3xl shadow-[0_40px_80px_-30px_rgba(13,75,91,0.6)]">
              <Image
                src={photos.heroDosa.src}
                alt={photos.heroDosa.alt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, 60vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <Plate
              src={photos.idli.src}
              alt={photos.idli.alt}
              priority
              sizes="12rem"
              className="absolute -bottom-[3%] -left-[16%] w-[42%] -rotate-6"
            />
            <div className="absolute -right-[14%] top-[10%] grid aspect-square w-[34%] rotate-6 max-lg:hidden place-items-center rounded-full bg-turmeric text-center text-teal-ink shadow-xl">
              <p className="leading-tight">
                <span className="font-hand block text-[clamp(0.65rem,1.6dvh,1rem)]">open daily</span>
                <span className="font-display block text-[clamp(0.9rem,2.4dvh,1.35rem)] font-semibold">6 AM</span>
                <span className="font-hand block text-[clamp(0.6rem,1.4dvh,0.85rem)]">to</span>
                <span className="font-display block text-[clamp(0.9rem,2.4dvh,1.35rem)] font-semibold">10 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="shrink-0 overflow-hidden border-y-4 border-double border-turmeric/70 bg-teal-ink py-2.5 text-paper sm:py-3">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {ticker.map(([t, accent]) => (
                <li key={t} className="flex items-center px-6">
                  <span className={`font-display text-lg italic sm:text-2xl ${accent ? "text-turmeric" : ""}`}>{t}</span>
                  <svg viewBox="0 0 22 72" className="ml-12 h-5 w-2 rotate-45 text-leaf-light sm:h-6" aria-hidden>
                    <path d="M11 2 C20 16 20 46 11 70 C2 46 2 16 11 2 Z" fill="currentColor" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
