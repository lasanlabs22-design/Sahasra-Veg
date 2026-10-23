"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import markLight from "@/assets/brand/mark-light.png";
import { nav, site } from "@/lib/site";

export default function Header() {
  const isHome = usePathname() === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        solid ? "border-b border-gold/15 bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={markLight} alt="" className="h-10 w-auto" priority />
          <span className="leading-none">
            <span className="block font-caps text-xl tracking-[0.18em] text-cream">Sahasra</span>
            <span className="mt-1 block font-caps text-[0.6rem] tracking-[0.5em] text-gold">
              Pure Veg
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-caps text-xs tracking-[0.2em] text-cream/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2.5 font-caps text-xs tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <FiPhone aria-hidden /> Call Us
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-cream lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="kolam-dark h-[calc(100dvh-4.5rem)] overflow-y-auto bg-ink px-6 pb-10 pt-6 lg:hidden"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gold/10 py-4 font-display text-3xl text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-caps text-sm tracking-[0.2em] text-ink"
          >
            <FiPhone aria-hidden /> {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
