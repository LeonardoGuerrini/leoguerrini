import type { SocialLink } from "@/content/types";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

interface SocialButtonProps {
  readonly link: SocialLink;
}

/** Contact button; `primary` links render filled, others as outlined. */
export function SocialButton({ link }: SocialButtonProps) {
  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center gap-3 rounded-[2px] px-[26px] py-4 font-mono text-[14px] font-bold transition-colors duration-200",
        link.primary
          ? "bg-paper text-ink hover:bg-green-bright"
          : "border border-paper/30 bg-transparent text-paper hover:border-green-bright hover:text-green-bright",
      )}
    >
      <Icon name={link.icon} size={20} />
      {link.label}
    </a>
  );
}
