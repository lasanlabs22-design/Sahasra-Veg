import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail, FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";
import { SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export default function Visit() {
  return (
    <>
      <section className="relative grid min-h-[60vh] place-items-center overflow-hidden px-4 py-24 text-center">
        <Image
          src={photos.chandragiri.src}
          alt={photos.chandragiri.alt}
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden />
        <div className="reveal relative max-w-3xl">
          <p className="font-caps text-xs tracking-[0.45em] text-gold">Chittoor, Andhra Pradesh</p>
          <p className="mt-6 font-display text-4xl italic leading-tight text-cream sm:text-5xl lg:text-6xl">
            From the land of temples, forts and mango groves.
          </p>
          <p className="mt-6 text-sm text-cream/60">Chandragiri Fort, near Tirupati</p>
        </div>
      </section>

      <section id="visit" className="kolam-light bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Find Us" title="Visit Sahasra">
            <p>On Tirupati Road at Kattamanchi, near the Commercial Tax Office.</p>
          </SectionHeading>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="reveal rounded-3xl bg-ink p-8 text-cream sm:p-10">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <FiMapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    <h3 className="font-caps text-xs tracking-[0.3em] text-gold">Address</h3>
                    <p className="mt-2 leading-relaxed text-cream/80">
                      {site.address.street},
                      <br />
                      {site.address.city}, {site.address.state} {site.address.pin}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FiPhone className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    <h3 className="font-caps text-xs tracking-[0.3em] text-gold">Phone & WhatsApp</h3>
                    <a href={site.phoneHref} className="mt-2 block text-cream/80 hover:text-gold">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FiMail className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    <h3 className="font-caps text-xs tracking-[0.3em] text-gold">Email</h3>
                    <a href={`mailto:${site.email}`} className="mt-2 block break-all text-cream/80 hover:text-gold">
                      {site.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-caps text-xs tracking-[0.2em] text-ink transition-colors hover:bg-gold-soft"
                >
                  <FiNavigation aria-hidden /> Get Directions
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <FaInstagram aria-hidden />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <FaFacebookF aria-hidden />
                </a>
              </div>
            </div>

            <div className="reveal min-h-[22rem] overflow-hidden rounded-3xl ring-1 ring-gold/40">
              <iframe
                src={site.mapsEmbed}
                title="Map showing Sahasra Pure Veg, Chittoor"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-[22rem] border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
