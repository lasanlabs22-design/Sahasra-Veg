import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HandArrow, Kolam, Thoranam, VegMark } from "@/components/art";
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
              meals for lunch and dinner. Pure veg, made fresh, right here in Chittoor.
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
              <VegMark /> 100% pure veg. Open every day, {site.hours.display}.
            </p>
          </div>

          <div className="rise relative mx-auto w-full max-w-[30rem] pb-10 pl-6 sm:pl-10" style={{ animationDelay: "150ms" }}>
            <Kolam className="spin-slow absolute -right-16 -top-10 w-[118%] text-teal/20" />
            {/* Temple-arch frame with an offset brass outline. */}
            <div className="absolute inset-0 bottom-10 left-6 translate-x-3 translate-y-3 rounded-t-full border-2 border-gold/70 sm:left-10" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl shadow-[0_40px_80px_-30px_rgba(13,75,91,0.6)]">
              <Image
                src={photos.heroDosa.src}
                alt={photos.heroDosa.alt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, 85vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <Plate
              src={photos.idli.src}
              alt={photos.idli.alt}
              priority
              sizes="12rem"
              className="absolute bottom-0 left-0 w-[38%] -rotate-6"
            />
            <div className="absolute -right-2 top-[18%] grid size-28 rotate-6 place-items-center rounded-full bg-turmeric text-center text-teal-ink shadow-xl sm:-right-6 sm:size-32">
              <p className="leading-tight">
                <span className="font-hand block text-base">open daily</span>
                <span className="font-display block text-xl font-semibold">6 AM</span>
                <span className="font-hand block text-sm">to</span>
                <span className="font-display block text-xl font-semibold">10 PM</span>
              </p>
            </div>
            <div className="absolute -bottom-2 left-[40%] hidden items-start gap-1 text-kumkum sm:flex">
              <HandArrow className="w-12 rotate-[200deg]" />
              <p className="font-hand mt-4 text-lg leading-tight">softer than your pillow</p>
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
