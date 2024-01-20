import type { Metadata } from "next";
import { Inter, Arvo } from "next/font/google";
import "./globals.css";

const arvo = Arvo({ subsets: ['latin'], weight: ['400', '700']});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sticky Thoughts",
  description: "Note down your thoughts and let it stick!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arvo.className}>{children}</body>
    </html>
  );
}
