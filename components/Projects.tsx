"use client";

import { m } from "framer-motion";

const projects = [
  {
    title: "Proyecto 1",
    description:
      "Descripción del proyecto. Explica qué problema resuelve, cómo lo construiste y cuál fue tu rol en el desarrollo.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    github: "#",
    demo: "#",
  },
  {
    title: "Proyecto 2",
    description:
      "Descripción del proyecto. Explica qué problema resuelve, cómo lo construiste y cuál fue tu rol en el desarrollo.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Proyecto 3",
    description:
      "Descripción del proyecto. Explica qué problema resuelve, cómo lo construiste y cuál fue tu rol en el desarrollo.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    github: "#",
    demo: null,
  },
  {
    title: "Proyecto 4",
    description:
      "Descripción del proyecto. Explica qué problema resuelve, cómo lo construiste y cuál fue tu rol en el desarrollo.",
    tags: ["Vue.js", "Tailwind", "Supabase"],
    github: "#",
    demo: "#",
  },
];

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            04. Proyectos
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-12">
            Lo que he construido
          </h2>
        </m.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-zinc-900">{project.title}</h3>
                <div className="flex items-center gap-3 text-zinc-400">
                  <a
                    href={project.github}
                    className="hover:text-zinc-900 transition-colors"
                    aria-label="Ver en GitHub"
                  >
                    <GitHubIcon />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="hover:text-zinc-900 transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-zinc-500 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
