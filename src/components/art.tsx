// Hand-built SVG illustrations that give the site its South Indian, Chittoor character.

import { useId } from "react";

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/* The FSSAI vegetarian mark: green square with a green dot. */
export function VegMark({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} role="img" aria-label="Vegetarian">
      <rect x="1" y="1" width="14" height="14" rx="1.5" fill="#fff" stroke="#1e8e3e" strokeWidth="1.6" />
      <circle cx="8" cy="8" r="3.6" fill="#1e8e3e" />
    </svg>
  );
}

/* Thoranam: a garland of mango leaves and marigolds hung over doorways for good beginnings. */
export function Thoranam({ count = 45, className = "" }: { count?: number; className?: string }) {
  // Matches the quadratic string below: y(t) = 4 + 128 t (1 - t), in px because the SVG is 40px tall.
  const sag = (t: number) => 2 + 128 * t * (1 - t);
  return (
    <div className={`pointer-events-none relative h-20 w-full sm:h-24 ${className}`} aria-hidden>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-10 w-full">
        <path d="M0 4 Q500 68 1000 4" fill="none" stroke="#7a5320" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      {range(count).map((i) => {
        const t = (i + 0.5) / count;
        const flower = i % 4 === 2;
        return (
          <div
            key={i}
            // Phones get every other item so the garland stays light.
            className={`sway absolute ${i % 2 ? "max-sm:hidden" : ""}`}
            style={{
              left: `${t * 100}%`,
              top: sag(t),
              translate: "-50% 0",
              animationDelay: `${(i % 7) * -0.6}s`,
            }}
          >
            {flower ? (
              <svg viewBox="0 0 24 40" className="h-7 w-4 sm:h-8 sm:w-5">
                <line x1="12" y1="0" x2="12" y2="14" stroke="#7a5320" strokeWidth="1.2" />
                {range(10).map((p) => (
                  <circle
                    key={p}
                    cx={12 + 6 * Math.cos((p * Math.PI) / 5)}
                    cy={24 + 6 * Math.sin((p * Math.PI) / 5)}
                    r="4.6"
                    fill={p % 2 ? "#f59e1b" : "#f7b02c"}
                  />
                ))}
                <circle cx="12" cy="24" r="5" fill="#e07812" />
                <circle cx="12" cy="24" r="2" fill="#b85a0c" />
              </svg>
            ) : (
              <svg viewBox="0 0 22 72" className="h-12 w-3.5 sm:h-14 sm:w-4">
                <path
                  d="M11 2 C20 16 20 46 11 70 C2 46 2 16 11 2 Z"
                  fill={i % 2 ? "#3c7a35" : "#2f6b35"}
                />
                <path d="M11 4 L11 66" stroke="#8fbf6a" strokeWidth="0.9" opacity="0.7" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* A lotus kolam: rings of petals, dots and loops, as drawn in rice flour at the threshold. */
export function Kolam({ className = "", strokeWidth = 1.6 }: { className?: string; strokeWidth?: number }) {
  const petal = (len: number, w: number) =>
    `M0 0 C ${w} ${-len * 0.35}, ${w} ${-len * 0.75}, 0 ${-len} C ${-w} ${-len * 0.75}, ${-w} ${-len * 0.35}, 0 0`;
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <g transform="translate(200 200)">
        <circle r="14" />
        <circle r="4" fill="currentColor" stroke="none" />
        {range(8).map((i) => (
          <path key={`a${i}`} d={petal(58, 18)} transform={`rotate(${i * 45}) translate(0 -16)`} />
        ))}
        {range(8).map((i) => (
          <path key={`b${i}`} d={petal(80, 28)} transform={`rotate(${i * 45 + 22.5}) translate(0 -34)`} />
        ))}
        <circle r="122" strokeDasharray="1 9" />
        {range(16).map((i) => (
          <path key={`c${i}`} d={petal(58, 16)} transform={`rotate(${i * 22.5}) translate(0 -112)`} />
        ))}
        {range(16).map((i) => (
          <circle key={`d${i}`} r="5" transform={`rotate(${i * 22.5 + 11.25}) translate(0 -160)`} />
        ))}
        <circle r="182" />
        {range(48).map((i) => (
          <circle
            key={`e${i}`}
            r="2.4"
            fill="currentColor"
            stroke="none"
            transform={`rotate(${i * 7.5}) translate(0 -194)`}
          />
        ))}
      </g>
    </svg>
  );
}

/* Hand-drawn arrow for handwritten notes. */
export function HandArrow({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <path d="M4 8 C24 2 48 10 66 38" />
      <path d="M54 34 L67 40 L68 25" />
    </svg>
  );
}

/* Circular seal with text running around it. */
export function RotatingSeal({ text, className = "", children }: { text: string; className?: string; children?: React.ReactNode }) {
  const id = useId();
  return (
    <div className={`grid place-items-center ${className}`}>
      <svg viewBox="0 0 200 200" className="spin-badge absolute inset-0 size-full" aria-hidden>
        <defs>
          <path id={id} d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" />
        </defs>
        <text fill="currentColor" fontSize="15.5" textLength="462" lengthAdjust="spacing" fontFamily="var(--font-instrument)" fontWeight="600">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <div className="relative text-center">{children}</div>
    </div>
  );
}

/* Brass tiffin carrier for catering. */
export function TiffinCarrier({ className = "" }: { className?: string }) {
  const tiers = [96, 160, 224];
  return (
    <svg viewBox="0 0 240 320" className={className} aria-hidden>
      <defs>
        <linearGradient id="brass" x1="0" x2="1">
          <stop offset="0" stopColor="#8f6119" />
          <stop offset="0.28" stopColor="#f3d27a" />
          <stop offset="0.5" stopColor="#d4a04a" />
          <stop offset="0.78" stopColor="#f7de92" />
          <stop offset="1" stopColor="#9a6b1f" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="300" rx="92" ry="10" fill="#25201b" opacity="0.12" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="steam"
          style={{ animationDelay: `${i * 0.9}s` }}
          d={`M${96 + i * 24} 30 c-8 -8 8 -14 0 -22`}
          stroke="#9a6b1f"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      ))}
      <path d="M86 70 C86 34 154 34 154 70" stroke="url(#brass)" strokeWidth="9" fill="none" />
      <rect x="38" y="62" width="10" height="230" rx="4" fill="url(#brass)" />
      <rect x="192" y="62" width="10" height="230" rx="4" fill="url(#brass)" />
      <rect x="34" y="62" width="172" height="14" rx="6" fill="url(#brass)" />
      {tiers.map((y) => (
        <g key={y}>
          <rect x="56" y={y - 14} width="128" height="62" rx="10" fill="url(#brass)" />
          <rect x="52" y={y - 18} width="136" height="10" rx="5" fill="#b8862b" />
          <path d={`M60 ${y + 24} H180`} stroke="#fff6d6" strokeWidth="2" opacity="0.45" />
        </g>
      ))}
    </svg>
  );
}

/* Silhouette of hills, a gopuram, mango trees and palms, used above the footer. */
export function Skyline({ className = "" }: { className?: string }) {
  const tiers = (cx: number, base: number, w: number, n: number) =>
    range(n).map((i) => {
      const tw = w - i * (w / (n + 2));
      return <rect key={i} x={cx - tw / 2} y={base - (i + 1) * 13} width={tw} height="14" />;
    });
  const tree = (cx: number, base: number, s = 1) => (
    <g>
      <rect x={cx - 3 * s} y={base - 34 * s} width={6 * s} height={34 * s} />
      {[
        [0, -52, 24],
        [-20, -40, 18],
        [20, -40, 18],
        [-10, -66, 16],
        [12, -64, 15],
      ].map(([dx, dy, r], k) => (
        <circle key={k} cx={cx + dx * s} cy={base + dy * s} r={r * s} />
      ))}
    </g>
  );
  const palm = (x: number, base: number) => (
    <g>
      <path d={`M${x} ${base} C${x + 6} ${base - 40} ${x + 2} ${base - 70} ${x + 12} ${base - 96}`} stroke="currentColor" strokeWidth="5" fill="none" />
      {[-60, -25, 10, 45, 80].map((a) => (
        <path
          key={a}
          d={`M${x + 12} ${base - 96} q 18 -10 34 6`}
          transform={`rotate(${a} ${x + 12} ${base - 96})`}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
  return (
    <svg viewBox="0 0 1440 180" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      <path
        d="M0 180 V118 C90 92 170 104 250 90 C340 74 420 98 520 86 C640 72 720 100 820 88 C930 76 1010 60 1110 82 C1220 104 1320 78 1440 96 V180 Z"
        fill="currentColor"
        opacity="0.45"
      />
      <g fill="currentColor" color="currentColor">
        <path d="M0 180 V146 C200 136 400 150 600 140 C800 130 1000 148 1200 138 C1320 132 1400 140 1440 138 V180 Z" />
        {tiers(1010, 150, 120, 7)}
        <rect x="975" y="44" width="70" height="16" rx="8" />
        {[992, 1010, 1028].map((x) => (
          <path key={x} d={`M${x - 4} 46 Q${x} 26 ${x + 4} 46 Z`} />
        ))}
        {tiers(330, 150, 70, 5)}
        <rect x="310" y="76" width="40" height="11" rx="5" />
        <path d="M326 78 Q330 62 334 78 Z" />
        {tree(160, 150)}
        {tree(620, 150, 1.15)}
        {tree(1270, 150, 0.95)}
        {palm(500, 150)}
        {palm(1160, 150)}
        {palm(1370, 150)}
      </g>
    </svg>
  );
}

/* Illustrated map: Chittoor where Andhra Pradesh meets Tamil Nadu and Karnataka. */
export function RegionMap({ className = "", labelScale = 1 }: { className?: string; labelScale?: number }) {
  const f = (n: number) => n * labelScale;
  // Equirectangular projection of real coordinates into a 600 x 230 box.
  const p = (lat: number, lon: number) => [(lon - 77.4) * 200, (13.9 - lat) * 200 + 6] as const;
  const home = p(13.2175, 79.1003);
  const places = [
    { name: "Kanipakam", km: "", at: p(13.278, 79.034), dx: -12, dy: -10, anchor: "end" },
    { name: "Tirupati", km: "~70 km", at: p(13.628, 79.419), dx: 10, dy: 4, anchor: "start" },
    { name: "Srikalahasti", km: "", at: p(13.749, 79.698), dx: 10, dy: 4, anchor: "start" },
    { name: "Vellore", km: "", at: p(12.916, 79.132), dx: 10, dy: 4, anchor: "start" },
    { name: "Bengaluru", km: "~180 km", at: p(12.972, 77.594), dx: 0, dy: 22, anchor: "middle" },
    { name: "Chennai", km: "~160 km", at: p(13.083, 80.27), dx: 0, dy: 22, anchor: "middle" },
  ] as const;
  return (
    <svg viewBox="0 0 600 240" className={className} role="img" aria-label="Map showing Chittoor between Bengaluru, Tirupati, Vellore and Chennai">
      <g fontFamily="var(--font-instrument)" fontSize={f(11)} letterSpacing="5" fill="#9a6b1f" opacity="0.55" fontWeight="600">
        <text x="40" y="60">KARNATAKA</text>
        <text x="300" y="22">ANDHRA PRADESH</text>
        <text x="420" y="228">TAMIL NADU</text>
      </g>
      {places.map((pl) => {
        const [x, y] = pl.at;
        const mx = (home[0] + x) / 2;
        const my = (home[1] + y) / 2 - 14;
        // Distance label sits two thirds of the way out, clear of the Chittoor label.
        const lx = home[0] + (x - home[0]) * 0.66;
        const ly = home[1] + (y - home[1]) * 0.66 - 12;
        return (
          <g key={pl.name}>
            <path
              d={`M${home[0]} ${home[1]} Q${mx} ${my} ${x} ${y}`}
              fill="none"
              stroke="#127089"
              strokeWidth="1.6"
              strokeDasharray="4 5"
              opacity="0.7"
            />
            {pl.km && (
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                fontFamily="var(--font-kalam)"
                fontSize={f(12)}
                fill="#5a5250"
                stroke="#fbf4e6"
                strokeWidth="4"
                paintOrder="stroke"
              >
                {pl.km}
              </text>
            )}
            <circle cx={x} cy={y} r="4.5" fill="#fbf4e6" stroke="#127089" strokeWidth="2" />
            <text
              x={x + pl.dx}
              y={y + f(pl.dy)}
              textAnchor={pl.anchor}
              fontFamily="var(--font-kalam)"
              fontSize={f(15)}
              fill="#0d4b5b"
              stroke="#fbf4e6"
              strokeWidth="4"
              paintOrder="stroke"
            >
              {pl.name}
            </text>
          </g>
        );
      })}
      <circle className="pulse-ring" cx={home[0]} cy={home[1]} r="7" fill="#b23a2a" />
      <circle cx={home[0]} cy={home[1]} r="7" fill="#b23a2a" stroke="#fbf4e6" strokeWidth="2.5" />
      <text
        x={home[0] + 14}
        y={home[1] + f(30)}
        textAnchor="start"
        fontFamily="var(--font-fraunces)"
        fontSize={f(17)}
        fontWeight="600"
        fill="#b23a2a"
        stroke="#fbf4e6"
        strokeWidth="5"
        paintOrder="stroke"
      >
        Sahasra, Chittoor
      </text>
      <g transform="translate(560 40)" stroke="#9a6b1f" fill="none" strokeWidth="1.4" opacity="0.8">
        <circle r="16" />
        <path d="M0 -22 L4 0 L0 22 L-4 0 Z" fill="#9a6b1f" />
        <text y="-26" textAnchor="middle" fontSize="10" fill="#9a6b1f" stroke="none" fontFamily="var(--font-instrument)">
          N
        </text>
      </g>
    </svg>
  );
}

/* Paisley corner ornament for the invitation card. */
export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden>
      <path d="M4 56 V4 H56" />
      <path d="M10 50 V10 H50" opacity="0.6" />
      <path d="M18 18 C30 14 40 22 36 32 C33 40 22 38 22 30 C22 24 30 24 30 30" />
      <circle cx="44" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="44" r="2" fill="currentColor" />
    </svg>
  );
}
