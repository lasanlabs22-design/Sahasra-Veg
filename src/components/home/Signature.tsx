import Image from "next/image";
import { Divider } from "@/components/ui";
import { photos } from "@/lib/photos";

export default function Signature() {
  return (
    <section id="signature" className="overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-full border border-dashed border-gold/60 sm:-inset-6" aria-hidden />
          <div className="relative aspect-square overflow-hidden rounded-full shadow-2xl shadow-ink/30 ring-8 ring-ivory">
            <Image
              src={photos.benneDosa.src}
              alt={photos.benneDosa.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
            />
          </div>
          <span className="absolute right-0 top-4 rounded-full bg-teal-deep px-5 py-2 font-caps text-xs tracking-[0.3em] text-gold shadow-lg sm:-right-4">
            Signature
          </span>
        </div>

        <div className="reveal text-center lg:text-left">
          <p className="font-caps text-xs tracking-[0.45em] text-gold">The House Favourite</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-teal-deep sm:text-5xl lg:text-6xl">
            Bangalore Benne Dosa
          </h2>
          <p lang="te" className="mt-2 font-telugu text-lg text-stone/60">
            బెన్నె దోశ
          </p>
          <Divider className="mt-6 lg:mx-0" />
          <p className="mt-8 text-lg leading-relaxed text-stone">
            <em>Benne</em> is Kannada for butter, and this dosa wears it proudly. It is roasted with butter
            until the outside turns crisp and golden while the inside stays soft, then crowned with a dollop of
            white butter and served with chutney and sambar.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-ivory p-6 text-left shadow-sm sm:flex-row">
            <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={photos.dosa.src}
                alt={photos.dosa.alt}
                fill
                placeholder="blur"
                sizes="7rem"
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl text-teal-deep">Dosa, all day</h3>
              <p className="mt-1 text-stone">
                Our dosa tawa never rests. From the first order of the morning until we close, dosa is always
                on the menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
