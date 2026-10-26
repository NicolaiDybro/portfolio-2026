"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  label?: string;
  description: string;
  href?: string;
  image?: string;
  snippet?: string;
  tech?: string[];
};

export default function ProjectCard({
  title,
  label,
  description,
  href,
  image,
  snippet,
  tech = [],
}: Props) {
  const hasLink = Boolean(href);
  const MotionTag = hasLink ? motion.a : motion.div;

  return (
    <MotionTag
      href={hasLink ? href : undefined}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noreferrer" : undefined}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white backdrop-blur-lg transition-[border-color,box-shadow] dark:border-white/10 dark:bg-white/5 ${
        hasLink
          ? "hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
          : ""
      }`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={
        hasLink
          ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }
          : undefined
      }
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
      ) : snippet ? (
        <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
          <div className="flex gap-1.5 px-4 pt-3" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <pre className="overflow-hidden px-4 pt-3 font-mono text-[12px] leading-relaxed text-cyan-200/90 transition-transform duration-300 group-hover:scale-[1.02]">
            <code>{snippet}</code>
          </pre>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>
      ) : (
        <div className="h-48 w-full bg-gradient-to-br from-blue-600 to-cyan-600" />
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {label && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {label}
          </p>
        )}
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          {hasLink && (
            <ExternalLink
              size={18}
              className="shrink-0 text-zinc-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
            />
          )}
        </div>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </MotionTag>
  );
}
