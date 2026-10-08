import type { CaseStudy } from './types';
import homeDesktop from '../../assets/work/palazzo/home-desktop.jpg';
import homeTablet from '../../assets/work/palazzo/home-tablet.jpg';
import homeMobile from '../../assets/work/palazzo/home-mobile.jpg';
import menuMobile from '../../assets/work/palazzo/menu-mobile.png';
import servicesDesktop from '../../assets/work/palazzo/services-desktop-top.png';
import servicesMobile from '../../assets/work/palazzo/services-mobile.png';
import teamDesktop from '../../assets/work/palazzo/team-desktop.jpg';
import teamMobile from '../../assets/work/palazzo/team-mobile.jpg';
import missionDesktop from '../../assets/work/palazzo/mission-desktop.jpg';
import missionMobile from '../../assets/work/palazzo/mission-mobile.jpg';
import contactMobile from '../../assets/work/palazzo/contact-mobile.jpg';

const s = {
  homeDesktop: { src: homeDesktop, alt: 'Palazzo Salon homepage: green header with the rose logo over a photo grid of the salon and stylists' },
  homeTablet: { src: homeTablet, alt: 'Palazzo Salon homepage at tablet width, the photo grid reflowing into two columns' },
  homeMobile: { src: homeMobile, alt: 'Palazzo Salon homepage on a phone with a compact header and stacked photos' },
  menuMobile: { src: menuMobile, alt: 'Phone menu open: Home, Our Mission, Shop Aveda, Our Team, Services, Our Work, Contact Us in rose type' },
  servicesDesktop: { src: servicesDesktop, alt: 'Services page with grouped services and prices in rose' },
  servicesMobile: { src: servicesMobile, alt: 'Services page on a phone, each service on one line with its price' },
  teamDesktop: { src: teamDesktop, alt: 'Our Team page with a group photo of the stylists in the salon doorway' },
  teamMobile: { src: teamMobile, alt: 'Team page on a phone with the group photo and the first stylist bio' },
  missionDesktop: { src: missionDesktop, alt: 'Our Mission page with the salon’s sustainability story beside a photo of the space' },
  missionMobile: { src: missionMobile, alt: 'Mission page on a phone ending with “Your beauty, our creativity, together sustainability”' },
  contactMobile: { src: contactMobile, alt: 'Contact page on a phone with a video tour of the salon, hours, email and phone' },
};

export const palazzo: CaseStudy = {
  slug: 'palazzo-salon',
  eyebrow: 'Web design · Freelance',
  title: 'Palazzo Salon',
  lead: 'A website that feels like walking into the salon: easy to browse, quick to find a price, and right at home on a phone.',
  meta: [
    { label: 'Role', value: 'Designer, solo' },
    { label: 'Client', value: 'Palazzo Salon, Redlands' },
    { label: 'Built with', value: 'Squarespace' },
    { label: 'Year', value: '2023' },
  ],
  live: { href: 'https://www.palazzosalonaveda.com/', label: 'Visit the live site' },
  cover: { kind: 'browser', shot: s.homeDesktop, url: 'palazzosalonaveda.com', phone: s.homeMobile },
  chapters: [
    [
      {
        type: 'section',
        kicker: 'Overview',
        title: 'The problem',
        body: [
          'Palazzo is an Aveda salon in Redlands, California. The salon itself is warm, full of plants and natural light, and run by a close team of stylists. Their website didn’t feel like any of that, and it made the basics harder than they should be: finding a service, seeing what it costs, and figuring out who you’d be sitting with.',
          'Most people find a salon on their phone, usually right when they want to book. So the goal was simple: make the site feel like the salon, and make those answers easy to get anywhere.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '01 · Structure',
        title: 'Built around what clients ask',
        body: [
          'I started from the questions clients actually ask the front desk: what do you offer, how much is it, who are your stylists, where are you. Each one became a page, and the menu reads in that order. On a phone the menu opens to the same short list in big, easy-to-tap type.',
        ],
      },
      {
        type: 'screens',
        screens: [s.menuMobile, s.servicesMobile, s.teamMobile],
        caption: 'The phone menu, services and the team page. Every answer is one tap from the menu.',
      },
      {
        type: 'browser',
        shot: s.servicesDesktop,
        url: 'palazzosalonaveda.com/services',
        caption: 'Services grouped the way people think about them, with every price in plain sight. No “call for pricing.”',
      },
    ],
    [
      {
        type: 'section',
        kicker: '02 · Look & feel',
        title: 'Let the salon do the talking',
        body: [
          'Instead of stock photos, the site leans on real photos of the space and the team. The colors come straight from the logo: the deep green and the dusty rose. Clean type and lots of white space keep it calm, so the photos carry the personality.',
        ],
      },
      {
        type: 'browser',
        shot: s.teamDesktop,
        url: 'palazzosalonaveda.com/team',
        caption: 'Meeting the team before you book. People choose a stylist, not just a salon.',
      },
      {
        type: 'screens',
        screens: [s.missionMobile, s.homeMobile, s.contactMobile],
        caption: 'The mission, the homepage photo grid, and contact with a short video tour of the space.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '03 · Responsive',
        title: 'At home on any screen',
        body: [
          'I designed each page for the phone first, then let it open up on bigger screens. The photo grid reflows from three columns to two to one, and the navigation collapses into a single menu without losing anything.',
        ],
      },
      {
        type: 'resize-demo',
        url: 'palazzosalonaveda.com',
        shots: { desktop: s.homeDesktop, tablet: s.homeTablet, mobile: s.homeMobile },
        caption: 'Captured from the live site at 1440, 820 and 390 pixels wide.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '04 · Outcome',
        title: 'Where it stands',
        body: [
          'The site has been live since 2023. It runs on Squarespace, so the salon team can update services, prices and photos on their own without waiting on anyone.',
          'What’s next: I’m rebuilding it as a custom site with AI tools like Claude Code, the same way I built this portfolio. Same design, faster pages, and more room to shape it exactly how the salon wants.',
        ],
      },
    ],
  ],
};
