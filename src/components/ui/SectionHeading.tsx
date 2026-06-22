import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  /** Kicker label, e.g. `01 — ABOUT`. */
  readonly eyebrow: string;
  /** Serif display title. Accepts nodes to allow line breaks. */
  readonly title: ReactNode;
  readonly className?: string;
  readonly titleClassName?: string;
}

/**
 * The recurring two-part section header: a monospace eyebrow above a serif
 * display title. Reused by every content section for visual consistency.
 */
export function SectionHeading({
  eyebrow,
  title,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-[18px] font-serif font-normal leading-[1] text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
