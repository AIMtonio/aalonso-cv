"use client";

import { m } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Python", "REST APIs"],
  },
  {
    category: "Base de datos",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            03. Skills
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-12">
            Tecnologías
          </h2>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <m.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <m.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05 + j * 0.05,
                    }}
                    whileHover={{ scale: 1.06 }}
                    className="text-sm text-zinc-700 bg-zinc-50 border border-zinc-100 px-3 py-1.5 rounded-lg font-medium cursor-default"
                  >
                    {skill}
                  </m.span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
