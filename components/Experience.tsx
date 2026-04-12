"use client";

import { m } from "framer-motion";

const experiences = [
  {
    company: "Empresa Ejemplo",
    role: "Desarrollador Full Stack",
    period: "2022 — Presente",
    description:
      "Descripción de las responsabilidades y logros en este puesto. Añade aquí los detalles más relevantes de tu trabajo día a día.",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    company: "Otra Empresa",
    role: "Desarrollador Frontend",
    period: "2020 — 2022",
    description:
      "Descripción de las responsabilidades y logros en este puesto. Añade aquí los detalles más relevantes de tu trabajo día a día.",
    tags: ["Vue.js", "CSS", "REST APIs"],
  },
  {
    company: "Primera Empresa",
    role: "Junior Developer",
    period: "2019 — 2020",
    description:
      "Descripción de las responsabilidades y logros en este puesto. Añade aquí los detalles más relevantes de tu trabajo día a día.",
    tags: ["HTML", "JavaScript", "PHP"],
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
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            02. Experiencia
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-12">
            Dónde he trabajado
          </h2>
        </m.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <m.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-zinc-900">{exp.role}</h3>
                  <p className="text-zinc-500 text-sm mt-0.5">{exp.company}</p>
                </div>
                <span className="text-xs text-zinc-400 font-mono bg-zinc-50 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-zinc-500 bg-zinc-50 border border-zinc-100 px-3 py-1 rounded-full"
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
