import type { ProjectStatus } from "@/content/types";

const STATUS_LABELS: Record<ProjectStatus, string> = {
  ready: "READY",
  "in-progress": "IN PROGRESS",
};

interface StatusBadgeProps {
  readonly status: ProjectStatus;
}

/** Pill showing a project's lifecycle status. */
export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-full border border-green/40 px-[9px] py-1 font-mono text-[11px] text-green">
      ● {STATUS_LABELS[status]}
    </span>
  );
}
