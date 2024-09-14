import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.scss";
import LayoutSide from "@/components/Layout/LayoutSide";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ЧАКЫРУУ",
  description: "Белгилүү жаш",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair_display.className}>
        <LayoutSide>{children}</LayoutSide>
      </body>
    </html>
  );
}
