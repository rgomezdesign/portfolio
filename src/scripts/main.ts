const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Active section → pill nav + tab bar ---------- */
const sectionIds = ['work', 'about', 'experience', 'contact'] as const;
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter((el): el is HTMLElement => el !== null);
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
const indicator = document.querySelector<HTMLElement>('[data-nav-indicator]');
let current = '';

function moveIndicator() {
  if (!indicator) return;
  const target = document.querySelector<HTMLElement>(`.pill__link[data-nav-link="${current}"]`);
  if (!target) {
    indicator.style.setProperty('--o', '0');
    return;
  }
  indicator.style.setProperty('--x', `${target.offsetLeft}px`);
  indicator.style.setProperty('--w', `${target.offsetWidth}px`);
  indicator.style.setProperty('--o', '1');
}

function setActive(id: string) {
  if (id === current) return;
  current = id;
  for (const link of links) {
    const on = link.dataset.navLink === id;
    link.classList.toggle('is-active', on);
    if (on) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
  moveIndicator();
}

let lockUntil = 0;

function computeActive() {
  if (performance.now() < lockUntil) return;
  const line = window.innerHeight * 0.4;
  let active = 'work';
  let activeTop = -Infinity;
  for (const section of sections) {
    const top = section.getBoundingClientRect().top;
    // Sections sharing a row (About + Experience on desktop) resolve to the first one
    if (top <= line && top > activeTop + 2) {
      active = section.id;
      activeTop = top;
    }
  }
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) active = 'contact';
  setActive(active);
}

let ticking = false;
window.addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      computeActive();
      ticking = false;
    });
  },
  { passive: true },
);
window.addEventListener('resize', moveIndicator);

// Clicking a nav link marks it active immediately and holds it while the page scrolls there
for (const link of links) {
  link.addEventListener('click', () => {
    const id = link.dataset.navLink;
    if (!id) return;
    setActive(id);
    lockUntil = performance.now() + (reduceMotion ? 50 : 900);
  });
}
computeActive();
// Position again once Inter has loaded (link widths change slightly)
document.fonts?.ready.then(moveIndicator);

/* ---------- Scroll reveal (only hides what is still below the fold) ---------- */
const revealTargets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
if (!reduceMotion && 'IntersectionObserver' in window && revealTargets.length) {
  const fold = window.innerHeight * 0.95;
  for (const el of revealTargets) {
    if (el.getBoundingClientRect().top < fold) el.classList.add('is-in');
  }
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  );
  for (const el of revealTargets) if (!el.classList.contains('is-in')) io.observe(el);
}

/* ---------- Copy email ---------- */
for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy-email]')) {
  const label = button.querySelector<HTMLElement>('[data-copy-label]');
  const status = button.parentElement?.querySelector<HTMLElement>('[data-copy-status]');
  const email = button.dataset.copyEmail ?? '';
  let timer: number | undefined;

  button.addEventListener('click', async () => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      // Fallback: select the address so the visitor can copy it themselves
      const address = button.parentElement?.querySelector('[data-email]');
      if (address) {
        const range = document.createRange();
        range.selectNodeContents(address);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
    if (!label) return;
    button.classList.toggle('is-copied', copied);
    label.textContent = copied ? 'Copied' : 'Selected';
    if (status) status.textContent = copied ? 'Email address copied' : 'Email address selected';
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      button.classList.remove('is-copied');
      label.textContent = 'Copy';
    }, 2000);
  });
}
