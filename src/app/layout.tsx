import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forma Studio — Digital Brand Studio",
  description: "Estrategia, branding y tecnologia para startups que quieren destacar en LATAM.",
  openGraph: {
    title: "Forma Studio — Digital Brand Studio",
    description: "Estrategia, branding y tecnologia para startups que quieren destacar en LATAM.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
