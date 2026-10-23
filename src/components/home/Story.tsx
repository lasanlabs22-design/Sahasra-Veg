import Image from "next/image";
import { Divider } from "@/components/ui";
import { photos } from "@/lib/photos";

const dishes = ["Idly", "Dosa", "Pesarattu", "Pongal", "Benne Dosa", "South Indian Meals", "North Indian Meals"];

const facts = [
  { value: "100%", label: "Pure vegetarian" },
  { value: "All day", label: "Dosa on the tawa" },
  { value: "75", label: "Seat AC function hall" },
];

export default function Story() {
  return (
    <>
      <div className="bg-teal-deep py-5">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 font-caps text-xs tracking-[0.3em] text-cream/85 sm:text-sm">
          {dishes.map((d, i) => (
            <li key={d} className="flex items-center gap-5">
              {i > 0 && <span className="size-1.5 rotate-45 bg-gold" aria-hidden />}
              {d}
            </li>
          ))}
        </ul>
      </div>

      <section id="story" className="kolam-light bg-ivory py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <figure className="reveal mx-auto w-full max-w-md">
            <div className="arch relative aspect-[4/5] overflow-hidden shadow-2xl shadow-teal-deep/20">
              <Image
                src={photos.kalamkari.src}
                alt={photos.kalamkari.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm italic text-stone/70">
              Srikalahasti kalamkari, the hand-painted art of our region
            </figcaption>
          </figure>

          <div className="reveal text-center lg:text-left">
            <p className="font-caps text-xs tracking-[0.45em] text-gold">Our Story</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-teal-deep sm:text-5xl lg:text-6xl">
              Rooted in Chittoor
            </h2>
            <Divider className="mt-6 lg:mx-0" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone">
              <p>
                Chittoor is a land of mango orchards, temple towns and slow, generous mornings. Kanipakam,
                Tirupati and the kalamkari artists of Srikalahasti are all close to home, and so is the food
                we grew up with.
              </p>
              <p>
                Sahasra is Sanskrit for a thousand, and our name comes from the thousand-petalled lotus. We
                built our kitchen around that idea: one pure vegetarian kitchen, many dishes, each one cooked
                fresh and served with care.
              </p>
              <p>
                In a hurry? Help yourself at our self-service counter. Celebrating? Slow down at our fine
                dining tables. Either way, the food is honest, vegetarian and full of flavour.
              </p>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-gold/30 pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-teal sm:text-4xl">{f.value}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-stone/70 sm:text-sm">{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
