import type { ImageMetadata } from 'astro';
import palazzo from '../assets/work/palazzo.jpg';
import nuvem from '../assets/work/nuvem/home-desktop.png';
import etlHome from '../assets/work/eltoroloco/after-home-desktop.jpg';
import nutuGoals from '../assets/work/nutu/goals-detail-after.png';
import nutuUnlocked from '../assets/work/nutu/fy-unlocked.png';
import nutuResults from '../assets/work/nutu/fy-results.png';
import tendToday from '../assets/work/tend/today.png';
import tendChat from '../assets/work/tend/chat-confirm.png';
import tendClient from '../assets/work/tend/client.png';
import feature01 from '../assets/motion/feature-01.png';
import feature02 from '../assets/motion/feature-02.png';
import feature03 from '../assets/motion/feature-03.png';
import feature04 from '../assets/motion/feature-04.png';
import feature05 from '../assets/motion/feature-05.png';
import feature06 from '../assets/motion/feature-06.png';
import feature07 from '../assets/motion/feature-07.png';

export const site = {
  name: 'Roman Gomez',
  title: 'Roman Gomez — Product Designer',
  description:
    'Product designer focused on UI/UX and motion for web and mobile. Designing thoughtful digital experiences, from first sketch to something real.',
  eyebrow: 'Product Designer',
  email: 'gomez7695@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gomezroman',
  resume: '/roman-gomez-cv.pdf',
};

export const hero = {
  title: 'Designing thoughtful digital experiences.',
  lead: 'Through UI/UX, motion, and modern workflows that take ideas from first sketch to something real.',
};

// Home "Selected work" layout. 'featured' = first project full width, the rest in two columns.
// 'grid' = the original even two-column grid (kept so we can switch back).
export const homeLayout: 'featured' | 'grid' = 'featured';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  meta: string[];
  tint: string; // a --color-project-* token
  media:
    | { kind: 'browser'; image: ImageMetadata; alt: string }
    | { kind: 'phones'; screens: ImageMetadata[]; alt: string }
    // Systems tab: a live specimen (type, colors, real components) instead of a screenshot
    | { kind: 'specimen'; system: 'portfolio' | 'tend'; alt: string };
};

export const projects: Project[] = [
  {
    slug: 'nutu',
    title: 'nutu',
    summary: 'Helping a nutrition app grow into a metabolic health platform',
    meta: ['Product design', 'Willow Laboratories', '2021 — now'],
    tint: 'var(--color-project-nutu)',
    media: {
      kind: 'phones',
      screens: [nutuGoals, nutuUnlocked, nutuResults],
      alt: 'Three nutu screens: a goal in progress, Future You unlocked, and AI-generated results',
    },
  },
  {
    slug: 'tend',
    title: 'tend',
    summary: 'A simple app for solo workers to keep clients, appointments and payments in one place',
    meta: ['Product design', 'My own product', 'In progress'],
    tint: 'var(--color-project-tend)',
    media: {
      kind: 'phones',
      screens: [tendToday, tendChat, tendClient],
      alt: 'Three tend screens: Today with who owes you, the chat box confirming a payment, and a client page',
    },
  },
  {
    slug: 'palazzo-salon',
    title: 'Palazzo Salon',
    summary: 'A clearer, easier website for a salon in Redlands',
    meta: ['Web design', 'Client', '2023'],
    tint: 'var(--color-project-palazzo)',
    media: { kind: 'browser', image: palazzo, alt: 'Palazzo Salon homepage with a green header and an edge-to-edge photo gallery of the salon' },
  },
  {
    slug: 'nuvem',
    title: 'Nuvem',
    summary: 'A calm, sculptural site for a furniture collection',
    meta: ['Brand, 3D & web', 'Concept', '2025 — 2026'],
    tint: 'var(--color-project-nuvem)',
    media: { kind: 'browser', image: nuvem, alt: 'The Nuvem homepage: “The Nuvem Collection” over a carousel of four chairs' },
  },
  {
    slug: 'el-toro-loco',
    title: 'El Toro Loco Grill',
    summary: 'A taqueria’s website and pickup ordering, redesigned from the order up',
    meta: ['Web & ordering', 'Concept', '2025 — 2026'],
    tint: 'var(--color-project-eltoroloco)',
    media: { kind: 'browser', image: etlHome, alt: 'El Toro Loco concept homepage: “Bold flavor, made fresh daily.” over street tacos' },
  },
];

// Home "Selected work" tabs. Mirrors Figma "Work Tabs" (Active = Product / Systems / Motion).
export const workTabs = [
  { id: 'product', label: 'Product', description: 'Apps and websites, from first sketch to launch.' },
  { id: 'systems', label: 'Systems', description: 'The systems behind my work: tokens, components and the reasons behind them.' },
  { id: 'motion', label: 'Motion', description: 'Feature videos and brand animation, from script to final cut.' },
] as const;
export type WorkTabId = (typeof workTabs)[number]['id'];

