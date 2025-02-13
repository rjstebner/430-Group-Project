import type { Metadata } from "next";
import { roboto } from "./ui/fonts/fonts";
import Header from "@/app/ui/header";
import "./globals.css";
import SessionWrapper from "./SessionWrapper";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A innovative marketplace for connecting artisans and crafters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>
          <Header />
          <div
            className={`${roboto.className} antialiased p-1 flex items-center justify-center h-screen`}
          >
            {children}
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
