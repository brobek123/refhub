"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import WordRotator from "./WordRotator";
import ScrollHint from "./ScrollHint";

const apps = [
  "Revolut",
  "XTB",
  "Trading 212",
  "Trade Republic",
  "Wise",
  "Bitvavo",
];

function Line({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block font-display text-[11vw] font-medium leading-[0.92] tracking-tightest sm:text-[8vw] lg:text-[5.5vw] ${className}`}
    >
      {children}
    </span>
  );
}

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="grad-text font-semibold">{children}</span>
  );
}

export default function ScrollIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Faza 1: rotator + pierwszy nagłówek
  const p1Opacity = useTransform(smooth, [0, 0.12, 0.32, 0.42], [1, 1, 0, 0]);
  const p1Y = useTransform(smooth, [0, 0.38], [0, -120]);
  const p1Scale = useTransform(smooth, [0, 0.38], [1, 0.94]);

  // Faza 2: misja
  const p2Opacity = useTransform(smooth, [0.28, 0.42, 0.58, 0.68], [0, 1, 1, 0]);
  const p2Y = useTransform(smooth, [0.28, 0.68], [80, -80]);

  // Faza 3: payoff
  const p3Opacity = useTransform(smooth, [0.55, 0.68, 0.82, 0.95], [0, 1, 1, 0]);
  const p3Y = useTransform(smooth, [0.55, 0.95], [100, -60]);

  // Tło i wskaźnik scrolla
  const bgScale = useTransform(smooth, [0, 1], [1, 1.15]);
  const hintVisible = useTransform(smooth, [0, 0.08, 0.88, 1], [1, 1, 1, 0]);
  const overlayOpacity = useTransform(smooth, [0.85, 1], [0, 0.6]);

  return (
    <section id="top" ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Rozszerzające się tło */}
        <motion.div
          style={{ scale: bgScale }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,92,255,0.12)_0%,transparent_55%)]"
        />

        <div className="relative z-10 w-full max-w-6xl px-6 lg:px-10">
          {/* FAZA 1 */}
          <motion.div
            style={{ opacity: p1Opacity, y: p1Y, scale: p1Scale }}
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 lg:inset-x-10"
          >
            <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-muted">
              Kuratorskie promocje fintech
            </p>
            <h1 className="text-fg">
              <Line>
                Odkrywamy <Accent><WordRotator words={apps} /></Accent>
              </Line>
              <Line>
                które <Accent>płacą</Accent> za start.
              </Line>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Najlepsze bonusy za polecenie aplikacji finansowych —
              zebrane w jednym, nowoczesnym miejscu.
            </p>
          </motion.div>

          {/* FAZA 2 */}
          <motion.div
            style={{ opacity: p2Opacity, y: p2Y }}
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 lg:inset-x-10"
          >
            <h2 className="text-fg">
              <Line>
                Nasza <Accent>misja</Accent>
              </Line>
              <Line className="text-muted/80">
                to zebrać
              </Line>
              <Line>
                <Accent>najlepsze bonusy</Accent>
              </Line>
              <Line className="text-muted/80">
                w jednym miejscu.
              </Line>
            </h2>
          </motion.div>

          {/* FAZA 3 */}
          <motion.div
            style={{ opacity: p3Opacity, y: p3Y }}
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 lg:inset-x-10"
          >
            <h2 className="text-fg">
              <Line>Promocje fintech</Line>
              <Line>
                stworzone do <Accent>wykorzystania.</Accent>
              </Line>
            </h2>
            <p className="mt-8 max-w-md text-base text-muted">
              Przewiń dalej — zobaczysz aktualne oferty, kroki i kanał Telegram.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ opacity: hintVisible }}>
          <ScrollHint />
        </motion.div>

        {/* Przejście do reszty strony */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 bg-base"
        />
      </div>
    </section>
  );
}
