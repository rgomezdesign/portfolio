# Portfolio — Astro

- Stack: Astro 7 (static), plain CSS with design tokens, self-hosted Inter. No UI framework.
- Design source of truth: Figma file `2ZW96hMVfCbCqefZFIu8zF` (Portfolio). Tokens in `src/styles/tokens.css` use the same names as the Figma variables (`color/bg/page` → `--color-bg-page`).
- Components in `src/components/` mirror the Figma components 1:1 (Button, PillNav, TabBar, ProjectCard, ExperienceItem, …).
- Content lives in `src/data/site.ts`.
