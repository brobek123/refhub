"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Oferty", href: "#oferty" },
  { label: "Jak to działa", href: "#jak" },
  { label: "Telegram", href: "#telegram" },
];

const TELEGRAM_URL = "https://t.me/refhub"; // TODO: podmień na docelowy kanał

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2">
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet to-mint opacity-90 transition-transform duration-500 group-hover:rotate-45" />
        <span className="relative text-sm font-bold text-base">R</span>
      </span>
      <span className="font-display text-lg font-semibold tracking-tightest text-fg">
        REF<span className="text-mint">HUB</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass shadow-glow-violet" : "border border-transparent"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors duration-300 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-base transition-all duration-500 hover:shadow-glow sm:flex"
            >
              Telegram
              <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl glass md:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-px w-5 bg-fg"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-5 bg-fg"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-px w-5 bg-fg"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-base/95 px-8 backdrop-blur-xl md:hidden"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-display text-4xl font-medium text-fg"
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-mint px-6 py-3 font-semibold text-base"
            >
              Dołącz na Telegram →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
