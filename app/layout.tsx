import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Mitchel's Portfolio",
  description: "This is a personal website where you can see my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
