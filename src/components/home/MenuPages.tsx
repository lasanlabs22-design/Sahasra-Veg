import Image from "next/image";
import logo from "@/assets/brand/logo.png";
import { CornerOrnament, Kolam, RotatingSeal, VegMark } from "@/components/art";
import { Plate } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

// The pages of the menu book. Each page fills a fixed-size sheet, so content is sized to fit.

type Side = "left" | "right";

function Sheet({ side, folio, head, children }: { side: Side; folio: number; head: string; children: React.ReactNode }) {
  return (
    <div className="page-paper relative flex size-full flex-col overflow-hidden px-6 pb-10 pt-8 sm:px-10 lg:px-11">
      {/* Shade toward the spine. */}
      <div
        className={`pointer-events-none absolute inset-y-0 w-14 ${
          side === "left"
            ? "right-0 bg-gradient-to-l from-black/12 to-transparent"
            : "left-0 bg-gradient-to-r from-black/12 to-transparent"
        }`}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-3 border border-brass/35" aria-hidden />
      <div className="pointer-events-none absolute inset-[1.05rem] border border-brass/20" aria-hidden />
      <p className="relative text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brass/80">{head}</p>
      <div className="relative mt-4 flex flex-1 flex-col">{children}</div>
      <p className="font-display absolute inset-x-0 bottom-5 text-center text-sm italic text-stone/70">{folio}</p>
    </div>
  );
}

function Title({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <div className="text-center">
      <p className="font-hand text-lg text-kumkum">{kicker}</p>
      <h3 className="font-display text-4xl font-semibold leading-[0.95] tracking-tight text-teal-ink sm:text-5xl">
        {title}
      </h3>
      <div className="mx-auto mt-3 flex w-24 items-center gap-2" aria-hidden>
        <span className="h-px flex-1 bg-brass/50" />
        <span className="size-1.5 rotate-45 bg-turmeric" />
        <span className="h-px flex-1 bg-brass/50" />
      </div>
    </div>
  );
}

function Item({ name, tag, text }: { name: string; tag: string; text: string }) {
  return (
    <li>
      <div className="flex items-end gap-2">
        <VegMark className="mb-1.5 size-3.5 shrink-0" />
        <span className="font-display text-xl font-semibold text-ink sm:text-2xl">{name}</span>
        <span className="mb-1.5 flex-1 border-b-2 border-dotted border-brass/40" aria-hidden />
        <span className="font-hand text-base text-kumkum">{tag}</span>
      </div>
      <p className="mt-0.5 pl-5.5 text-[0.82rem] leading-snug text-stone">{text}</p>
    </li>
  );
}

function Cover({ back = false }: { back?: boolean }) {
  return (
    <div className="cloth relative flex size-full flex-col items-center justify-center overflow-hidden px-8 text-center">
      <Kolam className="pointer-events-none absolute left-1/2 top-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 text-white/[0.05]" />
      <div className="pointer-events-none absolute inset-4 border-2 border-gold/70" aria-hidden />
      <div className="pointer-events-none absolute inset-6 border border-gold/40" aria-hidden />
      <CornerOrnament className="absolute left-7 top-7 w-12 text-gold" />
      <CornerOrnament className="absolute right-7 top-7 w-12 rotate-90 text-gold" />
      <CornerOrnament className="absolute bottom-7 right-7 w-12 rotate-180 text-gold" />
      <CornerOrnament className="absolute bottom-7 left-7 w-12 -rotate-90 text-gold" />
      <div
        className={`relative grid place-items-center rounded-full bg-paper shadow-[0_0_0_4px_#d4a04a,0_0_0_9px_rgba(212,160,74,0.35),0_20px_40px_-10px_rgba(0,0,0,0.6)] ${
          back ? "size-36" : "size-52 sm:size-60"
        }`}
      >
        <Image src={logo} alt="Sahasra Pure Veg" className={`h-auto ${back ? "w-24" : "w-36 sm:w-44"}`} />
      </div>
      {back ? (
        <>
          <p className="gold-foil font-display relative mt-8 text-4xl font-semibold italic">Thank you</p>
          <p className="relative mt-4 max-w-56 text-sm leading-relaxed text-paper/80">
            Come back soon. The tawa misses you already.
          </p>
          <p className="relative mt-6 text-sm text-paper/80">
            Catering and function hall bookings
            <span className="font-display mt-1 block text-xl text-paper">{site.phoneDisplay}</span>
          </p>
        </>
      ) : (
        <>
          <p className="gold-foil font-display relative mt-10 text-6xl font-semibold italic sm:text-7xl">Menu</p>
          <p className="relative mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-gold/80">
            Pure Vegetarian · Chittoor
          </p>
          <p className="relative mt-2 text-sm text-paper/70">Open daily, 6 AM to 10 PM</p>
          <p className="font-hand relative mt-8 text-lg text-paper/70">Tap to open</p>
        </>
      )}
    </div>
  );
}

