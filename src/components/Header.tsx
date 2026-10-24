"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiClock, FiMenu, FiPhone, FiX } from "react-icons/fi";
import logo from "@/assets/brand/logo.png";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-40 h-18 border-b border-brass/20 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Sahasra Pure Veg, home" onClick={() => setOpen(false)}>
          <Image src={logo} alt="Sahasra Pure Veg" priority className="h-12 w-auto sm:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-[0.95rem] font-medium text-teal-ink after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-turmeric after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1.5 text-xs font-medium text-stone lg:hidden xl:flex xl:text-sm">
            <FiClock className="text-brass" aria-hidden /> {site.hours.display}
          </p>
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-paper shadow-[0_5px_0_0_var(--color-teal-ink)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            <FiPhone aria-hidden /> Call to Book
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-teal text-paper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-brass/20 bg-paper px-6 pb-10 pt-4 lg:hidden"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-dashed border-brass/30 py-4"
                >
                  <span className="font-display text-3xl font-semibold text-teal-ink">{item.label}</span>
                  <span className="text-brass" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 font-semibold text-paper"
          >
            <FiPhone aria-hidden /> {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
