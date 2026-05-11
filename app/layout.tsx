import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUD Doméstica — Limpio, Útil y Duradero",
  description: "Tu tienda de electrodomésticos de confianza. Lavadoras, frigoríficos, televisores, hornos y mucho más. Calidad garantizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
