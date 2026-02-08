"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Coffee Cups ☕", value: 1000, suffix: "+" },
  { label: "Lines of Code", value: 50000, suffix: "+" },
  { label: "Bugs Squashed 🐛", value: 500, suffix: "+" },
  { label: "Merge Conflicts 💥", value: 100, suffix: "+" },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <motion.div
        className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-lg dark:border-white/5 dark:bg-white/5 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
          >
            <div className="mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:to-cyan-400 md:text-5xl">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
