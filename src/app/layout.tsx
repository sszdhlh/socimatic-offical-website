import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import "remixicon/fonts/remixicon.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const pacifico = Pacifico({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-pacifico"
});

export const metadata: Metadata = {
  title: "AI Content Pro | Automate Your Content Creation",
  description: "Advanced AI-powered content creation and automation platform for businesses of all sizes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pacifico.variable}`}>
      <ClientBody>
        {children}
        <Toaster />
      </ClientBody>
    </html>
  );
}
