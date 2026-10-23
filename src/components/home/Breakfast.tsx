import Image from "next/image";
import { SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

const items = [
  {
    name: "Idly",
    telugu: "ఇడ్లీ",
    photo: photos.idli,
    text: "Steamed rice and urad dal cakes, soft as a cloud, with hot sambar and fresh chutneys.",
  },
  {
    name: "Dosa",
    telugu: "దోశ",
    photo: photos.dosa,
    text: "Fermented rice batter spread thin on the tawa and roasted golden and crisp.",
  },
  {
    name: "Pesarattu",
    telugu: "పెసరట్టు",
    photo: photos.pesarattu,
    text: "Andhra's own green moong dal crêpe, served with a sharp ginger chutney.",
  },
  {
    name: "Pongal",
    telugu: "పొంగల్",
    photo: photos.pongal,
    text: "Rice and moong dal cooked soft with ghee, black pepper, cumin and cashew.",
  },
];

export default function Breakfast() {
  return (
    <section id="menu" className="kolam-dark bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Morning Ritual" title="Breakfast" telugu="అల్పాహారం" light>
          <p>
            The way Chittoor starts its day: steaming idly, crisp dosa, Andhra&apos;s own pesarattu and
            ghee-rich pongal.
          </p>
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.name} className="reveal group text-center">
              <div className="arch relative mx-auto aspect-[3/4] max-w-xs overflow-hidden ring-1 ring-gold/30">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 20rem, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl text-cream sm:mt-6 sm:text-3xl">{item.name}</h3>
              <p lang="te" className="font-telugu text-sm text-gold-soft/70">
                {item.telugu}
              </p>
              <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-cream/65 sm:text-sm">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
