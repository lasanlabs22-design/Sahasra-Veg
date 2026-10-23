import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

const highlights = ["Self Service & Fine Dining", "75-Seat AC Function Hall", "Catering"];

export default function Hero() {
  return (
    <section className="kolam-dark relative overflow-hidden bg-ink pb-20 pt-28 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-teal/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="text-center lg:text-left">
          <p className="rise font-caps text-xs tracking-[0.45em] text-gold">Pure Vegetarian · Chittoor</p>
          <h1
            className="rise mt-6 font-display text-5xl font-medium leading-[1.05] text-cream sm:text-6xl xl:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            A thousand petals,
            <br />
            <em className="text-gold-soft">one pure kitchen.</em>
          </h1>
          <p
            className="rise mx-auto mt-7 max-w-xl text-lg leading-relaxed text-cream/70 lg:mx-0"
            style={{ animationDelay: "240ms" }}
          >
            Sahasra means a thousand. Like the lotus in our name, every plate opens with something new:
            breakfast classics at dawn, dosa all day and full meals at noon.
          </p>
          <div
            className="rise mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#menu"
              className="w-full rounded-full bg-gold px-8 py-4 text-center font-caps text-sm tracking-[0.2em] text-ink transition-colors hover:bg-gold-soft sm:w-auto"
            >
              Explore the Menu
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-caps text-sm tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              <FaWhatsapp aria-hidden /> WhatsApp Us
            </a>
          </div>
          <ul
            className="rise mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/60 lg:justify-start"
            style={{ animationDelay: "480ms" }}
          >
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="size-1.5 rotate-45 bg-gold" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none" style={{ animationDelay: "200ms" }}>
          <div className="arch absolute inset-0 translate-x-2 translate-y-2 border sm:translate-x-4 sm:translate-y-4 border-gold/50" aria-hidden />
          <div className="arch relative aspect-[4/5] overflow-hidden">
            <Image
              src={photos.heroThali.src}
              alt={photos.heroThali.alt}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover object-[45%_50%]"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 grid size-28 place-items-center rounded-full border border-gold/60 bg-ink text-center sm:-left-6 sm:size-32">
            <span lang="te" className="font-telugu text-2xl text-gold-soft">
              సహస్ర
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
