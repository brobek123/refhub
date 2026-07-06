// UWAGA: kwoty bonusów są przykładowe/placeholdery.
// Zaktualizuj je danymi z arkusza `programy-afiliacyjne-refhub.csv`
// po weryfikacji w panelach programów partnerskich.

export type Offer = {
  id: string;
  name: string;
  category: string;
  reward: string;
  requirement: string;
  difficulty: "Łatwa" | "Średnia" | "Trudna";
  href: string;
};

export const offers: Offer[] = [
  {
    id: "revolut",
    name: "Revolut",
    category: "Bank / Cashback",
    reward: "do 50 €",
    requirement: "Rejestracja + płatność kartą",
    difficulty: "Łatwa",
    href: "/go/revolut",
  },
  {
    id: "xtb",
    name: "XTB",
    category: "Broker / Inwestycje",
    reward: "do 100 €",
    requirement: "Otwarcie konta + wpłata",
    difficulty: "Średnia",
    href: "/go/xtb",
  },
  {
    id: "trading212",
    name: "Trading 212",
    category: "Broker / Inwestycje",
    reward: "darmowa akcja",
    requirement: "Rejestracja + mała wpłata",
    difficulty: "Łatwa",
    href: "/go/trading212",
  },
  {
    id: "traderepublic",
    name: "Trade Republic",
    category: "Broker / Inwestycje",
    reward: "do 30 €",
    requirement: "Rejestracja + wpłata",
    difficulty: "Średnia",
    href: "/go/traderepublic",
  },
  {
    id: "wise",
    name: "Wise",
    category: "Transfery",
    reward: "darmowy transfer",
    requirement: "Pierwszy przelew powyżej progu",
    difficulty: "Średnia",
    href: "/go/wise",
  },
  {
    id: "bitvavo",
    name: "Bitvavo",
    category: "Krypto",
    reward: "0 € prowizji",
    requirement: "Handel powyżej progu",
    difficulty: "Średnia",
    href: "/go/bitvavo",
  },
];
