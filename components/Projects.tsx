"use client";

import { m } from "framer-motion";

const featured = {
  title: "Portal de Arquitectura con IA",
  codename: "dynamic-architect",
  summary:
    "Plataforma que usa IA para generar diagramas de componentes, de secuencia y empresariales, y para automatizar la gestión de proyectos del área de arquitectura.",
  points: [
    {
      label: "Problema",
      text: "Documentar una arquitectura a mano (diagramas, seguimiento, entregables) consume horas que deberían dedicarse a diseñar.",
    },
    {
      label: "Solución",
      text: "Un portal que genera los diagramas con IA siguiendo buenas prácticas y centraliza la gestión de proyectos del área.",
    },
    {
      label: "Mi rol",
      text: "Lo diseñé y desarrollé de punta a punta: frontend, backend, integración con IA y despliegue en AWS.",
    },
  ],
  tags: ["Angular", "TypeScript", "NestJS", "AWS", "IA"],
  github: "https://github.com/AIMtonio/back-dinamic-architect",
  demo: "https://portalarquitectura.antonioalonso.com.mx/",
};

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function DiagramPreview() {
  const nodes = [
    { x: 20, y: 24, w: 88, label: "Usuario" },
    { x: 150, y: 24, w: 96, label: "Portal" },
    { x: 290, y: 24, w: 88, label: "API" },
    { x: 150, y: 120, w: 96, label: "Motor IA" },
    { x: 290, y: 120, w: 88, label: "Diagramas" },
  ];
  const edges = [
    "M108 42 H150",
    "M246 42 H290",
    "M334 60 V90 H198 V120",
    "M246 138 H290",
  ];

  return (
    <svg viewBox="0 0 400 180" className="h-auto w-full" role="img" aria-label="Flujo del portal: el usuario usa el portal, la API consulta al motor de IA y se generan los diagramas">
      {edges.map((d) => (
        <path key={d} d={d} fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
      ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height="36"
            rx="10"
            fill="var(--card-strong)"
            stroke="var(--accent)"
            strokeOpacity="0.5"
          />
          <text
            x={n.x + n.w / 2}
            y={n.y + 22}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="var(--foreground)"
          >
            {n.label}
          </text>
        </g>
      ))}
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
          <p className="section-label mb-2 text-xs font-semibold uppercase tracking-[0.28em]">
            04. Proyectos
          </p>
          <h2 className="section-title mb-12 text-4xl font-bold tracking-tight">
            Proyecto destacado
          </h2>
        </m.div>

        <m.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="surface-card relative overflow-hidden rounded-[2rem]"
        >
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />

          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col">
              <p className="mb-2 font-mono text-xs text-[color:var(--accent)]">{featured.codename}</p>
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-[color:var(--foreground)]">
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[color:var(--accent)]"
                >
                  {featured.title}
                </a>
              </h3>
              <p className="text-muted mb-6 leading-8">{featured.summary}</p>

              <dl className="mb-8 space-y-4">
                {featured.points.map((point) => (
                  <div key={point.label}>
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                      {point.label}
                    </dt>
                    <dd className="text-muted text-sm leading-7">{point.text}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap items-center gap-3">
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold"
                >
                  <ExternalLinkIcon />
                  Ver demo en vivo
                </a>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold"
                >
                  <GitHubIcon />
                  Código
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Browser mockup: replace the diagram with a real screenshot of the portal when available */}
              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-strong)]">
                <div className="flex items-center gap-2 border-b border-[color:var(--border)] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-soft-strong)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-soft-strong)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-soft-strong)]" />
                  <span className="ml-2 truncate font-mono text-[11px] text-[color:var(--muted)]">
                    portalarquitectura.antonioalonso.com.mx
                  </span>
                </div>
                <div className="bg-[color:var(--accent-soft)] p-5">
                  <DiagramPreview />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="tag-pill rounded-md px-2.5 py-1 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </m.article>
      </div>
    </section>
  );
}
