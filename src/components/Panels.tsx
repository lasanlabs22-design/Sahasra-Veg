"use client";

import { Children, useRef, useState } from "react";

/*
 * Keeps a section inside one screen on phones: children become full-width panels you swipe
 * sideways, with dots below. From the lg breakpoint up, `className` lays them out (usually a grid)
 * and the dots hide.
 */
export default function Panels({
  children,
  labels,
  className = "",
  itemClassNames = [],
}: {
  children: React.ReactNode;
  labels: string[];
  className?: string;
  itemClassNames?: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={ref}
        onScroll={(e) => setActive(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className={`flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] lg:overflow-visible ${className}`}
      >
        {Children.toArray(children).map((child, i) => (
          <div
            key={labels[i]}
            role="group"
            aria-label={labels[i]}
            className={`flex min-h-0 w-full shrink-0 snap-center flex-col px-1 lg:w-auto lg:shrink lg:px-0 ${itemClassNames[i] ?? ""}`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="mt-2 flex shrink-0 items-center justify-center gap-1 lg:hidden">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            aria-label={`Show ${label}`}
            aria-current={active === i}
            onClick={() => ref.current?.scrollTo({ left: i * ref.current.clientWidth, behavior: "smooth" })}
            className="p-1.5"
          >
            <span className={`block h-2 rounded-full transition-all ${active === i ? "w-6 bg-teal" : "w-2 bg-teal/30"}`} />
          </button>
        ))}
        <span className="font-hand ml-1 text-sm text-stone">swipe for more</span>
      </div>
    </div>
  );
}
