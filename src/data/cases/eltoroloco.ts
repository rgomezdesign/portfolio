import type { CaseStudy } from './types';
import beforeMobile from '../../assets/work/eltoroloco/before-mobile.png';
import beforeMenu from '../../assets/work/eltoroloco/before-menu-mobile.png';
import compareV1 from '../../assets/work/eltoroloco/compare-v1.jpg';
import compareNew from '../../assets/work/eltoroloco/compare-new.jpg';
import lofiMenu from '../../assets/work/eltoroloco/lofi-1-menu.png';
import lofiItem from '../../assets/work/eltoroloco/lofi-2-item.png';
import lofiCart from '../../assets/work/eltoroloco/lofi-3-cart.png';
import lofiCheckout from '../../assets/work/eltoroloco/lofi-4-checkout.png';
import lofiConfirm from '../../assets/work/eltoroloco/lofi-5-confirm.png';
import homeDesktop from '../../assets/work/eltoroloco/after-home-desktop.jpg';
import menuDesktop from '../../assets/work/eltoroloco/after-menu-desktop.jpg';
import homeMobile from '../../assets/work/eltoroloco/after-home-mobile.png';
import menuMobile from '../../assets/work/eltoroloco/after-menu-mobile.png';
import sheetMobile from '../../assets/work/eltoroloco/after-sheet-mobile.png';
import cartMobile from '../../assets/work/eltoroloco/after-cart-mobile.png';
import checkoutMobile from '../../assets/work/eltoroloco/after-checkout-mobile.png';
import confirmMobile from '../../assets/work/eltoroloco/after-confirm-mobile.png';

const LIVE = 'https://rgomezdesign.github.io/eltoroloco/';

