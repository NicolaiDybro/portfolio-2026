"use client";

import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "nicolai160g@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!", {
        icon: "📋",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email");
    }
  };

  return (
    <>
      <motion.button
        onClick={handleCopy}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-blue-500/50 bg-transparent px-8 text-sm font-medium transition-colors hover:bg-blue-500/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {copied ? (
          <>
            <Check size={18} className="text-green-500" />
            Copied!
          </>
        ) : (
          <>
            <Copy size={18} />
            Copy Email
          </>
        )}
      </motion.button>
    </>
  );
}
