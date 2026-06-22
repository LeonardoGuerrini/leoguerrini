interface TagProps {
  readonly children: string;
}

/** Small monospace chip used to list a project's stack. */
export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-[2px] bg-ink/[0.06] px-[11px] py-[5px] font-mono text-[12px] text-ink">
      {children}
    </span>
  );
}
