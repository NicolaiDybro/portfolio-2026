import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { skills } from "../data/skills";
import { displayUrl } from "../lib/utils";
import Dotted from "./Dotted";


function linkText(href: string) {
  return href.includes("github.com") ? "Source on GitHub" : `Visit ${displayUrl(href)}`;
}

/** The skills a project shows. */
function SkillTags({ project }: { project: Project }) {
  return (
    <ul aria-label="Skills shown" className="flex flex-wrap gap-1.5">
      {skills
        .filter((s) => project.skills.includes(s.id))
        .map((s) => (
          <li
            key={s.id}
            className="rounded-full border border-rule bg-ground px-2.5 py-1 text-[12.5px] font-semibold text-ink"
          >
            {s.name}
          </li>
        ))}
    </ul>
  );
}

function Media({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-rule bg-surface">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }
  if (project.snippet) {
    return (
      <figure className="overflow-hidden rounded-xl border border-rule bg-code text-[#d3dae4]">
        {project.snippetFile && (
          <figcaption className="border-b border-white/10 px-5 py-2.5 font-mono text-[12.5px] text-white/50">
            {project.snippetFile}
          </figcaption>
        )}
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[13.5px] leading-[1.7]">
          <code>{project.snippet}</code>
        </pre>
      </figure>
    );
  }
  return null;
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-rule bg-surface"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-2xl">
          <h2 id="projects-title" className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.035em]">
            Projects
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Client work first, then university projects from Aalborg University.
          </p>
        </div>

        <ol className="mt-14">
          {projects.map((p) => (
            <li
              key={p.id}
              id={p.id}
              className="grid scroll-mt-24 gap-8 border-t border-rule py-12 first:border-ink lg:grid-cols-12 lg:gap-12"
            >
              <div className="min-w-0 lg:col-span-5">
                <h3 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                  {p.title}
                </h3>
                {(p.label || p.client) && (
                  <p className="mt-2 text-sm font-semibold text-muted">
                    <Dotted
                      items={[
                        ...(p.label ? p.label.split(" · ") : []),
                        ...(p.client && p.client !== p.title ? [`for ${p.client}`] : []),
                      ]}
                    />
                  </p>
                )}
                <p className="mt-5 max-w-[56ch] text-[16.5px] leading-relaxed">{p.description}</p>
                <div className="mt-6">
                  <SkillTags project={p} />
                </div>
                <p className="mt-4 text-sm text-muted">
                  <Dotted items={p.tech} />
                </p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-6 inline-flex items-center gap-1.5 rounded text-[15px] font-semibold text-signal underline decoration-2 underline-offset-[5px]"
                  >
                    {linkText(p.href)}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-muted">
                    <Lock size={14} />
                    Private repository, happy to walk you through it
                  </p>
                )}
              </div>
              <div className="min-w-0 lg:col-span-7">
                <Media project={p} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
