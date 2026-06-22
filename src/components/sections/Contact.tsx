import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SocialButton } from "@/components/ui/SocialButton";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";

const currentYear = 2026;

/** Closing contact section, doubling as the page footer (dark surface). */
export function Contact() {
  return (
    <section id="contact" className="bg-ink px-0 pb-14 pt-[90px] text-paper">
      <Container>
        <Eyebrow className="text-green-bright">04 — CONTACT</Eyebrow>
        <h2 className="mt-[18px] font-serif text-[clamp(52px,9vw,84px)] font-normal leading-[0.95] tracking-[-0.01em]">
          Let&apos;s build
          <br />
          something <span className="italic text-green-bright">good.</span>
        </h2>

        <div className="mt-11 flex flex-wrap gap-4">
          {socials.map((link) => (
            <SocialButton key={link.label} link={link} />
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-paper/[0.18] pt-6 font-mono text-[12px] text-[#8a8678] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {currentYear} {profile.firstName} {profile.lastName}
          </span>
          <span>{profile.location}</span>
        </div>
      </Container>
    </section>
  );
}
