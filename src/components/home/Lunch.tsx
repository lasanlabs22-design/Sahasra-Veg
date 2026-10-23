import Image from "next/image";
import { SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

const meals = [
  {
    name: "South Indian Meals",
    photo: photos.southMeals,
    text: "Rice with a generous spread of sambar, rasam, curries, chutneys, papad and curd, served the traditional way.",
  },
  {
    name: "North Indian Meals",
    photo: photos.northThali,
    text: "Rotis with dal, seasonal sabzi, rice, raita and a sweet to finish, all on one thali.",
  },
];

export default function Lunch() {
  return (
    <section id="lunch" className="kolam-dark bg-teal-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Afternoon Feast" title="Meals" telugu="భోజనం" light>
          <p>
            Lunch at Sahasra is a full, unhurried meal. Eat the South Indian way, or choose a North Indian
            thali.
          </p>
        </SectionHeading>

        <ul className="mt-16 grid gap-8 md:grid-cols-2">
          {meals.map((meal) => (
            <li key={meal.name} className="reveal group overflow-hidden rounded-3xl bg-ink/40 ring-1 ring-gold/25">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={meal.photo.src}
                  alt={meal.photo.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 45vw, 95vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl text-cream sm:text-4xl">{meal.name}</h3>
                <p className="mt-3 leading-relaxed text-cream/70">{meal.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-cream/50">
          Meal varieties and accompaniments may change with the day and the season.
        </p>
      </div>
    </section>
  );
}
