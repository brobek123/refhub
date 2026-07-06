import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "REFHUB — Promocje aplikacji fintech w jednym miejscu",
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
