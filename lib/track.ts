// ============================================================
//  ŚLEDZENIE KLIKNIĘĆ
// ------------------------------------------------------------
//  - ZAWSZE zapisuje klik do logów Vercela (widoczne w zakładce
//    "Logs" projektu na vercel.com).
//  - JEŚLI podłączysz darmowy magazyn Vercel KV (Upstash Redis),
//    dodatkowo zlicza kliknięcia w trwałym liczniku
//    (klucz: clicks:<slug>). Bez KV po prostu ten krok pomija.
// ============================================================

type ClickMeta = {
  ref?: string | null;
  ua?: string | null;
};

export async function trackClick(slug: string, meta: ClickMeta): Promise<void> {
  // Log zawsze — zero konfiguracji, widoczny w logach Vercela.
  console.log(
    `[REFHUB] klik slug=${slug} ref=${meta.ref ?? "-"} ua=${
      meta.ua?.slice(0, 60) ?? "-"
    }`
  );

  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  // Brak konfiguracji KV → nie zliczamy trwale (i tak działa redirect).
  if (!url || !token) return;

  try {
    await fetch(`${url}/incr/clicks:${slug}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch (err) {
    console.error("[REFHUB] blad zliczania klika:", err);
  }
}
