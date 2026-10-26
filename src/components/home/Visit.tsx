import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import logo from "@/assets/brand/logo.png";
import Panels from "@/components/Panels";
import { Heading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export default function Visit() {
  const lines = [
    "Sahasra Pure Veg",
    "Sy. No. 186-1 & 186-2, Kattamanchi,",
    "Tirupati Road, near Commercial Tax Office,",
    `${site.address.city}, ${site.address.state} ${site.address.pin}`,
  ];
  return (
    <section id="visit" className="screen relative overflow-hidden bg-parchment">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-[clamp(1rem,4svh,3rem)] max-lg:py-12 sm:px-6 lg:px-8">
        <Heading kicker="Find us" title="Come, sit, eat." className="shrink-0" />

        <div className="mt-[clamp(0.75rem,3svh,2.5rem)] flex min-h-0 flex-1 flex-col">
          <Panels
            labels={["Address", "Map"]}
            className="lg:grid lg:grid-cols-[1.35fr_1fr] lg:grid-rows-[minmax(0,1fr)] lg:gap-10"
            itemClassNames={["justify-center"]}
          >
            {/* Picture postcard */}
            <article className="flex max-h-full flex-col overflow-hidden rounded-md bg-paper shadow-[0_30px_60px_-30px_rgba(37,32,27,0.5)] sm:grid sm:grid-cols-2 lg:-rotate-1">
              <div className="relative h-56 shrink-0 sm:h-auto sm:min-h-64">
                <Image
                  src={photos.chandragiri.src}
                  alt={photos.chandragiri.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-ink/85 via-teal-ink/20 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-hand text-base text-paper sm:text-xl">Greetings from</p>
                  <p className="font-display text-4xl font-semibold leading-none text-turmeric [text-shadow:3px_3px_0_var(--color-kumkum)] sm:text-5xl">
                    Chittoor
                  </p>
                  <p className="mt-1 hidden text-xs text-paper/70 sm:block">Chandragiri Fort, near Tirupati</p>
                </div>
              </div>

              <div className="relative p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-hand text-base text-kumkum sm:text-lg">Wish you were here!</p>
                  <div className="relative shrink-0">
                    <div className="rotate-3 border-4 border-dotted border-paper bg-paper p-1 shadow ring-1 ring-brass/40">
                      <Image src={logo} alt="" className="h-auto w-14 sm:w-20" />
                    </div>
                    <svg viewBox="0 0 100 100" className="absolute -bottom-6 -left-8 w-16 text-kumkum/70 sm:w-20" aria-hidden>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                      <text x="50" y="47" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="var(--font-instrument)" fontWeight="700">
                        CHITTOOR
                      </text>
                      <text x="50" y="61" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="var(--font-instrument)">
                        517001
                      </text>
                    </svg>
                  </div>
                </div>
                <address className="mt-4 not-italic sm:mt-6">
                  {lines.map((l) => (
                    <p key={l} className="font-hand border-b border-dashed border-stone/30 py-1 text-base text-teal-ink sm:text-lg">
                      {l}
                    </p>
                  ))}
                </address>
                <p className="font-hand mt-3 text-base text-kumkum sm:text-lg">Open every day, {site.hours.display}</p>
                <p className="mt-1 text-sm text-stone">
                  <a href={site.phoneHref} className="font-semibold text-teal-ink hover:text-teal">
                    {site.phoneDisplay}
                  </a>
                  <span className="mx-2">·</span>
                  <a href={`mailto:${site.email}`} className="break-all hover:text-teal">
                    {site.email}
                  </a>
                </p>
              </div>
            </article>

            <div className="flex h-full min-h-0 flex-col gap-3">
              <div className="min-h-0 flex-1 overflow-hidden rounded-[1.5rem] border-4 border-paper shadow-lg max-lg:h-80 max-lg:flex-none">
                <iframe
                  src={site.mapsEmbed}
                  title="Map showing Sahasra Pure Veg, Chittoor"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full border-0"
                />
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-semibold text-paper shadow-[0_5px_0_0_var(--color-teal-ink)] transition-transform hover:-translate-y-0.5"
                >
                  <FiNavigation aria-hidden /> Get directions
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sahasra Pure Veg on Instagram"
                  className="grid size-11 place-items-center rounded-full bg-paper text-lg text-teal-ink shadow transition-colors hover:bg-teal-ink hover:text-paper"
                >
                  <FaInstagram aria-hidden />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sahasra Pure Veg on Facebook"
                  className="grid size-11 place-items-center rounded-full bg-paper text-lg text-teal-ink shadow transition-colors hover:bg-teal-ink hover:text-paper"
                >
                  <FaFacebookF aria-hidden />
                </a>
              </div>
            </div>
          </Panels>
        </div>
      </div>
    </section>
  );
}
