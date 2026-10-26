import { jobs } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-rule">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2
            id="experience-title"
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.035em]"
          >
            Experience
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Part-time work alongside my Computer Science studies at Aalborg University.
          </p>
        </div>

        <ol className="lg:col-span-8">
          {jobs.map((j) => (
            <li
              key={j.org + j.period}
              className="grid gap-x-8 gap-y-1 border-t border-rule py-6 first:border-ink sm:grid-cols-[12rem_1fr]"
            >
              <p className="text-sm font-semibold text-muted">
                {j.period.split(" · ").map((p) => (
                  <span key={p} className="block">
                    {p}
                  </span>
                ))}
                {j.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-signal-soft px-2 py-0.5 text-[13px] font-bold text-signal">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal" />
                    Current
                  </span>
                )}
              </p>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">{j.role}</h3>
                <p className="mt-0.5 font-semibold">
                  {j.org}
                  {j.orgNote && <span className="font-normal text-muted"> · {j.orgNote}</span>}
                </p>
                <p className="mt-0.5 text-sm text-muted">{j.type}</p>
                <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed">{j.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
