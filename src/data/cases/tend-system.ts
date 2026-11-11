import type { CaseStudy } from './types';
import components from '../../assets/work/tend-system/components.png';
import petrol from '../../assets/work/tend-system/petrol-steps.png';
import lightDark from '../../assets/work/tend-system/light-dark.png';

// Mirrors Figma "tend system · Desktop 1440" / "· Mobile 390".
// Images come from the tend Figma file (06 Design System / 06.1 Components pages).
export const tendSystem: CaseStudy = {
  slug: 'tend-system',
  eyebrow: 'Design system · My own product',
  status: 'In progress',
  title: 'tend design system',
  lead: 'Colors, type and components for my own app, built for light and dark from day one.',
  meta: [
    { label: 'Role', value: 'Designer, solo' },
    { label: 'Type', value: 'Design system, in progress' },
    { label: 'Tools', value: 'Figma, Claude Code' },
    { label: 'Year', value: '2026' },
  ],
  live: { href: '/work/tend', label: 'Read the tend case study', internal: true },
  cover: {
    kind: 'image',
    shot: {
      src: components,
      alt: 'tend components in light and dark: who owes you, an appointment list, a confirmation card, an input error, the Mark paid button, the chat bar and the tab bar',
    },
    caption: 'The same components in light and dark. Every color comes from a token that has both values.',
  },
  chapters: [
    [
      {
        type: 'section',
        kicker: 'Overview',
        title: 'System first, screens second',
        body: [
          'tend is an app I’m building for solo workers to keep track of clients, appointments and payments. Before drawing real screens, I set up color, type, spacing and the core parts. Dozens of screens later, everything still matches.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '01 · Color',
        title: 'Brighter, until it broke',
        body: [
          'I picked petrol, then pushed it brighter one step at a time. The limit was readability: white text on a button needs 4.5:1. P4 and P5 looked great but failed, so I stopped at P2 (#08739A), the brightest step where petrol text on its own light tint still passes too.',
        ],
      },
      {
        type: 'strip',
        caption: 'Same hue, brighter from left to right. P4 and P5 fail white text, so P2 won.',
        image: {
          src: petrol,
          alt: 'Six petrol swatches from Original to P5, each with a Mark paid button. Original to P3 pass white text (7.6, 6.13, 5.34, 4.91); P4 and P5 are too light (4.33, 3.72).',
        },
      },
    ],
    [
      {
        type: 'section',
        kicker: '02 · Light and dark',
        title: 'Same tokens, second mode',
        body: [
          'Every color in tend has a light and a dark value, so switching modes never breaks a screen. I checked every key pair in both. One failed: the green Paid text in light mode was 4.3:1, so it moved to a darker green.',
        ],
      },
      {
        type: 'contrast',
        caption: 'Contrast for the key pairs in both modes. Every one needs 4.5:1.',
        image: { src: lightDark, alt: 'The tend Today screen in light and dark mode, side by side' },
        rows: [
          ['Main text', '17.7', '17.5'],
          ['White on petrol button', '5.3', '5.3'],
          ['Petrol text', '5.3', '9.2'],
          ['Paid', '5.8', '8.3'],
          ['Owes', '5.5', '8.5'],
          ['Overdue', '5.1', '6.9'],
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '03 · Components',
        title: 'Parts for a busy day',
        body: [
          'Buttons, status pills, client and appointment rows, the chat bar and the tab bar. Each one is built from tokens only, so it works in both modes without a second version. The button alone has 24 versions across style, size and state.',
        ],
      },
      {
        type: 'stats',
        caption: 'Part of the component set, all bound to the same tokens.',
        stats: [
          { value: '35', label: 'color tokens' },
          { value: '2', label: 'modes, light and dark' },
          { value: '24', label: 'button versions' },
        ],
        parts: ['Button', 'Status Pill', 'Avatar', 'Client Row', 'Appointment Row', 'Text Input', 'Chat Bar', 'Confirmation Card', 'Tab Bar', 'Toast', 'Chip', 'Segmented Control', 'Calendar Event', 'Transaction Row', 'List Row', 'Card'],
      },
    ],
    [
      {
        type: 'section',
        kicker: '04 · Figma to code',
        title: 'Same names in the prototype',
        body: [
          'The coded prototype uses the same tokens as CSS variables with the same names. color/bg/brand in Figma is --color-bg-brand in code. Dark mode is just a second set of values for those same names, so no screen needs its own dark version.',
        ],
      },
      {
        type: 'name-map',
        caption: 'A few of the matches. The prototype follows the phone’s light or dark setting, or your choice in Settings.',
        tables: [
          {
            title: 'Tokens',
            rows: [
              ['color/bg/brand', 'var(--color-bg-brand)'],
              ['color/text/paid', 'var(--color-text-paid)'],
              ['color/bg/elevated', 'var(--color-bg-elevated)'],
              ['color/border/focus', 'var(--color-border-focus)'],
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
          'Next up is testing with real people. Whatever I learn will change the screens, and the system is set up so those changes stay small: fix a token or a component once, and every screen follows.',
        ],
      },
    ],
  ],
};
