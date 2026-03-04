import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be Smile Clínica Dental | Dentista en Temuco, Chile",
  description: "Be Smile Clínica Dental en Temuco. Odontología general, limpieza dental, blanqueamiento, ortodoncia y fluoración. Pierde el miedo y agenda tu diagnóstico.",
  keywords: "dentista temuco, clínica dental temuco, ortodoncia temuco, blanqueamiento dental temuco, limpieza dental temuco, be smile temuco",
  openGraph: {
    title: "Be Smile Clínica Dental | Tu sonrisa perfecta en Temuco",
    description: "Atención dental de calidad en Temuco. Odontología general, blanqueamiento, ortodoncia y más. Pierde el miedo, agenda tu diagnóstico.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
