import type { CaseStudy } from './types';

// Mirrors Figma "Portfolio system · Desktop 1440" / "· Mobile 390".
export const portfolioSystem: CaseStudy = {
  slug: 'portfolio-system',
  eyebrow: 'Design system · My own work',
  title: 'Portfolio design system',
  lead: 'The system behind this site. One set of tokens and components, named the same in Figma and in the code.',
  meta: [
    { label: 'Role', value: 'Designer, solo' },
    { label: 'Type', value: 'Design system' },
    { label: 'Tools', value: 'Figma, Astro, Claude Code' },
    { label: 'Year', value: '2026' },
  ],
  cover: { kind: 'parts', caption: 'Some of the parts: tabs, buttons, tags, links and a project card. Every color here is a token.' },
  chapters: [
    [
      {
        type: 'section',
        kicker: 'Overview',
        title: 'One place, not five',
        body: [
          'This site shows very different work: apps, websites and videos. I wanted it to feel like one place, not five. So I built a small system first. Tokens for color, space and type, plus a set of components, all set up the same way in Figma and in the code.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '01 · Structure',
        title: 'Two layers of color',
        body: [
          'Primitives are the raw values, like neutral/900. Roles are what the rest of the site uses, like color/text/primary. Components only ever use roles, so changing a color is one edit, not a hunt through every page.',
        ],
      },
      {
        type: 'token-layers',
        caption: 'Each role points at a primitive. Components only know the role.',
        rows: [
          { primitive: 'neutral/900', value: '#111110', role: 'color/text/primary', use: 'Headings and body text' },
          { primitive: 'neutral/600', value: '#52524e', role: 'color/text/secondary', use: 'Descriptions' },
          { primitive: 'neutral/25', value: '#fafaf9', role: 'color/bg/page', use: 'Page background' },
          { primitive: 'orange/500', value: '#de6e21', role: 'color/accent/brand', use: 'Card arrows, the playing outline' },
          { primitive: 'orange/700', value: '#9a4511', role: 'color/accent/text', use: 'Active tab text, section numbers' },
          { primitive: 'orange/50', value: '#fbeadf', role: 'color/accent/subtle', use: 'Active tab background, this panel' },
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '02 · Decisions',
        title: 'Every token has a reason',
        body: [
          'I kept a short reason next to every choice, and most of them come down to contrast. If a color can’t pass AA where it’s used, it doesn’t go there. Even when it’s the logo color.',
        ],
      },
      { type: 'decisions', caption: 'Contrast ratios measured on the real token values. AA needs 4.5:1 for normal text.' },
    ],
    [
      {
        type: 'section',
        kicker: '03 · Components',
        title: 'Built once, used everywhere',
        body: [
          'Each component has its states and sizes built in, so a page is just parts snapped together. The home cards, the case study sections and the video grid all come from the same set. Try it: the controls below switch the real Button.',
        ],
      },
      { type: 'playground', caption: 'This is the same Button used across the site, not a picture of it.' },
    ],
    [
      {
        type: 'section',
        kicker: '04 · Figma to code',
        title: 'Same names on both sides',
        body: [
          'Every variable in Figma has a CSS variable with the same name, and every component has a matching file. When I build a page with Claude Code there’s nothing to translate, so the design file and the live site stay in sync.',
        ],
      },
      {
        type: 'name-map',
        caption: 'A few of the matches. The full list lives in tokens.css, with a note to keep it in sync with Figma.',
        tables: [
          {
            title: 'Tokens',
            rows: [
              ['color/bg/page', 'var(--color-bg-page)'],
              ['color/text/primary', 'var(--color-text-primary)'],
              ['color/accent/brand', 'var(--color-accent-brand)'],
              ['space/24', 'var(--space-24)'],
              ['radius/lg', 'var(--radius-lg)'],
            ],
          },
          {
            title: 'Components',
            rows: [
              ['Button', 'Button.astro'],
              ['Project Card', 'ProjectCard.astro'],
              ['Pill Nav', 'PillNav.astro'],
              ['Tab Bar', 'TabBar.astro'],
              ['Case/Section', 'CaseSection.astro'],
            ],
          },
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '05 · Where it stands',
        title: 'What’s next',
        body: [
          'The site has a Motion tab now, so motion is next: shared durations and easing as tokens, the same way color works. After that, dark mode. The color layer is already split into primitives and roles, so it’s mostly a second set of values.',
        ],
      },
    ],
  ],
};
