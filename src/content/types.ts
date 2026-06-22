/**
 * Domain types for the portfolio content layer.
 *
 * Content is decoupled from presentation: components consume these typed
 * structures, while the actual data lives in the `content/` modules. Adding a
 * new project, skill or timeline entry means editing data only — never markup.
 */

/** A primary navigation entry pointing to an in-page section. */
export interface NavLink {
  readonly label: string;
  /** In-page anchor, e.g. `#about`. */
  readonly href: string;
}

/** A single milestone in the "about" timeline. */
export interface TimelineEntry {
  /** Display label for the period, e.g. `2020` or `NOW`. */
  readonly period: string;
  readonly description: string;
}

/** A technology or tool the author works with. */
export interface Skill {
  readonly name: string;
  /** Short category tag shown alongside the name, e.g. `LANG`, `DB`. */
  readonly category: string;
}

/** Lifecycle status of a project, used to render its badge. */
export type ProjectStatus = "ready" | "in-progress";

/** Identifier mapped to an icon component in the icon registry. */
export type IconName = "book" | "converter" | "github" | "email";

/** A portfolio project entry. */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  /** Technologies, rendered as chips. */
  readonly stack: readonly string[];
  /** Short uppercase caption shown over the cover, e.g. `PHP · MYSQL`. */
  readonly caption: string;
  readonly status: ProjectStatus;
  /** External link to the live project or repository. */
  readonly href: string;
  readonly icon: IconName;
}

/** An external contact / social channel. */
export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: IconName;
  /** Whether the link should be visually emphasized (filled button). */
  readonly primary: boolean;
}
