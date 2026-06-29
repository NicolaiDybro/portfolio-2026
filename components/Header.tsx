"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Code2, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Tech", href: "#tech" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop section nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-500/20 dark:hover:text-blue-400"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Desktop actions */}
          <nav className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/NicolaiDybro"
              target="_blank"
              rel="noreferrer"
              className="underline-animate flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-blue-500/10 dark:hover:bg-blue-500/20"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm text-zinc-50 shadow-md shadow-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/40"
            >
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-blue-500/10 md:hidden dark:hover:bg-blue-500/20"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 pt-4">
              {sections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-500/20 dark:hover:text-blue-400"
                >
                  {section.label}
                </a>
              ))}
              <a
                href="https://github.com/NicolaiDybro"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-500/20 dark:hover:text-blue-400"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm text-zinc-50 shadow-md shadow-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/40"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
