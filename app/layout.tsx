import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

import Header from "@/components/Header";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nilauth",
    template: "%s | Nilauth",
  },
  description: "Nilauth's portfolio & blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${GeistMono.variable} ${GeistSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
