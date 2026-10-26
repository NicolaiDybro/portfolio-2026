import { skills, technologies } from "../data/skills";
import { projects } from "../data/projects";

const categories = [...new Set(technologies.map((t) => t.category))];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-rule">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="skills-title"
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.035em]"
          >
            Skills
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            What I can help with, and where I have done it.
          </p>
        </div>

        <dl className="mt-12 grid gap-x-12 border-t border-ink md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.id} className="border-b border-rule py-6">
              <dt className="text-xl font-extrabold tracking-tight">{s.name}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed">{s.description}</dd>
              <dd className="mt-2 text-sm text-muted">
                <span className="font-semibold text-ink">Used in </span>
                {projects
                  .filter((p) => p.skills.includes(s.id))
                  .map((p) => p.shortTitle)
                  .join(", ")}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <h3 className="text-xl font-extrabold tracking-tight lg:col-span-3">Everything I work with</h3>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {categories.map((cat) => (
              <div key={cat}>
                <dt className="text-sm font-bold text-muted">{cat}</dt>
                <dd className="mt-1 text-[15px] font-semibold leading-relaxed">
                  {technologies
                    .filter((t) => t.category === cat)
                    .map((t) => t.name)
                    .join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
