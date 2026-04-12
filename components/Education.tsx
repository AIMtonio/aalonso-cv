"use client";

import { m } from "framer-motion";

const education = [
  {
    institution: "Universidad Ejemplo",
    degree: "Grado en Ingeniería Informática",
    period: "2015 — 2019",
    description:
      "Descripción de los estudios y logros más relevantes durante esta etapa formativa.",
  },
  {
    institution: "Plataforma Online",
    degree: "Certificación en Cloud Computing",
    period: "2021",
    description:
      "Descripción del curso o certificación y las habilidades técnicas adquiridas.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            05. Educación
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-12">
            Formación
          </h2>
        </m.div>

        <div className="space-y-4">
          {education.map((item, i) => (
            <m.div
              key={item.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-zinc-900">{item.degree}</h3>
                  <p className="text-zinc-500 text-sm mt-0.5">{item.institution}</p>
                </div>
                <span className="text-xs text-zinc-400 font-mono bg-zinc-50 px-3 py-1 rounded-full self-start">
                  {item.period}
                </span>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
