import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { timeline } from "@/content/timeline";

/** About section: lead statement plus the chronological timeline. */
export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid gap-14 md:grid-cols-[300px_1fr]">
          <SectionHeading
            eyebrow="01 — ABOUT"
            title={
              <>
                A bit
                <br />
                about me
              </>
            }
            titleClassName="text-[56px]"
          />

          <div>
            <p className="max-w-[640px] text-[25px] font-medium leading-[1.5] text-ink">
              {profile.aboutLead}
            </p>

            <ol className="mt-12 flex flex-col">
              {timeline.map((entry) => (
                <li
                  key={entry.period}
                  className="grid grid-cols-1 gap-3 border-t border-ink/[0.14] py-[26px] last:border-b sm:grid-cols-[120px_1fr] sm:gap-8"
                >
                  <span className="font-mono text-[15px] font-bold text-green">
                    {entry.period}
                  </span>
                  <p className="text-[17px] leading-[1.6] text-[#37352b]">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
