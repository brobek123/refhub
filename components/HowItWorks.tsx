"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Wybierz ofertę",
    desc: "Przeglądasz kuratorską listę promocji. Każda z jasnym warunkiem i kwotą bonusu.",
  },
  {
    n: "02",
    title: "Kliknij i załóż konto",
    desc: "Przechodzisz przez nasz link do aplikacji i rejestrujesz się w kilka minut.",
  },
  {
    n: "03",
    title: "Odbierz bonus",
    desc: "Spełniasz prosty warunek (np. pierwsza wpłata) i bonus trafia na Twoje konto.",
  },
];

export default function HowItWorks() {
  return (
    <section id="jak" className="mt-32 px-6 lg:px-16">
      <div className="mb-12 flex items-baseline justify-between border-b border-line pb-5">
        <h2 className="font-display text-3xl text-ink lg:text-4xl">
          Jak to działa
        </h2>
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
          3 kroki
        </span>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col justify-between gap-16 bg-cream p-8 transition-colors duration-500 hover:bg-cream-deep lg:p-10"
          >
            <span className="font-display text-5xl text-line transition-colors duration-500 group-hover:text-sage/40">
              {step.n}
            </span>
            <div>
              <h3 className="font-display text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
