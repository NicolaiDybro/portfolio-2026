"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { EMAIL } from "../lib/site";

export default function CopyEmailButton() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2200);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-lg border border-white/30 px-4 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-[#0f1115] sm:self-auto"
    >
      {state === "copied" ? <Check size={17} /> : <Copy size={17} />}
      <span aria-live="polite">
        {state === "copied"
          ? "Copied"
          : state === "failed"
            ? "Copy failed, select the address"
            : "Copy address"}
      </span>
    </button>
  );
}
