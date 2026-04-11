import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";
import PostHogPageView from "./PostHogPageView";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timefog - See the Cost of Hyperfocus",
  description:
    "Timefog reveals the cost of hyperfocus \u2014 see where your time actually goes with a visual donut timeline. When one task runs overtime, your other priorities shrink in real time.",
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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <PostHogProvider>
          <PostHogPageView />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
