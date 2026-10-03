"use client";

import { m } from "framer-motion";

const skillGroups = [
  {
    category: "Arquitectura",
    skills: ["Arquitectura de soluciones", "Arquitecturas modulares", "Integración de servicios", "Diagramación UML"],
    span: "lg:col-span-3",
  },
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "NestJS", "C#", "REST APIs", "GraphQL", "SOAP"],
    span: "lg:col-span-3",
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Jenkins", "Git", "Linux"],
    span: "lg:col-span-2",
  },
  {
    category: "Bases de datos",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
    span: "lg:col-span-2",
  },
  {
    category: "Frontend",
    skills: ["Angular", "React", "TypeScript", "Astro"],
    span: "sm:col-span-2 lg:col-span-2",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-band py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-2 text-xs font-semibold uppercase tracking-[0.28em]">
            03. Skills
          </p>
          <h2 className="section-title mb-12 text-4xl font-bold tracking-tight">
            Tecnologías
          </h2>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {skillGroups.map((group, i) => (
            <m.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`surface-card rounded-[2rem] p-6 ${group.span}`}
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <m.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05 + j * 0.05,
                    }}
                    whileHover={{ scale: 1.06 }}
                    className="tag-pill cursor-default rounded-xl px-3 py-1.5 text-sm font-medium"
                  >
                    {skill}
                  </m.span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
