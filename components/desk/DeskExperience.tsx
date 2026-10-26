"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MousePointerClick } from "lucide-react";
import { stops, type StopId } from "./stops";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";
import { jobs } from "../../data/experience";
import { EMAIL, GITHUB, LINKEDIN } from "../../lib/site";
import CopyEmailButton from "../CopyEmailButton";

const DeskCanvas = dynamic(() => import("./DeskCanvas"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full place-items-center text-sm font-semibold text-muted">
      Setting up the desk…
    </div>
  ),
});

function Panel({ id, onClose }: { id: StopId; onClose: () => void }) {
  const stop = stops.find((s) => s.id === id)!;
  const jp = projects.find((p) => p.id === "jpgroent-platform");

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-rule px-5 py-3.5">
        <h3 className="text-xl font-extrabold tracking-tight">{stop.label}</h3>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-muted transition-colors hover:bg-ground hover:text-ink"
        >
          <ArrowLeft size={16} />
          Back to the desk
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        {id === "projects" && (
          <>
            <p className="text-[15px] leading-relaxed text-muted">
              Things I have built, for clients and at university. Pick one to read more.
            </p>
            <ul className="mt-4 space-y-2">
              {projects.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-rule px-3.5 py-2.5 transition-colors hover:border-signal"
                  >
                    <span>
                      <span className="block font-bold leading-tight group-hover:text-signal">{p.title}</span>
                      <span className="mt-0.5 block text-[13px] text-muted">
                        {p.client ? `For ${p.client}` : p.label?.replace(/ · \d{4}$/, "")}
                      </span>
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-signal" />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {id === "experience" && (
          <>
            <p className="text-[15px] leading-relaxed text-muted">
              Where I have worked alongside my studies.
            </p>
            <ol className="mt-4 space-y-4 border-l-2 border-rule pl-4">
              {jobs.map((j) => (
                <li key={j.org + j.period} className="relative">
                  <span
                    aria-hidden
                    className={`absolute -left-[23px] top-1.5 h-3 w-3 rounded-full border-2 border-surface ${j.current ? "bg-signal" : "bg-faint"}`}
                  />
                  <p className="font-bold leading-tight">{j.role}</p>
                  <p className="text-[14.5px] font-semibold">
                    {j.org}
                    {j.orgNote && <span className="font-normal text-muted"> ({j.orgNote})</span>}
                  </p>
                  <p className="mt-0.5 text-[13px] text-muted">
                    {j.period.split(" · ").map((p) => (
                      <span key={p} className="block">
                        {p}
                      </span>
                    ))}
                    <span className="block">{j.type}</span>
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed">{j.summary}</p>
                </li>
              ))}
            </ol>
          </>
        )}

        {id === "about" && (
          <>
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-rule">
                <Image src="/profile.jpg" alt="Portrait of Nicolai Dybro Jensen" fill sizes="80px" className="object-cover" />
              </div>
              <p className="text-lg font-bold leading-snug">
                Hi, I&apos;m Nicolai.
                <span className="block text-[15px] font-normal text-muted">
                  Software engineer in Aalborg, Denmark
                </span>
              </p>
            </div>
            <p className="mt-5 text-[16px] leading-relaxed">
              I study Computer Science at Aalborg University and work part-time as a student
              developer at the Danish Geodata Agency. I build software from start to finish: what
              you see on the screen, the logic behind it, and the database that stores it all.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed">
              Some of my work is used by real clients, like a business system for a Danish
              microgreen producer and prototypes for the Danish Geodata Agency.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed">
              I like products that are useful, and I bring a business mindset to how they are
              built.
            </p>
          </>
        )}

        {id === "skills" && (
          <>
            <p className="text-[15px] leading-relaxed text-muted">
              What I can help with, and the projects where I have done it.
            </p>
            <ul className="mt-4 divide-y divide-rule">
              {skills.map((s) => (
                <li key={s.id} className="py-3">
                  <p className="font-bold">{s.name}</p>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{s.description}</p>
                  <p className="mt-1.5 text-[13px] font-semibold">
                    Used in:{" "}
                    {projects
                      .filter((p) => p.skills.includes(s.id))
                      .map((p) => p.shortTitle)
                      .join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}

        {id === "contact" && (
          <>
            <p className="text-[16px] leading-relaxed">
              I&apos;m open to student jobs, internships and graduate roles. Email is the fastest
              way to reach me.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-signal px-5 font-semibold text-white transition-colors hover:bg-[#1a44d1]"
            >
              <Mail size={18} />
              Email me
            </a>
            <p className="mt-3 break-all text-center text-[15px] text-muted">{EMAIL}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 [&>button]:border-rule [&>button]:text-ink [&>button:hover]:bg-ink [&>button:hover]:text-ground">
              <CopyEmailButton />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-rule font-semibold transition-colors hover:border-ink">
                <Linkedin size={17} />
                LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-rule font-semibold transition-colors hover:border-ink">
                <Github size={17} />
                GitHub
              </a>
            </div>
          </>
        )}

        {id === "greens" && jp && (
          <>
            <p className="text-[16px] leading-relaxed">
              Yes, real microgreens. One of my clients is JP-Grønt, a Danish producer of
              microgreens.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed">
              I built parts of the system they use to run the business every day: taking sales
              and orders, keeping track of inventory, and planning deliveries with route sheets for
              the drivers.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={`#${jp.id}`} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-signal px-4 font-semibold text-white transition-colors hover:bg-[#1a44d1]">
                Read about the project
                <ArrowRight size={16} />
              </a>
              {jp.href && (
                <a href={jp.href} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-rule px-4 font-semibold transition-colors hover:border-ink">
                  Visit app.jpgroent.dk
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function DeskExperience() {
  const [active, setActive] = useState<StopId | null>(null);
  const [env, setEnv] = useState({ reduceMotion: false, mobile: false, dark: false });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const read = () =>
      setEnv({
        reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        mobile: window.matchMedia("(max-width: 767px)").matches,
        dark: document.documentElement.classList.contains("dark"),
      });
    const raf = requestAnimationFrame(read);
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", read);
    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      window.removeEventListener("resize", read);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const select = (id: StopId) => {
    setActive(id);
    // on phones the panel is under the scene: bring it into view
    if (window.matchMedia("(max-width: 767px)").matches) {
      requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
    }
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl border border-rule bg-[radial-gradient(120%_90%_at_50%_0%,var(--stage-top),var(--stage-bottom))]">
        <div className="h-[400px] sm:h-[560px] lg:h-[min(80vh,820px)] lg:min-h-[600px]">
          <DeskCanvas active={active} onSelect={select} {...env} />
        </div>

        <p className={`pointer-events-none absolute left-4 top-4 inline-flex transition-opacity duration-300 ${active ? "opacity-0" : ""}`} >
          <span className="inline-flex items-center gap-2 rounded-full bg-surface/85 px-3 py-1.5 text-[13px] font-semibold text-muted backdrop-blur sm:ml-1 sm:mt-1">
          <MousePointerClick size={15} aria-hidden />
          Click something on the desk
          </span>
        </p>

        {/* desktop: panel slides in over the right side of the scene */}
        <div
          className={`absolute inset-y-4 right-4 hidden w-[380px] overflow-hidden rounded-xl border border-rule bg-surface shadow-[0_24px_48px_-24px_rgb(0_0_0/0.45)] transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:block ${
            active ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
          }`}
          aria-hidden={!active}
        >
          {active && <Panel id={active} onClose={() => setActive(null)} />}
        </div>
      </div>

      {/* phones: panel under the scene */}
      {active && (
        <div ref={panelRef} className="mt-4 max-h-[70vh] overflow-hidden rounded-xl border border-rule bg-surface md:hidden">
          <Panel id={active} onClose={() => setActive(null)} />
        </div>
      )}

      {/* the same choices as plain buttons, for anyone who prefers them */}
      <nav aria-label="Explore" className="mx-auto mt-4 flex max-w-6xl flex-wrap justify-center gap-2 px-2">
        {stops.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => select(s.id)}
            aria-pressed={active === s.id}
            className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${
              active === s.id
                ? "border-signal bg-signal text-white"
                : "border-rule bg-surface hover:border-ink"
            }`}
          >
            {s.label}
            <span className={active === s.id ? "text-white/75" : "text-muted"}>{s.hint}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
