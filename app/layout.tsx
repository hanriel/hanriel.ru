import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const geistSans = localFont({
  src: "./fonts/Geist.ttf",
  variable: "--font-geist-sans",
}); 

const geistMono = localFont({
  src: "./fonts/GeistMono.ttf",
  variable: "--font-geist-mono",
}); 

export const metadata: Metadata = {
  title: "HANRIEL.RU",
  description: "Мини-блог о технологиях",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
