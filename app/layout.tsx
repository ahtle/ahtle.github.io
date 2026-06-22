import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { NavigationKeyTracker } from "@/hooks/use-navigation-key";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Anh's Portfolio",
  description: "Anh's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vt323.variable} h-full antialiased`}>
      <body className={`${vt323.className} flex min-h-full flex-col`}>
        <NavigationKeyTracker />
        {children}
      </body>
    </html>
  );
}
