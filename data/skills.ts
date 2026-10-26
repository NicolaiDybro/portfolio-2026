/**
 * Skills, credited like album personnel: each one lists the tracks
 * (projects) it appears on, via `skills` on each project.
 */
export type SkillId = "web" | "backend" | "data" | "lang" | "ml" | "integrations" | "ops";

export type Skill = {
  id: SkillId;
  name: string;
  description: string;
  tech: string[];
};

export const skills: Skill[] = [
  {
    id: "web",
    name: "Full-Stack Web",
    description:
      "Next.js, React, TypeScript and Tailwind CSS, plus Svelte, Vue and Blazor. From internal tools to production apps.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Svelte", "Vue", "Blazor"],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    description:
      "Node.js, Express, tRPC, Java with Spring Boot and C# with ASP.NET Core. REST APIs, validation and authentication.",
    tech: ["Node.js", "Express", "tRPC", "Spring Boot", "ASP.NET Core"],
  },
  {
    id: "data",
    name: "Databases",
    description:
      "PostgreSQL and MySQL, with data models built around real business workflows.",
    tech: ["PostgreSQL", "MySQL"],
  },
  {
    id: "lang",
    name: "Languages & Compilers",
    description:
      "Rust and ANTLR: lexers, parser grammars, abstract syntax trees, type checking and interpreters.",
    tech: ["Rust", "LALRPOP", "Logos", "ANTLR"],
  },
  {
    id: "ml",
    name: "Machine Learning",
    description:
      "Python, scikit-learn and TensorFlow. Preprocessing, feature selection, hyperparameter tuning and honest model evaluation.",
    tech: ["Python", "scikit-learn", "TensorFlow", "pandas"],
  },
  {
    id: "integrations",
    name: "Integrations & Automation",
    description:
      "Discord, GitHub, Trello and Google Calendar integrations, with notifications configured from a web dashboard.",
    tech: ["discord.js", "GitHub API", "Trello API", "Google Calendar API"],
  },
  {
    id: "ops",
    name: "DevOps & Deployment",
    description:
      "Docker, GitHub Actions, Jenkins and Vercel, with staging-to-production workflows.",
    tech: ["Docker", "GitHub Actions", "Jenkins", "Vercel"],
  },
];


export const technologies = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "Blazor", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "tRPC", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MySQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "scikit-learn", category: "Machine learning" },
  { name: "TensorFlow", category: "Machine learning" },
  { name: "pandas", category: "Machine learning" },
  { name: "Docker", category: "Tooling" },
  { name: "Git", category: "Tooling" },
  { name: "Vercel", category: "Tooling" },
];
