import type { SkillId } from "./skills";

export type Project = {
  id: string;
  title: string;
  /** Short title used on the record label and in credits. */
  shortTitle: string;
  /** Skills this project proves (credited in the liner notes). */
  skills: SkillId[];
  /** Set for client work that is live in production (side A of the tracklist). */
  client?: string;
  /** File name shown above the code snippet. */
  snippetFile?: string;
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
    shortTitle: "JP-Grønt Platform",
    skills: ["web", "backend", "data"],
    client: "JP-Grønt",
    title: "JP-Grønt Operations Platform",
    label: "Client project",
    description:
      "Business platform for a Danish microgreen producer that runs its day-to-day operations. I built the sales and order flow, inventory, and deliveries with route sheets.",
    href: "https://app.jpgroent.dk",
    image: "/jpgroent.png",
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "NextAuth"],
  },
  {
    id: "plccompare",
    shortTitle: "PlcCompare",
    skills: ["lang", "backend", "web", "ops"],
    snippetFile: "Grammars/Siemens.g4",
    title: "PlcCompare",
    label: "AAU · P6 · 2026",
    client: "Eltronic",
    description:
      "Tool that parses Siemens SCL and Rockwell Structured Text PLC programs into a shared canonical AST and shows a semantic side-by-side diff, with source files pulled straight from a Git repository.",
    snippet: `ifStatement
    : IF expr THEN statement*
      (ELSIF expr THEN statement*)*
      (ELSE statement*)?
      END_IF ';'?
    ;`,
    tech: ["C#", "ASP.NET Core", "Blazor", "ANTLR", "Docker"],
  },
  {
    id: "wrench",
    shortTitle: "Wrench",
    skills: ["lang"],
    snippetFile: "pipeline.wrench",
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
    shortTitle: "Labs Matriklen",
    skills: ["web"],
    client: "Danish Geodata Agency",
    title: "Labs Matriklen",
    description:
      "Website and prototypes developed for the Danish Geodata Agency.",
    href: "https://labs.matriklen.dk/",
    image: "/matriklenlabs.png",
    tech: ["Svelte", "Vue", "OpenLayers"],
  },
  {
    id: "wound-age",
    shortTitle: "Wound Age ML",
    skills: ["ml"],
    snippetFile: "modeltest/config.py",
    title: "Wound Age Classification",
    label: "AAU · P5 · 2025",
    description:
      "Machine learning project with an external veterinary researcher: classifying the age of wounds on pigs from experimental data. Random Forest, k-NN and neural networks compared across imputation, scaling, feature selection and hyperparameter tuning experiments.",
    snippet: `DATA_CONFIG = {
    'group_column': 'Pig ID',
    'target_column': 'Wound age',
    'classification_threshold': 20,
    'use_cross_validation': True,
    'cv_folds': 5,
}`,
    tech: ["Python", "scikit-learn", "TensorFlow", "pandas"],
  },
  {
    id: "retfaerdigsag",
    shortTitle: "Retfærdigsag.dk",
    skills: ["web"],
    client: "Retfærdigsag.dk",
    title: "Retfærdigsag.dk",
    description: "Website for the organization Retfærdigsag.dk.",
    href: "https://retfærdigsag.dk/",
    image: "/retfærdigsag.png",
    tech: ["Next.js", "Tailwind", "Sanity.io"],
  },
  {
    id: "jpgroent-mms",
    shortTitle: "Micro-green MMS",
    skills: ["web", "backend", "data", "ops"],
    snippetFile: "BatchController.java",
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
    shortTitle: "Project-Bot",
    skills: ["backend", "data", "integrations", "ops"],
    title: "Project-Bot",
    label: "AAU · P2 · 2024",
    description:
      "Discord bot that keeps student project groups in sync, with GitHub, Trello and Google Calendar notifications configured from a web dashboard.",
    href: "https://github.com/P2-Discord-Bot-Maker/Public-Project-Bot",
    snippetFile: "commands/trello/create.js",
    snippet: `export const command = {
  data: new Discord.SlashCommandBuilder()
    .setName('tcreate')
    .setDescription('Create on Trello Board')
    .addSubcommand(subcommand =>
      subcommand
        .setName('card')
        .setDescription('Create a card on Trello Board')`,
    tech: ["Node.js", "discord.js", "Express", "MySQL", "Docker"],
  },
];
