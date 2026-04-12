"use client";

import { m } from "framer-motion";

const info = [
  { label: "Ubicación", value: "Ciudad, País" },
  { label: "Email", value: "tu@email.com" },
  { label: "Disponibilidad", value: "Disponible" },
  { label: "Idiomas", value: "ES / EN" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            01. Sobre mí
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-12">
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
            className="md:col-span-3 bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm"
          >
            <p className="text-zinc-600 leading-relaxed mb-4">
              Desarrollador con X años de experiencia construyendo productos
              digitales. Me especializo en el desarrollo web moderno con foco en
              la experiencia de usuario y el rendimiento de las aplicaciones.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Cuando no estoy programando me gusta [hobby]. Siempre en busca de
              nuevos retos y oportunidades para seguir aprendiendo y creciendo
              como profesional.
            </p>
          </m.div>

          {/* Info grid */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm"
          >
            <div className="grid grid-cols-2 gap-6">
              {info.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-zinc-800 text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
