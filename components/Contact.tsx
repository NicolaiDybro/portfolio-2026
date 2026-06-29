"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";
import CopyEmailButton from "./CopyEmailButton";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nicolai160g@gmail.com",
    href: "mailto:nicolai160g@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/NicolaiDybro",
    href: "https://github.com/NicolaiDybro",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nicolai-dybro-jensen",
    href: "https://www.linkedin.com/in/nicolai-dybro-jensen-45aa22258/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-12 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
      >
        <div className="relative text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 shadow-lg shadow-blue-500/30"
          >
            <MessageSquare size={32} className="text-white" />
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Let&apos;s work together
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            Have a project in mind? Send me a message!
          </p>

          {/* Contact Form */}
          <ContactForm />

          {/* Divider */}
          <div className="my-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-white/10" />
            <span className="text-sm text-zinc-500">or</span>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-white/10" />
          </div>

          {/* Contact Methods */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "_blank" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 backdrop-blur-lg transition-all hover:border-blue-500/30 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <method.icon
                  size={20}
                  className="text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50"
                />
                <div className="text-left">
                  <div className="text-xs text-zinc-500 dark:text-zinc-500">
                    {method.label}
                  </div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {method.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <CopyEmailButton />
        </div>
      </motion.div>
    </section>
  );
}
