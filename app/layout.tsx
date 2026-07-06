import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "REFHUB — Bonusy fintech w jednym miejscu",
  description:
    "Kuratorska lista najlepszych promocji polecających aplikacji fintech. Odbieraj bonusy za rejestrację. Codzienne okazje na stronie i w Telegramie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${display.variable} ${sans.variable}`}>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
