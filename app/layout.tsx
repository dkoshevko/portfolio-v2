import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "@/fonts/fonts";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Denys Koshevko",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}
