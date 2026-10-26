import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
});

/* Direction contract (Impeccable). Kept in the built HTML so the finish review can audit it. */
const DIRECTION_CONTRACT = `
THESIS: The portfolio is my desk in 3D. Each object opens a part of the story (monitor: projects, mug: about, books: skills, phone: contact, microgreens: a client story); it refuses the centred-avatar hero and the icon-card grid, and never needs 3D controls.
OWN-WORLD: A calm studio. Cool light ground, a wooden desk lit from above, white surfaces, one signal blue for actions, labelled objects, Schibsted Grotesk.
STORY: Anyone, technical or not, reads name and role, clicks a labelled object, gets a plain-language answer, and emails.
FIRST VIEWPORT: Name and Software engineer at display scale, one plain line, Email/GitHub/LinkedIn. Below, the desk scene with floating labels and the same choices as plain buttons.
FORM: 3D desk, user-chosen after re-roll 2, seed 5dc58106. Signature: clicking an object glides the camera to it and opens its panel.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
`;

export const viewport: Viewport = {
  themeColor: "#f4f5f7",
};

const TITLE = "Nicolai Dybro Jensen · Software engineer";
const DESCRIPTION =
  "Software engineer and Computer Science student at Aalborg University, working part-time at the Danish Geodata Agency. I build complete systems, from interface to database. Explore my desk in 3D.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nicolaidybro.com"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Nicolai Dybro Jensen", "Software Engineer", "Software Developer", "Computer Science", "Aalborg University", "Full-stack", "Next.js", "TypeScript", "Rust"],
  authors: [{ name: "Nicolai Dybro Jensen", url: "https://nicolaidybro.com" }],
  creator: "Nicolai Dybro Jensen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicolaidybro.com",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Nicolai Dybro Jensen",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nicolai Dybro Jensen, software engineer, and his desk in 3D" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${schibsted.variable} ${jetbrains.variable} antialiased`}
      >
        <div hidden dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
