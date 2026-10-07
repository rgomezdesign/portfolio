import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy font-sans">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-teal focus:px-4 focus:py-3 focus:text-navy focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 lg:flex lg:gap-4 lg:justify-between lg:px-24 lg:py-0">
        {/* Left column — sticks in place while right scrolls */}
        <Sidebar />

        {/* Right column — scrollable content */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
