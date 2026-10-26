---
name: Nicolai Dybro Jensen
description: A software engineer's portfolio staged as his own desk in 3D; click an object, get a plain answer.
colors:
  signal: "#2457f5"
  signal-deep: "#1a44d1"
  signal-soft: "#e5ecff"
  ground: "#f4f5f7"
  surface: "#ffffff"
  ink: "#0f1115"
  muted: "#555b66"
  faint: "#8a909a"
  rule: "#d8dbe0"
  band: "#0f1115"
  code: "#0c0e12"
  stage-top: "#f3f6fd"
  stage-bottom: "#dde3ee"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  hero-name:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  title-lg:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.43
  caption:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  stage: "24px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  gap-tight: "8px"
  section: "80px"
  section-md: "112px"
  container: "72rem"
  stage-max: "1520px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: "44px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  nav-link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  desk-choice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "40px"
  desk-choice-active:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.surface}"
  desk-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  desk-label-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.surface}"
  desk-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    width: "380px"
  skill-tag:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  status-chip:
    backgroundColor: "{colors.signal-soft}"
    textColor: "{colors.signal}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
---

# Design System: Nicolai Dybro Jensen

## Overview

**Creative North Star: "The Calm Studio Desk"**

The site is a quiet studio with one object in it worth looking at: a wooden desk, lit from above, rendered in 3D near the full width of the page. Everything around the desk is cool, pale and flat: a blue-grey ground, white surfaces, hairline rules, near-black ink. The desk carries the warmth (oak grain, a mug, coloured books, a tray of microgreens); the interface around it stays neutral so the scene reads as the subject.

Interaction is "click a labelled thing, get a plain answer". Every object on the desk has a floating pill label that is a real button, and the same choices repeat underneath as ordinary pill buttons. Selecting one glides the camera to the object and slides a white panel in over the right side of the scene. Below the desk the page becomes a conventional, well-ruled document: Experience, Projects, Skills, then a dark contact band.

Density is moderate and type-led. Headings are heavy (800) and tightly tracked; body copy is plain 16px with generous leading. One blue does all the signalling.

**Key Characteristics:**
- Cool neutral ground with white surfaces; warmth lives only in the 3D props.
- A single signal blue for actions, selection, current state and links.
- Schibsted Grotesk at weight 800 with negative tracking for every heading level.
- Sections separated by 1px hairline rules, with an ink-coloured rule on the first row of every list.
- Pills for choices and tags, 8px corners for actions, 12px for containers, 24px for the stage.
- Motion is confined to the desk: camera glide, object lift, panel slide.

## Colors

A cool, near-monochrome studio palette with one saturated blue; the 3D props are the only place other hues appear.

### Primary
- **Signal Blue** (`signal`): the one action colour. Primary buttons ("Email me", "Back to the front page"), the second line of the hero name ("Software engineer."), active desk choices, hovered desk labels, project links (text plus 2px underline), list-row hover borders, text selection, and the 3px focus outline. In dark mode it lifts to #6688ff.
- **Deep Signal** (`signal-deep`): hover state of filled Signal buttons only. Currently hard-coded in four places rather than a variable.
- **Signal Wash** (`signal-soft`): the background of the "Current" status chip. Dark mode #18234a.

### Neutral
- **Studio Ground** (`ground`): page background, sticky header (at 85% with backdrop blur), skill-tag fill, ghost-button hover fill. Dark #0d0f12.
- **Paper White** (`surface`): panels, cards, the Projects section band, secondary buttons, desk labels. Dark #15181d.
- **Ink** (`ink`): all primary text, the header Contact button fill, and the heavy first rule on every list. Dark #e8eaed.
- **Muted Slate** (`muted`): lead paragraphs, metadata, dates, hints, inactive nav. Dark #9ba1ab.
- **Faint Slate** (`faint`): past-job timeline dots only. Dark #6b717b.
- **Hairline** (`rule`): every border and divider. Dark #272b32.
- **Night Band** (`band`): the contact section background, with white text at 100/70/50% for headline/body/footer. Dark #15181d.
- **Code Black** (`code`): code-snippet figure background, text #d3dae4, caption white at 50%.
- **Stage Light / Stage Floor** (`stage-top`, `stage-bottom`): the radial gradient behind the 3D scene, lit from the top centre (`radial-gradient(120% 90% at 50% 0%, stage-top, stage-bottom)`). Dark #1b2233 / #0c0f15.

