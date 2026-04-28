"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href?: string;
  image?: string;
  tech?: string[];
};

export default function ProjectCard({
  title,
  description,
  href = "#",
  image,
  tech = [],
}: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-white backdrop-blur-lg transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-white/10 dark:bg-white/5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      transition={{ duration: 0.25 }}
    >
      {/* Image */}
      {image ? (
        <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-gradient-to-br from-indigo-500 to-purple-500" />
      )}

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          <ExternalLink
            size={18}
            className="text-zinc-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
          />
        </div>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
