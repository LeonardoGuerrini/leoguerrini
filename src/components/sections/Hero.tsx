import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

/** Above-the-fold hero: availability strip, name, and intro paragraph. */
export function Hero() {
  return (
    <section id="home" className="pb-14 pt-16">
      <Container>
        {/* Availability / meta strip */}
        <div className="mb-10 flex flex-col gap-3 font-mono text-[12.5px] uppercase tracking-[0.16em] text-green sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-[10px]">
            {profile.availableForWork && (
              <span className="inline-block h-2 w-2 rounded-full bg-green" />
            )}
            Available for work
          </span>
          <span className="text-muted">
            {profile.location} · Est. {profile.establishedYear}
          </span>
        </div>

        <h1 className="font-serif text-[clamp(56px,12vw,122px)] font-normal leading-[0.9] tracking-[-0.02em] text-ink">
          <span className="block">{profile.firstName}</span>
          <span className="block text-green">
            {profile.lastName}
            <span className="text-ink">.</span>
          </span>
        </h1>

        <div className="mt-12 grid items-end gap-12 md:grid-cols-[1fr_360px]">
          <p className="max-w-[560px] text-[23px] leading-[1.45] text-body">
            {profile.heroIntro}
          </p>
          <div className="md:text-right">
            <div className="font-serif text-[34px] italic leading-none text-green">
              welcome!
            </div>
            <div className="mt-[14px] font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
              Scroll to explore ↓
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
