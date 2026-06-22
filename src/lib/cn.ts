/**
 * Joins truthy class name fragments into a single string.
 *
 * A tiny, dependency-free alternative to `clsx` — enough for conditional
 * Tailwind classes without pulling in a package.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
