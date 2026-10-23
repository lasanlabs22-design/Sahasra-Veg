import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import logo from "@/assets/brand/logo.png";
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
    <section id="visit" className="relative overflow-hidden bg-parchment py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading kicker="find us" title="Come, sit, eat." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          {/* Picture postcard */}
          <article className="reveal grid overflow-hidden rounded-md bg-paper shadow-[0_30px_60px_-30px_rgba(37,32,27,0.5)] sm:grid-cols-2 lg:-rotate-1">
            <div className="relative min-h-72">
              <Image
                src={photos.chandragiri.src}
                alt={photos.chandragiri.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-ink/85 via-teal-ink/20 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-hand text-xl text-paper">Greetings from</p>
                <p className="font-display text-5xl font-semibold leading-none text-turmeric [text-shadow:3px_3px_0_var(--color-kumkum)]">
                  Chittoor
                </p>
                <p className="mt-2 text-xs text-paper/70">Chandragiri Fort, near Tirupati</p>
              </div>
            </div>

            <div className="relative p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="font-hand text-lg text-kumkum">wish you were here!</p>
                <div className="relative shrink-0">
                  <div className="rotate-3 border-[5px] border-dotted border-paper bg-paper p-1.5 shadow ring-1 ring-brass/40">
                    <Image src={logo} alt="" className="h-auto w-20" />
                  </div>
                  <svg viewBox="0 0 100 100" className="absolute -bottom-8 -left-10 w-20 text-kumkum/70" aria-hidden>
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
              <address className="mt-8 not-italic">
                {lines.map((l) => (
                  <p key={l} className="font-hand border-b border-dashed border-stone/30 py-1.5 text-lg text-teal-ink">
                    {l}
                  </p>
                ))}
              </address>
              <p className="mt-5 text-sm text-stone">
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

          <div className="reveal flex flex-col gap-4">
            <div className="min-h-80 flex-1 overflow-hidden rounded-[2rem] border-4 border-paper shadow-lg">
              <iframe
                src={site.mapsEmbed}
                title="Map showing Sahasra Pure Veg, Chittoor"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-80 border-0"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 font-semibold text-paper shadow-[0_5px_0_0_var(--color-teal-ink)] transition-transform hover:-translate-y-0.5"
              >
                <FiNavigation aria-hidden /> Get directions
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sahasra Pure Veg on Instagram"
                className="grid size-12 place-items-center rounded-full bg-paper text-lg text-teal-ink shadow transition-colors hover:bg-teal-ink hover:text-paper"
              >
                <FaInstagram aria-hidden />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sahasra Pure Veg on Facebook"
                className="grid size-12 place-items-center rounded-full bg-paper text-lg text-teal-ink shadow transition-colors hover:bg-teal-ink hover:text-paper"
              >
                <FaFacebookF aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
