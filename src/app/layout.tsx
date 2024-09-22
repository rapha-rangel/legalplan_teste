import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import { DefaultProvider } from "@/components/default-provider";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LegalPlanTeste",
  description: "Desafio legalplan junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <DefaultProvider>
          {children}
        </DefaultProvider>
      </body>
    </html>
  );
}
