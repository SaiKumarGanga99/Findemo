import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Add this import
import { SpeedInsights } from "@vercel/speed-insights/next";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO + Favicon
export const metadata: Metadata = {
  title: "Findgm - Fund Your Business",
  description: "Fast, flexible financing powered by Fintec.",
  //icons: {
    //icon: "/logos/favicon.ico",
  //},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}

        {/* ✅ Vercel Performance Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
