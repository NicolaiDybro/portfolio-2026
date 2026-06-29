"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#3b82f6", "#06b6d4", "#8b5cf6"],
    });

    fire(0.2, {
      spread: 60,
      colors: ["#3b82f6", "#06b6d4"],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#3b82f6", "#06b6d4", "#8b5cf6"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#3b82f6", "#06b6d4"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#8b5cf6", "#06b6d4"],
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const toastStyle = { borderRadius: "10px", background: "#333", color: "#fff" };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to send message");
      }

      triggerConfetti();
      toast.success("Message sent! 🎉 I'll get back to you as soon as possible!", {
        duration: 4000,
        style: toastStyle,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      const description = err instanceof Error ? err.message : "Please try again later.";
      toast.error(`Could not send your message. ${description}`, {
        duration: 5000,
        style: toastStyle,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <motion.form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-lg space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 backdrop-blur-lg transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 backdrop-blur-lg transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 backdrop-blur-lg transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
            placeholder="How can I help you?"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 text-sm font-medium text-zinc-50 shadow-lg shadow-blue-500/30 transition-all hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>
    </>
  );
}
