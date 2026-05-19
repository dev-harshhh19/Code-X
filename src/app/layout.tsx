import type { Metadata } from "next";
import "./globals.css";
import BootSequence from "@/components/BootSequence";
export const metadata: Metadata = {
  title: {
    default: "Code X — Custom Cipher System",
    template: "%s | Code X",
  },
  description: "A premium, browser-only text encoder and decoder built on a custom cipher. Pure client-side operation with zero tracking, storage, or server communication.",
  keywords: ["encoder", "decoder", "cipher", "secret code", "cryptography", "privacy", "client-side"],
  authors: [{ name: "Developer" }],
  creator: "Developer",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://code-x-portfolio.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Code X — Custom Cipher System",
    description: "A premium, browser-only text encoder and decoder built on a custom cipher.",
    siteName: "Code X",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code X — Custom Cipher System",
    description: "A pure client-side cipher system. No tracking, no storage.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <BootSequence />
        {children}
      </body>
    </html>
  );
}
