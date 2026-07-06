import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Offers from "@/components/Offers";
import HowItWorks from "@/components/HowItWorks";
import TelegramCTA from "@/components/TelegramCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Sidebar />

      <main className="lg:ml-[clamp(280px,24vw,360px)]">
        <Hero />
        <div className="mt-24">
          <Marquee />
        </div>
        <Offers />
        <HowItWorks />
        <TelegramCTA />

        <footer className="mt-32 border-t border-line px-6 py-10 lg:px-16">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-display text-lg text-ink">
              ref<span className="italic text-sage">hub</span>
            </p>
            <p className="max-w-md text-[11px] leading-relaxed text-muted">
              REFHUB publikuje linki afiliacyjne. Nie stanowi porady
              inwestycyjnej. Inwestowanie wiąże się z ryzykiem utraty kapitału.
            </p>
            <p className="text-[11px] text-muted">
              © {new Date().getFullYear()} REFHUB
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
