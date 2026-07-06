"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const TELEGRAM_URL = "https://t.me/refhub"; // TODO: podmień na docelowy kanał

export default function TelegramCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section id="telegram" className="mt-32 px-6 lg:px-16">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 lg:px-16 lg:py-24"
      >
        {/* stonowana, przesuwająca się poświata w tle */}
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
        />
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-clay/10 blur-3xl"
        />

        <div className="relative max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] uppercase tracking-[0.3em] text-cream/50"
          >
            Nie przegap żadnej okazji
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-4xl leading-tight text-cream lg:text-6xl"
          >
            Nowe promocje <span className="italic text-sage">codziennie</span> na
            Telegramie.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <MagneticButton
              href={TELEGRAM_URL}
              className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-medium text-ink transition-colors duration-500 hover:bg-sage hover:text-cream"
            >
              Dołącz do kanału
              <span>→</span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
