import type { SocialLink } from "./types";

/** Contact channels rendered in the contact section. */
export const socials: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/LeonardoGuerrini/",
    icon: "github",
    primary: true,
  },
  {
    label: "Email",
    href: "mailto:leonardogguerrini@gmail.com",
    icon: "email",
    primary: false,
  },
];
