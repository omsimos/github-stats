import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "GH Stats Gen | Omsimos",
  description: "Generate your GitHub stats for your README with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
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