const tiffin = [
  { name: "Idly", tag: "Morning", text: "Steamed so soft, your pillow will get jealous." },
  { name: "Dosa", tag: "All day", text: "Thin, golden, and it crackles when you tear it." },
  { name: "Pesarattu", tag: "Morning", text: "Andhra's green moong dal dosa. Ginger chutney is non-negotiable." },
  { name: "Pongal", tag: "Morning", text: "Ghee, pepper and cashew. A warm hug on a plate." },
];

const tiffinPlates = [
  { photo: photos.idli, note: "Dunk it in sambar!", tilt: "-rotate-6" },
  { photo: photos.dosa, note: "Hear that crunch?", tilt: "rotate-3" },
  { photo: photos.pesarattu, note: "Andhra's pride", tilt: "rotate-6" },
  { photo: photos.pongal, note: "Ghee-licious", tilt: "-rotate-3" },
];

const evening = [
  { name: "Chaats", tag: "Tangy", text: "Crunchy, tangy, sweet and spicy. Every bite is a tiny party." },
  { name: "Punugulu", tag: "Andhra classic", text: "Crisp golden bites with a soft middle. Nobody stops at one." },
  { name: "Bajji", tag: "Piping hot", text: "Battered, fried till golden and best eaten too hot to hold." },
];

const eveningPlates = [
  { photo: photos.chaat, note: "Pop it whole!", tilt: "-rotate-6" },
  { photo: photos.punugulu, note: "Just one more", tilt: "rotate-3" },
  { photo: photos.bajji, note: "Careful, it's hot!", tilt: "rotate-6" },
];

// Two tilted plates side by side, with handwritten notes.
function PlatePair({ plates }: { plates: { photo: (typeof photos)[keyof typeof photos]; note: string; tilt: string }[] }) {
  return (
    <div className="my-auto grid grid-cols-2 gap-x-4 pt-4">
      {plates.map((p) => (
        <figure key={p.note} className="text-center">
          <Plate src={p.photo.src} alt={p.photo.alt} sizes="12rem" className={`mx-auto w-[88%] ${p.tilt}`} />
          <figcaption className="font-hand mt-2 text-base leading-tight text-kumkum">{p.note}</figcaption>
        </figure>
      ))}
    </div>
  );
}

const notes = [
  "Pure veg, 100% of the time. That is a promise.",
  "Open every day, 6 AM to 10 PM. Dinner gets the same full menu.",
  "In a rush? Self service. Got time? Fine dining. Same great food.",
  "Less spicy, extra crispy? Just ask. Customisations are at the guest's own risk.",
  "Allergic to something? Tell us before you order.",
  `Prices and today's specials: ask our team or call ${site.phoneDisplay}.`,
];

