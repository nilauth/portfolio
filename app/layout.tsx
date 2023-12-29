import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

import Header from "@/components/Header";
import "./globals.css";

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
      <body className={GeistMono.className}>
        <main className='max-w-4xl mx-auto'>
          <Header />
          <div className='mt-24'>{children}</div>
        </main>
      </body>
    </html>
  );
}
