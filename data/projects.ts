export type Project = {
  id: string;
  title: string;
  /** Short context line shown above the title, e.g. "AAU · P4 · 2025". */
  label?: string;
  description: string;
  href?: string;
  image?: string;
  /** Code from the project, shown as the card cover when there is no screenshot. */
  snippet?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "jpgroent-platform",
    title: "JP-Grønt Operations Platform",
    label: "Client project",
    description:
      "Business platform for a Danish microgreen producer: sales and orders, production planning, inventory, deliveries and route sheets, invoicing through Dinero, and automatic label printing via a Home Assistant add-on.",
    href: "https://app.jpgroent.dk",
    image: "/jpgroent.png",
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "NextAuth"],
  },
  {
    id: "wrench",
    title: "Wrench",
    label: "AAU · P4 · 2025",
    description:
      "A statically typed programming language for data processing, built in Rust. CSV files are imported as typed tables and transformed through pipe chains, with a custom lexer, grammar, type checker and interpreter.",
    href: "https://github.com/AAUP4-Projekt/wrench",
    snippet: `async_import("stock.csv", table(int id))
    pipe filter_even_id()
    pipe double_id(1)
    pipe sum()
    pipe print();`,
    tech: ["Rust", "LALRPOP", "Logos"],
  },
  {
    id: "labs-matriklen",
    title: "Labs Matriklen",
    description:
      "Website and prototypes developed for the Danish Geodata Agency.",
    href: "https://labs.matriklen.dk/",
    image: "/matriklenlabs.png",
    tech: ["Svelte", "Vue", "OpenLayers"],
  },
  {
    id: "retfaerdigsag",
    title: "Retfærdigsag.dk",
    description: "Website for the organization Retfærdigsag.dk.",
    href: "https://retfærdigsag.dk/",
    image: "/retfærdigsag.png",
    tech: ["Next.js", "Tailwind", "Sanity.io"],
  },
  {
    id: "jpgroent-mms",
    title: "Micro-green Management System",
    label: "AAU · P3 · 2024",
    description:
      "Production management system built for JP-Grønt as a semester project: task calendar, 2D overview of the growing racks, batch tracking and user roles, backed by a Spring Boot REST API.",
    href: "https://github.com/P3-Projekt/jp-frontend",
    snippet: `@PostMapping("/Batch")
@Operation(
    summary = "Create new Batch")
public BatchDto createBatch(
    @Valid @RequestBody
    CreateBatchRequest request) {`,
    tech: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "JWT"],
  },
  {
    id: "project-bot",
    title: "Project-Bot",
    label: "AAU · P2 · 2024",
    description:
      "Discord bot that keeps student project groups in sync, with GitHub, Trello and Google Calendar notifications configured from a web dashboard.",
    href: "https://github.com/P2-Discord-Bot-Maker/Public-Project-Bot",
    image: "/aau.png",
    tech: ["Node.js", "discord.js", "Express", "MySQL", "Docker"],
  },
];
