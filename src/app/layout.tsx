import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.github-stats.omsimos.com"),
  title: "GitHub Stats Generator | Omsimos",
  description:
    "Make your special repository feel special! Generate GitHub README stats with ease! Generate your stats, streaks, & top languages with 40+ themes to choose from! ",
  robots: "index, follow",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <Toaster />
          <NextTopLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
