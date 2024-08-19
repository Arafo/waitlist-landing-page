// Removed Vercel Analytics import for Netlify deployment
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// config
import config from "@/config/general";
// components
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-grayBackground"}>
        {children}
      </body>
    </html>
  );
}
