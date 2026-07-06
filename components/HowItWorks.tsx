"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Wybierz ofertę",
    desc: "Przeglądasz kuratorską listę promocji z jasnymi warunkami i kwotami.",
  },
  {
    n: "02",
    title: "Załóż konto",
    desc: "Klikasz przez nasz link i rejestrujesz się w aplikacji w kilka minut.",
  },
  {
    n: "03",
    title: "Odbierz bonus",
    desc: "Spełniasz prosty warunek i bonus trafia na Twoje konto.",
  },
];

export default function HowItWorks() {
  return (
    <section id="jak" className="px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
          Proces
        </p>
        <h2 className="mt-2 font-display text-4xl text-fg lg:text-5xl">
          Jak to działa
        </h2>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass group rounded-3xl p-8 transition-all duration-500 hover:border-mint/20 hover:shadow-glow"
          >
            <span className="font-display text-5xl text-line transition-colors duration-500 group-hover:text-mint/30">
              {step.n}
            </span>
            <h3 className="mt-10 font-display text-2xl text-fg">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
