import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://github-stats.omsimos.com/"),
  title: "GitHub Stats Generator | Omsimos",
  description:
    "Make your special repository feel special! Generate GitHub README stats with ease! Generate your stats, streaks, & top languages with 40+ themes to choose from! ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "GitHub Stats Generator — Omsimos",
    description:
      "Make your special repository feel special! Generate GitHub README stats with ease! Generate your stats, streaks, & top languages with 40+ themes to choose from!",
    images: [
      "https://github.com/omsimos/github-stats/assets/78056869/ded4ae46-524a-433b-bb54-c7e2c311e5da",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Stats Generator — Omsimos",
    description:
      "Make your special repository feel special! Generate GitHub README stats with ease! Generate your stats, streaks, & top languages with 40+ themes to choose from!",
  },
  alternates: {
    canonical: "https://github-stats.omsimos.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster />
          <NextTopLoader />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
