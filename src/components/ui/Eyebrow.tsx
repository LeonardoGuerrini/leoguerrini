import { cn } from "@/lib/cn";

interface EyebrowProps {
  readonly children: string;
  readonly className?: string;
}

/**
 * Small uppercase monospace label used above headings and as a kicker
 * (e.g. `01 — ABOUT`). Matches the editorial section markers in the design.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-mono text-[13px] uppercase tracking-[0.14em] text-green",
        className,
      )}
    >
      {children}
    </span>
  );
}
