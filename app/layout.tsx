import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "ZhaRa | Web Developer & UI/UX Specialist",
  description: "Portfolio profesional Muhammad Sulthan Zharfan (ZhaRa). Membangun antarmuka web masa depan dengan Next.js, TypeScript, dan desain futuristik.",
  keywords: ["Web Developer", "Next.js Portfolio", "Frontend Developer Indonesia", "Zharfan Portfolio", "UI/UX Designer"],
  authors: [{ name: "Muhammad Sulthan Zharfan" }],
  openGraph: {
    title: "ZiraraPage | Futuristic Portfolio",
    description: "Digital headquarters of Muhammad Sulthan Zharfan. Specializing in high-end web experiences.",
    url: "https://zirara.page",
    siteName: "ZiraraPage",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZiraraPage Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiraraPage | Web Developer Portfolio",
    description: "Explore the futuristic digital projects of Muhammad Sulthan Zharfan.",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${mono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
