"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/content/navigation";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

/**
 * Sticky site header with the wordmark, inline navigation on desktop, and a
 * toggleable menu on mobile. Client component because of the menu state.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.12] bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-[22px] sm:px-10 lg:px-20 lg:py-[30px]">
        <a
          href="#home"
          className="font-serif text-[30px] italic leading-none tracking-[-0.01em] text-ink"
        >
          {profile.brand}
        </a>

        {/* Desktop navigation */}
        <nav className="hidden gap-[38px] font-mono text-[13px] text-ink md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-transparent pb-[2px] transition-colors hover:border-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      <nav
        className={cn(
          "overflow-hidden border-t border-ink/[0.12] transition-[max-height] duration-300 md:hidden",
          open ? "max-h-60" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-[15px] text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
