import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicolaidybro.com"),
  title: "Nicolai - Software Engineer & Computer Science Student",
  description: "Product-oriented Software Developer with a business mindset. Experienced in full-stack web development, backend systems, and multiple programming languages. From bringing the latest tech to launching successful startups.",
  keywords: ["Nicolai", "Software Engineer", "Software Developer", "Computer Science", "Next.js", "React", "TypeScript", "Python", "Java", "Web Development"],
  authors: [{ name: "Nicolai" }],
  creator: "Nicolai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicolaidybro.com",
    title: "Nicolai - Software Engineer & Computer Science Student",
    description: "Product-oriented Software Developer experienced in full-stack development, backend systems, and multiple programming languages.",
    siteName: "Nicolai's Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Nicolai - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolai - Software Engineer & Computer Science Student",
    description: "Product-oriented Software Developer experienced in full-stack development, backend systems, and multiple programming languages.",
    images: ["/profile.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
