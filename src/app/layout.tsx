import type { Metadata } from "next";
import "./globals.css";
import Background3D from "@/components/Background3D";

export const metadata: Metadata = {
  title: "Code X | Encode & Decode",
  description: "Encode and decode text using a custom case-sensitive secret coded language. Transform uppercase letters and numbers into secret cipher codes.",
  keywords: ["encoder", "decoder", "cipher", "secret code", "cryptography", "code x"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background3D />
        {children}
      </body>
    </html>
  );
}
