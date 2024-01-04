import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

import Header from "@/components/Header";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nilauth",
  description: "Nilauth's portfolio.",
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
