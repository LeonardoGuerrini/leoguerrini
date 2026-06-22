import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { projects } from "@/content/projects";

/** Projects section: heading, the list of project rows, and a grow slot. */
export function Projects() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <section id="projects" className="border-t border-ink/[0.12] bg-paper-soft py-20">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <Eyebrow>03 — PROJECTS</Eyebrow>
            <h2 className="mt-[14px] font-serif text-[clamp(44px,7vw,72px)] font-normal leading-[0.95] text-ink">
              Selected work
            </h2>
          </div>
          <div className="pb-2 text-right font-mono text-[12px] text-muted">
            {count} PROJECTS
            <br />
            MORE SOON
          </div>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index + 1} />
          ))}
        </div>

        {/* Grow slot — new projects drop straight into the list above. */}
        <div className="border-t border-ink/[0.18] pb-2 pt-10">
          <div className="flex items-center justify-between rounded-[2px] border-[1.5px] border-dashed border-ink/[0.28] p-9">
            <div>
              <div className="font-serif text-[26px] text-muted">More on the way</div>
              <p className="mt-[6px] text-[15px] text-muted">
                New projects will slot right into this list.
              </p>
            </div>
            <div className="font-mono text-[40px] text-ink/25">+</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
