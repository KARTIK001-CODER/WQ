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
  icons: {
    icon: "/aethera-logo.png",
    shortcut: "/aethera-logo.png",
    apple: "/aethera-logo.png",
  },
  openGraph: {
    title: "AETHERA | Learn, Refreshed.",
    description:
      "A premium, organic learning management system where knowledge falls like morning dew — gentle, refreshing, and life-giving.",
    type: "website",
    images: [
      {
        url: "/aethera-logo-3d.png",
        width: 1024,
        height: 1024,
        alt: "Aethera 3D Logo",
      },
    ],
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
