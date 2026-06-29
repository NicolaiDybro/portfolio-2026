"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Intentional: sync mounted state after hydration to avoid SSR/client mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Check if dark class exists on html element
    const isDark = document.documentElement.classList.contains("dark");
    
    if (isDark) {
      setTheme("dark");
    } else {
      // Check localStorage or system preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = prefersDark ? "dark" : "light";
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="h-9 w-9" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="underline-animate relative flex h-9 w-9 items-center justify-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-blue-500/10 dark:hover:bg-blue-500/20"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon size={16} className="text-zinc-600 dark:text-zinc-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : -180,
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun size={16} className="text-zinc-600 dark:text-zinc-400" />
      </motion.div>
    </motion.button>
  );
}
