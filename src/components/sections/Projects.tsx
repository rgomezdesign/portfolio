import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
          Projects
        </h2>
      </div>

      <ul className="space-y-20">
        {projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} (opens in new tab)`}
              className="group block"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate/20 bg-navy-light aspect-video mb-6">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold leading-snug text-slate-lightest mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate mb-3">
                {project.description}
              </p>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Tag label={tag} />
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
