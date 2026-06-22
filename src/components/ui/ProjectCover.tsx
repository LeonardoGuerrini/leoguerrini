import type { IconName } from "@/content/types";
import { Icon } from "./Icon";

interface ProjectCoverProps {
  readonly icon: IconName;
  /** Uppercase caption shown at the bottom-left, e.g. `PHP · MYSQL`. */
  readonly caption: string;
}

/**
 * Dark, diagonally-hatched cover used as a project's visual placeholder.
 * Purely decorative — the meaningful content lives in the adjacent text.
 */
export function ProjectCover({ icon, caption }: ProjectCoverProps) {
  return (
    <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-[2px] bg-ink">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(59,168,111,.16) 0 1px, transparent 1px 12px)",
        }}
      />
      <Icon name={icon} size={64} strokeWidth={1.2} className="relative text-paper" />
      <span className="absolute bottom-[14px] left-4 font-mono text-[11px] tracking-[0.08em] text-green-bright">
        {caption}
      </span>
    </div>
  );
}
