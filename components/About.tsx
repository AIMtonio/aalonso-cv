"use client";

import { m } from "framer-motion";

const info = [
  { label: "Ubicación", value: "Mérida, Yucatán, México" },
  { label: "Modalidad", value: "Remoto · Híbrido" },
  { label: "Disponibilidad", value: "Abierto a oportunidades" },
  { label: "Idiomas", value: "Español (nativo)" },
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
              Empecé construyendo módulos para un core bancario, pasé a liderar un equipo de desarrollo y hoy
              diseño la arquitectura de soluciones empresariales en Macropay. En ese camino aprendí que el buen
              software no se mide por la tecnología que usa, sino por lo fácil que es hacerlo crecer.
            </p>
            <p className="text-muted mb-4 leading-8">
              Me enfoco en arquitecturas modulares, integración de servicios en AWS y automatización de procesos.
              También aplico IA a mi propio trabajo: construí un portal que genera diagramas de arquitectura y
              acelera el diseño de soluciones.
            </p>
            <p className="text-muted leading-8">
              Fuera del trabajo me encontrarás viajando en moto, acampando o viendo fútbol americano.
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
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
