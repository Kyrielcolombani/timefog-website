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
  title: "Timefog - Daily Time Management & Balance",
  description:
    "Most time trackers count hours. Timefog shows consequences. A visual donut timeline where overspending on one task shrinks the rest. Smart alerts, streaks, and daily balance \u2014 all in one app.",
  metadataBase: new URL("https://timefog.app"),
  openGraph: {
    title: "Timefog - Daily Time Management & Balance",
    description:
      "Most time trackers count hours. Timefog shows consequences. A visual donut timeline where overspending on one task shrinks the rest.",
    url: "https://timefog.app",
    siteName: "Timefog",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timefog - Daily Time Management & Balance",
    description:
      "Most time trackers count hours. Timefog shows consequences. A visual donut timeline where overspending on one task shrinks the rest.",
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
