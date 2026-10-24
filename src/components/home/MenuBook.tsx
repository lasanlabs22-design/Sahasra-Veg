"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Kolam } from "@/components/art";
import { menuPages } from "@/components/home/MenuPages";

const N = menuPages.length;
const TURN_MS = 900;
// The book is laid out at this size, then scaled to fit the screen.
const DIM = { spread: { w: 1056, h: 680 }, single: { w: 440, h: 660 } };

function useMedia(query: string, serverValue: boolean) {
  return useSyncExternalStore(
    (onChange) => {
      const m = window.matchMedia(query);
      m.addEventListener("change", onChange);
      return () => m.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

type Flip = { dir: 1 | -1; go: boolean };

/*
 * A menu you leaf through like a book. On wide screens it opens as a two-page spread and the
 * right-hand sheet turns over the spine; on phones it is a single page that turns on swipe.
 * `at` is the spread index (two-up) or the page index (single).
 */
export default function MenuBook() {
  const twoUp = useMedia("(min-width: 1024px)", true);
  const reduced = useMedia("(prefers-reduced-motion: reduce)", false);
  const [state, setState] = useState({ at: 0, twoUp: true });
  const [flip, setFlip] = useState<Flip | null>(null);
  const [scale, setScale] = useState(1);
  const areaRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const dim = twoUp ? DIM.spread : DIM.single;

  // Keep the open page when switching between spread and single-page layouts.
  let at = state.at;
  if (state.twoUp !== twoUp) {
    at = twoUp ? Math.ceil(state.at / 2) : Math.max(0, state.at * 2 - 1);
    setState({ at, twoUp });
  }

  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const fit = () => setScale(Math.min(el.clientWidth / dim.w, el.clientHeight / dim.h, 1.25));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [dim.w, dim.h]);

  const last = twoUp ? Math.ceil((N - 1) / 2) : N - 1;

  const turn = useCallback(
    (dir: 1 | -1) => {
      if (flip) return;
      const next = at + dir;
      if (next < 0 || next > last) return;
      if (reduced) setState((s) => ({ ...s, at: next }));
      else setFlip({ dir, go: false });
    },
    [at, last, flip, reduced],
  );

  useEffect(() => {
    if (!flip || flip.go) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setFlip({ ...flip, go: true })));
    return () => cancelAnimationFrame(id);
  }, [flip]);

  useEffect(() => {
    if (!flip?.go) return;
    const t = setTimeout(() => {
      setState((s) => ({ ...s, at: s.at + flip.dir }));
      setFlip(null);
    }, TURN_MS);
    return () => clearTimeout(t);
  }, [flip]);

  const jump = (page: number) => {
    if (flip) return;
    setState((s) => ({ ...s, at: twoUp ? Math.ceil(page / 2) : page }));
  };

  const page = (i: number, side: "left" | "right") => (i >= 0 && i < N ? menuPages[i].node(side) : null);

  // Which pages sit underneath, and which two faces the turning leaf carries.
  let under: [number, number];
  let leaf: [number, number] | null = null;
  if (twoUp) {
    const L = at * 2 - 1;
    const R = at * 2;
    under = !flip ? [L, R] : flip.dir === 1 ? [L, R + 2] : [L - 2, R];
    if (flip) leaf = flip.dir === 1 ? [R, R + 1] : [L - 1, L];
  } else {
    under = [-1, !flip ? at : flip.dir === 1 ? at + 1 : at];
    if (flip) leaf = flip.dir === 1 ? [at, -1] : [at - 1, -1];
  }
  const leafTurned = flip ? (flip.dir === 1 ? flip.go : !flip.go) : false;

  const closed = twoUp && at === 0 && !flip;
  const shownPage = twoUp ? Math.max(0, at * 2 - 1) : at;
  const activeTab = menuPages.reduce((acc, p, i) => (p.tab && i <= Math.max(shownPage, 1) ? i : acc), 1);

  return (
    <section id="menu" className="screen screen-full relative flex flex-col overflow-hidden bg-teal-ink text-paper">
      <Kolam className="pointer-events-none absolute left-1/2 top-1/2 w-[70rem] -translate-x-1/2 -translate-y-1/2 text-white/[0.04]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(242,184,71,0.16),transparent_70%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl shrink-0 flex-wrap items-end justify-between gap-x-6 gap-y-2 px-4 pt-[clamp(0.75rem,3svh,2rem)] sm:px-6 lg:px-8">
        <div>
          <p className="font-hand text-lg text-turmeric">go on, open it</p>
          <h2 className="font-display text-[clamp(1.9rem,5.5svh,3.5rem)] leading-none font-semibold tracking-tight">Our Menu</h2>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menu sections">
          {menuPages.map((p, i) =>
            p.tab ? (
              <button
                key={p.tab}
                type="button"
                role="tab"
                aria-selected={activeTab === i && at > 0}
                onClick={() => jump(i)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  activeTab === i && at > 0 ? "bg-turmeric text-teal-ink" : "bg-paper/10 text-paper hover:bg-paper/20"
                }`}
              >
                {p.tab}
              </button>
            ) : null,
          )}
        </div>
      </div>

      <div ref={areaRef} className="relative mx-4 my-[clamp(0.5rem,2.5svh,1.5rem)] min-h-0 flex-1">
        <div
          className="absolute left-1/2 top-1/2 select-none [perspective:2400px]"
          style={{ width: dim.w, height: dim.h, transform: `translate(-50%, -50%) scale(${scale})` }}
          role="region"
          aria-roledescription="book"
          aria-label="Sahasra menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") turn(1);
            if (e.key === "ArrowLeft") turn(-1);
          }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) turn(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{ transform: closed ? "translateX(-25%)" : undefined }}
          >
            <div
              className={`pointer-events-none absolute inset-y-2 rounded-lg shadow-[0_50px_80px_-30px_rgba(0,0,0,0.8)] ${
                closed ? "left-1/2 right-0" : "inset-x-0"
              }`}
              aria-hidden
            />

            {twoUp && (
              <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden rounded-l-lg" onClick={() => turn(-1)}>
                {page(under[0], "left")}
              </div>
            )}
            <div
              className={`absolute inset-y-0 right-0 overflow-hidden ${twoUp ? "w-1/2 rounded-r-lg" : "w-full rounded-lg"}`}
              onClick={() => turn(1)}
            >
              {page(under[1], "right")}
            </div>

            {twoUp && !closed && (
              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/20" aria-hidden />
            )}

            {leaf && (
              <div
                className={`absolute inset-y-0 right-0 [transform-style:preserve-3d] ${twoUp ? "w-1/2" : "w-full"}`}
                style={{
                  transformOrigin: "left center",
                  transform: `rotateY(${leafTurned ? -180 : 0}deg)`,
                  transition: flip?.go ? `transform ${TURN_MS}ms cubic-bezier(0.645, 0.045, 0.355, 1)` : "none",
                }}
              >
                <div className={`absolute inset-0 overflow-hidden [backface-visibility:hidden] ${twoUp ? "rounded-r-lg" : "rounded-lg"}`}>
                  {page(leaf[0], "right")}
                </div>
                <div
                  className={`absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                    twoUp ? "rounded-l-lg" : "rounded-lg"
                  }`}
                >
                  {leaf[1] >= 0 ? page(leaf[1], "left") : <div className="page-paper size-full" />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right padding on phones keeps the page buttons clear of the floating call and WhatsApp buttons. */}
      <div className="relative flex shrink-0 items-center justify-center gap-6 pb-[clamp(0.5rem,2.5svh,1.5rem)] max-lg:pr-16">
        <button
          type="button"
          onClick={() => turn(-1)}
          disabled={at === 0}
          aria-label="Previous page"
          className="grid size-10 place-items-center rounded-full border border-paper/30 transition-colors hover:bg-paper hover:text-teal-ink disabled:pointer-events-none disabled:opacity-30"
        >
          <FiChevronLeft size={20} />
        </button>
        <p className="font-hand min-w-40 text-center text-base text-paper/80" aria-live="polite">
          {at === 0 ? "tap the cover to open" : at === last ? "the back cover" : twoUp ? `pages ${at * 2 - 1} & ${at * 2}` : `page ${at}`}
        </p>
        <button
          type="button"
          onClick={() => turn(1)}
          disabled={at === last}
          aria-label="Next page"
          className="grid size-10 place-items-center rounded-full bg-turmeric text-teal-ink transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-30"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
