# nicolaidybro.com

Portfolio of Nicolai Dybro Jensen, software engineer and Computer Science student at Aalborg University.

The front page is an interactive 3D desk. Each object opens part of the story: the monitor shows projects, the CV clipboard shows experience, the AAU mug is about me, the books are skills, the phone is contact, and the microgreens tell the JP-Grønt client story. The same content is also on the page below the desk, and every object has a plain button, so nothing depends on using the 3D scene.

## Stack

- Next.js (App Router) and TypeScript, deployed on Vercel
- Tailwind CSS v4
- three.js through `@react-three/fiber` and `@react-three/drei` for the desk
- Schibsted Grotesk and JetBrains Mono via `next/font`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run lint` and `npm run build` should both pass before pushing.

## Where things live

| What | Where |
| --- | --- |
| Projects | `data/projects.ts` |
| Skills and the full tech list | `data/skills.ts` |
| Work experience | `data/experience.ts` |
| Email, GitHub and LinkedIn links | `lib/site.ts` |
| Desk objects, labels and camera positions | `components/desk/stops.ts` |
| The 3D scene | `components/desk/DeskCanvas.tsx` |
| Panels and buttons around the scene | `components/desk/DeskExperience.tsx` |
| Design system | `DESIGN.md` |
| Product context | `PRODUCT.md` |

To add a project, add an entry to `data/projects.ts`. It shows up in the Projects section, in the monitor panel and in the skill lists automatically.

`/G/*` is rewritten to the separate gift-card project (see `next.config.ts`).