export const eltoroloco: CaseStudy = {
  slug: 'el-toro-loco',
  eyebrow: 'Web & ordering · Concept redesign',
  title: 'El Toro Loco Grill',
  lead: 'A local taqueria with great food and a website that kind of hid it. I redesigned the site and the whole pickup order, from the first tap to “order received.”',
  meta: [
    { label: 'Role', value: 'Designer, solo' },
    { label: 'Type', value: 'Concept, not a client' },
    { label: 'Tools', value: 'Figma, Claude Code' },
    { label: 'Year', value: '2025 — 2026' },
  ],
  live: { href: LIVE, label: 'Try the live concept' },
  cover: {
    kind: 'browser',
    shot: { src: homeDesktop, alt: 'El Toro Loco concept homepage: “Bold flavor, made fresh daily.” over a photo of street tacos' },
    url: 'rgomezdesign.github.io/eltoroloco',
    phone: { src: homeMobile, alt: 'The concept homepage on a phone' },
  },
  chapters: [
    [
      {
        type: 'section',
        kicker: 'Overview',
        title: 'The problem',
        body: [
          'El Toro Loco is a Mexican grill in Perris, California. The food looks amazing. The website? Giant scrolling type, an Instagram feed, and the menu posted as a photo of the printed board. On a phone you’re pinching and zooming just to find a price.',
          'And when you’re ready to order, you get sent off to a separate ordering site that looks nothing like the restaurant. I wanted to see what it would feel like if browsing and ordering were one smooth thing.',
        ],
      },
      {
        type: 'screens',
        screens: [
          { src: beforeMobile, alt: 'The restaurant’s current site on a phone: oversized scrolling title and a link to order elsewhere' },
          { src: beforeMenu, alt: 'The current menu page: a photo of the printed menu board, too small to read on a phone' },
        ],
        caption: 'The real site today. The menu is a photo of the printed board, and ordering happens on a different site.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '01 · Round one',
        title: 'Pretty, but not done',
        body: [
          'I first took a swing at this in 2025. Dark background, big food photos, a clear “Order Online” button. It looked a lot better than the real thing.',
          'Looking back, though, I’d designed a homepage, not a way to order. The cart was one screen, the menu was still lorem ipsum, and nothing answered the questions you actually have when you’re hungry: what comes on it, can I add guac, when will it be ready?',
        ],
      },
      {
        type: 'compare',
        before: { src: compareV1, alt: '2025 concept: “Welcome! We’re glad you’re here” over a taco photo with a white Order Online button', label: '2025' },
        after: { src: compareNew, alt: '2026 redesign: “Bold flavor, made fresh daily.” with marigold Order online and View menu buttons', label: '2026' },
        caption: 'Same restaurant, same photo. Drag to see how the first screen changed.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '02 · Flow',
        title: 'Start with the order, not the homepage',
        body: [
          'So for round two I flipped it. Before any colors, I sketched the whole pickup order on a phone in five screens: menu, item, cart, checkout, done.',
          'A few rules came out of that. Options open in a sheet so you never lose your place on the menu. Required choices come first. Checkout is pickup only, with three decisions: when, who, and how to pay. No account, no card form.',
        ],
      },
      {
        type: 'screens',
        screens: [
          { src: lofiMenu, alt: 'Low-fi menu: category tabs, list of tacos with add buttons, sticky cart bar' },
          { src: lofiItem, alt: 'Low-fi item sheet: photo, required tortilla choice, optional add-ons, quantity and add to cart' },
          { src: lofiCart, alt: 'Low-fi cart: items with quantity steppers, an upsell row and totals' },
          { src: lofiCheckout, alt: 'Low-fi checkout: pickup time chips, name and phone, pay at pickup' },
          { src: lofiConfirm, alt: 'Low-fi confirmation: order received with pickup time and a demo note' },
        ],
        caption: 'The whole order in five low-fi screens. Menu, item, cart, checkout, done.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '03 · Look & feel',
        title: 'Dark, warm and a little hungry',
        body: [
          'I kept the dark background from round one because it makes the food glow. Then I added one warm color, marigold, and gave it a job: anything you can tap or anything that costs money. Prices, buttons, the cart. Your eye learns where to go fast.',
          'Headings got a chunkier font with some personality, and the dishes got cut out of their backgrounds so they pop off the cards.',
        ],
      },
      {
        type: 'browser',
        shot: { src: menuDesktop, alt: 'Concept menu on desktop: appetizer cards with cut-out food photos and a live order summary on the right' },
        url: 'rgomezdesign.github.io/eltoroloco/menu',
        caption: 'The menu on desktop. Your order builds up on the right while you browse.',
      },
      {
        type: 'screens',
        screens: [
          { src: menuMobile, alt: 'Mobile menu with street tacos, popular and spicy badges, and a sticky cart bar' },
          { src: sheetMobile, alt: 'Mobile item sheet for the Al Pastor Taco with tortilla and add-on choices' },
          { src: cartMobile, alt: 'Mobile cart with two items, an upsell row and the total' },
        ],
        caption: 'On a phone: the menu, an item sheet, and the cart.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '04 · Try it',
        title: 'Go ahead, order something',
        body: [
          'This one’s live. Add a few tacos, customize them, and check out. It’s a demo, so nothing actually gets ordered, and no card details are ever asked for.',
        ],
      },
      {
        type: 'live',
        src: LIVE,
        url: 'rgomezdesign.github.io/eltoroloco',
        caption: 'The live concept, running right here. Switch to phone for the full mobile flow.',
        hint: 'Runs right here. Add some tacos and check out.',
        title: 'El Toro Loco concept site',
      },
    ],
    [
      {
        type: 'section',
        kicker: '05 · Details',
        title: 'The small stuff that makes it feel easy',
        body: [
          'The category tabs follow you as you scroll. The cart pops a little when you add something, so you know it worked. Pickup times only show when the restaurant’s actually open. And if you forget your phone number, checkout tells you right there, not after you hit the button.',
        ],
      },
      {
        type: 'screens',
        screens: [
          { src: checkoutMobile, alt: 'Mobile checkout with pickup time chips, name and phone fields, and pay at pickup' },
          { src: confirmMobile, alt: 'Order received screen with pickup time, order summary and a demo note' },
        ],
        caption: 'Checkout and the confirmation. Three decisions, then you’re done.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '06 · Build',
        title: 'From Figma to a live site',
        body: [
          'Everything started in Figma: colors and type as variables, and 12 components like the menu card, the option chips and the cart line. Then I built it with AI tools like Claude Code, the same way I built this portfolio.',
          'Since it’s a concept, I kept it honest. Every page says it’s not affiliated with the restaurant, the menu and prices are samples, and it’s hidden from search engines so it never competes with the real thing.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '07 · Reflection',
        title: 'What I learned',
        body: [
          'Round one was me making it look good. Round two was me making it work. For a restaurant, ordering isn’t a feature on the website. It basically is the website.',
          'Coming back to my own old work was humbling in a good way. It showed me how much I’ve grown, and it’s a reminder to always design the flow before the screens.',
        ],
      },
    ],
  ],
};
