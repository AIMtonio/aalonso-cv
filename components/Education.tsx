"use client";

import { m } from "framer-motion";

const education = [
  {
    institution: "UTTEC",
    degree: "Técnico Superior Universitario",
    period: "Sep 2016 — 2018",
    description:
      "Técnico Superior Universitario en Tecnologías de la Información y Comunicación, área Sistemas Informáticos",
  },
  {
    institution: "UTTEC",
    degree: "Licenciatura en Informática",
    period: "Sep 2019 - Ago 2020",
    description:
      "Licenciatura en Tecnologías de la Información y Comunicación",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-band py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-2 text-xs font-semibold uppercase tracking-[0.28em]">
            05. Educación
          </p>
          <h2 className="section-title mb-12 text-4xl font-bold tracking-tight">
            Formación
          </h2>
        </m.div>

        <div className="space-y-4">
          {education.map((item, i) => (
            <m.div
              key={`${item.institution}-${item.degree}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="surface-card rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground)]">{item.degree}</h3>
                  <p className="mt-0.5 text-sm text-[color:var(--muted)]">{item.institution}</p>
                </div>
                <span className="tag-pill self-start rounded-full px-3 py-1 font-mono text-xs">
                  {item.period}
                </span>
              </div>
              <p className="text-muted text-sm leading-7">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
