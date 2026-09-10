// ---------------------------------------------------------------------
// AFFILIATE CONFIG — this is the ONLY file you need to edit to update
// referral links, add/remove exchanges, or change badges/descriptions.
//
// Replace each `link` below with your real affiliate/referral URL once
// you've signed up for that program. Until then, `link` points at the
// exchange's normal homepage (not an affiliate link, so no commission
// yet, but nothing is broken).
// ---------------------------------------------------------------------

export const EXCHANGES = [
  {
    id: "coindcx",
    name: "CoinDCX",
    initials: "CX",
    color: "#0C3B2E",
    badge: "Popular in India",
    description: "One of India's largest crypto exchanges — INR deposits via UPI/bank transfer, 200+ coins.",
    features: ["UPI & bank transfer", "200+ coins listed", "Beginner-friendly app"],
    link: "https://coindcx.com/", // TODO: replace with your CoinDCX affiliate link
  },
  {
    id: "bybit",
    name: "Bybit",
    initials: "BY",
    color: "#3A2A1E",
    badge: "Easy for beginners",
    description: "A major global exchange with a clean app, deep liquidity, and strong derivatives/futures options.",
    features: ["Simple mobile app", "Deep liquidity", "Futures & derivatives"],
    link: "https://www.bybit.com/", // TODO: replace with your Bybit affiliate link
  },
  {
    id: "binance",
    name: "Binance",
    initials: "BN",
    color: "#2B2416",
    badge: "Most coins & features",
    description: "The world's largest exchange by volume — deepest liquidity, futures, staking, and more.",
    features: ["Huge coin selection", "Advanced trading tools", "Global liquidity"],
    link: "https://www.binance.com/", // TODO: replace with your Binance affiliate link
  },
  {
    id: "coinswitch",
    name: "CoinSwitch",
    initials: "CS",
    color: "#1E2A3A",
    badge: "Simplest app",
    description: "One of the simplest apps for a first-time buyer — clean UI, minimal jargon.",
    features: ["Very beginner-friendly", "UPI supported", "Clean, simple app"],
    link: "https://coinswitch.co/", // TODO: replace with your CoinSwitch affiliate link
  },
];

export const WALLETS = [];
