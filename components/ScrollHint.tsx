"use client";

import { motion } from "framer-motion";

export default function ScrollHint() {
  return (
    <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.35em] text-muted">
        Przewiń w dół
      </span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5"
      >
        <span className="h-2 w-1 rounded-full bg-mint" />
      </motion.span>
    </div>
  );
}
