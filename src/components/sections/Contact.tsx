export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
          Contact
        </h2>
      </div>

      <div className="max-w-lg">
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mb-10 text-base leading-relaxed text-slate">
          I&apos;m currently open to new opportunities and collaborations.
          Whether you&apos;re building a product, exploring an idea, or just
          want to connect, feel free to reach out, I&apos;d love to hear from
          you.
        </p>

        <a
          href="mailto:roman@example.com"
          className="inline-flex items-center gap-2 rounded border border-teal px-8 py-4 font-mono text-sm font-medium text-teal transition-all duration-200 hover:bg-teal/10 focus-visible:bg-teal/10"
        >
          Say Hello
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
