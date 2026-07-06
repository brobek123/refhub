"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const nav = [
  { label: "Oferty", href: "#oferty", index: "01" },
  { label: "Jak to działa", href: "#jak", index: "02" },
  { label: "Telegram", href: "#telegram", index: "03" },
];

const TELEGRAM_URL = "https://t.me/refhub"; // TODO: podmień na docelowy kanał

function Brand() {
  return (
    <a href="#top" className="group inline-flex items-baseline gap-[3px]">
      <span className="font-display text-2xl tracking-tightest text-ink">
        ref
      </span>
      <span className="font-display text-2xl italic tracking-tightest text-sage transition-colors duration-500 group-hover:text-sage-deep">
        hub
      </span>
      <span className="ml-1 h-[6px] w-[6px] rounded-full bg-clay transition-transform duration-500 group-hover:scale-150" />
    </a>
  );
}

function NavList({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {nav.map((item, i) => (
        <motion.a
          key={item.href}
          href={item.href}
          onClick={onClick}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group flex items-center gap-4 py-2"
        >
          <span className="font-sans text-[11px] tabular-nums text-muted/70">
            {item.index}
          </span>
          <span className="relative font-display text-2xl text-ink-soft transition-colors duration-300 group-hover:text-ink">
            {item.label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sage transition-all duration-500 ease-smooth group-hover:w-full" />
          </span>
        </motion.a>
      ))}
    </nav>
  );
}

function LiveStat() {
  return (
    <div className="border-t border-line pt-5">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Wypłacone bonusy
      </p>
      <p className="mt-1 font-display text-3xl text-ink">
        <AnimatedCounter to={128450} prefix="" suffix=" €" />
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted">
        Aktywni użytkownicy
      </p>
      <p className="mt-1 font-display text-3xl text-ink">
        <AnimatedCounter to={7300} suffix="+" />
      </p>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP — stała lewa kolumna */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[clamp(280px,24vw,360px)] flex-col justify-between border-r border-line px-10 py-10 lg:flex">
        <div>
          <Brand />
          <div className="mt-16">
            <NavList />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <LiveStat />
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-between rounded-full bg-ink px-6 py-3.5 text-cream transition-all duration-500 ease-smooth hover:bg-sage-deep"
          >
            <span className="text-sm font-medium">Dołącz na Telegram</span>
            <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
              →
            </span>
          </a>
          <p className="text-[10px] leading-relaxed text-muted">
            Strona zawiera linki afiliacyjne. Inwestowanie wiąże się z ryzykiem.
          </p>
        </div>
      </aside>

      {/* MOBILE — górny pasek */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-line bg-cream/80 px-6 py-4 backdrop-blur-md lg:hidden">
        <Brand />
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ink"
          />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-cream px-6 pb-10 pt-24 lg:hidden"
          >
            <NavList onClick={() => setOpen(false)} />
            <div className="flex flex-col gap-6">
              <LiveStat />
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-full bg-ink px-6 py-4 text-cream"
              >
                <span className="text-sm font-medium">Dołącz na Telegram</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
