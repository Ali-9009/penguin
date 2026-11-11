import CartShell from "@/components/cart/CartShell";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterPopup from "@/components/NewsletterPopup";
import ResearcherGate from "@/components/ResearcherGate";
import "@/styles/globals.css";

import { Geist, Outfit } from "next/font/google";

// =========================
// METADATA
// =========================

export const metadata = {
  title: {
    default: "Penguin Peptides | Premium Research Peptides",
    template: "%s | Penguin Peptides",
  },

  description:
    "Explore premium research peptides at Penguin Peptides. Discover high-quality peptides developed for laboratory research and scientific applications.",

  applicationName: "Penguin Peptides",

  keywords: [
    "Penguin Peptides",
    "Research Peptides",
    "Premium Peptides",
    "Laboratory Research",
    "Scientific Research",
  ],

  robots: {
    index: true,
    follow: true,
  },
};

// =========================
// FONTS
// =========================

// Heading Font - Outfit
const headingFont = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Body Font - Geist
const bodyFont = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// =========================
// ROOT LAYOUT
// =========================

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <CartShell>
          <ResearcherGate />
          <NewsletterPopup />
          <Header />
          {children}
          <Footer />
        </CartShell>
      </body>
    </html>
  );
}