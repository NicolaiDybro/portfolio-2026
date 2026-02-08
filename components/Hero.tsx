"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import TypedText from "./TypedText";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  return (
    <section className="relative mx-auto flex min-h-[85vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-20">
      {/* Animated background gradient with parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="flex flex-col items-center gap-8 text-center"
        style={{ opacity, scale }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-blue-500/50 shadow-xl shadow-blue-500/20 dark:border-blue-400/50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/profile.jpg"
            alt="Nicolai"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent" />
        </motion.div>

        {/* Name & Title */}
        <div>
          <motion.h1
            className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 sm:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Nicolai!
          </motion.h1>
          <motion.p
            className="mt-4 text-xl font-medium text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TypedText
              texts={[
                "Software Engineer",
                "Computer Science Student",
                "Full Stack Developer",
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetween={2000}
            />
          </motion.p>
        </div>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-lg text-zinc-700 dark:text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I am a product-oriented Software Developer with a business mindset from bringing the latest tech to launching successful startups!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <MagneticButton
            href="#contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-8 text-sm font-medium text-zinc-50 shadow-lg shadow-blue-500/30 transition-all hover:from-blue-700 hover:to-cyan-700"
          >
            <Mail size={18} />
            Contact me
          </MagneticButton>
          <MagneticButton
            href="https://github.com/nicolhaq"
            className="underline-animate inline-flex h-11 items-center justify-center gap-2 rounded-md border border-blue-500/50 bg-transparent px-8 text-sm font-medium transition-colors hover:bg-blue-500/10"
          >
            <Github size={18} />
            GitHub
          </MagneticButton>
          <MagneticButton
            href="https://linkedin.com/in/nicolhaq"
            className="underline-animate inline-flex h-11 items-center justify-center gap-2 rounded-md border border-blue-500/50 bg-transparent px-8 text-sm font-medium transition-colors hover:bg-blue-500/10"
          >
            <Linkedin size={18} />
            LinkedIn
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 1.5 } }}
      >
        <ArrowDown className="text-zinc-400" size={24} />
      </motion.div>
    </section>
  );
}
