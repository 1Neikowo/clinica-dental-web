import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clínica Dental Pro | Dentista en Temuco, Chile",
  description: "Clínica dental de especialidades en Temuco. Ortodoncia, implantes, estética dental y urgencias 24/7. Agenda tu evaluación gratuita hoy.",
  keywords: "dentista temuco, clínica dental temuco, ortodoncia temuco, implantes dentales temuco, urgencias dentales",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Clínica Dental Pro | Tu sonrisa perfecta en Temuco",
    description: "Atención dental integral con especialistas de primer nivel. Tecnología 3D, tratamientos sin dolor y facilidades de pago.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
