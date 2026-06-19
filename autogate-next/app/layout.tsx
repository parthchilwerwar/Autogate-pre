import type { Metadata } from "next";
import { Instrument_Serif, DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Noise from "@/components/Noise";

// Original Google Fonts, loaded via next/font and exposed as CSS variables that
// the @theme block in globals.css maps onto font-sans / font-serif / font-mono.
const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoBudget | Your Finances on Autopilot",
  description:
    "AutoBudget reads bank SMS natively on Android and categorizes spending with an on-device rule engine — no cloud, no accounts. Total privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body>
        <SmoothScroll>
          <Noise />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