// Systems tab. Each one opens its own case study at /work/<slug>.
export const systems: Project[] = [
  {
    slug: 'portfolio-system',
    title: 'Portfolio design system',
    summary: 'The system behind this site, from tokens to components, matched 1:1 in code.',
    meta: ['Design system', 'Figma + live site', '2026'],
    tint: 'var(--color-accent-subtle)',
    media: { kind: 'specimen', system: 'portfolio', alt: 'Specimen of the portfolio system: Inter, five colors, two buttons and a tag' },
  },
  {
    slug: 'tend-system',
    title: 'tend design system',
    summary: 'Colors, type and components for my own app, built for light and dark.',
    meta: ['Design system', 'My own product', 'In progress'],
    tint: 'var(--color-project-tend)',
    media: { kind: 'specimen', system: 'tend', alt: 'Specimen of the tend system: Plus Jakarta Sans, petrol colors, a Mark paid button and a status pill' },
  },
];

// Motion tab: one featured series (YouTube) + smaller self-hosted loops.
export type Video = { id: string; number: string; title: string; duration: string; poster: ImageMetadata };
export const motionSeries = {
  title: 'nutu feature guides',
  summary:
    'Seven short videos that show new users how the nutu app works. I wrote the scripts, storyboarded each one and animated them in Figma with the new nutu brand.',
  meta: ['Motion design', 'Willow Laboratories', '2026'],
  tint: 'var(--color-project-nutu-motion)',
  playlist: 'https://www.youtube.com/playlist?list=PLZS3_Qm7NqLw',
  videos: [
    { id: 'Z_2vYMtMCZI', number: '01', title: 'Meet nutu', duration: '1:37', poster: feature01 },
    { id: 'bbFldqBM1pk', number: '02', title: 'How nutu score works', duration: '1:08', poster: feature02 },
    { id: 'ZNY4Qs1ZoDQ', number: '03', title: 'nutu score in food', duration: '0:53', poster: feature03 },
    { id: 'Fpo0VdP6jv8', number: '04', title: 'Logging food', duration: '1:25', poster: feature04 },
    { id: 'm8wG0ojeDpk', number: '05', title: 'Logging exercise', duration: '1:29', poster: feature05 },
    { id: 'hVdXUXchGjE', number: '06', title: 'Reports', duration: '0:49', poster: feature06 },
    { id: 'AV3kG5NQ9dA', number: '07', title: 'Lessons and weight', duration: '1:02', poster: feature07 },
  ] satisfies Video[],
};

// Mirrors Figma "Motion Card". Files live in public/motion (small MP4 loops + JPG posters).
export type MotionPiece = {
  title: string;
  summary: string;
  meta: string[];
  duration: string;
  versions: { label: string; src: string; poster: string }[];
};
export const motionPieces: MotionPiece[] = [
  {
    title: 'nutu logo reveal',
    summary: 'The knob rolls in, draws the track and nudges the name into place. Made for the new nutu brand.',
    meta: ['Logo animation', 'nutu', '2026'],
    duration: '0:04 loop',
    versions: [
      { label: 'Dark', src: '/motion/logo-reveal-dark.mp4', poster: '/motion/logo-reveal-dark.jpg' },
      { label: 'Light', src: '/motion/logo-reveal-light.mp4', poster: '/motion/logo-reveal-light.jpg' },
    ],
  },
  {
    title: 'nutu end card',
    summary: 'The closing shot for every feature video: logo, tagline and a download button.',
    meta: ['Logo animation', 'Video end card', '2026'],
    duration: '0:08 loop',
    versions: [{ label: 'Light', src: '/motion/end-card.mp4', poster: '/motion/end-card.jpg' }],
  },
];

export const about = [
  'I’m a product designer who loves the details that make an interface feel intuitive, polished, and grounded in what people actually need.',
  'I’ve designed for web and mobile, working closely with developers and cross-functional teams. Some of my favorite work happens in that space between design and engineering, where good ideas get sharper.',
  'Lately I’ve been using AI tools like Claude Code to turn my designs into working prototypes and sites, so I can test ideas for real instead of just describing them. That’s the kind of designer I want to keep growing into, someone who can take an idea from a sketch to something people can actually use.',
  'Outside of that, I love exploring 3D and animation, and finding ways to bring them into the things I make.',
];

export const experience = [
  {
    company: 'Willow Laboratories',
    years: '2021 — now',
    role: 'Product Designer',
    description:
      'Design web and mobile experiences for healthcare products, including nutu, focused on interfaces that feel clear, intuitive, and polished. I work closely with developers and cross-functional teams on everything from wireframes and prototypes to high-fidelity UI, motion, design systems, and 3D visuals.',
  },
  {
    company: 'Palazzo Salon',
    years: '2023',
    role: 'Web Designer, freelance',
    description:
      'Redesigned the salon’s website so services are easier to find and the brand feels true to the salon, with a responsive layout that works across every device.',
  },
  {
    company: 'Carrera Effect',
    years: '2019 — 2020',
    role: 'Brand & Web Designer, freelance',
    description:
      'Redesigned the client’s website for a better experience and a more consistent brand, then created branding, promotional pieces, and merchandise for digital and print.',
  },
];

export const nav = [
  { id: 'work', label: 'Work', icon: 'work' },
  { id: 'about', label: 'About', icon: 'about' }, // covers About + Experience

  { id: 'contact', label: 'Contact', icon: 'contact' },
] as const;
