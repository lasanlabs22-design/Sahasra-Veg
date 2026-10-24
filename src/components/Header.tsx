"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiClock, FiMapPin, FiMenu, FiPhone, FiX } from "react-icons/fi";
import logo from "@/assets/brand/logo.png";
import { VegMark } from "@/components/art";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="bg-teal-ink text-paper/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <VegMark className="size-3.5" /> 100% Pure Vegetarian
          </p>
          <p className="flex items-center gap-2">
            <FiClock className="text-gold" aria-hidden />
            <span className="sm:hidden">{site.hours.display}</span>
            <span className="hidden sm:inline">
              {site.hours.days}, {site.hours.display}
            </span>
          </p>
          <p className="hidden items-center gap-2 lg:flex">
            <FiMapPin className="text-gold" aria-hidden /> Tirupati Road, Kattamanchi, Chittoor
          </p>
          <a href={site.phoneHref} className="hidden items-center gap-2 hover:text-turmeric sm:flex">
            <FiPhone className="text-gold" aria-hidden /> {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-brass/20 bg-paper/92 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Sahasra Pure Veg, home" onClick={() => setOpen(false)}>
            <Image src={logo} alt="Sahasra Pure Veg" priority className="h-14 w-auto sm:h-[4.5rem]" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="relative py-2 text-[0.95rem] font-medium text-teal-ink after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-turmeric after:transition-transform hover:after:scale-x-100 aria-[current=page]:font-semibold aria-[current=page]:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-paper shadow-[0_6px_0_0_var(--color-teal-ink)] transition-transform active:translate-y-0.5 hover:-translate-y-0.5"
            >
              <FiPhone aria-hidden /> Call to Book
            </a>
          </nav>

          <button
            type="button"
            className="grid size-12 place-items-center rounded-full bg-teal text-paper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-brass/20 bg-paper px-6 pb-10 pt-4 lg:hidden"
          >
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="group flex items-baseline justify-between border-b border-dashed border-brass/30 py-4"
                  >
                    <span className="font-display text-3xl font-semibold text-teal-ink group-aria-[current=page]:text-kumkum">
                      {item.label}
                    </span>
                    <span className="text-brass" aria-hidden>→</span>
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
    </>
  );
}
