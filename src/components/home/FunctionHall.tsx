import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { CornerOrnament, Thoranam } from "@/components/art";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

const details = [
  ["75", "of your favourite people"],
  ["AC", "cool, whatever the weather"],
  ["Veg", "menus from our kitchen"],
  ["Your way", "decor and menu on request"],
];

export default function FunctionHall() {
  return (
    <section id="hall" className="relative overflow-hidden bg-teal-ink">
      {/* Phones: photo on top. Desktop: photo fills the section behind the card. */}
      <div className="relative h-80 sm:h-[26rem] lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src={photos.functionHall.src}
          alt={photos.functionHall.alt}
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-ink/60 via-transparent to-teal-ink lg:bg-gradient-to-r lg:from-transparent lg:via-teal-ink/20 lg:to-teal-ink/90" aria-hidden />
        <Thoranam count={41} className="absolute inset-x-0 top-0" />
        <p className="absolute bottom-3 left-4 text-xs italic text-paper/70 lg:bottom-6 lg:left-8">
          Image for representation only.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:flex lg:justify-end lg:px-8 lg:py-32">
        <div className="reveal relative -mt-24 w-full max-w-xl bg-parchment p-3 shadow-2xl sm:p-4 lg:mt-0">
          <div className="relative border-2 border-brass/70 p-1">
            <div className="relative border border-brass/50 px-6 py-12 text-center sm:px-12">
              <CornerOrnament className="absolute left-2 top-2 w-12 text-brass" />
              <CornerOrnament className="absolute right-2 top-2 w-12 rotate-90 text-brass" />
              <CornerOrnament className="absolute bottom-2 right-2 w-12 rotate-180 text-brass" />
              <CornerOrnament className="absolute bottom-2 left-2 w-12 -rotate-90 text-brass" />

              <p className="font-hand text-xl text-kumkum">you&apos;re invited to celebrate at</p>
              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-teal-ink sm:text-5xl">
                The Sahasra
                <br />
                Function Hall
              </h2>
              <p className="mx-auto mt-5 max-w-sm leading-relaxed text-stone">
                Birthdays, engagements, naming ceremonies, family reunions, office meets. You bring the people,
                we bring the cool air and the good food.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-y-5 border-y border-dashed border-brass/50 py-6">
                {details.map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl font-semibold text-teal">{v}</dt>
                    <dd className="mt-1 text-xs leading-snug text-stone">{l}</dd>
                  </div>
                ))}
              </dl>

              <p className="font-hand mt-7 text-lg text-ink/70">kindly RSVP, we&apos;d love to host you</p>
              <div className="mt-3 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 font-semibold text-paper shadow-[0_5px_0_0_var(--color-teal-ink)] transition-transform hover:-translate-y-0.5"
                >
                  <FiPhone aria-hidden /> Book your date
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-teal-ink/80 px-7 py-3 font-semibold text-teal-ink transition-colors hover:bg-teal-ink hover:text-paper"
                >
                  <FaWhatsapp aria-hidden /> WhatsApp
                </a>
              </div>
              <p className="mt-7 text-xs leading-relaxed text-stone/80">
                Decor and menu customisations are arranged on request and at the host&apos;s own risk. See our{" "}
                <Link href="/terms-and-conditions" className="underline underline-offset-2">
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
