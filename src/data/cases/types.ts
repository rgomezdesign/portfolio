import type { ImageMetadata } from 'astro';

export type Screen = { src: ImageMetadata; alt: string };

// Mirrors the Figma "Case Study" components: Case/Section, Case/Screen rows, Case/Callout.
export type Block =
  | { type: 'section'; kicker?: string; title: string; body: string[] }
  | { type: 'screens'; screens: Screen[]; caption: string }
  | { type: 'callout'; statement: string; support: string };

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  meta: { label: string; value: string }[];
  live?: { href: string; label: string };
  cover: Screen[];
  /** Each chapter is a group of blocks; chapters are spaced further apart than blocks. */
  chapters: Block[][];
};
