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
  "Kraken",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-lg text-muted"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-clay/60" />
          </span>
        ))}
      </motion.div>
      {/* miękkie wygaszenie krawędzi */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
