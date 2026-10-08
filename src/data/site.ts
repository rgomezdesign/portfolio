import type { ImageMetadata } from 'astro';
import palazzo from '../assets/work/palazzo.jpg';
import nuvem from '../assets/work/nuvem/home-desktop.png';
import etlHome from '../assets/work/eltoroloco/after-home-desktop.jpg';
import nutuGoals from '../assets/work/nutu/goals-detail-after.png';
import nutuUnlocked from '../assets/work/nutu/fy-unlocked.png';
import nutuResults from '../assets/work/nutu/fy-results.png';

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

export type Project = {
  slug: string;
  title: string;
  summary: string;
  meta: string[];
  tint: string; // a --color-project-* token
  media: { kind: 'browser'; image: ImageMetadata; alt: string } | { kind: 'phones'; screens: ImageMetadata[]; alt: string };
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
    role: 'UI/UX Designer, freelance',
    description:
      'Redesigned the salon’s website so services are easier to find and the brand feels true to the salon, with a responsive layout that works across every device.',
  },
  {
    company: 'Carrera Effect',
    years: '2019 — 2020',
    role: 'Product & Brand Designer, freelance',
    description:
      'Redesigned the client’s website for a better experience and a more consistent brand, then created branding, promotional pieces, and merchandise for digital and print.',
  },
];

export const nav = [
  { id: 'work', label: 'Work', icon: 'work' },
  { id: 'about', label: 'About', icon: 'about' }, // covers About + Experience

  { id: 'contact', label: 'Contact', icon: 'contact' },
] as const;
