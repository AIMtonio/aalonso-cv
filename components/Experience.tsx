"use client";

import { m } from "framer-motion";

const experiences = [
  {
    company: "Macropay",
    period: "2022 — Presente",
    roles: [
      {
        role: "Arquitecto de TI",
        period: "2025 — Presente",
        highlights: [
          "Diseñé la arquitectura modular con la que Macropay abrió sus tiendas en Guatemala, preparada para replicarse en otros países sin reescribir el núcleo.",
          "Defino soluciones empresariales para las áreas Comercial, Finanzas, Innovación Crediticia y Experiencia del Cliente.",
          "Construí un portal interno con IA que genera diagramas de arquitectura y automatiza tareas de diseño y gestión de proyectos.",
        ],
        tags: ["Arquitectura de soluciones", "AWS", "Java", "NestJS", "IA aplicada"],
      },
      {
        role: "Líder técnico · Backend SR",
        period: "2022 — 2025",
        highlights: [
          "Lideré un equipo de 6 desarrolladores en los proyectos del área comercial.",
          "Planifiqué el trabajo del equipo, hice revisiones técnicas de código y definí procesos de desarrollo ágil.",
          "Fui el enlace directo con el equipo de arquitectura para alinear cada entrega con los estándares de la empresa.",
        ],
        tags: ["Liderazgo técnico", "Java", "NestJS", "AWS", "Metodologías ágiles"],
      },
    ],
  },
  {
    company: "EFISYS",
    period: "2021 — 2022",
    roles: [
      {
        role: "Analista Programador",
        period: "2021 — 2022",
        highlights: [
          "Desarrollé funcionalidades para distintos módulos de un core bancario con Java Spring Boot y JavaScript.",
          "Construí procesos ETL y reportes con MySQL, Pentaho Data Integration y Report Designer.",
          "Integré servicios web SOAP y almacenamiento en Amazon S3.",
        ],
        tags: ["Java", "Spring Boot", "JavaScript", "MySQL", "Pentaho", "SOAP", "Amazon S3", "GitLab"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-2 text-xs font-semibold uppercase tracking-[0.28em]">
            02. Experiencia
          </p>
          <h2 className="section-title mb-12 text-4xl font-bold tracking-tight">
            Dónde he trabajado
          </h2>
        </m.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <m.article
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-[color:var(--foreground)]">{exp.company}</h3>
                <span className="font-mono text-xs text-[color:var(--muted)]">{exp.period}</span>
              </div>

              <ol className="relative space-y-8 border-l border-[color:var(--accent-soft-strong)] pl-6">
                {exp.roles.map((role, j) => (
                  <li key={role.role} className="relative">
                    <span
                      className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[color:var(--accent)] ${
                        j === 0 ? "bg-[color:var(--accent)]" : "bg-[color:var(--card-strong)]"
                      }`}
                    />
                    <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <h4 className="font-semibold text-[color:var(--foreground)]">
                        {role.role}
                        {exp.roles.length > 1 && j === 0 && (
                          <span className="ml-2 align-middle text-xs font-medium text-[color:var(--accent)]">
                            ↑ Promoción
                          </span>
                        )}
                      </h4>
                      <span className="tag-pill self-start whitespace-nowrap rounded-full px-3 py-1 font-mono text-xs">
                        {role.period}
                      </span>
                    </div>

                    <ul className="text-muted mb-4 space-y-2 text-sm leading-7">
                      {role.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[0.7rem] h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag-pill rounded-full px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
