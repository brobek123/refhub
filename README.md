# REFHUB

Kuratorska platforma promocji polecających aplikacji fintech (strona www + Telegram).
Zbudowana w **Next.js 14 + Tailwind CSS + Framer Motion**.

---

## 🚀 Publikacja na Vercel (bez instalacji lokalnie)

Budowanie odbywa się w chmurze — Twój komputer niczego nie kompiluje.

### 1. Wgraj projekt na GitHub

1. Załóż konto na [github.com](https://github.com).
2. Kliknij **+ → New repository**, nazwa: `refhub`, klik **Create repository**.
3. Kliknij **„uploading an existing file"**.
4. Otwórz folder projektu w Eksploratorze, zaznacz **wszystkie pliki i foldery**
   (`app`, `components`, `lib`, `package.json`, `README.md` itd.)
   i **przeciągnij je** do okna przeglądarki.
5. Kliknij **Commit changes**.

> ⚠️ NIE wgrywaj folderu `node_modules` (jest w `.gitignore`). Vercel pobierze zależności sam.

### 2. Deploy na Vercel

1. Wejdź na [vercel.com](https://vercel.com) → **Sign Up** → **Continue with GitHub**.
2. **Add New… → Project** → znajdź repo `refhub` → **Import**.
3. Vercel automatycznie wykryje Next.js — nic nie zmieniaj, kliknij **Deploy**.
4. Po ~1–2 min dostaniesz adres, np. `refhub.vercel.app`.

Każda kolejna zmiana wrzucona na GitHub = automatyczna aktualizacja strony.

---

## 🖥️ Uruchomienie lokalne (opcjonalne — wymaga Node.js 18+)

```bash
npm install
npm run dev
```

Strona: [http://localhost:3000](http://localhost:3000)

---

## ✏️ Co edytować

| Chcę zmienić… | Plik |
|---|---|
| Listę ofert i kwoty bonusów | `lib/offers.ts` |
| Adres kanału Telegram | `components/Sidebar.tsx` i `components/TelegramCTA.tsx` (stała `TELEGRAM_URL`) |
| Kolory / paletę | `tailwind.config.ts` |
| Teksty w sekcjach | pliki w `components/` |

---

## ⚠️ Uwagi

- Linki `/go/...` przy ofertach to placeholdery — system przekierowań ze śledzeniem
  kliknięć to następny etap. Do tego czasu prowadzą donikąd.
- Kwoty bonusów w `lib/offers.ts` są przykładowe — zaktualizuj danymi z arkusza
  `programy-afiliacyjne-refhub.csv` po weryfikacji w programach partnerskich.
- Strona zawiera linki afiliacyjne i nie stanowi porady inwestycyjnej.
