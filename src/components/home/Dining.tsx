import Image from "next/image";
import Panels from "@/components/Panels";
import { Heading } from "@/components/ui";
import { photos } from "@/lib/photos";

const ways = [
  {
    n: "01",
    title: "Self Service",
    photo: photos.selfService,
    text: "In a rush? Order at the counter, grab your tray and dig in while it is still sizzling. Perfect for office lunches and school-run breakfasts.",
  },
  {
    n: "02",
    title: "Fine Dining",
    photo: photos.fineDining,
    text: "Got time? Pull up a chair, bring the whole family, and let us bring every course to your table. No hurry, no fuss.",
  },
];

export default function Dining() {
  return (
    <section id="dining" className="screen bg-paper">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-[clamp(1rem,4svh,3rem)] max-lg:py-12 sm:px-6 lg:px-8">
        <Heading kicker="so, what's the plan today?" title="Quick bite or long dinner?" align="center" className="shrink-0" />
        <div className="mt-[clamp(0.75rem,3svh,2.5rem)] flex min-h-0 flex-1 flex-col">
          <Panels labels={ways.map((w) => w.title)} className="lg:grid lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)] lg:gap-5">
            {ways.map((w) => (
              <article
                key={w.n}
                className="relative flex min-h-0 flex-1 flex-col justify-end overflow-hidden rounded-[1.75rem] p-6 text-paper max-lg:min-h-[28rem] sm:p-10"
              >
                <Image src={w.photo.src} alt={w.photo.alt} fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-ink via-teal-ink/55 to-transparent" aria-hidden />
                <div className="relative">
                  <p className="font-display text-6xl font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-turmeric)] sm:text-7xl">
                    {w.n}
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-semibold sm:text-5xl">{w.title}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-paper/85 sm:text-lg">{w.text}</p>
                  <p className="mt-3 text-xs italic text-paper/55">Image for representation only.</p>
                </div>
              </article>
            ))}
          </Panels>
        </div>
      </div>
    </section>
  );
}
