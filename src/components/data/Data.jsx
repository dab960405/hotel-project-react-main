// ✅ Lista de navegación
export const navList = [
  { id: 1, path: "/", text: "Inicio" },
  { id: 2, path: "/about", text: "Sobre Nosotros" },
  { id: 3, path: "/services", text: "Servicios" },
  { id: 4, path: "/rooms", text: "Habitaciones" },
  {
    id: 5,
    path: "/page",
    text: "Más",
    subItems: [
      { id: 51, path: "/booking", text: "Reservas" },
      { id: 52, path: "/team", text: "Nuestro Equipo" },
      { id: 53, path: "/testimonial", text: "Testimonios" },
    ],
  },
  { id: 6, path: "/contact", text: "Contacto" },
];

// ✅ Redes sociales
export const socialIcons = [
  { 
    name: "Facebook", 
    href: "https://facebook.com/dab", 
    icon: <i className="fab fa-facebook-f"></i> 
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/dab", 
    icon: <i className="fab fa-twitter"></i> 
  },
  { 
    name: "Instagram", 
    href: "https://instagram.com/dab", 
    icon: <i className="fab fa-instagram"></i> 
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/company/dab", 
    icon: <i className="fab fa-linkedin-in"></i> 
  },
];

// ✅ Carrusel
export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Descubre un hotel de lujo",
    subtitle: "Vive la experiencia",
    btn1: "Ver habitaciones",
    btn2: "Reservar",
    alt: "Vista interior del hotel con decoración elegante",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Comodidad y lujo en un solo lugar",
    subtitle: "Tu escapada perfecta",
    btn1: "Ver habitaciones",
    btn2: "Reservar",
    alt: "Suite con cama king, ventanales y vista panorámica",
  },
];

// ✅ Sección "about"
export const about = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Habitaciones",
    count: "7861",
  },
  {
    icon: <i className="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staff",
    count: "1234",
  },
  {
    icon: <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clientes",
    count: "4321",
  },
];

// ✅ Servicios
export const services = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary"></i>,
    name: "Habitaciones y Apartamentos",
    description: "Hospédate en espacios modernos, cómodos y limpios.",
  },
  {
    icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
    name: "Restaurante Gourmet",
    description: "Disfruta de la mejor gastronomía internacional.",
  },
  {
    icon: <i className="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    description: "Relájate y renueva energías en nuestro spa de lujo.",
  },
];

// ✅ Equipo
export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Felipe Osorio",
    designation: "Gerente General",
    alt: "Foto de Felipe Osorio, Gerente General",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "Carlos Pérez",
    designation: "Chef Ejecutivo",
    alt: "Foto de Carlos Pérez, Chef Ejecutivo",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Jose Chaves",
    designation: "Chef Ejecutivo",
    alt: "Foto de Jose Chaves, Chef Ejecutivo",
  },
  {
    image: "../assets/img/team-4.jpg",
    name: "Diego Bravo",
    designation: "Software Developer",
    alt: "Foto de Diego Bravo, Software Developer",
  }

];

// ✅ Footer secciones
export const footerItem = [
  {
    id: 1,
    header: "Compañía",
    UnitItem: [
      { name: "Sobre Nosotros", href: "/about" },
      { name: "Contacto", href: "/contact" },
      { name: "Política de privacidad", href: "/privacy" },
      { name: "Términos y Condiciones", href: "/terms" },
      { name: "Soporte", href: "/support" },
    ],
  },
  {
    id: 2,
    header: "Servicios",
    UnitItem: [
      { name: "Restaurante", href: "/services#food" },
      { name: "Spa & Fitness", href: "/services#spa" },
      { name: "Eventos", href: "/services#events" },
    ],
  },
];

// ✅ Footer contacto
export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "Bogotá",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@dab.com",
  },
];

// ✅ Contacto
export const contact = [
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "Reservas",
    email: "reservas@dab.com",
  },
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "Soporte Técnico",
    email: "soporte@dab.com",
  },
];

// ✅ Testimonios
export const testimonial = [
  {
    description:
      "La mejor experiencia de vacaciones que he tenido. Atención al detalle espectacular.",
    name: "Ana López",
    profession: "Cliente",
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "Habitaciones cómodas, servicio excelente y comida deliciosa. Recomendado al 100%.",
    name: "Pedro Ramos",
    profession: "Cliente",
    img: "../assets/img/testimonial-2.jpg",
  },
];

// ✅ Habitaciones
export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "$110/noche",
    name: "Junior Suite",
    rating: 4,
    description:
      "Habitación moderna con todas las comodidades, ideal para viajes cortos.",
    yellowbtn: "Ver detalle",
    darkbtn: "Reservar",
    alt: "Imagen de la habitación Junior Suite",
  },
  {
    img: "../assets/img/room-2.jpg",
    price: "$150/noche",
    name: "Executive Suite",
    rating: 5,
    description:
      "Amplia suite ejecutiva con sala privada, escritorio y vista al mar.",
    yellowbtn: "Ver detalle",
    darkbtn: "Reservar",
    alt: "Imagen de la habitación Executive Suite",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "$180/noche", // Ajusté el precio para mantener una progresión
    name: "Super Deluxe",
    rating: 5,
    description: "Amplia habitación de lujo con amenities exclusivas y vista privilegiada.",
    yellowbtn: "Ver detalle",
    darkbtn: "Reservar",
    alt: "Imagen de la habitación Super Deluxe con terraza privada y jacuzzi"
  }
  
];

// ✅ Facilidades de habitación
export const facility = [
  {
    icon: <i className="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "Camas",
  },
  {
    icon: <i className="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "Baños",
  },
  {
    icon: <i className="fa fa-wifi text-primary me-2"></i>,
    facility: "WiFi gratuito",
  },
];