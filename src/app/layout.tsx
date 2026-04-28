import type { Metadata } from "next";
import { Montserrat, Cairo } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-en",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-ar",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "PETROTANK | National Petroleum & Petrochemical Tank & Pipeline Co.",
    template: "%s | PETROTANK",
  },
  description:
    "PETROTANK — Saudi Arabia's first bonded storage license holder in Yanbu. 114,000 m³ bulk liquid storage capacity at King Fahd Industrial Port. ISO 9001:2015 · ISO 45001 · OCIMF MTMSA certified.",
  keywords: [
    "PETROTANK", "petroleum storage", "Yanbu", "Saudi Arabia",
    "energy logistics", "tank terminal", "bonded storage",
    "King Fahd Industrial Port", "marine operations", "petrochemical",
  ],
  openGraph: {
    title: "PETROTANK | Energy Logistics Hub",
    description: "First bonded storage license holder in Yanbu. 114,000 m³ bulk liquid storage at King Fahd Industrial Port.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${montserrat.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
