"use client";

import { m } from "framer-motion";

const socials = [
  {
    label: "Email",
    value: "antoniomc159807@gmail.com",
    href: "mailto:antoniomc159807@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/AIMtonio",
    href: "https://github.com/AIMtonio",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/antonioalonsodev",
    href: "https://www.linkedin.com/in/antonioalonsodev/",
  },
  /*{
    label: "Twitter / X",
    value: "@tuusuario",
    href: "https://twitter.com",
  },*/
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
          <p className="section-label mb-2 text-xs font-semibold uppercase tracking-[0.28em]">
            06. Contacto
          </p>
          <h2 className="section-title mb-4 text-4xl font-bold tracking-tight">
            Hablemos
          </h2>
          <p className="text-muted mb-12 max-w-lg leading-8">
            Estoy abierto a nuevas oportunidades. Si tienes un proyecto en
            mente o simplemente quieres saludar, no dudes en escribirme.
          </p>
        </m.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              className="surface-card group rounded-[2rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)] transition-colors">
                {social.label}
              </p>
              <p className="text-sm font-medium text-[color:var(--foreground)] break-words">
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
          className="mt-16 border-t border-[color:var(--border)] pt-8 text-center"
        >
          <p className="text-sm text-[color:var(--muted)]">
            Diseñado y construido con Next.js, Tailwind CSS & Framer Motion
          </p>
        </m.div>
      </div>
    </section>
  );
}
