import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Aethera — Learn Smarter With AI",
  description:
    "A premium intelligent learning platform combining AI tutoring, interactive learning, analytics, and personalized growth.",
  icons: {
    icon: "/aethera-logo.png",
    shortcut: "/aethera-logo.png",
    apple: "/aethera-logo.png",
  },
  openGraph: {
    title: "Aethera — Learn Smarter With AI",
    description:
      "A premium intelligent learning platform combining AI tutoring, interactive learning, analytics, and personalized growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased bg-bg-primary text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
