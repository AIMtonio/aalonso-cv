"use client";

import { m } from "framer-motion";

const info = [
  { label: "Ubicación", value: "Mérida, Yucatán, México" },
  { label: "Email", value: "antoniomc159807@gmail.com" },
  { label: "Disponibilidad", value: "Disponible" },
  { label: "Idiomas", value: "ES" },
];

export default function About() {
  return (
    <section id="about" className="section-band py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-2 text-xs font-semibold uppercase tracking-[0.28em]">
            01. Sobre mí
          </p>
          <h2 className="section-title mb-12 text-4xl font-bold tracking-tight">
            Quién soy
          </h2>
        </m.div>

        <div className="grid md:grid-cols-5 gap-6 items-start">
          {/* Bio */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="surface-card md:col-span-3 rounded-[2rem] p-8"
          >
            <p className="text-muted mb-4 leading-8">
              Soy un desarrollador con más de 6 años de experiencia en el área de desarrollo backend. 
              Me apasiona transformar ideas en soluciones tecnológicas, convencido de que la imaginación 
              es el único límite para la innovación. Actualmente me enfoco en la creación de arquitecturas
              empresariales y en la automatización de procesos, con el objetivo de optimizar tareas y 
              facilitar la vida diaria.
            </p>
            <p className="text-muted leading-8">
              Fuera del ámbito profesional, disfruto viajar en moto, el camping y el fútbol americano,
               actividades que reflejan mi espíritu aventurero y mi gusto por los retos.
            </p>
          </m.div>

          {/* Info grid */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="surface-card md:col-span-2 rounded-[2rem] p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {info.map((item) => (
                <div key={item.label} className="min-w-0 rounded-2xl border border-[color:var(--border)] bg-[color:var(--accent-soft)] p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                    {item.label}
                  </p>
                  <p className="break-words text-sm font-medium text-[color:var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
