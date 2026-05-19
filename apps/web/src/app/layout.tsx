import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "AETHERA | Learn, Refreshed.",
  description:
    "A premium, organic learning management system where knowledge falls like morning dew — gentle, refreshing, and life-giving.",
  openGraph: {
    title: "AETHERA | Learn, Refreshed.",
    description:
      "A premium, organic learning management system where knowledge falls like morning dew — gentle, refreshing, and life-giving.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen antialiased bg-morning-mist text-deep-moss font-sans">
        {children}
      </body>
    </html>
  );
}
