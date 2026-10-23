import Image from "next/image";
import divider from "@/assets/brand/divider.png";
import dividerLight from "@/assets/brand/divider-light.png";

// The gold ornament and rule from the logo, reused as a section divider.
export function Divider({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={light ? dividerLight : divider}
      alt=""
      className={`mx-auto h-auto w-56 sm:w-72 ${className}`}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  telugu,
  light = false,
  children,
}: {
  eyebrow: string;
  title: string;
  telugu?: string;
  light?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="font-caps text-xs tracking-[0.45em] text-gold">{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl ${
          light ? "text-cream" : "text-teal-deep"
        }`}
      >
        {title}
      </h2>
      {telugu && (
        <p lang="te" className={`mt-2 font-telugu text-lg ${light ? "text-gold-soft/70" : "text-stone/60"}`}>
          {telugu}
        </p>
      )}
      <Divider light={light} className="mt-6" />
      {children && (
        <div className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? "text-cream/75" : "text-stone"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export function PhotoNote({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mt-3 text-xs italic ${light ? "text-cream/45" : "text-stone/60"}`}>{children}</p>
  );
}
