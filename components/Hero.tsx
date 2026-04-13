"use client";

import { m } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <div className="hero-mesh absolute inset-0 -z-20 opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(15,95,103,0.18),transparent_55%)]" />

      <div className="max-w-6xl w-full grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-label mb-4 text-sm font-semibold uppercase tracking-[0.28em]"
          >
            Backend Engineer · Arquitectura · Automatización
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-5 text-6xl font-bold leading-none tracking-[-0.08em] text-[color:var(--foreground)] md:text-8xl"
          >
            Antonio Alonso
          </m.h1>

          <m.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 max-w-2xl text-2xl font-light text-[color:var(--muted)] md:text-3xl"
          >
            Diseño soluciones backend escalables con foco en arquitectura empresarial y automatización real.
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-muted mb-10 max-w-2xl text-base leading-8"
          >
            Soy una persona entusiasta, respetuosa, honesta y dedicada. Me apasiona la tecnología, los retos
            intelectuales y la creación de contenido digital. Tengo un especial interés en la automatización de
            procesos, porque es una herramienta clave para optimizar tareas y facilitar la vida diaria.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="button-primary rounded-2xl px-6 py-3 text-sm font-semibold"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="button-secondary rounded-2xl px-6 py-3 text-sm font-semibold"
            >
              Contacto
            </a>
          </m.div>
        </div>

        <m.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="surface-card relative overflow-hidden rounded-[2rem] p-7"
        >
          <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />
          <p className="section-label mb-4 text-xs font-semibold uppercase tracking-[0.28em]">
            Enfoque actual
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Especialidad</p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                Backends de negocio y arquitecturas modulares
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Años", value: "6+" },
                { label: "Stack", value: "Java · Node" },
                { label: "Foco", value: "Automatización" },
                { label: "Cloud", value: "AWS" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--accent-soft)] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--foreground)]">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-strong)] p-4 text-sm leading-7 text-[color:var(--muted)]">
              Construyo soluciones pensadas para durar: mantenibles, observables y preparadas para crecer con el negocio.
            </p>
          </div>
        </m.aside>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="section-label text-[10px] font-semibold uppercase tracking-[0.32em]">Scroll</span>
          <m.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-[linear-gradient(180deg,var(--accent),transparent)]"
          />
        </m.div>
      </div>
    </section>
  );
}
