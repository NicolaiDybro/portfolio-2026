/** Work experience, from my LinkedIn profile. */
export type Job = {
  role: string;
  org: string;
  /** English name for a Danish organisation, when useful. */
  orgNote?: string;
  period: string;
  type: string;
  summary: string;
  current?: boolean;
};

export const jobs: Job[] = [
  {
    role: "Student Assistant, Software",
    org: "Geodatastyrelsen",
    orgNote: "Danish Geodata Agency",
    period: "Oct 2024 – now",
    type: "Part-time · Aalborg",
    summary:
      "Full-stack and frontend development, including the websites and prototypes on Labs Matriklen.",
    current: true,
  },
  {
    role: "Software Developer",
    org: "JP-Grønt ApS",
    period: "Oct 2023 – Oct 2024 · Dec 2025 – Apr 2026",
    type: "Part-time · Remote",
    summary:
      "Built parts of the operations platform at app.jpgroent.dk: sales and orders, inventory, and deliveries with route sheets.",
  },
  {
    role: "Private Tutor",
    org: "TopTutors and GoTutor",
    period: "Apr 2022 – Sep 2024",
    type: "Part-time",
    summary: "One-to-one tutoring for students.",
  },
];
