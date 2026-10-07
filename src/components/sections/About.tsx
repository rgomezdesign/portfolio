export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate">
        <p>
          I&apos;m a Product Designer focused on UI/UX, motion, and interactive
          digital experiences. I enjoy crafting interfaces that feel intuitive,
          visually refined, and grounded in real user needs, with a strong
          attention to the details that make products feel thoughtful and
          polished.
        </p>
        <p>
          Over the past few years, I&apos;ve worked across branding, product
          design, motion, and visual storytelling, designing experiences for web
          and mobile while collaborating closely with developers and
          cross-functional teams. More recently, I&apos;ve been expanding deeper
          into front-end workflows and design systems, using tools like Claude
          Code to prototype, iterate, and bring ideas closer to production.
        </p>
        <p>
          Currently, I&apos;m a Product Designer at{" "}
          <a
            href="#"
            className="font-medium text-slate-lightest"
          >
            Willow Laboratories
          </a>
          , where I contribute to digital product experiences across healthcare
          and wellness platforms. My work includes UI/UX design, design systems,
          motion, and interactive prototyping, helping shape products that
          balance usability, clarity, and visual consistency.
        </p>
        <p>
          I also enjoy exploring 3D design, animation, and creative coding,
          always looking for new ways to blend visual design with interactive
          experiences.
        </p>
      </div>
    </section>
  );
}
