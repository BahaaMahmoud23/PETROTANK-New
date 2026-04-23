import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const arabicFont = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${inter.variable} ${arabicFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased bg-canvas text-ink">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
