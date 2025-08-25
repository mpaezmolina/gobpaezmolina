import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gobernador Justo Páez Molina",
  description: "Gobernador Justo Páez Molina. Nació en El Salto, el 7 de agosto de 1902. Político radical argentino y 52º Gobernador de Córdoba.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
