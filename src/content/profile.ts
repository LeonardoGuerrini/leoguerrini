/**
 * Core identity and copy for the site owner.
 *
 * Single source of truth for personal data referenced across sections and
 * page metadata.
 */
export const profile = {
  firstName: "Leonardo",
  lastName: "Guerini",
  /** Wordmark used in the header. */
  brand: "guerini",
  role: "Full-stack developer",
  location: "Paraná, Brazil",
  establishedYear: 2020,
  availableForWork: true,

  /** Lead paragraph in the hero section. */
  heroIntro:
    "Full-stack developer building solid, well-structured systems from the ground up — currently studying computer science and shipping personal projects.",

  /** Opening statement of the about section. */
  aboutLead:
    "Hi — I'm Leonardo, a full-stack developer who fell for the craft of building things that just work — from the interface down to the database.",
} as const;
