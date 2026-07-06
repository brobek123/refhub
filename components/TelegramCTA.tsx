"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TELEGRAM_URL = "https://t.me/refhub"; // TODO: podmień na docelowy kanał

export default function TelegramCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="telegram" className="px-6 lg:px-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-line glass px-8 py-16 lg:px-16 lg:py-20"
      >
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet/25 blur-3xl"
        />
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-mint/15 blur-3xl"
        />

        <div className="relative max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
            Nie przegap żadnej okazji
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-fg lg:text-6xl">
            Nowe promocje{" "}
            <span className="grad-text">codziennie</span> na Telegramie.
          </h2>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-mint px-8 py-4 text-sm font-semibold text-base transition-all duration-500 hover:shadow-glow"
          >
            Dołącz do kanału
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
