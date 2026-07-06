"use client";

import { motion } from "framer-motion";

const items = [
  "Revolut",
  "XTB",
  "Trading 212",
  "Trade Republic",
  "Wise",
  "Bitvavo",
  "Freedom24",
  "Lightyear",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-6">
      <motion.div
        className="flex w-max gap-14 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-14 font-display text-xl text-muted/80"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-mint/50" />
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent" />
    </div>
  );
}
