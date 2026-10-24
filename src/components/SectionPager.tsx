import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { nav } from "@/lib/site";

/* Previous and next links at the foot of each section page, so visitors can walk through the site. */
export default function SectionPager({ current }: { current: (typeof nav)[number]["href"] }) {
  const i = nav.findIndex((n) => n.href === current);
  const prev = i > 0 ? nav[i - 1] : { href: "/", label: "Home" };
  const next = i < nav.length - 1 ? nav[i + 1] : null;

  return (
    <nav aria-label="Section" className="border-t border-brass/20 bg-paper">
      <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
        <Link
          href={prev.href}
          className="group flex items-center gap-4 border-b border-brass/20 px-4 py-8 sm:border-b-0 sm:border-r sm:px-6 lg:px-8"
        >
          <FiArrowLeft className="size-6 shrink-0 text-brass transition-transform group-hover:-translate-x-1" aria-hidden />
          <span>
            <span className="font-hand block text-lg text-kumkum">previous</span>
            <span className="font-display text-3xl font-semibold text-teal-ink">{prev.label}</span>
          </span>
        </Link>
        {next ? (
          <Link href={next.href} className="group flex items-center justify-end gap-4 px-4 py-8 text-right sm:px-6 lg:px-8">
            <span>
              <span className="font-hand block text-lg text-kumkum">up next</span>
              <span className="font-display text-3xl font-semibold text-teal-ink">{next.label}</span>
            </span>
            <FiArrowRight className="size-6 shrink-0 text-brass transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        ) : (
          <Link href="/" className="group flex items-center justify-end gap-4 px-4 py-8 text-right sm:px-6 lg:px-8">
            <span>
              <span className="font-hand block text-lg text-kumkum">all done?</span>
              <span className="font-display text-3xl font-semibold text-teal-ink">Back to Home</span>
            </span>
            <FiArrowRight className="size-6 shrink-0 text-brass transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        )}
      </div>
    </nav>
  );
}
