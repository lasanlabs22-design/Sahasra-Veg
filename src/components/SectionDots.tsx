"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

const sections = [{ href: "/#top", label: "Home" }, ...nav];

/* Desktop dot navigation on the right edge, highlighting the section currently on screen. */
export default function SectionDots() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.6 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.href.slice(2));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {sections.map((s) => {
        const on = active === s.href.slice(2);
        return (
          <a key={s.href} href={s.href} aria-label={s.label} aria-current={on ? "location" : undefined} className="group flex items-center justify-end gap-3">
            <span className="rounded-full bg-teal-ink/85 px-2.5 py-1 text-xs font-medium text-paper opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={`block rounded-full ring-2 ring-paper/80 transition-all ${on ? "h-6 w-2.5 bg-turmeric" : "size-2.5 bg-teal/40 group-hover:bg-teal"}`}
            />
          </a>
        );
      })}
    </nav>
  );
}
