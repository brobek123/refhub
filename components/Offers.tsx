"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { offers } from "@/lib/offers";

const diffColor: Record<string, string> = {
  Łatwa: "text-sage",
  Średnia: "text-clay",
  Trudna: "text-muted",
};

export default function Offers() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="oferty" className="mt-32 px-6 lg:px-16">
      <div className="mb-10 flex items-baseline justify-between border-b border-line pb-5">
        <h2 className="font-display text-3xl text-ink lg:text-4xl">Oferty</h2>
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
          {offers.length} aktywnych
        </span>
      </div>

      <ul>
        {offers.map((offer, i) => {
          const isActive = active === offer.id;
          return (
            <motion.li
              key={offer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(offer.id)}
              onMouseLeave={() => setActive(null)}
              className="group relative border-b border-line"
            >
              {/* tło wjeżdżające przy hoverze */}
              <motion.span
                className="absolute inset-0 -z-0 origin-left bg-cream-deep"
                initial={false}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <a
                href={offer.href}
                className="relative z-10 flex items-center gap-4 py-7 lg:gap-8 lg:px-6"
              >
                <span className="w-8 shrink-0 font-sans text-xs tabular-nums text-muted/70">
                  0{i + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl text-ink transition-transform duration-500 ease-smooth group-hover:translate-x-1 lg:text-3xl">
                      {offer.name}
                    </h3>
                    <span
                      className={`text-[10px] uppercase tracking-[0.15em] ${diffColor[offer.difficulty]}`}
                    >
                      {offer.difficulty}
                    </span>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden text-sm text-muted"
                      >
                        <span className="block pt-2">
                          {offer.category} · {offer.requirement}
                        </span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="shrink-0 text-right">
                  <span className="block font-display text-xl text-sage-deep lg:text-2xl">
                    {offer.reward}
                  </span>
                </div>

                <span className="hidden shrink-0 text-ink transition-transform duration-500 ease-smooth group-hover:translate-x-1 sm:block">
                  →
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>

      <p className="mt-6 text-xs text-muted">
        Kwoty bonusów są orientacyjne i mogą się zmieniać. Zawsze sprawdzaj
        aktualne warunki u partnera.
      </p>
    </section>
  );
}
