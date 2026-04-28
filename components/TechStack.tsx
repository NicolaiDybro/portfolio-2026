"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "C#", category: "Language" },
  { name: "C", category: "Language" },
  { name: "Rust", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Vercel", category: "Deployment" },
  { name: "Prisma", category: "ORM" },
  { name: "shadcn/ui", category: "UI" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

export default function TechStack() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Technologies & Tools
        </h2>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          Here are some of the technologies I work with daily
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={item}>
            <div className="group relative overflow-hidden rounded-full border border-zinc-300 bg-white px-4 py-2 backdrop-blur-xl transition-all hover:scale-105 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20">
              <span className="relative z-10 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
