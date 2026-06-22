import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface ContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/**
 * Constrains content to the site's reading width and applies the shared
 * horizontal gutters. Single source of truth for page-level spacing.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-20", className)}>
      {children}
    </div>
  );
}
