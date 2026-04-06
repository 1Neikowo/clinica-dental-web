import type { Metadata } from "next";
import { getClinicaBySlug } from "@/lib/clinicas";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const clinica = getClinicaBySlug(slug);

  if (!clinica) {
    return {
      title: "Clínica no encontrada",
      description: "La clínica que buscas no existe.",
    };
  }

  return {
    title: clinica.seoTitle,
    description: clinica.seoDescription,
    keywords: clinica.seoKeywords,
    openGraph: {
      title: `${clinica.name} | ${clinica.tagline.substring(0, 60)}`,
      description: clinica.seoDescription,
      type: "website",
      locale: "es_CL",
    },
  };
}

export default function ClinicaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
