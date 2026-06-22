# Leonardo Guerini — Portfolio

Personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript**
and **Tailwind CSS v4**. Design direction: _Editorial Bold_.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

## Architecture

The project separates **content**, **presentation** and **configuration** so the
site scales by editing data rather than markup.

```
src/
├── app/                 # Next.js App Router (routing, layout, global styles)
│   ├── layout.tsx       # fonts (next/font), metadata, <html> shell
│   ├── page.tsx         # thin composition of sections
│   └── globals.css      # Tailwind v4 + design tokens (@theme)
│
├── content/             # Content layer — the single source of truth (data only)
│   ├── types.ts         # domain models (Project, Skill, NavLink, …)
│   ├── profile.ts       # identity + hero/about copy
│   ├── navigation.ts    # nav links
│   ├── timeline.ts      # about milestones
│   ├── skills.ts        # skills grid
│   ├── projects.ts      # selected work (real GitHub links)
│   └── socials.ts       # contact channels
│
├── components/
│   ├── layout/          # structural chrome (Header)
│   ├── sections/        # page sections (Hero, Marquee, About, Skills, Projects, Contact)
│   └── ui/              # reusable presentational atoms (Container, Eyebrow,
│                        #   SectionHeading, SkillCard, ProjectRow, Tag, StatusBadge,
│                        #   SocialButton, Icon, …)
│
└── lib/                 # framework-agnostic helpers (cn)
```

### Principles applied

- **SRP** — each component does one thing; `page.tsx` only composes sections.
- **DRY** — repeated UI (eyebrows, headings, chips, cards) lives in `ui/` and is
  reused; shared spacing lives in `<Container>`.
- **Data-driven (OCP)** — adding a project, skill or timeline entry means appending
  to a typed array in `content/`; no component changes required.
- **Decoupling** — content is plain typed data with no React/markup dependency;
  icons are referenced by string key and resolved through a registry (`ui/Icon.tsx`).
- **Design tokens** — colors, fonts and motion are defined once in `globals.css`
  (`@theme`) and consumed as Tailwind utilities (`text-green`, `font-serif`, …).
- **Accessibility & performance** — semantic landmarks, `prefers-reduced-motion`
  support, and fully static prerendered output.

### Adding a project

Append an entry to `src/content/projects.ts`:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "What it does.",
  stack: ["TypeScript", "Next.js"],
  caption: "TS · NEXT",
  status: "ready",          // or "in-progress"
  href: "https://github.com/…",
  icon: "book",             // a key registered in ui/Icon.tsx
}
```

It renders automatically in the projects list.