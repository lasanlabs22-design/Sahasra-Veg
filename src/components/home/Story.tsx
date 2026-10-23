import Image from "next/image";
import logo from "@/assets/brand/logo.png";
import { Kolam, RegionMap } from "@/components/art";
import { Heading } from "@/components/ui";
import { photos } from "@/lib/photos";

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-parchment py-24 lg:py-32">
      <Kolam className="pointer-events-none absolute -right-40 -top-40 w-[34rem] text-brass/15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* A dictionary entry for the name. */}
          <article className="reveal relative rotate-[-1.5deg] rounded-sm bg-paper p-8 shadow-[0_24px_50px_-24px_rgba(37,32,27,0.45)] sm:p-10">
            <div className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-turmeric/70" aria-hidden />
            <p className="font-display text-6xl font-semibold italic leading-none text-kumkum sm:text-7xl">Sahasra</p>
            <p className="mt-3 text-stone">
              <span className="font-display text-2xl italic text-teal-ink">sa·has·ra</span>
              <span className="ml-3 text-sm uppercase tracking-[0.2em]">Sanskrit</span>
            </p>
            <ol className="font-display mt-6 space-y-3 text-xl leading-snug text-ink">
              <li>
                <span className="mr-2 font-semibold text-brass">1.</span>a thousand.
              </li>
              <li>
                <span className="mr-2 font-semibold text-brass">2.</span>the thousand-petalled lotus, an old Indian symbol of
                purity.
              </li>
              <li>
                <span className="mr-2 font-semibold text-brass">3.</span>your new favourite pure veg restaurant in Chittoor.
              </li>
            </ol>
            <div className="mt-8 border-t border-dashed border-brass/40 pt-6">
              <Image src={logo} alt="Sahasra Pure Veg logo" className="h-auto w-48" />
            </div>
          </article>

          <div className="reveal">
            <Heading kicker="our story" title={<>Where three states share one table</>} />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone">
              <p>
                Chittoor sits right where Andhra Pradesh, Tamil Nadu and Karnataka meet, so of course our menu
                could not pick just one. Andhra&apos;s pesarattu, Tamil Nadu&apos;s pongal and Bengaluru&apos;s
                benne dosa share one kitchen here, and they get along famously.
              </p>
              <p>
                Running late? Self service has your back. Celebrating? Fine dining is ready when you are. Either
                way: cooked fresh, served hot, and always 100% pure veg.
              </p>
            </div>
          </div>
        </div>

        <figure className="reveal mt-16 grid items-center gap-8 rounded-[2rem] border border-brass/25 bg-paper/70 p-6 sm:p-10 lg:grid-cols-[1.6fr_1fr]">
          {/* On phones the map keeps a readable size and scrolls sideways inside its card. */}
          <div className="-mx-2 overflow-x-auto px-2">
            <RegionMap className="h-auto w-full min-w-[34rem]" />
          </div>
          <figcaption className="flex items-center gap-6 lg:block">
            <div className="relative size-28 shrink-0 overflow-hidden rounded-full ring-4 ring-paper lg:mb-6 lg:size-40">
              <Image
                src={photos.kalamkari.src}
                alt={photos.kalamkari.alt}
                fill
                sizes="10rem"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <p className="text-stone">
              <span className="font-hand block text-xl text-kumkum">close to home</span>
              Kanipakam&apos;s temple, Tirupati&apos;s hills, Srikalahasti&apos;s hand-painted kalamkari and
              mango orchards everywhere. This is the Chittoor we cook for.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
