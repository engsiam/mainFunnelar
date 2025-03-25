import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import client-side components with no SSR
const TimedPopup = dynamic(
  () => import("@/components/timed-popup").then((mod) => mod.TimedPopup),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Funnelar - Amazon Marketing Experts",
  description:
    "Delivering stunning brands, relatable products, & results oriented marketing strategy & execution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TimedPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
