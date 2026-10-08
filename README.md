# rgomezdesign.com

Roman Gomez's portfolio. Astro 7, static output, plain CSS with design tokens, self-hosted Inter. About 130 KB on first load.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run preview  # serve dist/
```

## Design system

The Figma file **Portfolio** (`2ZW96hMVfCbCqefZFIu8zF`) is the source of truth.

| Figma | Code |
| --- | --- |
| Variables `Primitives`, `Color`, `Space`, `Layout` | `src/styles/tokens.css` (`color/bg/page` → `--color-bg-page`) |
| Layout modes Desktop / Mobile | `:root` values + `@media (max-width: 767px)` (tablet values in between) |
| Text styles (Display, Heading 2, …) | `.t-display`, `.t-h2`, … in `src/styles/global.css` |
| Button, Pill Nav, Tab Bar, Project Card (with Tags), Experience Item, Section Header, Eyebrow, Brand | `src/components/*.astro` |

Rule: no hard-coded colors or spacing in components; use the tokens.

## Content

All copy is in `src/data/site.ts`: hero, projects, about, experience, email, LinkedIn, resume path.

- **Resume:** `public/roman-gomez-cv.pdf` (opens in a new tab).
- **Project images:** `src/assets/work/`. Astro converts them to WebP at the right sizes.
- **nutu card:** uses placeholder phone art until real screens are cleared to share.

## Responsive behavior

- ≥1024px: 12-column grid, 2×2 work cards, About and Experience side by side, pill nav centered.
- 768–1023px: 40px margins, About and Experience stacked.
- <768px: one column, bottom tab bar (active tab shows icon + label, fixed 238px wide).
- Nav is Work · About · Contact everywhere. "About" covers the About + Experience row.

## Motion

Hero entrance stagger, scroll reveals (only for content below the fold), sliding nav highlight, tab label unfold, card hover lift, button press. Everything is disabled under `prefers-reduced-motion`, and all content stays visible without JavaScript.

## Case studies

`/work/[slug]` is a placeholder until each case study is designed in Figma and built.

## Case studies

Every project uses one template (Figma page "Case Study" components + `nutu · Desktop 1440` / `nutu · Mobile 390` frames):
header (back link, eyebrow, title, lead, meta) → tinted cover → chapters of `CaseSection` (split ≥1024, stacked below), `CaseScreens` rows and `CaseCallout` → next project.
Content lives in `src/data/cases/<slug>.ts`; projects without a file render a short placeholder.
