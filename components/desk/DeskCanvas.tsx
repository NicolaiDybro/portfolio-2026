"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Html, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { stops, HOME, HOME_MOBILE, type StopId } from "./stops";

type Props = {
  active: StopId | null;
  onSelect: (id: StopId) => void;
  reduceMotion: boolean;
  mobile: boolean;
  dark: boolean;
};

/* ---------- small helpers ---------- */

function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  draw(ctx);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** Lifts an object a little while it is hovered or selected. */
function Hoverable({
  id,
  active,
  hovered,
  setHovered,
  onSelect,
  children,
}: {
  id: StopId;
  active: StopId | null;
  hovered: StopId | null;
  setHovered: (id: StopId | null) => void;
  onSelect: (id: StopId) => void;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    const lift = hovered === id || active === id ? 0.08 : 0;
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, lift, 10, dt);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(id);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(null);
        document.body.style.cursor = "";
      }}
    >
      {children}
    </group>
  );
}

/* ---------- the objects ---------- */

function Desk({ dark }: { dark: boolean }) {
  const oak = useTexture("/textures/oak.jpg", (t) => {
    (Array.isArray(t) ? t : [t]).forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
    });
  });
  // dark mode: the same oak under evening light
  const tint = dark ? "#8a7a6c" : "#ffffff";
  return (
    <group>
      <RoundedBox args={[7.2, 0.18, 3.3]} radius={0.06} position={[0, 0, -0.1]} receiveShadow castShadow>
        <meshStandardMaterial map={oak} color={tint} roughness={0.62} />
      </RoundedBox>
      {/* front edge, a shade darker so the thickness reads */}
      <mesh position={[0, -0.02, 1.552]}>
        <planeGeometry args={[7.08, 0.12]} />
        <meshStandardMaterial map={oak} color={dark ? "#5e5248" : "#b48a62"} roughness={0.7} />
      </mesh>
      {[
        [-3.3, -1.55],
        [3.3, -1.55],
        [-3.3, 1.35],
        [3.3, 1.35],
      ].map(([x, z]) => (
        <mesh key={`${x}${z}`} position={[x, -1.6, z]} castShadow>
          <boxGeometry args={[0.16, 3.1, 0.16]} />
          <meshStandardMaterial color={dark ? "#2a2d33" : "#3a3d44"} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function Monitor() {
  const shot = useTexture("/jpgroent.png", (t) => {
    (Array.isArray(t) ? t : [t]).forEach((tex) => (tex.colorSpace = THREE.SRGBColorSpace));
  });
  return (
    <group position={[0, 0.09, -0.95]}>
      <RoundedBox args={[0.9, 0.05, 0.5]} radius={0.02} position={[0, 0.03, 0.05]} castShadow>
        <meshStandardMaterial color="#202227" roughness={0.4} metalness={0.3} />
      </RoundedBox>
      <mesh position={[0, 0.5, -0.05]} castShadow>
        <boxGeometry args={[0.12, 0.9, 0.1]} />
        <meshStandardMaterial color="#202227" roughness={0.4} metalness={0.3} />
      </mesh>
      <RoundedBox args={[2.7, 1.6, 0.09]} radius={0.04} position={[0, 1.35, 0]} castShadow>
        <meshStandardMaterial color="#141519" roughness={0.35} />
      </RoundedBox>
      <mesh position={[0, 1.37, 0.047]}>
        <planeGeometry args={[2.56, 1.44]} />
        <meshBasicMaterial map={shot} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Keyboard() {
  return (
    <group position={[0, 0.12, 0.45]}>
      <RoundedBox args={[1.8, 0.06, 0.58]} radius={0.025} castShadow>
        <meshStandardMaterial color="#e9eaed" roughness={0.6} />
      </RoundedBox>
      {Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 13 }, (_, c) => (
          <mesh key={`${r}-${c}`} position={[-0.78 + c * 0.13, 0.04, -0.2 + r * 0.13]}>
            <boxGeometry args={[0.1, 0.03, 0.1]} />
            <meshStandardMaterial color="#d4d6db" roughness={0.6} />
          </mesh>
        )),
      )}
      {/* mouse */}
      <mesh position={[1.3, 0.0, 0.05]} scale={[0.12, 0.06, 0.18]} castShadow>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color="#e9eaed" roughness={0.5} />
      </mesh>
      <mesh position={[1.3, 0.055, -0.03]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.006, 0.12]} />
        <meshBasicMaterial color="#c3c6cc" />
      </mesh>
    </group>
  );
}

function Mug() {
  const label = useMemo(
    () =>
      canvasTexture(512, 256, (ctx) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 512, 256);
        ctx.fillStyle = "#211a52";
        ctx.font = "bold 64px Arial, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // u = 0 is the front of the mug (+z): draw across the seam so it sits centred there
        ctx.fillText("AAU", 0, 118);
        ctx.fillText("AAU", 512, 118);
        ctx.fillRect(0, 196, 512, 10);
      }),
    [],
  );
  return (
    <group position={[-1.75, 0.09, 0.55]} rotation={[0, 0.35, 0]}>
      <mesh position={[0, 0.33, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.24, 0.66, 40, 1, true]} />
        <meshStandardMaterial map={label} roughness={0.35} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.04, 40]} />
        <meshStandardMaterial color="#ffffff" roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.24, 40]} />
        <meshStandardMaterial color="#3b2416" roughness={0.2} />
      </mesh>
      <mesh position={[0.25, 0.34, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
        <torusGeometry args={[0.14, 0.038, 14, 28, Math.PI]} />
        <meshStandardMaterial color="#ffffff" roughness={0.35} />
      </mesh>
    </group>
  );
}

