import type { Metadata } from "next";
import { Geist, Space_Grotesk, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Tawkir Arifin | Frontend Developer",
  description:
    "Portfolio of Tawkir Arifin, a frontend developer building responsive web products, AI-driven applications, full-stack systems, and research-backed technical solutions.",
  keywords: [
    "Tawkir Arifin",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "AI Applications",
    "Full-Stack Developer",
    "Bangladesh Developer",
    "Software Engineer Portfolio"
  ],
  openGraph: {
    title: "Tawkir Arifin | Frontend Developer",
    description:
      "Frontend developer building fast, responsive web products with AI and full-stack engineering experience.",
    url: "https://arifin-portfolio.vercel.app/",
    siteName: "Tawkir Arifin Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tawkir Arifin Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${inter.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
