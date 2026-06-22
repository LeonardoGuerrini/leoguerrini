import { ArrowRightLeft, BookOpen, Github, Mail, type LucideIcon } from "lucide-react";

import type { IconName } from "@/content/types";

/**
 * Central registry mapping content icon names to their components.
 *
 * Keeping this lookup in one place lets the content layer reference icons by
 * a string key (decoupled from React) while components resolve them here.
 */
const ICONS: Record<IconName, LucideIcon> = {
  book: BookOpen,
  converter: ArrowRightLeft,
  github: Github,
  email: Mail,
};

interface IconProps {
  readonly name: IconName;
  readonly size?: number;
  readonly className?: string;
  /** Stroke width for outline icons. */
  readonly strokeWidth?: number;
}

/** Renders the icon registered under `name`. */
export function Icon({ name, size = 20, className, strokeWidth }: IconProps) {
  const Glyph = ICONS[name];
  return <Glyph size={size} className={className} strokeWidth={strokeWidth} aria-hidden />;
}
