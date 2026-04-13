"use client";

import { m } from "framer-motion";

const experiences = [
  {
    company: "Macropay",
    role: "Arquitecto de TI",
    period: "2025 — Presente",
    description:
      "Me integro al área de arquitectura desarrollando soluciones empresariales para proyectos de las áreas de comercial, finanzas, innovación crediticia y experiencia del cliente. Diseño arquitecturas modulares robustas y escalables, como la implementada para la apertura de tiendas Macropay en el pais de Guatemala, preparada para su expansión a otros países.",
    tags: ["Java", "Nest.js", "AWS"],
  },
   {
    company: "Macropay",
    role: "Programador Backend SR",
    period: "2022 — 2025",
    description:
      "Me integro como lider de desarrollo para los proyectos del area comercial liderando equipos de 6 integrantes, realizando la planificacion de tareas, revisiones tenicas, gestion de procesos, integracion directa con el equipo de arquitectura y buscando desarrollo de software agil y eficaz.",
    tags: ["Java", "Nest.js", "AWS"],
  },
  {
    company: "EFISYS",
    role: "Analista Programador",
    period: "2021 — 2022",
    description:
      "Analista programador, encargado de desarrollar funcionalidades para diferentes módulos de un Core bancario, brindando soluciones financieras. Desarrollo de aplicaciones con Java Spring Boot y JavaScript; gestión de bases de datos y procesos ETL (MySQL, PDI, Report Designer); integración de servicios web y almacenamiento en la nube (WS Soap, Amazon S3); control de versiones y colaboración en proyectos (GitLab).",
    tags: ["Java", "Spring Boot", "JavaScript", "MySQL", "PDI", "Report Designer", "WS Soap", "Amazon S3", "GitLab"],
  }
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

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <m.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="surface-card rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground)]">{exp.role}</h3>
                  <p className="mt-0.5 text-sm text-[color:var(--muted)]">{exp.company}</p>
                </div>
                <span className="tag-pill self-start whitespace-nowrap rounded-full px-3 py-1 font-mono text-xs">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted mb-4 text-sm leading-7">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill rounded-full px-3 py-1 text-xs font-medium"
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
