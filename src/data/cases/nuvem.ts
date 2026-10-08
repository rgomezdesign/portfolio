import type { CaseStudy } from './types';
import homeDesktop from '../../assets/work/nuvem/home-desktop.png';
import homeMobile from '../../assets/work/nuvem/home-mobile.png';
import productDesktop from '../../assets/work/nuvem/product-desktop.png';
import productMobile from '../../assets/work/nuvem/product-mobile.png';
import menuMobile from '../../assets/work/nuvem/menu-mobile.png';
import materialsMobile from '../../assets/work/nuvem/materials-mobile.png';
import moodboard from '../../assets/work/nuvem/moodboard.jpg';
import roomTest from '../../assets/work/nuvem/room-test.jpg';
import studyOak from '../../assets/work/nuvem/study-oak.jpg';
import studyBoucle from '../../assets/work/nuvem/study-boucle.jpg';
import studySlate from '../../assets/work/nuvem/study-slate.jpg';
import studySage from '../../assets/work/nuvem/study-sage.jpg';
import studyClay from '../../assets/work/nuvem/study-clay.jpg';
import compareWireframe from '../../assets/work/nuvem/compare-wireframe.jpg';
import compareFinal from '../../assets/work/nuvem/compare-final.jpg';

const LIVE = 'https://rgomezdesign.github.io/nuvem/';

export const nuvem: CaseStudy = {
  slug: 'nuvem',
  eyebrow: 'Brand, 3D & web · Concept',
  title: 'Nuvem',
  lead: 'A concept furniture brand built around one feeling, calm, carried from the chairs’ materials all the way to how the website moves.',
  meta: [
    { label: 'Role', value: 'Designer, solo' },
    { label: 'Scope', value: 'Brand, 3D styling, website' },
    { label: 'Tools', value: 'Adobe Dimension, Figma, Claude Code' },
    { label: 'Year', value: '2025 — 2026' },
  ],
  live: { href: LIVE, label: 'Visit the live site' },
  cover: {
    kind: 'browser',
    shot: { src: homeDesktop, alt: 'Nuvem homepage: “The Nuvem Collection” over a carousel of four chairs' },
    url: 'rgomezdesign.github.io/nuvem',
    phone: { src: homeMobile, alt: 'Nuvem homepage on a phone' },
  },
  chapters: [
    [
      {
        type: 'section',
        kicker: 'Overview',
        title: 'The idea',
        body: [
          'Most furniture brands lead with either function or style. Nuvem asks a softer question: what would a chair feel like if it were designed around calm?',
          'Nuvem means cloud in Portuguese. I used that idea to shape everything: four chairs with rounded forms and natural tones, a brand built on warm neutrals and diffused light, and a website that feels as unhurried as the furniture.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '01 · Mood',
        title: 'Start with a feeling',
        body: [
          'Before any pixels, I gathered rooms, light and textures that felt calm: pale oak, soft bouclé, rounded edges and a lot of breathing room. That board became the test for every decision after it.',
        ],
      },
      {
        type: 'gallery',
        images: [{ src: moodboard, alt: 'Moodboard: pale oak furniture, soft fabrics, rounded forms and diffused light' }],
        caption: 'The moodboard. Warm neutrals, soft light, nothing loud.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '02 · 3D',
        title: 'Restyling, not modeling',
        body: [
          'I didn’t model these chairs from scratch. I started from pre-made 3D models and made them Nuvem’s in Adobe Dimension: new fabrics and oak finishes, softer lighting and a consistent camera.',
          'Each material was tested on a simple figure first, so I could judge the texture and color before it touched a chair.',
        ],
      },
      {
        type: 'gallery',
        layout: 'row',
        images: [
          { src: studyOak, alt: 'Natural oak material test' },
          { src: studyBoucle, alt: 'Cloud bouclé material test' },
          { src: studySlate, alt: 'Slate wool material test' },
          { src: studySage, alt: 'Sage felt material test' },
          { src: studyClay, alt: 'Clay weave material test' },
        ],
        caption: 'Each material, cropped from its test render in Adobe Dimension: oak, cloud bouclé, slate wool, sage felt and clay weave.',
      },
      {
        type: 'section',
        title: 'Testing it in a room',
        body: [
          'I dropped early versions into a room scene to check scale and light. This one still has Arc’s first, darker fabric. Seeing it in a real space is what pushed the whole collection toward lighter, warmer tones.',
        ],
      },
      {
        type: 'gallery',
        images: [{ src: roomTest, alt: 'Early render of two Arc chairs with dark fabric in a sunlit room' }],
        caption: 'An early lighting test. The darker fabric didn’t make the cut.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '03 · Website',
        title: 'Give each chair the stage',
        body: [
          'The site follows one rule: every chair gets a section to itself, resting on the cloud shape that gave the brand its name. I wireframed that structure first, then let type, color and motion do the rest.',
        ],
      },
      {
        type: 'compare',
        before: { src: compareWireframe, alt: 'Wireframe of the Aire section: cloud shape with an image placeholder beside placeholder text', label: 'Wireframe' },
        after: { src: compareFinal, alt: 'Live Aire section: the white chair on its cloud beside the name, tagline and description', label: 'Live' },
        caption: 'The original wireframe and the live Aire section, same structure.',
      },
      {
        type: 'section',
        title: 'A site that moves like the brand',
        body: [
          'Motion stays slow and quiet. Chairs float gently on their clouds, the clouds drift at a different speed than the chairs as you scroll, and when you open a chair it glides into place on its own page. All of it switches off for people who prefer reduced motion.',
        ],
      },
      {
        type: 'live',
        src: LIVE,
        url: 'rgomezdesign.github.io/nuvem',
        caption: 'The live site, running right here. Scroll, open a chair, or switch to phone.',
      },
      {
        type: 'screens',
        screens: [
          { src: productMobile, alt: 'Shell product page on a phone with material swatches' },
          { src: materialsMobile, alt: 'Materials page on a phone with fabric cards' },
          { src: menuMobile, alt: 'Full-screen phone menu: Collection, Materials, About, Contact' },
        ],
        caption: 'On a phone: a product page, the materials, and the full-screen menu.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '04 · Build',
        title: 'From Figma to a live site',
        body: [
          'I designed every screen in Figma first, with tokens and components for color, type and spacing. Then I built it with AI tools like Claude Code. One product template powers all four chairs, and the site ships to GitHub Pages on its own whenever I push a change.',
        ],
      },
      {
        type: 'browser',
        shot: { src: productDesktop, alt: 'Aire product page: the chair on its cloud beside materials, specs and an Enquire button' },
        url: 'rgomezdesign.github.io/nuvem/collection/aire',
        caption: 'The product template, shown here for Aire.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '05 · Reflection',
        title: 'What I learned',
        body: [
          'Nuvem was a lesson in restraint. Calm isn’t the absence of design; it’s a lot of small decisions pointing the same way, from a fabric’s texture to how long a transition lasts.',
          'Taking it from a styling study to a real, live site showed me how much of a brand lives in details you only notice when they’re missing.',
        ],
      },
    ],
  ],
};
