import { NextRequest, NextResponse } from "next/server";
import { affiliateLinks } from "@/lib/links";
import { trackClick } from "@/lib/track";

// Zawsze uruchamiaj na serwerze (potrzebne do przekierowania i zliczania).
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug.toLowerCase();
  const target = affiliateLinks[slug];

  // Nieznany slug → wracamy na stronę główną zamiast pokazywać błąd.
  if (!target) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  await trackClick(slug, {
    ref: req.headers.get("referer"),
    ua: req.headers.get("user-agent"),
  });

  // 307 = tymczasowe przekierowanie (nie cache'uje się agresywnie).
  return NextResponse.redirect(target, 307);
}
