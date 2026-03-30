// =============================================
// CONFIGURACIÓN DE CLÍNICAS — 16 REALES DE SANTIAGO
// =============================================
// Para agregar una nueva clínica:
// 1. Copia un bloque existente
// 2. Cambia el slug (la key del objeto)
// 3. Actualiza los datos
// 4. Haz git push → Vercel deploya automáticamente
// 5. La landing estará en: tudominio.com/[slug]
// =============================================

export interface ClinicaConfig {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  primaryColor: string;
  primaryHex: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  addressLine2: string;
  mapEmbedUrl: string;
  instagram: string;
  facebook: string;
  schedule: string;
  scheduleLine2: string;
  team: { name: string; designation: string; quote: string; src: string }[];
  testimonials: { name: string; text: string; rating: number; treatment: string }[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  googleMapsRating?: number;
  googleMapsReviews?: number;
}

// =============================================
// PLANTILLAS DE EQUIPO Y TESTIMONIOS REUTILIZABLES
// =============================================
const defaultTeam = [
  {
    name: "Dra. Valentina Rojas",
    designation: "Rehabilitadora Oral & Estética",
    quote: "Mi objetivo es devolverle la confianza a cada paciente a través de una sonrisa saludable y natural.",
    src: "https://plus.unsplash.com/premium_photo-1682097277593-896395d8d787?q=80&w=1470&auto=format&fit=crop",
  },
  {
    name: "Dr. Matías Jara",
    designation: "Cirujano Maxilofacial & Implantología",
    quote: "La implantología moderna nos permite devolver sonrisas completas de forma mínimamente invasiva.",
    src: "https://plus.unsplash.com/premium_photo-1672922646096-dee26745509f?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Dra. Camila Fuentes",
    designation: "Especialista en Ortodoncia",
    quote: "La ortodoncia va más allá de enderezar dientes; se trata de armonía facial y salud a largo plazo.",
    src: "https://plus.unsplash.com/premium_photo-1681967053996-4275be0191e7?q=80&w=1493&auto=format&fit=crop",
  },
];

const defaultTestimonials = [
  {
    name: "María José L.",
    text: "Tenía pánico al dentista desde chica, pero acá me sentí súper cómoda desde la primera visita. ¡100% recomendados!",
    rating: 5,
    treatment: "Blanqueamiento LED",
  },
  {
    name: "Carlos M.",
    text: "Me puse implantes y la experiencia fue impecable. El seguimiento post-operatorio fue muy profesional.",
    rating: 5,
    treatment: "Implantes dentales",
  },
  {
    name: "Francisca R.",
    text: "Llevé a mi hijo de 4 años y la doctora fue increíble con él. Ahora le encanta ir al dentista.",
    rating: 5,
    treatment: "Odontopediatría",
  },
];

// =============================================
// CLÍNICAS REGISTRADAS
// =============================================

export const clinicas: Record<string, ClinicaConfig> = {

  // --- DEMO (ruta raíz) ---
  "demo": {
    name: "Clínica Dental",
    slug: "demo",
    tagline: "Atención dental de calidad. Pierde el miedo y recupera tu sonrisa con nosotros.",
    description: "Clínica dental de especialidades. Ortodoncia, implantes, estética dental y urgencias.",
    primaryColor: "blue",
    primaryHex: "#2563eb",
    phone: "56912345678",
    phoneDisplay: "+56 9 1234 5678",
    email: "contacto@clinicadental.cl",
    address: "Av. Alemania 0123, Of 401",
    addressLine2: "Temuco, Chile",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Clínica Dental | Dentista Temuco",
    seoDescription: "Clínica dental de especialidades en Temuco.",
    seoKeywords: "dentista temuco, clinica dental temuco",
  },

  // ===== 1. DR. MARIANO RODRÍGUEZ =====
  "dr-mariano": {
    name: "Dr. Mariano",
    slug: "dr-mariano",
    tagline: "Rejuvenecimiento facial estratégico y armonización orofacial. Tu mejor versión comienza con tu sonrisa.",
    description: "Especialista en rejuvenecimiento facial, armonización orofacial y estética dental de alta gama.",
    primaryColor: "amber",
    primaryHex: "#d97706",
    phone: "56998339788",
    phoneDisplay: "+56 9 9833 9788",
    email: "contacto@drmariano.cl",
    address: "Las Condes",
    addressLine2: "Las Condes, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/soydoctormariano/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Dr. Mariano | Armonización Orofacial Las Condes",
    seoDescription: "Especialista en rejuvenecimiento facial y armonización orofacial en Las Condes, Santiago.",
    seoKeywords: "armonización orofacial las condes, rejuvenecimiento facial santiago",
  },

  // ===== 2. CLÍNICAS FENNER =====
  "fenner": {
    name: "Fenner",
    slug: "fenner",
    tagline: "Odontopediatría especializada e inclusiva. Atención dental adaptada para todos los niños.",
    description: "Clínica dental pediátrica con enfoque inclusivo y sedación. Especialistas en niños neurodivergentes.",
    primaryColor: "rose",
    primaryHex: "#e11d48",
    phone: "56992188337",
    phoneDisplay: "+56 9 9218 8337",
    email: "contacto@fenner.cl",
    address: "Las Condes",
    addressLine2: "Las Condes, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/clinicasfenner/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 18:00",
    scheduleLine2: "Sáb: 9:00 - 13:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Fenner | Odontopediatría Las Condes",
    seoDescription: "Clínica dental pediátrica inclusiva en Las Condes. Sedación, atención adaptada y especialistas.",
    seoKeywords: "dentista niños las condes, odontopediatria santiago",
  },

  // ===== 3. CEOMAX =====
  "ceomax": {
    name: "CEOMAX",
    slug: "ceomax",
    tagline: "Cirugía maxilofacial, implantes y ortodoncia. Tecnología de punta para resultados excepcionales.",
    description: "Centro de especialidades odontológicas con cirugía maxilofacial, implantología y ortodoncia avanzada.",
    primaryColor: "teal",
    primaryHex: "#0d9488",
    phone: "56985553525",
    phoneDisplay: "+56 9 8555 3525",
    email: "contacto@ceomax.cl",
    address: "Las Condes",
    addressLine2: "Las Condes, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/clinica.ceomax/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 9:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "CEOMAX | Cirugía Maxilofacial Las Condes",
    seoDescription: "Centro de cirugía maxilofacial, implantes y ortodoncia en Las Condes, Santiago.",
    seoKeywords: "cirugia maxilofacial las condes, implantes santiago",
  },

  // ===== 4. ALCANTAR & CO. =====
  "alcantar": {
    name: "Alcantar & Co.",
    slug: "alcantar",
    tagline: "Más de 40 años de tradición familiar. Urgencias 24/7, Invisalign y estética dental de excelencia.",
    description: "Clínica dental familiar con 4 décadas de trayectoria. Urgencias, Invisalign y tratamientos estéticos.",
    primaryColor: "indigo",
    primaryHex: "#4f46e5",
    phone: "56944116700",
    phoneDisplay: "+56 9 4411 6700",
    email: "contacto@alcantar.cl",
    address: "Las Condes",
    addressLine2: "Las Condes, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/clinica.alcantar/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 20:00",
    scheduleLine2: "Sáb: 9:00 - 14:00 | Urgencias 24/7",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Alcantar & Co. | Dentista Las Condes",
    seoDescription: "Clínica dental con más de 40 años de experiencia. Urgencias 24/7, Invisalign y estética dental.",
    seoKeywords: "dentista las condes, invisalign santiago, urgencia dental santiago",
  },

  // ===== 5. ROSARIO NORTE =====
  "rosario-norte": {
    name: "Rosario Norte",
    slug: "rosario-norte",
    tagline: "Transformación de sonrisas y rejuvenecimiento facial. Recupera la confianza en ti.",
    description: "Clínica dental especializada en diseño de sonrisa y rejuvenecimiento facial integral.",
    primaryColor: "emerald",
    primaryHex: "#059669",
    phone: "56945640417",
    phoneDisplay: "+56 9 4564 0417",
    email: "contacto@rosarionorte.cl",
    address: "Las Condes",
    addressLine2: "Las Condes, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/clinicarosarionorte/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Rosario Norte | Diseño de Sonrisa Las Condes",
    seoDescription: "Transformación de sonrisas y rejuvenecimiento facial en Las Condes, Santiago.",
    seoKeywords: "diseño de sonrisa santiago, rejuvenecimiento facial las condes",
  },

  // ===== 6. DR. LANNEFRANQUE =====
  "dr-lannefranque": {
    name: "Dr. Lannefranque",
    slug: "dr-lannefranque",
    tagline: "Implantología avanzada y cirugía oral de alta estética. Resultados que transforman vidas.",
    description: "Especialista en implantología y cirugía oral de alta estética en Providencia.",
    primaryColor: "indigo",
    primaryHex: "#4f46e5",
    phone: "56987526202",
    phoneDisplay: "+56 9 8752 6202",
    email: "contacto@drlannefranque.cl",
    address: "Providencia",
    addressLine2: "Providencia, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/dr.lannefranque/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 9:00 - 13:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Dr. Lannefranque | Implantología Providencia",
    seoDescription: "Especialista en implantología y cirugía oral de alta estética en Providencia.",
    seoKeywords: "implantes dentales providencia, cirugía oral santiago",
  },

  // ===== 7. DRA. FRANCISCA GLEBOFF =====
  "dra-gleboff": {
    name: "Dra. Gleboff",
    slug: "dra-gleboff",
    tagline: "Endodoncia microscópica y armonización orofacial. Precisión y estética en cada tratamiento.",
    description: "Endodoncista con microscopio y especialista en armonización orofacial. Clínica Estoril.",
    primaryColor: "sky",
    primaryHex: "#0284c7",
    phone: "56936150249",
    phoneDisplay: "+56 9 3615 0249",
    email: "contacto@dragleboff.cl",
    address: "Las Condes",
    addressLine2: "Las Condes, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/drafranciscagleboff/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 18:00",
    scheduleLine2: "Sáb: Previa cita",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Dra. Gleboff | Endodoncia Microscópica Las Condes",
    seoDescription: "Endodoncia con microscopio y armonización orofacial en Las Condes.",
    seoKeywords: "endodoncia microscopio santiago, endodoncista las condes",
  },

  // ===== 8. REJUVENECE =====
  "rejuvenece": {
    name: "Rejuvenece",
    slug: "rejuvenece",
    tagline: "Armonización orofacial y rejuvenecimiento dental. Tu sonrisa, renovada y radiante.",
    description: "Centro de rejuvenecimiento dental y armonización orofacial en Maipú.",
    primaryColor: "rose",
    primaryHex: "#e11d48",
    phone: "56971453222",
    phoneDisplay: "+56 9 7145 3222",
    email: "contacto@rejuvenece.cl",
    address: "Maipú",
    addressLine2: "Maipú, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/rejuvenece__/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Rejuvenece | Armonización Orofacial Maipú",
    seoDescription: "Rejuvenecimiento dental y armonización orofacial en Maipú, Santiago.",
    seoKeywords: "rejuvenecimiento dental maipú, armonización orofacial santiago",
  },

  // ===== 9. SAN PASCUAL =====
  "san-pascual": {
    name: "San Pascual",
    slug: "san-pascual",
    tagline: "Tu clínica dental de confianza en Maipú. Limpieza, tratamientos y presupuestos sin costo.",
    description: "Clínica dental integral en Maipú. Limpieza dental, destartraje, profilaxis y más.",
    primaryColor: "blue",
    primaryHex: "#2563eb",
    phone: "56979026704",
    phoneDisplay: "+56 9 7902 6704",
    email: "contacto@sanpascual.cl",
    address: "Monumento 1916, 2do piso",
    addressLine2: "Maipú, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/sanpascual_clinicadental/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "San Pascual | Dentista en Maipú",
    seoDescription: "Clínica dental integral en Maipú. Limpieza, destartraje y presupuestos gratis.",
    seoKeywords: "dentista maipú, clínica dental maipú, limpieza dental maipú",
  },

  // ===== 10. CDF DENT =====
  "cdfdent": {
    name: "CDF Dent",
    slug: "cdfdent",
    tagline: "Ortodoncia, limpieza y sellantes. Cuidado dental accesible para toda la familia en Puente Alto.",
    description: "Centro dental familiar en Puente Alto. Ortodoncia, limpieza, sellantes y flúor.",
    primaryColor: "teal",
    primaryHex: "#0d9488",
    phone: "56959643710",
    phoneDisplay: "+56 9 5964 3710",
    email: "contacto@cdfdent.cl",
    address: "José Manuel Irarrázaval 0180, Of. 704",
    addressLine2: "Puente Alto, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/cdfdent/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 9:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "CDF Dent | Dentista Puente Alto",
    seoDescription: "Centro dental familiar en Puente Alto. Ortodoncia, limpieza y sellantes.",
    seoKeywords: "dentista puente alto, ortodoncia puente alto, clínica dental puente alto",
  },

  // ===== 11. CONSULTA DENTAL SAN JAVIER =====
  "san-javier": {
    name: "San Javier",
    slug: "san-javier",
    tagline: "Consulta dental cercana y profesional. Limpieza, tratamiento de bruxismo y más en Puente Alto.",
    description: "Consulta dental integral en Puente Alto. Limpieza, bruxismo y tratamientos preventivos.",
    primaryColor: "emerald",
    primaryHex: "#059669",
    phone: "56982434567",
    phoneDisplay: "+56 9 8243 4567",
    email: "contacto@sanjavier.cl",
    address: "Pasaje 27 #0640, Plaza Puente Alto",
    addressLine2: "Puente Alto, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/consultadentalsanjavier/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "San Javier | Consulta Dental Puente Alto",
    seoDescription: "Consulta dental en Puente Alto. Limpieza, bruxismo y tratamientos preventivos.",
    seoKeywords: "dentista puente alto, bruxismo puente alto, consulta dental santiago",
  },

  // ===== 12. DRA. PAULINA AGUILAR =====
  "dra-aguilar": {
    name: "Dra. Aguilar",
    slug: "dra-aguilar",
    tagline: "Cirujana dentista y ortodoncista. Cuidado dental especializado en Maipú.",
    description: "Cirujana dentista especialista en ortodoncia interceptiva y tratamientos integrales.",
    primaryColor: "rose",
    primaryHex: "#e11d48",
    phone: "56926188684",
    phoneDisplay: "+56 9 2618 8684",
    email: "contacto@draaguilar.cl",
    address: "Av. Los Pajaritos 3195, Of. 417",
    addressLine2: "Maipú, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/drapaulinaaguilar/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Dra. Aguilar | Ortodoncista en Maipú",
    seoDescription: "Cirujana dentista y ortodoncista en Maipú, Santiago.",
    seoKeywords: "ortodoncista maipú, dentista maipú, ortodoncia santiago",
  },

  // ===== 13. DENTAL MACÍAS =====
  "dental-macias": {
    name: "Dental Macías",
    slug: "dental-macias",
    tagline: "Rehabilitación oral, carillas y blanqueamiento. Tu sonrisa ideal está aquí, en Puente Alto.",
    description: "Clínica de rehabilitación oral, carillas estéticas, limpieza y blanqueamiento dental.",
    primaryColor: "blue",
    primaryHex: "#2563eb",
    phone: "56998870926",
    phoneDisplay: "+56 9 9887 0926",
    email: "contacto@dentalmacias.cl",
    address: "Av. Jorge Ross Ossa 507",
    addressLine2: "Puente Alto, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/dental.macias/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Dental Macías | Rehabilitación Oral Puente Alto",
    seoDescription: "Rehabilitación oral, carillas y blanqueamiento dental en Puente Alto.",
    seoKeywords: "carillas puente alto, blanqueamiento dental santiago, rehabilitación oral",
  },

  // ===== 14. DENTIORAL =====
  "dentioral": {
    name: "Dentioral",
    slug: "dentioral",
    tagline: "Blanqueamiento, alineadores, diseño de sonrisa y cirugía. Tu clínica dental integral en Providencia.",
    description: "Clínica dental integral. Blanqueamiento, alineadores, carillas, cirugía y diseño de sonrisa.",
    primaryColor: "indigo",
    primaryHex: "#4f46e5",
    phone: "56976073073",
    phoneDisplay: "+56 9 7607 3073",
    email: "contacto@dentioral.cl",
    address: "Jofré 0194",
    addressLine2: "Providencia, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/dentioral_/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 9:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Dentioral | Dentista en Providencia",
    seoDescription: "Blanqueamiento, alineadores, diseño de sonrisa y cirugía dental en Providencia.",
    seoKeywords: "dentista providencia, blanqueamiento santiago, diseño de sonrisa",
  },

  // ===== 15. CONEXIÓN DENTAL =====
  "conexion-dental": {
    name: "Conexión Dental",
    slug: "conexion-dental",
    tagline: "Ortodoncia, implantes, endodoncia y estética dental. Tu sonrisa conecta con el mundo.",
    description: "Centro dental multidisciplinario con ortodoncia, implantes, endodoncia y estética dental y facial.",
    primaryColor: "blue",
    primaryHex: "#2563eb",
    phone: "56930834102",
    phoneDisplay: "+56 9 3083 4102",
    email: "contacto@conexiondental.cl",
    address: "Av. Vicuña Mackenna 11496",
    addressLine2: "La Florida, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/conexiones.dental.cl/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Conexión Dental | Dentista La Florida",
    seoDescription: "Centro dental en La Florida. Ortodoncia, implantes, endodoncia y estética dental.",
    seoKeywords: "dentista la florida, ortodoncia la florida, implantes santiago",
  },

  // ===== 16. ARTEAGA & CERVANTES =====
  "arteaga-cervantes": {
    name: "Arteaga & Cervantes",
    slug: "arteaga-cervantes",
    tagline: "Estética dental premium. Implantes, coronas de zirconia y cirugías de alta complejidad.",
    description: "Estudio dental especializado en estética, implantes, coronas de zirconia y cirugías avanzadas.",
    primaryColor: "amber",
    primaryHex: "#d97706",
    phone: "56948803363",
    phoneDisplay: "+56 9 4880 3363",
    email: "contacto@arteagacervantes.cl",
    address: "José Manuel Irarrázaval 0180, Of. 806",
    addressLine2: "Puente Alto, Santiago",
    mapEmbedUrl: "",
    instagram: "https://www.instagram.com/arteaga_cervantes_odontologia/",
    facebook: "https://www.facebook.com/",
    schedule: "Lun - Vie: 9:00 - 19:00",
    scheduleLine2: "Sáb: 10:00 - 14:00",
    team: defaultTeam,
    testimonials: defaultTestimonials,
    seoTitle: "Arteaga & Cervantes | Estética Dental Puente Alto",
    seoDescription: "Estética dental, implantes y coronas de zirconia en Puente Alto.",
    seoKeywords: "estética dental puente alto, implantes puente alto, coronas zirconia",
  },
};

export const getAllClinicas = () => Object.values(clinicas);
export const getAllSlugs = () => Object.keys(clinicas).filter(slug => slug !== "demo");
export const getClinicaBySlug = (slug: string): ClinicaConfig | undefined => clinicas[slug];
