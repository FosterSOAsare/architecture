import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CustomCursor } from "@/features/layout/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REAPER | Architecture & Design",
  description: "A multidisciplinary architecture and design studio based in London and Tokyo.",
  metadataBase: new URL("https://architecture-iota-lac.vercel.app/"),
  openGraph: {
    title: "REAPER | Architecture & Design",
    description: "A multidisciplinary architecture and design studio based in London and Tokyo.",
    url: "https://architecture-iota-lac.vercel.app",
    siteName: "REAPER",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "REAPER | Architecture & Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REAPER | Architecture & Design",
    description: "A multidisciplinary architecture and design studio based in London and Tokyo.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-black.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-white.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <ToastContainer position="bottom-right" theme="dark" />
        {children}
      </body>
    </html>
  );
}
