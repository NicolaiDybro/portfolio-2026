# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Employers and recruiters hiring for student jobs, internships or a first full-time role. They skim many portfolios quickly, want to see what Nicolai has actually built and shipped, and then get in touch.

## Product Purpose
Personal portfolio for Nicolai Dybro Jensen, Computer Science student at Aalborg University (AAU). Success means a recruiter understands within seconds that he builds software real businesses run on, can verify it through the projects, and contacts him without friction.

## Positioning
Unlike most student portfolios, the headline work is in production for real clients: the JP-Grønt operations platform runs a Danish microgreen producer day to day, and Labs Matriklen was built for the Danish Geodata Agency. University projects (a Rust programming language, a Spring Boot production system, a Discord bot) back this up with depth.

## Capabilities and Constraints
- Next.js (App Router) on Vercel, Tailwind CSS v4, framer-motion, lucide-react.
- Project data lives in `data/projects.ts` (title, optional label, description, link, image or code snippet, tech).
- `/G/*` is rewritten to the separate gavekort project and must keep working.
- `/api/contact` exists; a contact form is optional. Contacting must stay easy (email, GitHub, LinkedIn visible).
- Light and dark theme with a manual toggle must stay.
- Site language is English.

## Brand Commitments
- Name: Nicolai (Nicolai Dybro Jensen). Domain nicolaidybro.com.
- Profile photo `/public/profile.jpg` stays.

## Evidence on Hand
- Project screenshots: `/public/jpgroent.png`, `/public/matriklenlabs.png`, `/public/retfærdigsag.png`, `/public/aau.png`.
- Code snippets for Wrench and the Micro-green Management System in `data/projects.ts`.
- No testimonials, client quotes or metrics exist. Do not invent any.

## Product Principles
1. Shipped work first: lead with what runs in production for real clients.
2. Proof over claims: every skill should trace back to a project.
3. Fast to scan: a recruiter should get the picture without scrolling far.
4. Contact is always one click away.
