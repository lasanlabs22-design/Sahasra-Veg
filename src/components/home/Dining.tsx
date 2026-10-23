import Image from "next/image";
import markLight from "@/assets/brand/mark-light.png";
import { SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export default function Dining() {
  return (
    <section id="dining" className="kolam-light bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Two Ways to Dine" title="Self Service & Fine Dining">
          <p>However much time you have, there is a table for you at Sahasra.</p>
        </SectionHeading>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <article className="reveal kolam-dark flex flex-col justify-between gap-12 rounded-3xl bg-teal-deep p-8 sm:p-12 lg:min-h-[28rem]">
            <Image src={markLight} alt="" className="h-20 w-auto self-start opacity-90 sm:h-24" />
            <div>
              <p className="font-caps text-xs tracking-[0.4em] text-gold">Quick & Easy</p>
              <h3 className="mt-3 font-display text-4xl text-cream sm:text-5xl">Self Service</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/75">
                Order at the counter, collect your plate and enjoy it fresh off the tawa. Perfect for a quick
                breakfast or a working lunch.
              </p>
            </div>
          </article>

          <article className="reveal relative flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-3xl p-8 sm:p-12">
            <Image
              src={photos.fineDining.src}
              alt={photos.fineDining.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 95vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/0" aria-hidden />
            <div className="relative">
              <p className="font-caps text-xs tracking-[0.4em] text-gold">Relaxed & Elegant</p>
              <h3 className="mt-3 font-display text-4xl text-cream sm:text-5xl">Fine Dining</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/80">
                Table service in a calm, graceful setting. Settle in with family and friends and let us bring
                every course to you.
              </p>
              <p className="mt-4 text-xs italic text-cream/50">Image for representation only.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
