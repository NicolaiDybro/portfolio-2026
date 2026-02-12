"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail, Code2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Code2 size={24} className="text-blue-600 dark:text-blue-400" />
          <span>Nicolai</span>
        </Link>
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/NicolaiDybro"
            target="_blank"
            rel="noreferrer"
            className="underline-animate flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-blue-500/10 dark:hover:bg-blue-500/20"
          >
            <Github size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm text-zinc-50 shadow-md shadow-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/40"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
