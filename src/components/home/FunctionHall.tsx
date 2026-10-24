import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { CornerOrnament, Thoranam } from "@/components/art";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

const details = [
  ["75", "guests seated"],
  ["AC", "air-conditioned"],
  ["Veg", "menus from our kitchen"],
  ["Custom", "decor and menu"],
];

export default function FunctionHall() {
  return (
    <section id="hall" className="screen relative overflow-hidden bg-teal-ink">
      <Image src={photos.functionHall.src} alt={photos.functionHall.alt} fill placeholder="blur" sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-teal-ink/40 via-teal-ink/30 to-teal-ink/85 lg:bg-gradient-to-r lg:from-transparent lg:via-teal-ink/20 lg:to-teal-ink/90"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0">
        <Thoranam />
      </div>

      {/* Polaroid of South Indian celebration decor, desktop only. */}
      <figure className="absolute bottom-10 left-8 hidden w-[min(15rem,24dvh)] -rotate-6 bg-paper p-2.5 pb-3 shadow-2xl lg:block xl:left-16">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={photos.hallDecor.src} alt={photos.hallDecor.alt} fill placeholder="blur" sizes="15rem" className="object-cover" />
        </div>
        <figcaption className="font-hand mt-2 text-center text-base leading-tight text-kumkum">marigolds, banana leaves, the works</figcaption>
      </figure>
      <p className="absolute inset-x-4 bottom-2 text-center text-[0.65rem] leading-snug text-paper/80 lg:left-auto lg:right-8 lg:text-right">
        Decor and menu customisations are at the host&apos;s own risk (
        <Link href="/terms-and-conditions" className="underline underline-offset-2">
          Terms
        </Link>
        ). Images for representation only.
      </p>

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 pb-8 pt-14 sm:px-6 lg:justify-end lg:px-8 lg:pr-16 lg:pt-16">
        <div className="max-h-full w-full max-w-lg bg-parchment p-2 shadow-2xl sm:p-3">
          <div className="border-2 border-brass/70 p-1">
            <div className="relative border border-brass/50 px-5 py-6 text-center sm:px-10 sm:py-[clamp(1.25rem,4dvh,2.5rem)] [@media(max-height:720px)]:py-4">
              <CornerOrnament className="absolute left-1.5 top-1.5 w-8 text-brass sm:w-10" />
              <CornerOrnament className="absolute right-1.5 top-1.5 w-8 rotate-90 text-brass sm:w-10" />
              <CornerOrnament className="absolute bottom-1.5 right-1.5 w-8 rotate-180 text-brass sm:w-10" />
              <CornerOrnament className="absolute bottom-1.5 left-1.5 w-8 -rotate-90 text-brass sm:w-10" />

              <p className="font-hand text-base text-kumkum sm:text-lg">you&apos;re invited to celebrate at</p>
              <h2 className="font-display mt-1 text-[clamp(1.8rem,5dvh,3rem)] font-semibold leading-tight text-teal-ink">
                The Sahasra <br className="hidden sm:block [@media(max-height:720px)]:hidden" />
                Function Hall
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone sm:text-base">
                Birthdays, engagements, naming ceremonies, family reunions, office meets. You bring the people, we
                bring the cool air and the good food.
              </p>

              <dl className="mt-4 grid grid-cols-4 gap-1 border-y border-dashed border-brass/50 py-3 [@media(max-height:720px)]:mt-3 [@media(max-height:720px)]:py-2">
                {details.map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-xl font-semibold text-teal sm:text-2xl">{v}</dt>
                    <dd className="mt-0.5 text-[0.65rem] leading-tight text-stone sm:text-xs">{l}</dd>
                  </div>
                ))}
              </dl>

              <p className="font-hand mt-4 text-base text-ink/70 [@media(max-height:720px)]:mt-2">kindly RSVP, we&apos;d love to host you</p>
              <div className="mt-2 flex justify-center gap-2">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-teal px-4 py-2.5 text-sm font-semibold text-paper shadow-[0_4px_0_0_var(--color-teal-ink)] transition-transform hover:-translate-y-0.5 sm:px-6"
                >
                  <FiPhone aria-hidden /> Book your date
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-teal-ink/80 px-4 py-2 text-sm font-semibold text-teal-ink transition-colors hover:bg-teal-ink hover:text-paper sm:px-5"
                >
                  <FaWhatsapp aria-hidden /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
