"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { offers } from "@/lib/offers";

const diffColor: Record<string, string> = {
  Łatwa: "text-mint",
  Średnia: "text-violet",
  Trudna: "text-muted",
};

export default function Offers() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="oferty" className="px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex items-end justify-between border-b border-line pb-6"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
            Aktualne okazje
          </p>
          <h2 className="mt-2 font-display text-4xl text-fg lg:text-5xl">
            Oferty
          </h2>
        </div>
        <span className="rounded-full glass px-4 py-2 text-xs text-muted">
          {offers.length} aktywnych
        </span>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((offer, i) => {
          const isActive = active === offer.id;
          const featured = i === 0;

          return (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActive(offer.id)}
              onMouseLeave={() => setActive(null)}
              className={`group relative overflow-hidden rounded-3xl border border-line glass p-6 transition-all duration-500 hover:border-mint/30 hover:shadow-glow ${
                featured ? "md:col-span-2 md:p-8" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-mint/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <a
                href={offer.href}
                target="_blank"
                rel="sponsored noopener"
                className="relative z-10 flex h-full flex-col justify-between gap-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                      {offer.category}
                    </p>
                    <h3
                      className={`mt-2 font-display text-fg transition-transform duration-500 group-hover:translate-x-1 ${
                        featured ? "text-4xl lg:text-5xl" : "text-3xl"
                      }`}
                    >
                      {offer.name}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.15em] ${diffColor[offer.difficulty]}`}
                  >
                    {offer.difficulty}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted">Bonus</p>
                    <p className="font-display text-3xl grad-text">{offer.reward}</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg transition-all duration-500 group-hover:border-mint group-hover:bg-mint group-hover:text-base">
                    →
                  </span>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden text-sm text-muted"
                    >
                      {offer.requirement}
                    </motion.p>
                  )}
                </AnimatePresence>
              </a>
            </motion.article>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-faint">
        Kwoty bonusów są orientacyjne. Zawsze sprawdzaj aktualne warunki u partnera.
      </p>
    </section>
  );
}
