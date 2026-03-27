import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timefog - See the Cost of Hyperfocus",
  description:
    "Focus & Time Balance. Timefog makes the cost of hyperfocus visible in real time with a donut chart that shows how overspending on one task shrinks everything else.",
  metadataBase: new URL("https://timefog.app"),
  openGraph: {
    title: "Timefog - See the Cost of Hyperfocus",
    description:
      "Focus & Time Balance. See your day as a donut chart where tasks physically shrink when others run overtime.",
    url: "https://timefog.app",
    siteName: "Timefog",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timefog - See the Cost of Hyperfocus",
    description:
      "Focus & Time Balance. See your day as a donut chart where tasks physically shrink when others run overtime.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
