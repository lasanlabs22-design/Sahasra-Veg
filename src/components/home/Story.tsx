import Image from "next/image";
import logo from "@/assets/brand/logo.png";
import { Kolam, RegionMap } from "@/components/art";
import Panels from "@/components/Panels";
import { Heading } from "@/components/ui";
import { photos } from "@/lib/photos";

export default function Story() {
  return (
    <section id="story" className="screen relative overflow-hidden bg-parchment">
      <Kolam className="pointer-events-none absolute -right-40 -top-40 w-[34rem] text-brass/15" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-4 py-[clamp(1rem,4dvh,3rem)] sm:px-6 lg:px-8">
        <Panels
          labels={["Our story", "The name", "On the map"]}
          className="lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-6"
          itemClassNames={[
            "justify-center lg:col-start-2 lg:row-start-1",
            "items-center justify-center p-3 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:p-0",
            "justify-center lg:col-start-2 lg:row-start-2",
          ]}
        >
          <div>
            <Heading kicker="our story" title="Where three states share one table" />
            <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-stone sm:text-base lg:text-lg">
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

          {/* A dictionary entry for the name. */}
          <article className="relative w-full max-w-md rotate-[-1.5deg] rounded-sm bg-paper p-6 shadow-[0_24px_50px_-24px_rgba(37,32,27,0.45)] sm:p-8">
            <div className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-turmeric/70" aria-hidden />
            <p className="font-display text-5xl font-semibold italic leading-none text-kumkum sm:text-6xl">Sahasra</p>
            <p className="mt-2 text-stone">
              <span className="font-display text-xl italic text-teal-ink">sa·has·ra</span>
              <span className="ml-3 text-xs uppercase tracking-[0.2em]">Sanskrit</span>
            </p>
            <ol className="font-display mt-4 space-y-2 text-lg leading-snug text-ink">
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
            <div className="mt-5 border-t border-dashed border-brass/40 pt-4">
              <Image src={logo} alt="Sahasra Pure Veg logo" className="h-auto w-36" />
            </div>
          </article>

          <figure className="grid items-center gap-4 rounded-[1.5rem] border border-brass/25 bg-paper/70 p-4 sm:p-6 lg:grid-cols-[1.7fr_1fr]">
            {/* Bigger labels on phones run past the edge places, so let them spill into the padding. */}
            <RegionMap className="h-auto w-full overflow-visible lg:hidden" labelScale={1.4} />
            <RegionMap className="hidden h-auto max-h-[30dvh] w-full lg:block" />
            <figcaption className="flex items-center gap-4 lg:block">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-full ring-4 ring-paper lg:mb-3">
                <Image src={photos.kalamkari.src} alt={photos.kalamkari.alt} fill sizes="6rem" placeholder="blur" className="object-cover" />
              </div>
              <p className="text-sm text-stone">
                <span className="font-hand block text-lg text-kumkum">close to home</span>
                Kanipakam&apos;s temple, Tirupati&apos;s hills, Srikalahasti&apos;s kalamkari and mango orchards
                everywhere. This is the Chittoor we cook for.
              </p>
            </figcaption>
          </figure>
        </Panels>
      </div>
    </section>
  );
}
