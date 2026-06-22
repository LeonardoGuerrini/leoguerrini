import type { Skill } from "@/content/types";

interface SkillCardProps {
  readonly skill: Skill;
}

/** Bordered cell showing a skill name with its category tag; inverts on hover. */
export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group flex items-baseline justify-between rounded-[2px] border border-ink/20 px-6 py-[22px] transition-colors duration-200 hover:border-ink hover:bg-ink">
      <span className="text-[20px] font-bold text-ink transition-colors duration-200 group-hover:text-paper">
        {skill.name}
      </span>
      <span className="font-mono text-[11px] text-green">{skill.category}</span>
    </div>
  );
}
