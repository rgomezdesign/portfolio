import type { CaseStudy } from './types';
import today from '../../assets/work/tend/today.png';
import client from '../../assets/work/tend/client.png';
import calendar from '../../assets/work/tend/calendar.png';
import finances from '../../assets/work/tend/finances.png';
import markpaid from '../../assets/work/tend/markpaid.png';
import install from '../../assets/work/tend/install.png';
import todayEs from '../../assets/work/tend/today-es.png';
import wfClient from '../../assets/work/tend/wf-client.png';
import wfTyping from '../../assets/work/tend/wf-typing.png';
import wfConfirm from '../../assets/work/tend/wf-confirm.png';
import wfSaved from '../../assets/work/tend/wf-saved.png';
import chatConfirm from '../../assets/work/tend/chat-confirm.png';
import todayDark from '../../assets/work/tend/today-dark.png';
import clientDark from '../../assets/work/tend/client-dark.png';
import desktopClient from '../../assets/work/tend/desktop-client.png';
import tabletClient from '../../assets/work/tend/tablet-client.png';
import directions from '../../assets/work/tend/directions-crop.png';
import brand from '../../assets/work/tend/brand-combo.png';

export const tend: CaseStudy = {
  slug: 'tend',
  eyebrow: 'Product design · My own product',
  status: 'In progress',
  title: 'tend',
  lead: 'A simple app for teachers, tutors and other solo workers to keep clients, appointments and payments in one place. My own product, taken from an idea to a working prototype.',
  meta: [
    { label: 'Role', value: 'Designer, solo' },
    { label: 'Type', value: 'My own product, in progress' },
    { label: 'Tools', value: 'Figma, Claude Code' },
    { label: 'Year', value: '2026' },
  ],
  cover: {
    kind: 'phones',
    screens: [
      { src: today, alt: 'tend’s Today screen: today’s schedule and who owes you, with the chat box and tabs at the bottom' },
      { src: chatConfirm, alt: 'The chat box after typing “Emma paid $60 cash”: a card shows what tend understood, with Edit and Save' },
      { src: client, alt: 'A client page: Emma Lopez owes $60, with Send reminder and Mark paid, then her schedule' },
    ],
  },
  chapters: [
    [
      {
        type: 'section',
        kicker: 'Overview',
        title: 'The problem',
        body: [
          'If you teach piano, tutor math or detail cars, you’re running a tiny business by yourself. Clients live in your phone, the schedule lives in a calendar (or your head), and who paid lives in Venmo, a notes app, or nowhere.',
          'The apps made for this are usually built for bigger businesses: lots of features and a monthly fee that keeps going up. I wanted something simpler. Who’s coming today, who owes me, and a little help at tax time.',
        ],
      },
      {
        type: 'screens',
        screens: [
          { src: calendar, alt: 'Calendar day view with a week strip and four appointments, one cancelled' },
          { src: markpaid, alt: 'Mark paid sheet: amount, date, which visit it’s for, and payment method chips' },
          { src: finances, alt: 'Finances: earned this month, expenses, mileage, to collect, and how much to set aside for taxes' },
        ],
        caption: 'Where it ended up: the calendar, marking a payment, and Finances.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '01 · Research',
        title: 'Listening before I had anyone to ask',
        body: [
          'I didn’t have a list of people to interview, so I started with what people were already saying online: forums and reviews from tutors, teachers and mobile workers. Two things kept coming up. The tools get pricier and more complicated every year, and getting paid is the hard part. Late payments, prepaid packages, last-minute cancellations.',
          'I turned that into a short survey in English and Spanish, plus five proto-personas. Those are my best guesses about who this is for, written down so I can check them. They’re not real research yet. That’s what testing is for.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '02 · Scope',
        title: 'Small on purpose',
        body: [
          'A few early calls shaped everything after. It’s a web app you add to your home screen, so no app stores. It’s free, kept running by donations, because nobody here needs another monthly fee. And it’s in English and Spanish from day one.',
          'It also doesn’t assume your job. It says “appointment,” not “lesson,” so it works for a tutor or a landscaper. The only job-specific words are the ones you type in.',
        ],
      },
      {
        type: 'screens',
        screens: [
          { src: install, alt: 'Add tend to your Home Screen: three numbered steps for Safari on iPhone' },
          { src: todayEs, alt: 'The Today screen in Spanish: Hoy, Agenda, Quién te debe' },
        ],
        caption: 'Add it to your home screen in a few taps, and the whole app works in Spanish.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '03 · Wireframes',
        title: 'Start gray, then argue with it',
        body: [
          'I sketched the main flows in grayscale first: a client page, getting paid through the chat box, and the desktop view. No color, just layout and words.',
          'My first client page had three big buttons: Message, Mark paid and Book. Looking at it, I couldn’t say what each one did. Mark paid for which visit? Book another one, when most people set up repeating appointments? The redesign leads with what you actually want to know: does this person owe me, and for when. Booking and messaging moved to where you’d look for them.',
        ],
      },
      {
        type: 'screens',
        screens: [
          { src: wfClient, alt: 'Wireframe of the client page with three equal buttons: Message, Mark paid, Book' },
          { src: client, alt: 'Final client page: what Emma owes and for which visit, with Send reminder and Mark paid' },
        ],
        caption: 'First wireframe vs. where the client page ended up.',
      },
      {
        type: 'screens',
        screens: [
          { src: wfTyping, alt: 'Wireframe: typing “Emma paid $60 cash” in the chat box' },
          { src: wfConfirm, alt: 'Wireframe: the confirmation card with Edit and Save' },
          { src: wfSaved, alt: 'Wireframe: payment saved, with an Undo toast' },
        ],
        caption: 'The chat flow in gray: type it, check it, saved.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '04 · The chat box',
        title: 'Just tell it',
        body: [
          'This is the part I’m most excited about. Instead of filling out forms, you type what happened, like “Emma paid $60 cash.” tend figures out who, how much and how, and shows you a card before anything is saved.',
          'If there are two Emmas, it asks. If you change your mind, there’s Undo. I left voice out of version one to keep costs down, but the card works the same either way, so it can come later.',
        ],
      },
      {
        type: 'chat-demo',
        statement: 'Nothing saves until you say so.',
        support: 'The card says back what tend understood, in plain words. One tap to save, one tap to fix.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '05 · Look & feel',
        title: 'Calm, not corporate',
        body: [
          'I tried three directions, then three colors. Green was out because it’s too close to money and to “paid.” Plain blue felt like every other app. I landed on petrol, a deep blue-teal, then pushed it a little brighter so it didn’t feel heavy. The font is Plus Jakarta Sans: friendly, but serious enough for money stuff.',
          'Every color pair passes WCAG AA contrast in light and dark mode. Two didn’t at first, so I fixed them. The logo is two shapes: you and your client.',
        ],
      },
      {
        type: 'gallery',
        layout: 'single',
        images: [{ src: directions, alt: 'Three color options on the same Today screen: Iris violet, Petrol blue-teal, and Plum purple' }],
        caption: 'Round two: same screen, three colors. Petrol won, then got a little brighter.',
      },
      {
        type: 'gallery',
        layout: 'single',
        images: [{ src: brand, alt: 'The tend logo on white and on black, and the app icon in white, petrol and dark versions' }],
        caption: 'The logo, plus the app icons in light, petrol and dark.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '06 · Phone & desktop',
        title: 'One app, two sizes',
        body: [
          'It’s a web app, so it has to feel right on a phone and on a laptop. On a phone, the chat box and the tabs share one floating bar at the bottom, so typing is always one tap away. The active tab shows its name, the rest are just icons.',
          'On desktop, the tabs move to a sidebar and the chat stays at the bottom. Clients and their details sit side by side, so switching between them is one click. Both sizes come in light and dark.',
        ],
      },
      {
        type: 'resize-demo',
        url: 'tend · prototype',
        shots: {
          desktop: { src: desktopClient, alt: 'Desktop: sidebar, client list and Emma’s details side by side, chat bar at the bottom' },
          tablet: { src: tabletClient, alt: 'Tablet: the client page centered, with the floating chat and tab bar' },
          mobile: { src: client, alt: 'Phone: Emma’s client page with the floating chat and tab bar' },
        },
        caption: 'The same client page on desktop, tablet and phone. Drag the edge or pick a size.',
      },
      {
        type: 'screens',
        screens: [
          { src: todayDark, alt: 'Today in dark mode' },
          { src: clientDark, alt: 'A client page in dark mode' },
        ],
        caption: 'Dark mode, for late-night bookkeeping.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '07 · Build',
        title: 'From Figma to a working prototype',
        body: [
          'Everything started in Figma: color, spacing and type as variables, light and dark modes, and about 35 components. Then I built a working prototype with AI tools like Claude Code, filled with sample data, so people can actually tap through it instead of looking at pictures.',
          'For now the chat box runs on simple rules, not AI. That’s enough to test the idea before paying for the real thing.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '08 · Where it stands',
        title: 'What’s next',
        body: [
          'tend isn’t done. Next up is putting the prototype in front of real tutors, teachers and mobile workers, and finding out where I guessed wrong. After that comes a real backend, donations, and a beta.',
          'I’ll keep updating this page as it goes.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '09 · Reflection',
        title: 'What I’m learning',
        body: [
          'Being the designer and the client at the same time is weird. Nobody tells you no. So I wrote every decision down with the reason next to it, 68 of them so far, and held myself to them.',
        ],
      },
    ],
  ],
};
