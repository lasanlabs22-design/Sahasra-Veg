import Image, { type StaticImageData } from "next/image";

/* A round food photo set in a steel or brass plate rim. */
export function Plate({
  src,
  alt,
  rim = "steel",
  sizes,
  priority = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  rim?: "steel" | "brass";
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${rim === "steel" ? "rim-steel" : "rim-brass"} rounded-full p-[3.5%] shadow-[0_30px_60px_-20px_rgba(37,32,27,0.45)] ${className}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-full shadow-[inset_0_0_0_2px_rgba(0,0,0,0.08)]">
        <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} className="object-cover" />
      </div>
    </div>
  );
}

/* Section opener: handwritten kicker and display title. */
export function Heading({
  kicker,
  title,
  tone = "dark",
  align = "left",
  className = "",
}: {
  kicker: string;
  title: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div className={`reveal ${align === "center" ? "text-center" : ""} ${className}`}>
      <p className={`font-hand text-lg sm:text-xl ${light ? "text-turmeric" : "text-kumkum"}`}>{kicker}</p>
      <h2
        className={`font-display mt-1 text-[clamp(2rem,min(6.5svh,10vw),4.5rem)] leading-[0.95] font-semibold tracking-tight ${
          light ? "text-paper" : "text-teal-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
