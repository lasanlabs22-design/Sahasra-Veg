import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Heading } from "@/components/ui";
import { photos } from "@/lib/photos";

const cards = [
  { href: "/menu", kicker: "flip the book", title: "Menu", photo: photos.benneDosa, text: "Tiffin, dosa all day and full meals." },
  { href: "/our-story", kicker: "where it begins", title: "Our Story", photo: photos.kalamkari, text: "Three states, one kitchen, all veg." },
  { href: "/dining", kicker: "quick or slow", title: "Dining", photo: photos.fineDining, text: "Self service or fine dining." },
  { href: "/function-hall", kicker: "75 guests, AC", title: "Function Hall", photo: photos.functionHall, text: "Birthdays, engagements, reunions." },
  { href: "/catering", kicker: "we come to you", title: "Catering", photo: photos.hallDecor, text: "Weddings, poojas, office events." },
  { href: "/visit", kicker: "come say hi", title: "Visit", photo: photos.chandragiri, text: "Tirupati Road, Kattamanchi, Chittoor." },
];

/* Home page index: one picture card per section page. */
export default function Explore() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading kicker="where to next?" title="Pick a page, any page." align="center" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.href} className="reveal">
              <Link
                href={c.href}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[2rem] p-7 text-paper shadow-[0_30px_60px_-30px_rgba(13,75,91,0.55)] sm:aspect-[3/4]"
              >
                <Image
                  src={c.photo.src}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-ink via-teal-ink/45 to-transparent" aria-hidden />
                <span className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-paper/90 text-teal-ink transition-transform group-hover:rotate-45">
                  <FiArrowUpRight size={22} aria-hidden />
                </span>
                <span className="relative">
                  <span className="font-hand block text-lg text-turmeric">{c.kicker}</span>
                  <span className="font-display block text-4xl font-semibold">{c.title}</span>
                  <span className="mt-1 block text-paper/80">{c.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
