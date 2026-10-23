import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Divider, PhotoNote } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

const features = [
  { value: "75", label: "Guests seated" },
  { value: "AC", label: "Fully air-conditioned" },
  { value: "100%", label: "Pure vegetarian menus" },
  { value: "Custom", label: "Decor and menu on request" },
];

export default function FunctionHall() {
  return (
    <section id="hall" className="kolam-dark bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <figure className="reveal">
          <div className="relative">
            <div className="absolute inset-0 -translate-x-2 translate-y-2 rounded-3xl sm:-translate-x-4 sm:translate-y-4 border border-gold/40" aria-hidden />
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
              <Image
                src={photos.functionHall.src}
                alt={photos.functionHall.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 95vw"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption>
            <PhotoNote light>Image for representation only.</PhotoNote>
          </figcaption>
        </figure>

        <div className="reveal text-center lg:text-left">
          <p className="font-caps text-xs tracking-[0.45em] text-gold">Celebrations</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-cream sm:text-5xl lg:text-6xl">
            The Function Hall
          </h2>
          <Divider light className="mt-6 lg:mx-0" />
          <p className="mt-8 text-lg leading-relaxed text-cream/75">
            An elegant, air-conditioned hall for up to 75 guests. Host birthdays, engagements, naming
            ceremonies, family get-togethers and business meetings, and pair them with a pure vegetarian menu
            from our kitchen.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gold/20 text-left">
            {features.map((f) => (
              <div key={f.label} className="bg-ink-2 p-5">
                <dt className="font-display text-3xl text-gold">{f.value}</dt>
                <dd className="mt-1 text-sm text-cream/70">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-caps text-sm tracking-[0.2em] text-ink transition-colors hover:bg-gold-soft"
            >
              <FiPhone aria-hidden /> Call to Book
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-caps text-sm tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <FaWhatsapp aria-hidden /> WhatsApp
            </a>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-cream/50">
            Decor and menu customisations are arranged on request and at the host&apos;s own risk. See our{" "}
            <Link href="/terms-and-conditions" className="underline underline-offset-2 hover:text-gold">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
