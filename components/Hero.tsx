import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import DeskExperience from "./desk/DeskExperience";
import { EMAIL, GITHUB, LINKEDIN } from "../lib/site";

const secondaryBtn =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-rule bg-surface px-4 text-[15px] font-semibold transition-colors hover:border-ink";

export default function Hero() {
  return (
    <section id="top" className="pb-20 pt-6 md:pt-8 lg:pb-28">
      {/* compact intro, so the desk gets the stage */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div>
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-rule sm:h-16 sm:w-16">
              <Image
                src="/profile.jpg"
                alt="Portrait of Nicolai Dybro Jensen"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold leading-[1] tracking-[-0.035em]">
              Nicolai Dybro Jensen
              <span className="block text-signal">Software engineer.</span>
            </h1>
          </div>
          <p className="mt-4 max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.2rem)] leading-snug text-muted [text-wrap:pretty]">
            Computer Science at Aalborg University and student developer at the Danish Geodata
            Agency. I build complete systems, and some of them run in production for real clients.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
          <a
            href={`mailto:${EMAIL}`}
            className="col-span-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-signal px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a44d1]"
          >
            <Mail size={17} />
            Email me
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className={secondaryBtn}>
            <Github size={17} />
            GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className={secondaryBtn}>
            <Linkedin size={17} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* the desk: nearly full width */}
      <div className="mx-auto mt-6 w-full max-w-[1520px] px-2 sm:px-4">
        <DeskExperience />
      </div>
    </section>
  );
}
