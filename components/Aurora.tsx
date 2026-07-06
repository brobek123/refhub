"use client";

// Animowane, rozmyte plamy światła (aurora) + siatka punktów.
// Czysto dekoracyjne, nie przechwytuje kliknięć.
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dotgrid absolute inset-0 opacity-40" />
      <div className="animate-drift1 absolute -left-40 -top-40 h-[46rem] w-[46rem] rounded-full bg-violet/25 blur-[120px]" />
      <div className="animate-drift2 absolute -right-40 top-10 h-[40rem] w-[40rem] rounded-full bg-blue/20 blur-[130px]" />
      <div className="animate-drift3 absolute bottom-[-20rem] left-1/3 h-[44rem] w-[44rem] rounded-full bg-mint/15 blur-[140px]" />
      {/* Winieta wygaszająca krawędzie do czerni */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(7,8,15,0.85)_100%)]" />
    </div>
  );
}