export const menuPages: { tab?: string; node: (side: Side) => React.ReactNode }[] = [
  { node: () => <Cover /> },
  {
    tab: "Tiffin",
    node: (side) => (
      <Sheet side={side} folio={1} head="Tiffin">
        <Title kicker="Rise and dine" title="Tiffin" />
        <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-stone">
          Steam rising, tawa sizzling, chutneys lined up. Chittoor&apos;s mornings start right here.
        </p>
        <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
          {tiffin.map((t) => (
            <Item key={t.name} {...t} />
          ))}
        </ul>
      </Sheet>
    ),
  },
  {
    node: (side) => (
      <Sheet side={side} folio={2} head="Tiffin">
        <Kolam className="pointer-events-none absolute -bottom-24 -right-24 w-64 text-turmeric/40" />
        <div className="grid flex-1 grid-cols-2 content-center gap-x-4 gap-y-6">
          {tiffinPlates.map((p) => (
            <figure key={p.note} className="text-center">
              <Plate src={p.photo.src} alt={p.photo.alt} sizes="12rem" className={`mx-auto w-[88%] ${p.tilt}`} />
              <figcaption className="font-hand mt-2 text-base leading-tight text-kumkum">{p.note}</figcaption>
            </figure>
          ))}
        </div>
      </Sheet>
    ),
  },
  {
    tab: "Dosa",
    node: (side) => (
      <Sheet side={side} folio={3} head="The house signature">
        <Title kicker="The one everyone talks about" title="Bangalore Benne Dosa" />
        <div className="relative mx-auto mt-5 w-[70%] sm:w-[66%]">
          <Plate src={photos.benneDosa.src} alt={photos.benneDosa.alt} sizes="20rem" className="w-full" />
          <RotatingSeal
            text="SIGNATURE · BENNE DOSA · SIGNATURE · "
            className="absolute -right-8 -top-4 size-24 rounded-full bg-turmeric text-teal-ink shadow-lg"
          >
            <span className="font-display text-2xl leading-none text-kumkum">★</span>
          </RotatingSeal>
        </div>
        <p className="mx-auto mt-5 max-w-sm text-center text-[0.9rem] leading-relaxed text-stone">
          <em>Benne</em> means butter in Kannada, and we do not hold back. Crisp and golden outside, soft
          inside, crowned with a fat dollop of white butter. Keep the napkins close.
        </p>
      </Sheet>
    ),
  },
  {
    node: (side) => (
      <Sheet side={side} folio={4} head="On the tawa">
        <Title kicker="Dosa o'clock is every o'clock" title="Dosa, all day." />
        <svg viewBox="0 0 320 120" className="mx-auto mt-4 w-[78%]" aria-hidden>
          <path d="M30 98 Q160 -50 290 98" fill="none" stroke="#d4a04a" strokeWidth="2" strokeDasharray="3 7" />
          <line x1="10" y1="104" x2="310" y2="104" stroke="#9a6b1f" strokeOpacity="0.3" />
          {(
            [
              ["6 AM", 30, 98],
              ["Noon", 160, 24],
              ["10 PM", 290, 98],
            ] as const
          ).map(([label, x, y]) => (
            <g key={label}>
              <path d={`M${x - 16} ${y + 5} L${x} ${y - 14} L${x + 16} ${y + 5} Z`} fill="#e3a54a" stroke="#9a6b1f" strokeWidth="1.5" />
              <text x={x} y={y + 21} textAnchor="middle" fill="#5a5250" fontSize="13" fontFamily="var(--font-kalam)">
                {label}
              </text>
            </g>
          ))}
        </svg>
        <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-stone">
          From 6 in the morning to 10 at night, the tawa never cools down. Breakfast, lunch, dinner or a sneaky 4 PM craving.
        </p>
        <ul className="mt-6 space-y-4">
          <Item name="Benne Dosa" tag="Signature" text="The butter-crowned star of the house." />
          <Item name="Dosa" tag="All day" text="The classic. Crisp, never boring." />
          <Item name="Pesarattu" tag="Andhra special" text="Green, wholesome, proudly Andhra." />
        </ul>
      </Sheet>
    ),
  },
  {
    tab: "Meals",
    node: (side) => (
      <Sheet side={side} folio={5} head="Meals">
        <Title kicker="Lunch & dinner, the proper way" title="South Indian Meals" />
        <div className="relative mx-auto mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg ring-[6px] ring-white">
          <Image
            src={photos.southMeals.src}
            alt={photos.southMeals.alt}
            fill
            sizes="(min-width: 1024px) 26rem, 85vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <p className="font-hand mt-5 text-center text-lg text-kumkum">Eat with your hands. It tastes better, promise.</p>
        <p className="mt-1 text-center text-sm leading-relaxed text-stone">
          Rice · Sambar · Rasam · Curries · Chutneys · Papad · Curd
        </p>
      </Sheet>
    ),
  },
  {
    node: (side) => (
      <Sheet side={side} folio={6} head="Meals">
        <Title kicker="Craving rotis?" title="North Indian Meals" />
        <Plate
          src={photos.northThali.src}
          alt={photos.northThali.alt}
          rim="brass"
          sizes="18rem"
          className="mx-auto mt-6 w-[60%]"
        />
        <p className="font-hand mt-5 text-center text-lg text-kumkum">From dal to dessert, all on one plate</p>
        <p className="mt-1 text-center text-sm leading-relaxed text-stone">
          Rotis · Dal · Seasonal sabzi · Rice · Raita · A sweet
        </p>
        <p className="mb-4 mt-auto text-center text-xs italic text-stone/70">Served at lunch and dinner. Varieties change with the season.</p>
      </Sheet>
    ),
  },
  {
    tab: "Evening",
    node: (side) => (
      <Sheet side={side} folio={7} head="Evening specials">
        <Title kicker="Snack o'clock" title="Evening Specials" />
        <ul className="mt-5 space-y-3">
          {evening.map((e) => (
            <Item key={e.name} {...e} />
          ))}
        </ul>
        <div className="mt-auto grid grid-cols-3 gap-x-3 pb-2">
          {eveningPlates.map((p) => (
            <figure key={p.note} className="text-center">
              <Plate src={p.photo.src} alt={p.photo.alt} sizes="9rem" className={`mx-auto w-[92%] ${p.tilt}`} />
              <figcaption className="font-hand mt-2 text-sm leading-tight text-kumkum">{p.note}</figcaption>
            </figure>
          ))}
        </div>
      </Sheet>
    ),
  },
  {
    node: (side) => (
      <Sheet side={side} folio={8} head="Evening specials">
        <Title kicker="Bajji's best friend" title="Tea / Coffee" />
        <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-stone">
          A hot cup makes every snack taste better. Pull up a chair, blow on it twice, and stay a while.
        </p>
        <PlatePair
          plates={[
            { photo: photos.tea, note: "Sip, sip, hooray!", tilt: "-rotate-3" },
            { photo: photos.coffee, note: "Froth on top, please", tilt: "rotate-6" },
          ]}
        />
        <Kolam className="pointer-events-none absolute -bottom-24 -left-24 w-64 text-turmeric/40" />
      </Sheet>
    ),
  },
  {
    tab: "Sweets",
    node: (side) => (
      <Sheet side={side} folio={9} head="Sweets & savouries">
        <Title kicker="Sweet tooth, meet salty tooth" title="Sweets & Savouries" />
        <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-stone">
          Something sweet for every celebration and something crunchy for every chit-chat. Ask our team what&apos;s
          on the counter today.
        </p>
        <PlatePair
          plates={[
            { photo: photos.sweets, note: "Save room for these", tilt: "rotate-3" },
            { photo: photos.savouries, note: "Crunch time!", tilt: "-rotate-6" },
          ]}
        />
      </Sheet>
    ),
  },
  {
    node: (side) => (
      <Sheet side={side} folio={10} head="Ice creams">
        <Title kicker="Brain freeze, guaranteed" title="Ice Creams" />
        <Plate
          src={photos.iceCream.src}
          alt={photos.iceCream.alt}
          rim="brass"
          sizes="18rem"
          className="mx-auto mt-6 w-[56%] rotate-3"
        />
        <p className="font-hand mt-5 text-center text-lg text-kumkum">The cool finish after a spicy plate</p>
        <p className="mt-1 text-center text-sm leading-relaxed text-stone">Pick a scoop. Then pick another.</p>
        <p className="mb-4 mt-auto text-center text-xs italic text-stone/70">Ask our team for today&apos;s flavours.</p>
      </Sheet>
    ),
  },
  {
    tab: "Notes",
    node: (side) => (
      <Sheet side={side} folio={11} head="Good to know">
        <Title kicker="A few friendly notes" title="Good to know" />
        <ul className="mt-7 space-y-4 text-[0.92rem] leading-snug text-ink/85">
          {notes.map((note, i) => (
            <li key={note} className="flex gap-3">
              {i === 0 ? (
                <VegMark className="mt-0.5 size-4 shrink-0" />
              ) : (
                <span className="mt-1.5 size-2 shrink-0 rotate-45 bg-turmeric" aria-hidden />
              )}
              {note}
            </li>
          ))}
        </ul>
        <p className="font-hand mt-auto text-center text-2xl text-teal">Eat to your heart&apos;s content!</p>
      </Sheet>
    ),
  },
  { node: () => <Cover back /> },
];
