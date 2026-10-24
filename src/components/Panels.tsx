import { Children } from "react";

/*
 * Groups a section's blocks. On phones they stack and the page scrolls freely; from the lg breakpoint
 * up, `className` lays them out (usually a grid) inside the one-screen section.
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
  return (
    <div className={`flex min-h-0 flex-1 flex-col gap-6 ${className}`}>
      {Children.toArray(children).map((child, i) => (
        <div key={labels[i]} role="group" aria-label={labels[i]} className={`flex min-h-0 flex-col ${itemClassNames[i] ?? ""}`}>
          {child}
        </div>
      ))}
    </div>
  );
}
