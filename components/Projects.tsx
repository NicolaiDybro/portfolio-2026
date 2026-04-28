"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Featured Projects
        </h2>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          Here are some of the projects I've worked on
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            href={p.href}
            image={p.image}
            tech={p.tech}
          />
        ))}
      </div>
    </section>
  );
}
