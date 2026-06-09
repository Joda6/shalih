import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./nav";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ================= METADATA ================= */
export const metadata: Metadata = {
  title: {
    default: "الشاليهات الذهبية",
    template: "%s | الشاليهات الذهبية",
  },

  description:
    "احجز شاليه فاخر وسط الطبيعة في وادي الدواسر. تجربة راقية تجمع بين الراحة والخصوصية والفخامة.",

  keywords: [
    "شاليهات",
    "حجز شاليه",
    "وادي الدواسر",
    "شاليهات فاخرة",
    "استراحة",
  ],

  authors: [{ name: "Dip Dev" }],
  creator: "Dip Dev",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "الشاليهات الذهبية",
    description:
      "تجربة فاخرة وسط الطبيعة مع خدمات راقية وراحة كاملة.",
    url: "https://your-domain.com",
    siteName: "الشاليهات الذهبية",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "الشاليهات الذهبية",
      },
    ],
    locale: "ar_MA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "الشاليهات الذهبية",
    description:
      "تجربة فاخرة وسط الطبيعة في وادي الدواسر",
    images: ["/logo.png"],
  },
};

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A1624] text-white">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}