import { Github, Linkedin } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { EMAIL, GITHUB, LINKEDIN } from "../lib/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-band text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 md:pt-28">
        <h2
          id="contact-title"
          className="text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
        >
          Let&apos;s talk
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/70">
          Open to student jobs, internships and graduate roles. Email is the fastest way to
          reach me.
        </p>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded text-[clamp(1.4rem,3.6vw,2.4rem)] font-bold tracking-tight underline decoration-[#6688ff] decoration-[3px] underline-offset-[9px] [overflow-wrap:anywhere] hover:text-[#a9bdff]"
          >
            {EMAIL}
          </a>
          <CopyEmailButton />
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          <li>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/20 px-4 text-sm font-semibold transition-colors hover:border-white/60"
            >
              <Github size={17} />
              github.com/NicolaiDybro
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/20 px-4 text-sm font-semibold transition-colors hover:border-white/60"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </li>
        </ul>

        <footer className="mt-24 border-t border-white/15 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Nicolai Dybro Jensen
        </footer>
      </div>
    </section>
  );
}
