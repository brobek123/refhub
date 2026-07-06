"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const line1 = ["Aplikacje", "płacą,"];
const line2 = ["kiedy", "zakładasz"];
const line3 = ["konto."];

const reveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { delay: 0.15 + i * 0.07, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Word({ text, i, italic }: { text: string; i: number; italic?: boolean }) {
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em] align-bottom">
      <motion.span
        custom={i}
        variants={reveal}
        initial="hidden"
        animate="show"
        className={`inline-block ${italic ? "italic text-sage" : ""}`}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-28 lg:px-16 lg:pt-24">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mb-8 text-[11px] uppercase tracking-[0.3em] text-muted"
      >
        Kuratorskie promocje fintech · aktualizowane codziennie
      </motion.p>

      <h1 className="font-display text-[13vw] font-normal leading-[0.95] tracking-tightest text-ink sm:text-[10vw] lg:text-[5.6vw]">
        <span className="block">
          {line1.map((w, i) => (
            <Word key={w} text={w} i={i} />
          ))}
        </span>
        <span className="block">
          {line2.map((w, i) => (
            <Word key={w} text={w} i={i + 2} italic={w === "zakładasz"} />
          ))}
        </span>
        <span className="block">
          {line3.map((w, i) => (
            <Word key={w} text={w} i={i + 4} />
          ))}
        </span>
      </h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md text-lg leading-relaxed text-ink-soft"
        >
          REFHUB zbiera najlepsze bonusy za polecenie aplikacji fintech
          w jednym, przejrzystym miejscu. Wybierasz, klikasz, odbierasz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href="#oferty"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-500 hover:bg-sage-deep"
          >
            Zobacz oferty
          </MagneticButton>
          <MagneticButton
            href="#jak"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-500 hover:border-ink"
          >
            Jak to działa
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
