import Tag from "@/components/ui/Tag";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
          Experience
        </h2>
      </div>

      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={job.title}>
            <div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium leading-snug text-slate-lightest">
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {job.title} ·{" "}
                    <span className="text-slate-light">{job.company}</span>
                  </a>
                </h3>
                <p className="shrink-0 font-mono text-xs text-slate">
                  {job.period}
                </p>
              </div>
              <p className="mt-2 text-sm leading-normal text-slate">
                {job.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                {job.tags.map((tag) => (
                  <li key={tag}>
                    <Tag label={tag} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          href="/roman-gomez-cv.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 font-medium text-slate-lightest"
          aria-label="View full résumé PDF (opens in new tab)"
        >
          View Full Résumé
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mt-0.5 h-4 w-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
