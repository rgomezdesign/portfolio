"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    // IntersectionObserver handles all sections while scrolling through mid-page
    const observers: IntersectionObserver[] = [];
    nav.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    // Scroll listener: activate the last nav item when the user
    // reaches the bottom of the page (contact section is too short
    // to ever hit the IntersectionObserver window on its own)
    const lastSection = nav[nav.length - 1];
    const onScroll = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 80;
      if (nearBottom) setActiveSection(lastSection);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:max-w-xs lg:flex-shrink-0 lg:flex-col lg:overflow-hidden lg:py-24 xl:max-w-sm">
      {/* Identity */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
          Roman Gomez
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest">
          Product Designer
        </h2>
        <p className="mt-4 leading-normal text-slate">
          Designing thoughtful digital experiences through UI/UX, motion, and
          modern front-end workflows.
        </p>

        {/* Nav */}
        <nav className="mt-16 hidden lg:block" aria-label="In-page links">
          <ul className="space-y-4">
            {nav.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`group flex items-center gap-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeSection === item
                      ? "text-slate-lightest"
                      : "text-slate hover:text-slate-lightest"
                  }`}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      activeSection === item
                        ? "w-16 bg-slate-lightest"
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-slate-lightest"
                    }`}
                  />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
