"use client";

import { useState } from "react";
import { m } from "framer-motion";

const email = "antoniomc159807@gmail.com";

const socials = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/antonioalonsodev",
    href: "https://www.linkedin.com/in/antonioalonsodev/",
  },
  {
    label: "GitHub",
    value: "github.com/AIMtonio",
    href: "https://github.com/AIMtonio",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

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
          <p className="text-muted mb-12 max-w-xl leading-8">
            Busco mi siguiente reto en arquitectura de soluciones o liderazgo técnico backend. Si tu equipo
            necesita a alguien que diseñe sistemas preparados para crecer, escríbeme.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="surface-card mb-4 flex flex-col gap-4 rounded-[2rem] p-6 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="break-words text-xl font-semibold text-[color:var(--foreground)] hover:text-[color:var(--accent)] md:text-2xl"
            >
              {email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="button-primary rounded-2xl px-5 py-2.5 text-sm font-semibold"
              aria-live="polite"
            >
              {copied ? "¡Copiado!" : "Copiar email"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="button-secondary rounded-2xl px-5 py-2.5 text-sm font-semibold"
            >
              Descargar CV (PDF)
            </button>
          </div>
        </m.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {socials.map((social, i) => (
            <m.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              className="surface-card group rounded-[2rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                {social.label} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
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
          data-print-hidden
          className="mt-16 border-t border-[color:var(--border)] pt-8 text-center"
        >
          <p className="text-sm text-[color:var(--muted)]">
            © {new Date().getFullYear()} Antonio Alonso · Diseñado y construido con Next.js, Tailwind CSS y Framer Motion
          </p>
        </m.div>
      </div>
    </section>
  );
}
