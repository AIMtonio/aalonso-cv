"use client";

import { m } from "framer-motion";

const highlights = [
  { value: "5+", label: "Años en backend" },
  { value: "6", label: "Devs liderados" },
  { value: "Multi-país", label: "Arquitectura lista para expandirse" },
  { value: "AWS", label: "Cloud en producción" },
];

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16 print:pt-0">
      <div className="hero-mesh absolute inset-0 -z-20 opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(15,95,103,0.18),transparent_55%)]" />

      <div className="max-w-6xl w-full grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <m.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="tag-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Abierto a nuevas oportunidades
          </m.a>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-label mb-4 text-sm font-semibold uppercase tracking-[0.28em]"
          >
            Arquitecto de TI · Backend Engineer
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-5 text-6xl font-bold leading-none tracking-[-0.06em] text-[color:var(--foreground)] md:text-8xl"
          >
            Antonio Alonso
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 max-w-2xl text-2xl font-light text-[color:var(--muted)] md:text-3xl"
          >
            Diseño arquitecturas backend que permiten a un negocio{" "}
            <span className="font-medium text-[color:var(--foreground)]">crecer a nuevos mercados</span>{" "}
            sin reescribir su sistema.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-muted mb-10 max-w-2xl text-base leading-8"
          >
            Hoy en <strong className="font-semibold text-[color:var(--foreground)]">Macropay</strong> diseñé la
            arquitectura con la que la empresa abrió operaciones en Guatemala, preparada para replicarse en otros
            países. Antes lideré un equipo de 6 desarrolladores backend y construí módulos para un core bancario.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            data-print-hidden
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="button-primary rounded-2xl px-6 py-3 text-sm font-semibold"
            >
              Ver proyecto destacado
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="button-secondary inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold"
            >
              <DownloadIcon />
              Descargar CV (PDF)
            </button>
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
            En resumen
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Especialidad</p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                Arquitectura de soluciones para sistemas financieros y comerciales
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--accent-soft)] p-4">
                  <p className="text-2xl font-bold tracking-tight text-[color:var(--accent)]">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-[color:var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-strong)] p-4 text-sm leading-7 text-[color:var(--muted)]">
              Stack principal: <span className="font-medium text-[color:var(--foreground)]">Java, NestJS, AWS</span>.
              Construyo soluciones mantenibles, observables y preparadas para crecer con el negocio.
            </p>
          </div>
        </m.aside>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          data-print-hidden
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
