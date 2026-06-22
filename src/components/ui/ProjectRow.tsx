import type { Project } from "@/content/types";
import { ProjectCover } from "./ProjectCover";
import { StatusBadge } from "./StatusBadge";
import { Tag } from "./Tag";

interface ProjectRowProps {
  readonly project: Project;
  /** 1-based position, rendered as the large `01`, `02`… index. */
  readonly index: number;
}

/** A single row in the projects list: index, cover, and details. */
export function ProjectRow({ project, index }: ProjectRowProps) {
  const orderLabel = String(index).padStart(2, "0");

  return (
    <article className="grid grid-cols-1 items-start gap-8 border-t border-ink/[0.18] py-10 transition-colors duration-200 hover:bg-white/45 md:grid-cols-[64px_360px_1fr] md:gap-10">
      <div className="font-serif text-[44px] leading-none text-green">{orderLabel}</div>

      <ProjectCover icon={project.icon} caption={project.caption} />

      <div>
        <div className="mb-[14px] flex flex-wrap items-center gap-[14px]">
          <h3 className="font-serif text-[32px] font-normal text-ink">{project.title}</h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="max-w-[560px] text-[17px] leading-[1.6] text-[#37352b]">
          {project.description}
        </p>

        <div className="mt-[18px] flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[22px] inline-flex items-center gap-[9px] border-b-2 border-green pb-[3px] font-mono text-[13px] font-bold text-green transition-opacity hover:opacity-70"
        >
          OPEN PROJECT →
        </a>
      </div>
    </article>
  );
}
