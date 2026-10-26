import ThemeToggle from "./ThemeToggle";

const sections = [
  { label: "Desk", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-ground/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 rounded">
          {/* mark: three linked nodes */}
          <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden>
            <rect x="1" y="9" width="8" height="10" rx="2" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
            <rect x="19" y="9" width="8" height="10" rx="2" fill="var(--signal)" />
            <path d="M9 14 H19" stroke="var(--ink)" strokeWidth="1.8" />
          </svg>
          <span className="text-[16px] font-bold tracking-tight">Nicolai Dybro Jensen</span>
        </a>

        <nav aria-label="Sections" className="flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="hidden rounded-md px-3 py-1.5 text-sm font-semibold text-muted transition-colors hover:bg-surface hover:text-ink sm:block"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-ink px-3 py-1.5 text-sm font-semibold text-ground transition-opacity hover:opacity-85"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
