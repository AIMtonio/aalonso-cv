"use client";

import { m } from "framer-motion";

const socials = [
  {
    label: "Email",
    value: "tu@email.com",
    href: "mailto:tu@email.com",
  },
  {
    label: "GitHub",
    value: "github.com/tuusuario",
    href: "https://github.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tuusuario",
    href: "https://linkedin.com",
  },
  {
    label: "Twitter / X",
    value: "@tuusuario",
    href: "https://twitter.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            06. Contacto
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Hablemos
          </h2>
          <p className="text-zinc-500 max-w-lg leading-relaxed mb-12">
            Estoy abierto a nuevas oportunidades. Si tienes un proyecto en
            mente o simplemente quieres saludar, no dudes en escribirme.
          </p>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((social, i) => (
            <m.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-300 group"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2 group-hover:text-zinc-600 transition-colors">
                {social.label}
              </p>
              <p className="text-sm font-medium text-zinc-800 truncate">
                {social.value}
              </p>
            </m.a>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-zinc-100 text-center"
        >
          <p className="text-sm text-zinc-400">
            Diseñado y construido con Next.js, Tailwind CSS & Framer Motion
          </p>
        </m.div>
      </div>
    </section>
  );
}
