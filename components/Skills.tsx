"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Database, Globe, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS, Svelte and Vue",
    color: "from-blue-500 to-cyan-500",
    size: "large",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, PostgreSQL, MongoDB, GraphQL and REST APIs",
    color: "from-cyan-500 to-teal-500",
    size: "large",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma and user-friendly design",
    color: "from-blue-600 to-indigo-600",
    size: "normal",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Core Web Vitals",
    color: "from-cyan-600 to-blue-600",
    size: "normal",
  },
  {
    icon: Sparkles,
    title: "Animations",
    description: "Framer Motion, CSS animations, GSAP",
    color: "from-blue-500 to-purple-500",
    size: "normal",
  },
  {
    icon: Globe,
    title: "Deployment",
    description: "Vercel, AWS, Docker, CI/CD",
    color: "from-teal-500 to-cyan-500",
    size: "normal",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          My Skills
        </h2>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          What I can help you with
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            variants={item}
            whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="gradient-border group relative overflow-hidden backdrop-blur-xl transition-shadow hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="relative h-full p-6">
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${skill.color} p-3 shadow-lg`}>
                <skill.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {skill.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
