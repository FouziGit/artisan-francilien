import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { generateSiteMetadata, generateLocalBusinessJsonLd } from "@/lib/seo-config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessJsonLd();

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#1B1B1B] font-sans">
        {children}
      </body>
    </html>
  );
}