### Named Rules
**The One Signal Rule.** In the interface, Signal Blue is the only chromatic colour. If a UI element is blue, it is clickable, selected, current or focused; nothing decorative is blue.

**The Props Keep Their Colours Rule.** The One Signal Rule governs the interface, not the desk. The 3D objects carry their own material colours (oak #b48a62 legs, a yellow #f2b72e and red #e5484d book, green microgreens #4f9d3a / #5cae45, a dark monitor #202227). Do not neutralise props to fit the UI palette; do not lift prop colours into the UI.

## Typography

**Display Font:** Schibsted Grotesk (with system-ui, sans-serif)
**Body Font:** Schibsted Grotesk
**Label/Mono Font:** JetBrains Mono (400, 600), for code snippets only

**Character:** One grotesque does everything, with hierarchy carried by weight and tracking rather than by a second face. Headings are blunt and dense (800, tracked -0.025 to -0.04em); body is unadorned.

### Hierarchy
- **Display** (800, clamp 2.75 to 5rem, 0.95, -0.04em): closing statements only: "Let's talk" on the contact band and the 404 headline.
- **Headline** (800, clamp 2.25 to 3.5rem, 1, -0.035em): section titles (Experience, Projects, Skills).
- **Hero Name** (800, clamp 2 to 3.6rem, 1, -0.035em): the name plus role in the first viewport, with the role line in Signal Blue. Deliberately smaller than section headlines so the desk below gets the stage.
- **Title Large** (800, clamp 1.6 to 2.1rem, 1.1, -0.025em): project titles.
- **Title** (800, 1.25rem, tracking-tight): job roles, skill names, the desk panel title, sub-section heads.
- **Lead** (400, 17px, 1.625, Muted Slate): the one-sentence intro under each section headline.
- **Body** (400, 16 to 16.5px, 1.625): descriptions and panel prose, capped at 56 to 60ch.
- **Label** (600, 14 to 15px): buttons, nav, desk labels, metadata lines.
- **Caption** (400, 13px, Muted Slate): sub-lines inside panel lists.
- **Mono** (400, 13.5px, 1.7): code snippets; captions 12.5px at 50% white.

### Named Rules
**The Weight Not Face Rule.** Hierarchy comes from Schibsted Grotesk's 800 against 400/600; never introduce a second display face.

**The Sentence Case Rule.** All labels, buttons, headings and nav are sentence case at normal tracking. The system has no uppercase or letter-spaced small text.

## Layout

A single centred column (max 72rem, gutters 16px rising to 24px from 640px) holds the header, hero intro and every content section. The desk stage breaks out to 1520px with 8 to 16px gutters, so the scene is the widest thing on the page.

Sections are stacked full-bleed bands divided by a 1px top hairline, with 80px vertical padding rising to 112px from 768px. Alternate bands switch ground (Projects sits on Paper White; Contact on Night Band). Inside sections, the 12-column grid appears from 1024px: Experience 4/8 (intro left, list right), Projects 5/7 (text left, media right), Skills a two-column definition list. Lists are ruled rows (`border-top` hairline per row, the first row's rule in Ink).

The stage is 400px tall on phones, 560px from 640px, and `min(80vh, 820px)` (at least 600px) from 1024px. Below 768px the desk panel moves out of the scene and renders as a block under it (max 70vh, scrolls into view on select). Breakpoints follow Tailwind defaults: 640 / 768 / 1024.

Anchor jumps offset by 4.5rem to clear the 56px sticky header.

## Elevation & Depth

The page is flat; depth belongs to the desk. Surfaces separate by tone (Ground vs. Paper White) and hairline borders, not shadows. Only two things float, and both float over the 3D scene: the desk panel and the desk labels. The scene itself provides real depth with a top-right directional key light casting soft shadows, a warm/cool hemisphere fill, a faint blue screen glow (#9db5ff), and a contact shadow under the desk.

### Shadow Vocabulary
- **Panel Drop** (`box-shadow: 0 24px 48px -24px rgb(0 0 0 / 0.45)`): the desk panel sliding over the scene.
- **Label Lift** (`box-shadow: 0 6px 16px -8px rgb(0 0 0 / 0.45)`): floating object labels, so they read against wood and screen.

### Named Rules
**The Only Over The Scene Rule.** Shadows exist only on elements that hover over the 3D canvas. Anything in the document flow is flat, separated by tone and hairlines.

## Shapes

Soft, consistent rounding sized to the element's role: 6px for compact controls (nav links, ghost buttons, theme toggle), 8px for full-size actions and list rows, 12px for containers (desk panel, project media, code figures), 24px for the stage itself, and fully round pills for every choice, tag, chip and floating label. Avatars are circles with a hairline ring. Borders are always 1px Hairline; Ink replaces Hairline as the hover border on neutral controls. The focus ring is a 3px Signal outline, offset 3px, 4px radius.

## Components

### Buttons
Plain, solid, label-weight; one filled blue action per group.
- **Shape:** gently rounded (8px), 44px tall (48px for the single CTA inside a panel or on the 404).
- **Primary:** Signal Blue fill, white 15px/600 label, 20px side padding, optional 17px leading icon.
- **Hover / Focus:** fill shifts to Deep Signal via colour transition; focus is the global Signal outline.
- **Secondary:** Paper White fill, 1px Hairline border, Ink label; hover turns the border Ink.
- **Ghost (panel "Back to the desk", theme toggle):** no fill, Muted label, 6px radius; hover fills with Ground (or Surface in the header) and text goes Ink.
- **On Night Band:** transparent with a white/20 border, hover white/60; the copy-address button inverts to a white fill on hover.

### Chips
- **Desk choice:** full pill, 40px tall, Paper White with Hairline border, Ink label plus a Muted plain-language hint ("What I have built"). Active (`aria-pressed`) fills Signal with white text and the hint at white/75.
- **Skill tag:** small pill, Ground fill, Hairline border, 12.5px/600 Ink.
- **Status ("Current"):** Signal Wash pill, 12px/700 Signal text, with a 6px Signal dot.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Paper White.
- **Shadow Strategy:** none in flow; Panel Drop only when over the scene.
- **Border:** 1px Hairline.
- **Internal Padding:** 20px; panel header 20px x 14px with a hairline beneath.

### Navigation
Sticky 56px header on Ground at 85% with backdrop blur and a bottom hairline. Left: the three-node mark (outlined Ink node, filled Signal node, joining line) plus the name at 16px/700. Right: section links at 14px/600 Muted, hover to Surface fill and Ink text, hidden below 640px; then a solid Ink "Contact" button (Ground text, hover 85% opacity) and the theme toggle.

### Desk Stage (signature)
The 3D desk sits in a 24px-rounded, hairline-bordered frame on the stage gradient. Labelled objects (monitor, staff badge, mug, books, phone, microgreens) each own a floating pill label, a real `<button>`, that swaps to Signal fill and rises 2px on hover while its object lifts slightly in the scene. Clicking glides the camera with exponential damping (rate 4 per second) to a framing that leaves the object left of centre, and slides the 380px panel in from the right over 500ms on the expo-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`). At rest the camera drifts with the pointer for a light parallax. Escape or "Back to the desk" returns home. Reduced motion makes the camera cut instead of glide and removes parallax. A muted pill hint ("Click something on the desk") sits top-left and fades out once a panel is open.

### Ruled Lists
Experience, Projects and Skills are ruled rows, not cards: each row has a hairline top border, the first row's border is Ink, and rows breathe at 24px (jobs, skills) to 48px (projects) vertical padding. Inline metadata uses middle-dot separators at 50% opacity.

## Do's and Don'ts

### Do:
- **Do** route every action, selection, current state and focus through Signal Blue, and nothing else.
- **Do** keep every heading in Schibsted Grotesk 800 with negative tracking (-0.025em to -0.04em by size).
- **Do** separate in-flow content with 1px Hairline rules and tonal bands; start ruled lists with an Ink rule.
- **Do** give every 3D object a visible text label that is a real button, and offer the same choices as plain pill buttons outside the canvas.
- **Do** keep the desk panel's content plain-language and readable without the scene; on phones, render it below the stage.
- **Do** honour reduced motion: the camera cuts, parallax stops, transitions collapse to 1ms.
- **Do** define both light and dark values for every new colour variable.

### Don't:
- **Don't** add shadows to anything in the document flow; shadows are for elements floating over the scene.
- **Don't** add a second accent hue to the interface; prop colours stay on the desk.
- **Don't** use uppercase, letter-spaced eyebrow or kicker labels above headings.
- **Don't** require 3D controls (orbit, drag, zoom) to reach any content; navigation is click-a-label only.
- **Don't** introduce motion outside the desk; the rest of the page does not animate on its own.
- **Don't** hard-code colours that the variables already cover; Deep Signal, the contact-band link blues and the copy button's hover ink should resolve through tokens.
