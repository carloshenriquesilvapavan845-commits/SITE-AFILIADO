import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RR14 Marketplace",
    template: "%s | RR14 Marketplace",
  },
  description: "Motopeças, compatibilidade e conteúdo para quem vive de moto.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
