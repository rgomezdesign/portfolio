import type { CaseStudy } from './types';
import goalsPick from '../../assets/work/nutu/goals-pick.png';
import goalsCustomize from '../../assets/work/nutu/goals-customize.png';
import goalsSet from '../../assets/work/nutu/goals-set.png';
import goalsDetail from '../../assets/work/nutu/goals-detail-after.png';
import goalsAuto from '../../assets/work/nutu/goals-auto.png';
import goalsComplete from '../../assets/work/nutu/goals-complete.png';
import fyOnboarding from '../../assets/work/nutu/fy-onboarding.png';
import fyLocked from '../../assets/work/nutu/fy-locked.png';
import fyWeek1 from '../../assets/work/nutu/fy-week1.png';
import fyUnlocked from '../../assets/work/nutu/fy-unlocked.png';
import fySetup from '../../assets/work/nutu/fy-setup.png';
import fyResults from '../../assets/work/nutu/fy-results.png';
import sliderTrack from '../../assets/work/nutu/slider-a-track.png';
import sliderDial from '../../assets/work/nutu/slider-b-dial.png';
import sliderDays from '../../assets/work/nutu/slider-c-days.png';
import sliderResult from '../../assets/work/nutu/slider-result.png';
import sliderDragged from '../../assets/work/nutu/slider-dragged.png';

const s = {
  goalsPick: { src: goalsPick, alt: 'Goals list with category filters and goals written as sentences' },
  goalsCustomize: { src: goalsCustomize, alt: 'Add a new goal screen with minutes, frequency, duration and start date' },
  goalsSet: { src: goalsSet, alt: 'Goal set confirmation showing the finished goal sentence' },
  goalsDetail: { src: goalsDetail, alt: 'Goal detail at 5 of 6, with completions grouped into week 1 and week 2' },
  goalsAuto: { src: goalsAuto, alt: 'Auto-tracked water goal at 4 of 7 with a Check off today button' },
  goalsComplete: { src: goalsComplete, alt: 'Goal complete celebration with confetti and a 3 goal streak' },
  fyOnboarding: { src: fyOnboarding, alt: 'Future You onboarding comparing an original photo with a one year visualization' },
  fyLocked: { src: fyLocked, alt: 'Locked Future You screen with habit rings for week 1 and week 2' },
  fyWeek1: { src: fyWeek1, alt: 'One week down: week 1 rings complete and a starting photo added' },
  fyUnlocked: { src: fyUnlocked, alt: 'Future You unlocked celebration with a See your Future You button' },
  fySetup: { src: fySetup, alt: 'Future You setup with photo upload and short, mid and long term options' },
  fyResults: { src: fyResults, alt: 'AI-generated results comparing the original photo with six months ahead' },
  sliderTrack: { src: sliderTrack, alt: 'Control study A: a horizontal balance track from more burned to more eaten' },
  sliderDial: { src: sliderDial, alt: 'Control study B: a gauge dial showing plus 40 in the green zone' },
  sliderDays: { src: sliderDays, alt: 'Control study C: five of seven days balanced on a stepped slider' },
  sliderResult: { src: sliderResult, alt: 'Final design: gauge at plus 12 with a slider underneath and a green zone photo' },
  sliderDragged: { src: sliderDragged, alt: 'Slider dragged to plus 78, gauge and photo shift into the orange zone' },
};

