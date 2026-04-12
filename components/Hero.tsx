"use client";

import { m } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-5xl w-full">
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4"
        >
          Hola, soy
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 mb-4 leading-none"
        >
          Tu Nombre
        </m.h1>

        <m.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl font-light text-zinc-500 mb-8"
        >
          Desarrollador Full Stack
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-zinc-500 max-w-xl leading-relaxed mb-10 text-base"
        >
          Apasionado por crear experiencias digitales limpias y eficientes.
          Aquí encontrarás mi trabajo y experiencia profesional.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-700 transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-200 text-zinc-700 text-sm font-medium rounded-xl hover:border-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Contacto
          </a>
        </m.div>

        {/* Scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-400 tracking-widest uppercase">Scroll</span>
          <m.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-400 to-transparent"
          />
        </m.div>
      </div>
    </section>
  );
}
