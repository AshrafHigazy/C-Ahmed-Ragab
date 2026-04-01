import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Coach Ahmed Ragab | Online Coaching",
  description: "Elite online fitness & nutrition coaching to transform your body and lifestyle with Coach Ahmed Ragab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${bebasNeue.variable} ${oswald.variable} ${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-cairo">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
