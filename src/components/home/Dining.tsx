import Image from "next/image";
import { Heading } from "@/components/ui";
import { photos } from "@/lib/photos";

export default function Dining() {
  return (
    <section id="dining" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading kicker="so, what's the plan today?" title="Quick bite or long dinner?" align="center" className="mx-auto max-w-3xl" />

        <div className="mt-14 grid overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(13,75,91,0.5)] lg:grid-cols-2">
          <article className="reveal relative flex min-h-[30rem] flex-col justify-end overflow-hidden p-8 text-paper sm:p-12">
            <Image
              src={photos.selfService.src}
              alt={photos.selfService.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-ink via-teal-ink/55 to-transparent" aria-hidden />
            <div className="relative">
              <p className="font-display text-8xl font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-turmeric)]">
                01
              </p>
              <h3 className="font-display mt-6 text-4xl font-semibold sm:text-5xl">Self Service</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/85">
                In a rush? Order at the counter, grab your tray and dig in while it is still sizzling. Perfect for
                office lunches and school-run breakfasts.
              </p>
            </div>
          </article>

          <article className="reveal relative flex min-h-[30rem] flex-col justify-end overflow-hidden p-8 text-paper sm:p-12">
            <Image
              src={photos.fineDining.src}
              alt={photos.fineDining.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-ink via-teal-ink/55 to-transparent" aria-hidden />
            <div className="relative">
              <p className="font-display text-8xl font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-turmeric)]">
                02
              </p>
              <h3 className="font-display mt-6 text-4xl font-semibold sm:text-5xl">Fine Dining</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/85">
                Got time? Pull up a chair, bring the whole family, and let us bring every course to your table. No
                hurry, no fuss.
              </p>
              <p className="mt-4 text-xs italic text-paper/55">Image for representation only.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