function Books() {
  const books: { size: [number, number, number]; color: string; y: number; rot: number }[] = [
    { size: [1.0, 0.16, 0.7], color: "#2457f5", y: 0.08, rot: 0.08 },
    { size: [0.92, 0.14, 0.64], color: "#f2b72e", y: 0.23, rot: -0.12 },
    { size: [0.86, 0.13, 0.62], color: "#e5484d", y: 0.365, rot: 0.2 },
  ];
  return (
    <group position={[-2.9, 0.09, -0.95]} rotation={[0, 0.25, 0]}>
      {books.map((b) => (
        <group key={b.color} position={[0, b.y, 0]} rotation={[0, b.rot, 0]}>
          <RoundedBox args={b.size} radius={0.015} castShadow>
            <meshStandardMaterial color={b.color} roughness={0.75} />
          </RoundedBox>
          {/* page edges */}
          <mesh position={[0.02, 0, 0]}>
            <boxGeometry args={[b.size[0] - 0.02, b.size[1] - 0.04, b.size[2] + 0.002]} />
            <meshStandardMaterial color="#f3f1ea" roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Phone() {
  const screen = useMemo(
    () =>
      canvasTexture(256, 512, (ctx) => {
        const g = ctx.createLinearGradient(0, 0, 0, 512);
        g.addColorStop(0, "#2457f5");
        g.addColorStop(1, "#16308f");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 256, 512);
        // envelope
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 10;
        ctx.lineJoin = "round";
        ctx.strokeRect(58, 190, 140, 100);
        ctx.beginPath();
        ctx.moveTo(58, 190);
        ctx.lineTo(128, 248);
        ctx.lineTo(198, 190);
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 34px Arial, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Say hi", 128, 350);
      }),
    [],
  );
  return (
    <group position={[2.75, 0.09, 0.95]} rotation={[0, -0.4, 0]}>
      {/* little stand */}
      <RoundedBox args={[0.5, 0.06, 0.32]} radius={0.02} position={[0, 0.03, 0.02]} castShadow>
        <meshStandardMaterial color="#c9ccd2" roughness={0.5} metalness={0.2} />
      </RoundedBox>
      {/* phone leaning back on the stand, screen towards the viewer */}
      <group position={[0, 0.46, -0.04]} rotation={[-0.28, 0, 0]}>
        <RoundedBox args={[0.46, 0.92, 0.05]} radius={0.04} castShadow>
          <meshStandardMaterial color="#17181c" roughness={0.3} metalness={0.4} />
        </RoundedBox>
        <mesh position={[0, 0, 0.027]}>
          <planeGeometry args={[0.4, 0.84]} />
          <meshBasicMaterial map={screen} toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

function Microgreens() {
  const sprouts = useMemo(() => {
    const out: { p: [number, number, number]; h: number; r: number }[] = [];
    let seed = 7;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < 140; i++) {
      out.push({
        p: [(rnd() - 0.5) * 0.9, 0, (rnd() - 0.5) * 0.5],
        h: 0.12 + rnd() * 0.14,
        r: rnd() * Math.PI,
      });
    }
    return out;
  }, []);
  return (
    <group position={[2.35, 0.09, -1.0]} rotation={[0, -0.2, 0]}>
      <RoundedBox args={[1.05, 0.14, 0.62]} radius={0.03} position={[0, 0.07, 0]} castShadow>
        <meshStandardMaterial color="#2b2e33" roughness={0.8} />
      </RoundedBox>
      <mesh position={[0, 0.142, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.98, 0.56]} />
        <meshStandardMaterial color="#4a3426" roughness={1} />
      </mesh>
      {sprouts.map((s, i) => (
        <group key={i} position={[s.p[0], 0.14, s.p[2]]} rotation={[0, s.r, 0]}>
          <mesh position={[0, s.h / 2, 0]}>
            <cylinderGeometry args={[0.006, 0.008, s.h, 4]} />
            <meshStandardMaterial color="#c9e7a1" />
          </mesh>
          <mesh position={[0.02, s.h, 0]} rotation={[0, 0, 0.5]} scale={[1, 0.35, 0.6]}>
            <sphereGeometry args={[0.035, 6, 4]} />
            <meshStandardMaterial color="#4f9d3a" roughness={0.6} />
          </mesh>
          <mesh position={[-0.02, s.h, 0]} rotation={[0, 0, -0.5]} scale={[1, 0.35, 0.6]}>
            <sphereGeometry args={[0.035, 6, 4]} />
            <meshStandardMaterial color="#5cae45" roughness={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Clipboard() {
  const photo = useTexture("/profile.jpg", (t) => {
    (Array.isArray(t) ? t : [t]).forEach((tex) => (tex.colorSpace = THREE.SRGBColorSpace));
  });
  const sheet = useMemo(
    () =>
      canvasTexture(440, 580, (ctx) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 440, 580);
        ctx.fillStyle = "#0f1115";
        ctx.textAlign = "left";
        ctx.font = "bold 46px Arial, sans-serif";
        ctx.fillText("CV", 34, 96);
        ctx.font = "bold 22px Arial, sans-serif";
        ctx.fillText("Nicolai Dybro Jensen", 34, 132);
        ctx.fillStyle = "#2457f5";
        ctx.font = "bold 18px Arial, sans-serif";
        ctx.fillText("Software engineer", 34, 158);
        ctx.fillStyle = "#d8dbe0";
        ctx.fillRect(34, 182, 372, 3);
        const rows: [string, string][] = [
          ["Geodatastyrelsen", "2024 – now"],
          ["JP-Grønt", "2023 – 2026"],
          ["Tutoring", "2022 – 2024"],
        ];
        rows.forEach(([org, when], i) => {
          const y = 232 + i * 92;
          ctx.fillStyle = "#0f1115";
          ctx.font = "bold 22px Arial, sans-serif";
          ctx.fillText(org, 34, y);
          ctx.fillStyle = "#555b66";
          ctx.font = "18px Arial, sans-serif";
          ctx.fillText(when, 34, y + 26);
          ctx.fillStyle = "#e6e8ec";
          ctx.fillRect(34, y + 42, 300, 8);
        });
      }),
    [],
  );
  return (
    <group position={[-1.75, 0.09, -0.75]} rotation={[0, 0.3, 0]}>
      {/* leaning back on its own little foot */}
      <group position={[0, 0.5, 0]} rotation={[-0.22, 0, 0]}>
        <RoundedBox args={[0.78, 1.02, 0.03]} radius={0.02} castShadow>
          <meshStandardMaterial color="#8a5a33" roughness={0.7} />
        </RoundedBox>
        <mesh position={[0, -0.04, 0.017]}>
          <planeGeometry args={[0.66, 0.87]} />
          <meshBasicMaterial map={sheet} toneMapped={false} />
        </mesh>
        {/* photo in the corner of the CV */}
        <mesh position={[0.2, 0.25, 0.019]}>
          <planeGeometry args={[0.16, 0.16]} />
          <meshBasicMaterial map={photo} toneMapped={false} />
        </mesh>
        {/* metal clip */}
        <RoundedBox args={[0.28, 0.08, 0.05]} radius={0.015} position={[0, 0.47, 0.02]}>
          <meshStandardMaterial color="#c9ccd2" metalness={0.7} roughness={0.25} />
        </RoundedBox>
      </group>
      <mesh position={[0, 0.02, -0.18]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.5, 0.03, 0.3]} />
        <meshStandardMaterial color="#6f4626" roughness={0.8} />
      </mesh>
    </group>
  );
}

/* ---------- camera ---------- */

function CameraRig({ active, reduceMotion, mobile }: Pick<Props, "active" | "reduceMotion" | "mobile">) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(...HOME.target));
  const goalPosRef = useRef(new THREE.Vector3());
  const goalTargetRef = useRef(new THREE.Vector3());

  useFrame((_, dt) => {
    const goalPos = goalPosRef.current;
    const goalTarget = goalTargetRef.current;
    const stop = stops.find((s) => s.id === active);
    const home = mobile ? HOME_MOBILE : HOME;
    if (stop && mobile) {
      // on phones the panel sits under the scene, so centre the object
      const [fx, fy, fz] = stop.focus;
      const dist = stop.mobileDistance ?? 2.4;
      goalPos.set(fx, fy + dist * 0.5, fz + dist);
      goalTarget.set(fx, fy, fz);
    } else {
      const view = stop ? stop.camera : home;
      goalPos.set(...view.pos);
      goalTarget.set(...view.target);
    }
    if (!stop && !reduceMotion) {
      // gentle parallax so the desk feels alive
      goalPos.x += pointer.x * 0.5;
      goalPos.y += pointer.y * 0.25;
    }
    const k = reduceMotion ? 1 : 1 - Math.exp(-4 * dt);
    camera.position.lerp(goalPos, k);
    target.current.lerp(goalTarget, k);
    camera.lookAt(target.current);
  });
  return null;
}

/* ---------- scene ---------- */

export default function DeskCanvas({ active, onSelect, reduceMotion, mobile, dark }: Props) {
  const [hovered, setHovered] = useState<StopId | null>(null);
  const hp = { active, hovered, setHovered, onSelect };

  return (
    <Canvas
      shadows
      dpr={[1, mobile ? 1.5 : 2]}
      camera={{ position: mobile ? HOME_MOBILE.pos : HOME.pos, fov: mobile ? 50 : 36 }}
      gl={{ antialias: true, alpha: true }}
      onPointerMissed={() => setHovered(null)}
    >
      <ambientLight intensity={dark ? 0.35 : 0.75} />
      <hemisphereLight args={[dark ? "#8aa0ff" : "#ffffff", dark ? "#1a1208" : "#b9a58c", dark ? 0.4 : 0.6]} />
      <directionalLight
        position={[4, 7, 5]}
        intensity={dark ? 0.9 : 1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      {/* screen glow */}
      <pointLight position={[0, 1.5, 0.3]} intensity={dark ? 3 : 0.8} distance={4} color="#9db5ff" />

      <Desk dark={dark} />
      <Keyboard />
      <Hoverable id="projects" {...hp}>
        <Monitor />
      </Hoverable>
      <Hoverable id="experience" {...hp}>
        <Clipboard />
      </Hoverable>
      <Hoverable id="about" {...hp}>
        <Mug />
      </Hoverable>
      <Hoverable id="skills" {...hp}>
        <Books />
      </Hoverable>
      <Hoverable id="contact" {...hp}>
        <Phone />
      </Hoverable>
      <Hoverable id="greens" {...hp}>
        <Microgreens />
      </Hoverable>

      {/* floating labels: real buttons, so they also work with a keyboard */}
      {active === null &&
        stops.map((s) => (
          <Html key={s.id} position={mobile ? (s.mobileAnchor ?? s.anchor) : s.anchor} center zIndexRange={[20, 0]}>
            <button
              type="button"
              onClick={() => onSelect(s.id)}
              onPointerEnter={() => setHovered(s.id)}
              onPointerLeave={() => setHovered(null)}
              className={`whitespace-nowrap rounded-full border px-2 py-1 text-[11.5px] font-semibold sm:px-3 sm:py-1.5 shadow-[0_6px_16px_-8px_rgb(0_0_0/0.45)] transition-[background-color,color,transform] duration-200 sm:text-sm ${
                hovered === s.id
                  ? "-translate-y-0.5 border-signal bg-signal text-white"
                  : "border-rule bg-surface text-ink"
              }`}
            >
              {s.label}
            </button>
          </Html>
        ))}

      <ContactShadows position={[0, -3.15, -0.1]} opacity={0.35} scale={12} blur={2.5} far={4} />
      <CameraRig active={active} reduceMotion={reduceMotion} mobile={mobile} />
    </Canvas>
  );
}
