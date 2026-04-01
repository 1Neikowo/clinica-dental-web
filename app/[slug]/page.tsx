"use client";

import { useParams } from "next/navigation";
import { getClinicaBySlug, ClinicaConfig } from "@/lib/clinicas";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FAQAccordion } from "@/components/ui/accordion";
import { CompareSlider } from "@/components/ui/compare-slider";
import { Home, Stethoscope, MessageSquare, Phone, Instagram, Facebook, Sparkles, User, BriefcaseMedical, ShieldCheck, Clock, CreditCard, HeartPulse, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import React, { useRef, useState } from "react";

// Mapeo de colores Tailwind dinámicos
const colorMap: Record<string, { text: string; bg: string; bgLight: string; border: string; hover: string; gradient: string; ring: string }> = {
  blue:    { text: "text-blue-600",    bg: "bg-blue-600",    bgLight: "bg-blue-100",    border: "border-blue-600",    hover: "hover:bg-blue-700",    gradient: "from-blue-600 via-blue-700 to-indigo-700",    ring: "bg-blue-100/60" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-600", bgLight: "bg-emerald-100", border: "border-emerald-600", hover: "hover:bg-emerald-700", gradient: "from-emerald-600 via-emerald-700 to-teal-700", ring: "bg-emerald-100/60" },
  violet:  { text: "text-violet-600",  bg: "bg-violet-600",  bgLight: "bg-violet-100",  border: "border-violet-600",  hover: "hover:bg-violet-700",  gradient: "from-violet-600 via-violet-700 to-purple-700", ring: "bg-violet-100/60" },
  sky:     { text: "text-sky-600",     bg: "bg-sky-600",     bgLight: "bg-sky-100",     border: "border-sky-600",     hover: "hover:bg-sky-700",     gradient: "from-sky-600 via-sky-700 to-blue-700",       ring: "bg-sky-100/60" },
  teal:    { text: "text-teal-600",    bg: "bg-teal-600",    bgLight: "bg-teal-100",    border: "border-teal-600",    hover: "hover:bg-teal-700",    gradient: "from-teal-600 via-teal-700 to-cyan-700",     ring: "bg-teal-100/60" },
  indigo:  { text: "text-indigo-600",  bg: "bg-indigo-600",  bgLight: "bg-indigo-100",  border: "border-indigo-600",  hover: "hover:bg-indigo-700",  gradient: "from-indigo-600 via-indigo-700 to-blue-700", ring: "bg-indigo-100/60" },
  rose:    { text: "text-rose-600",    bg: "bg-rose-600",    bgLight: "bg-rose-100",    border: "border-rose-600",    hover: "hover:bg-rose-700",    gradient: "from-rose-600 via-rose-700 to-pink-700",     ring: "bg-rose-100/60" },
  amber:   { text: "text-amber-600",   bg: "bg-amber-600",   bgLight: "bg-amber-100",   border: "border-amber-600",   hover: "hover:bg-amber-700",   gradient: "from-amber-600 via-amber-700 to-orange-700", ring: "bg-amber-100/60" },
};

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
        <p className="text-slate-500 text-lg mb-8">Esta clínica no existe aún</p>
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default function ClinicaPage() {
  const params = useParams();
  const slug = params.slug as string;
  const clinica = getClinicaBySlug(slug);

  if (!clinica) return <NotFound />;

  const colors = colorMap[clinica.primaryColor] || colorMap.blue;

  const navItems = [
    { name: "Inicio",         link: "#inicio",         icon: <Home className="h-4 w-4 text-slate-500" /> },
    { name: "Nosotros",       link: "#nosotros",       icon: <User className="h-4 w-4 text-slate-500" /> },
    { name: "Especialidades", link: "#especialidades", icon: <BriefcaseMedical className="h-4 w-4 text-slate-500" /> },
    { name: "Equipo",         link: "#equipo",         icon: <MessageSquare className="h-4 w-4 text-slate-500" /> },
    { name: "Contacto",       link: "#contacto",       icon: <Phone className="h-4 w-4 text-slate-500" /> },
  ];

  const specialties = [
    {
      Icon: Sparkles,
      name: "Ortodoncia",
      description: "Brackets y alineadores invisibles para una sonrisa perfecta.",
      href: "#contacto",
      cta: "Saber más",
      className: "sm:col-span-2 lg:col-span-1 lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900" />,
      details: [
        "Evaluación y diagnóstico con scanner 3D intraoral",
        "Brackets metálicos, cerámicos o autoligables",
        "Alineadores invisibles (alternativa sin brackets)",
        "Control mensual incluido durante todo el tratamiento",
        "Contención post-tratamiento incluida",
      ],
      whatsappMessage: `Hola ${clinica.name}, me interesa el servicio de Ortodoncia. ¿Podrían darme más información?`,
    },
    {
      Icon: BriefcaseMedical,
      name: "Implantología",
      description: "Recupera la funcionalidad de tu boca de manera segura y definitiva.",
      href: "#contacto",
      cta: "Saber más",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      background: <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900" />,
      details: [
        "Evaluación con tomografía 3D de alta precisión",
        "Implantes de titanio de grado médico premium",
        "Cirugía mínimamente invasiva guiada por computador",
        "Corona definitiva sobre implante incluida",
        "Garantía de por vida en el implante",
      ],
      whatsappMessage: `Hola ${clinica.name}, me interesa el servicio de Implantología. ¿Podrían darme más información?`,
    },
    {
      Icon: Stethoscope,
      name: "Estética Dental",
      description: "Blanqueamiento y carillas de porcelana de alta calidad.",
      href: "#contacto",
      cta: "Saber más",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-slate-900" />,
      details: [
        "Blanqueamiento LED profesional (resultados en 1 sesión)",
        "Carillas de porcelana ultrafinas E-Max",
        "Diseño de sonrisa digital personalizado",
        "Resinas estéticas de alta durabilidad",
      ],
      whatsappMessage: `Hola ${clinica.name}, me interesa el servicio de Estética Dental. ¿Podrían darme más información?`,
    },
    {
      Icon: User,
      name: "Odontopediatría",
      description: "Cuidado experto y amable para los más chicos del hogar.",
      href: "#contacto",
      cta: "Saber más",
      className: "sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4",
      background: <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-white dark:from-sky-900/20 dark:to-slate-900" />,
      details: [
        "Primera visita de adaptación sin costo",
        "Sellantes preventivos y flúor profesional",
        "Tratamientos con sedación consciente si es necesario",
        "Educación en higiene bucal lúdica para niños",
        "Seguimiento del desarrollo dental completo",
      ],
      whatsappMessage: `Hola ${clinica.name}, me interesa el servicio de Odontopediatría para mi hijo/a. ¿Podrían darme más información?`,
    },
  ];

  const faqs = [
    {
      question: "¿Atienden con Bonos Fonasa o Isapre?",
      answer: "Sí, tenemos convenios con las principales Isapres del país y emitimos el certificado necesario para que puedas reembolsar. Para Fonasa ofrecemos aranceles preferenciales y facilidades de pago.",
    },
    {
      question: "¿Los tratamientos de conducto son dolorosos?",
      answer: "No. Utilizamos anestesia local y tecnología de sedación consciente en caso de que lo requieras. Nuestro equipo se especializa en brindar tratamientos completamente indoloros y tranquilos.",
    },
    {
      question: "¿Cuánto dura un tratamiento de Ortodoncia?",
      answer: "Depende de cada caso, pero en promedio un tratamiento con brackets tradicionales o alineadores invisibles dura entre 12 y 24 meses. En tu evaluación te daremos un estimado exacto.",
    },
    {
      question: "¿A partir de qué edad deben ir los niños al dentista?",
      answer: "Recomendamos la primera visita durante el primer año de vida o cuando aparece el primer diente de leche. Así prevenimos problemas futuros y acostumbramos al niño al entorno dental.",
    },
    {
      question: "¿Qué debo hacer en caso de una urgencia dental?",
      answer: `Si tienes un dolor muy fuerte, un diente fracturado o una infección, contáctanos de inmediato a través de nuestro botón de WhatsApp. Contamos con atención de urgencias prioritaria.`,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Hero Section */}
      <section id="inicio" className="h-screen w-full relative">
        <MinimalistHero
          logoText={
            <>
              <img src="/logo.png" alt={`Logo ${clinica.name}`} className="h-12 w-auto" />
              <span className="text-slate-900 font-extrabold uppercase tracking-widest text-lg" style={{ fontFamily: 'var(--font-outfit)' }}>{clinica.name}</span>
            </>
          }
          navLinks={navItems.map(item => ({ label: item.name, href: item.link }))}
          mainText={clinica.tagline}
          readMoreLink={`https://wa.me/${clinica.phone}?text=${encodeURIComponent("Hola, me gustaría agendar una evaluación")}`}
          readMoreText="Agendar Evaluación"
          imageSrc="/hero.webp"
          imageAlt={`Doctora ${clinica.name}`}
          overlayText={{
            part1: 'sonrisa',
            part2: 'perfecta.',
          }}
          socialLinks={[
            { icon: Instagram, href: clinica.instagram },
            { icon: Facebook, href: clinica.facebook },
          ]}
          locationText={clinica.addressLine2}
          circleClassName={colors.ring}
          accentColorClass={colors.bg}
          accentHoverClass={colors.hover}
          accentTextClass={colors.text}
        />
      </section>

      {/* Por qué elegirnos */}
      <motion.section
        id="nosotros"
        className="py-12 md:py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Por qué elegirnos</h2>
            <div className={`h-1 w-20 ${colors.bg} mx-auto rounded-full`} />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Nos diferenciamos por ofrecer una experiencia dental superior enfocada en tu comodidad y salud a largo plazo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 mx-auto ${colors.bgLight} rounded-full flex items-center justify-center mb-6`}>
                <HeartPulse className={`w-8 h-8 ${colors.text}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Atención sin dolor</h3>
              <p className="text-slate-600">Utilizamos técnicas avanzadas y anestesia computarizada para garantizar una experiencia sin molestias.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tecnología 3D</h3>
              <p className="text-slate-600">Equipamiento de última generación para diagnósticos precisos y tratamientos mucho más rápidos y eficaces.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Urgencias 24/7</h3>
              <p className="text-slate-600">Estamos siempre disponibles para atender emergencias dentales en cualquier momento del día o la noche.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Facilidades de pago</h3>
              <p className="text-slate-600">Múltiples opciones de financiamiento y convenios con aseguradoras para que tu salud no espere.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Especialidades */}
      <motion.section
        id="especialidades"
        className="py-16 md:py-24 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Nuestras Especialidades</h2>
          <div className={`h-1 w-20 ${colors.bg} mx-auto rounded-full`} />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Brindamos soluciones integrales para el cuidado de tu salud bucal, con profesionales dedicados en cada área.</p>
        </div>
        <BentoGrid className="lg:grid-rows-[repeat(3,12rem)] max-w-5xl mx-auto">
          {specialties.map((specialty) => (
            <BentoCard key={specialty.name} {...specialty} phoneNumber={clinica.phone} accentTextColor={colors.text} />
          ))}
        </BentoGrid>
      </motion.section>

      {/* CTA Banner */}
      <motion.section
        className={`py-16 md:py-20 bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">¿Listo para tu sonrisa perfecta?</h2>
            <p className="text-blue-100 text-base md:text-xl mb-8 max-w-2xl mx-auto">Agenda tu evaluación gratuita hoy y da el primer paso hacia una sonrisa que cambie tu vida.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${clinica.phone}?text=${encodeURIComponent("Hola, me gustaría agendar una evaluación gratuita")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base sm:text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Agendar Evaluación Gratis
              </a>
              <a
                href={`tel:+${clinica.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-white/10 transition-all text-base sm:text-lg"
              >
                <Phone className="h-5 w-5" />
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Antes y Después */}
      <motion.section
        id="resultados"
        className="py-16 md:py-24 bg-white px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Antes y Después</h2>
            <div className={`h-1 w-20 ${colors.bg} mx-auto rounded-full`} />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Resultados reales que hablan por sí solos. Descubre el poder de una sonrisa transformada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CompareSlider
              beforeImage="/blanqueamiento1.png"
              afterImage="/blanqueamiento2.png"
              title="Blanqueamiento LED"
              description="Resultados visibles en solo 1 sesión. Hasta 8 tonos más blanco."
              colorClass={colors.text}
              isExternalImage={false}
            />
            <CompareSlider
              beforeImage="/carilla1.png"
              afterImage="/carilla2.png"
              title="Carillas de Porcelana"
              description="Transformación completa de la sonrisa con carillas ultrafinas."
              colorClass={colors.text}
              isExternalImage={false}
            />
            <CompareSlider
              beforeImage="/ortodoncia1.png"
              afterImage="/ortodoncia2.png"
              title="Ortodoncia Invisible"
              description="Alineación perfecta sin brackets visibles en 12 meses."
              colorClass={colors.text}
              isExternalImage={false}
            />
          </div>
        </div>
      </motion.section>

      {/* Equipo */}
      <motion.section
        id="equipo"
        className="py-16 md:py-24 bg-slate-50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Conoce a Nuestro Equipo</h2>
            <div className={`h-1 w-20 ${colors.bg} mx-auto rounded-full`} />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Profesionales altamente capacitados y apasionados por brindarte la mejor atención y cuidar de tu sonrisa.</p>
          </div>
          <AnimatedTestimonials testimonials={clinica.team} autoplay={true} />
        </div>
      </motion.section>

      {/* Testimonios */}
      <motion.section
        id="testimonios"
        className="py-16 md:py-24 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Lo que dicen nuestros Pacientes</h2>
            <div className={`h-1 w-20 ${colors.bg} mx-auto rounded-full`} />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">La confianza de quienes ya nos eligieron es nuestro mayor orgullo.</p>
          </div>

          {(() => {
            const scrollRef = useRef<HTMLDivElement>(null);
            const [activeIdx, setActiveIdx] = useState(0);
            const handleScroll = () => {
              if (!scrollRef.current) return;
              const el = scrollRef.current;
              const idx = Math.round(el.scrollLeft / (el.scrollWidth / clinica.testimonials.length));
              setActiveIdx(idx);
            };
            return (
              <>
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {clinica.testimonials.map((testimonial, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 * i }}
                      className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 relative w-[80vw] md:w-auto flex-none md:flex-1 snap-center"
                    >
                      <Quote className="h-8 w-8 text-blue-100 absolute top-6 right-6" />
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-6">"{testimonial.text}"</p>
                      <div className="border-t border-slate-200 pt-4">
                        <p className="font-bold text-slate-800">{testimonial.name}</p>
                        <p className={`text-sm ${colors.text}`}>{testimonial.treatment}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                  {clinica.testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === activeIdx ? colors.bg : 'bg-slate-300'}`}
                    />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        className="py-16 md:py-24 bg-slate-50 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Preguntas Frecuentes</h2>
            <div className={`h-1 w-20 ${colors.bg} mx-auto rounded-full`} />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Resolvemos tus dudas más comunes antes de tu primera visita.</p>
          </div>
          <FAQAccordion faqs={faqs} accentColor={colors.text} />
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-900 text-slate-300 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <img src="/logo.png" alt={`Logo ${clinica.name}`} className="h-12 w-auto" />
              <span className="font-extrabold uppercase tracking-widest" style={{ fontFamily: 'var(--font-outfit)' }}>{clinica.name}</span>
            </h3>
            <p className="text-sm text-slate-400">
              {clinica.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="agendar">
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>{clinica.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>{clinica.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Home className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>{clinica.address}<br />{clinica.addressLine2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>{clinica.schedule}<br />{clinica.scheduleLine2}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <a href={clinica.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={clinica.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={`https://wa.me/${clinica.phone}`} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-8">
              <Link
                href={`https://wa.me/${clinica.phone}?text=${encodeURIComponent("Hola, me gustaría agendar una hora")}`}
                target="_blank"
                className={`w-full inline-block text-center ${colors.bg} text-white font-medium py-3 rounded-lg ${colors.hover} transition`}
              >
                Agendar Hora
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800">
          {clinica.mapEmbedUrl && (
            <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={clinica.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación ${clinica.name}`}
              />
            </div>
          )}
          <p className="text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} {clinica.name}. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsAppButton phoneNumber={clinica.phone} message={`Hola, vengo desde la página web de ${clinica.name}.`} />
    </main>
  );
}
