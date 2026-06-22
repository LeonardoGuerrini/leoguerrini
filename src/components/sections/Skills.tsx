import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";
import { skills } from "@/content/skills";

/** Skills section: section heading beside a responsive grid of skill cards. */
export function Skills() {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid gap-14 md:grid-cols-[300px_1fr]">
          <SectionHeading
            eyebrow="02 — SKILLS"
            title={
              <>
                Tools of
                <br />
                the trade
              </>
            }
            titleClassName="text-[56px]"
          />

          <div className="grid grid-cols-2 content-start gap-[14px] sm:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
