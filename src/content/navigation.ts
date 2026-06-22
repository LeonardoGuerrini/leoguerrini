import type { NavLink } from "./types";

/** Primary navigation, rendered in the header and mobile menu. */
export const navLinks: readonly NavLink[] = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
