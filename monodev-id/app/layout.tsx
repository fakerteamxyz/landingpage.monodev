import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Monodev.id | Partner Solusi Digital Terpercaya",
  description: "Jasa pembuatan website, aplikasi mobile, dan solusi coding terpercaya. Cepat, tepat, dan berkualitas.",
  keywords: ["web development", "jasa coding", "pembuatan website", "monodev", "joki coding", "software agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
