"use client";

import { motion } from "framer-motion";
import Aurora from "@/components/Aurora";
import Navbar from "@/components/Navbar";
import ScrollIntro from "@/components/ScrollIntro";
import Marquee from "@/components/Marquee";
import Offers from "@/components/Offers";
import HowItWorks from "@/components/HowItWorks";
import TelegramCTA from "@/components/TelegramCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-base">
      <Aurora />
      <Navbar />

      <ScrollIntro />

      {/* Reszta treści — wjeżdża po przewinięciu intro */}
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl space-y-32 pb-24 pt-10"
      >
        <Marquee />
        <Offers />
        <HowItWorks />
        <TelegramCTA />

        <footer className="border-t border-line px-6 py-10 lg:px-0">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-display text-lg text-fg">
              REF<span className="text-mint">HUB</span>
            </p>
            <p className="max-w-md text-[11px] leading-relaxed text-muted">
              REFHUB publikuje linki afiliacyjne. Nie stanowi porady
              inwestycyjnej. Inwestowanie wiąże się z ryzykiem utraty kapitału.
            </p>
            <p className="text-[11px] text-faint">
              © {new Date().getFullYear()} REFHUB
            </p>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}
