/** The objects on the desk you can click, and where the camera goes for each. */
export type StopId = "projects" | "experience" | "about" | "skills" | "contact" | "greens";

type V3 = [number, number, number];

export const stops: {
  id: StopId;
  label: string;
  /** Plain-language hint shown under the scene. */
  hint: string;
  /** Where the floating label sits (desktop). */
  anchor: V3;
  /** Label position on phones, nudged so labels never cover their object or each other. */
  mobileAnchor?: V3;
  /** Centre of the object, used to frame it on phones. */
  focus: V3;
  /** How far back the phone camera sits from the object. */
  mobileDistance?: number;
  /** Desktop camera: the object sits left of centre, beside the panel. */
  camera: { pos: V3; target: V3 };
}[] = [
  {
    id: "projects",
    label: "Projects",
    hint: "What I have built",
    anchor: [0, 2.38, -0.95],
    mobileAnchor: [0, 2.75, -0.95],
    focus: [0, 1.45, -0.95],
    mobileDistance: 4.2,
    camera: { pos: [0.9, 1.75, 2.9], target: [0.9, 1.35, -0.9] },
  },
  {
    id: "experience",
    label: "Experience",
    hint: "Where I have worked",
    anchor: [-1.75, 1.35, -0.75],
    mobileAnchor: [-1.0, 1.75, -0.75],
    focus: [-1.75, 0.6, -0.75],
    mobileDistance: 2.6,
    camera: { pos: [-0.85, 1.8, 2.5], target: [-0.85, 0.7, -0.75] },
  },
  {
    id: "about",
    label: "About me",
    hint: "Who I am",
    anchor: [-1.75, 0.95, 0.55],
    mobileAnchor: [-1.6, 1.35, 0.55],
    focus: [-1.75, 0.4, 0.55],
    camera: { pos: [-0.85, 1.45, 2.8], target: [-0.85, 0.45, 0.45] },
  },
  {
    id: "skills",
    label: "Skills",
    hint: "What I am good at",
    anchor: [-3.0, 0.85, -1.0],
    mobileAnchor: [-2.35, 1.95, -1],
    focus: [-2.9, 0.3, -0.95],
    camera: { pos: [-2.0, 1.75, 1.8], target: [-2.0, 0.4, -0.9] },
  },
  {
    id: "contact",
    label: "Contact",
    hint: "Send me a message",
    anchor: [2.55, 1.25, 0.95],
    mobileAnchor: [2.3, 1.55, 0.95],
    focus: [2.75, 0.5, 0.95],
    camera: { pos: [3.65, 1.5, 3.2], target: [3.65, 0.45, 0.85] },
  },
  {
    id: "greens",
    label: "Microgreens?",
    hint: "A client story",
    anchor: [2.35, 0.8, -1.0],
    mobileAnchor: [2.0, 1.9, -1.0],
    focus: [2.35, 0.25, -1.0],
    camera: { pos: [3.25, 1.7, 1.5], target: [3.25, 0.25, -0.95] },
  },
];

export const HOME = { pos: [0, 3.2, 6.5] as V3, target: [0, 0.6, 0.2] as V3 };
/** Phones: higher and closer, framing the desktop surface rather than legs and floor. */
export const HOME_MOBILE = { pos: [0, 5.6, 7.0] as V3, target: [0, 0.1, 0.1] as V3 };
