import { Fragment } from "react";

/** Decorative keywords scrolled in the marquee strip. */
const KEYWORDS = [
  "Full-stack",
  "JavaScript",
  "React",
  "Node.js",
  "APIs",
  "Databases",
  "Clean code",
  "Always learning",
] as const;

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {KEYWORDS.map((keyword, index) => (
        <Fragment key={keyword}>
          {index > 0 && <span className="text-green-bright">✳</span>}
          <span>{keyword}</span>
        </Fragment>
      ))}
      <span className="text-green-bright">✳</span>
    </div>
  );
}

/**
 * Infinite horizontal marquee. The track is duplicated so the CSS animation
 * can loop seamlessly; the duplicate is hidden from assistive tech.
 */
export function Marquee() {
  return (
    <div className="flex overflow-hidden border-y border-ink/[0.12] bg-ink py-[18px] font-mono text-[13px] uppercase tracking-[0.1em] text-paper">
      <div className="flex animate-marquee whitespace-nowrap">
        <MarqueeTrack />
        <div aria-hidden>
          <MarqueeTrack />
        </div>
      </div>
    </div>
  );
}
