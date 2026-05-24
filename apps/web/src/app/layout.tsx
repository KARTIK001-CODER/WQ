import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aethera — A Thoughtfully Crafted Learning Workspace",
  description:
    "Aethera is a premium AI-powered learning platform that combines intelligent tutoring, editorial design, and deep focus tools into one thoughtfully crafted workspace.",
  icons: {
    icon: "/aethera-logo.png",
    shortcut: "/aethera-logo.png",
    apple: "/aethera-logo.png",
  },
  openGraph: {
    title: "Aethera — A Thoughtfully Crafted Learning Workspace",
    description:
      "Aethera is a premium AI-powered learning platform that combines intelligent tutoring, editorial design, and deep focus tools into one thoughtfully crafted workspace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