export const nutu: CaseStudy = {
  slug: 'nutu',
  eyebrow: 'Product design · Willow Laboratories',
  title: 'nutu',
  lead: 'Two features I designed to help people keep showing up: goals that count what you actually did, and a future self you earn by logging.',
  meta: [
    { label: 'Role', value: 'Product designer' },
    { label: 'Team', value: 'PMs, engineers, health team' },
    { label: 'Features', value: 'Goals, Future You' },
    { label: 'Status', value: 'Shipping fall 2026' },
  ],
  cover: [s.goalsDetail, s.fyUnlocked, s.fyResults],
  chapters: [
    [
      {
        type: 'section',
        kicker: 'Overview',
        title: 'The problem',
        body: [
          'nutu began as a nutrition tracker and is growing into a full metabolic health platform. Logging a meal is easy. Still logging three weeks later is the hard part, because better habits take months to show up in the mirror.',
          'So I came at it from both ends. Goals makes this week’s progress feel real. Future You shows where all those weeks are heading.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '01 · Goals',
        title: 'Goals that count what you actually did',
        body: [
          'People start from a goal nutu’s health team wrote, then make it theirs: how long, how often, for how many weeks. Every goal reads back as one plain sentence, so there’s never any doubt about what you signed up for.',
        ],
      },
      { type: 'screens', screens: [s.goalsPick, s.goalsCustomize, s.goalsSet], caption: 'Pick a goal, tune it, done. The sentence updates as the numbers change.' },
      {
        type: 'goal-demo',
        statement: '0 of 6, not 0 of 14.',
        support: 'A goal like “3 times a week for 2 weeks” counts the times you showed up, not the days on the calendar. Skipping a Tuesday is part of the plan, not a failure.',
      },
      {
        type: 'section',
        title: 'Progress that feels fair',
        body: [
          'Forgot to log yesterday? Tap the day and catch up. Goals nutu can track on its own fill in from what you log, and the rest are one tap. There’s a cap of two goals at a time: enough to build momentum without spreading yourself thin.',
        ],
      },
      { type: 'screens', screens: [s.goalsDetail, s.goalsAuto, s.goalsComplete], caption: 'A manual goal mid-week, an auto-tracked goal, and the finish.' },
    ],
    [
      {
        type: 'section',
        kicker: '02 · Future You',
        title: 'A future worth logging for',
        body: [
          'Future You uses AI to picture how your body could change if you keep your current habits. I wanted it to feel like a reward, so it’s earned: log all four habits two weeks in a row and it unlocks. Until then, the locked screen does the motivating, with both weeks in view and rings that fill as you go.',
        ],
      },
      {
        type: 'screens',
        screens: [s.fyLocked, s.fyWeek1, s.fyUnlocked],
        caption: 'Locked, one week down, unlocked. The unlock reuses the celebration from Goals, so wins feel the same across the app.',
      },
      {
        type: 'section',
        title: 'Designing around real constraints',
        body: [
          'Generating an image takes time and money, so there’s a 24-hour cooldown between runs. Photos need consent, and every result carries an AI disclaimer. Rather than bury those rules, I let the design explain them right when they matter: when your next run opens up, why an upload failed, what the image is and isn’t. You can even add a starting photo while it’s still locked, so nothing gets asked twice.',
        ],
      },
      { type: 'screens', screens: [s.fyOnboarding, s.fySetup, s.fyResults], caption: 'Onboarding, choosing how far ahead to look, and the results with the next available time.' },
    ],
    [
      {
        type: 'section',
        kicker: '03 · What’s next',
        title: 'Making the future adjustable',
        body: [
          'The next version adds a slider. Drag your daily balance and watch your future change with it. Before it got there, I tried three ways to show where your day ends up: a balance track, a gauge dial, and a count of balanced days.',
        ],
      },
      { type: 'screens', screens: [s.sliderTrack, s.sliderDial, s.sliderDays], caption: 'Three control studies, each tested against the same day of data.' },
      {
        type: 'section',
        title: 'Where it landed',
        body: ['The final pairs the gauge’s quick read with a simple slider underneath. It’s still in progress and ships later this year, but you can take the control for a spin below.'],
      },
      {
        type: 'balance-demo',
        screens: { good: s.sliderResult, off: s.sliderDragged },
        caption: 'A working sketch of the control. The photo switches to the other future when you leave the green.',
      },
    ],
    [
      {
        type: 'section',
        kicker: '04 · Process',
        title: 'How I worked',
        body: [
          'I worked side by side with PMs, engineers and nutu’s health team from first flows to handoff. Next to every screen I wrote down the logic: caps, edge cases, error states, what day one looks like next to week four. Engineering could build without guessing, and the health team could check every word and claim. Moments we’d already gotten right, like the celebration, I reused instead of reinventing.',
        ],
      },
    ],
    [
      {
        type: 'section',
        kicker: '05 · Outcome',
        title: 'Where it stands',
        body: [
          'Goals ships this month, and the first version of Future You is rolling out now, with the slider later this year.',
          'Next for Goals: letting people set a goal in their own words instead of picking from a list, with nutu helping shape it into something they can track. More on that, and on what we learn from real usage, once it’s out in the world.',
        ],
      },
    ],
  ],
};
