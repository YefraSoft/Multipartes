import { redirectPage } from "./functions";

export const routes: links[] = [
  { url: "/found", title: "Buscador" },
  { url: "/contact", title: "Contacto" },
  { url: "/", title: "Inicio" },
  { url: "/about", title: "Nosotros" },
];

export const headLiners: HeadLiner[] = [
  {
    title: "Encuentra tu pieza perfecta",
    description: "Descubre rápidamente la pieza que necesitas para tu vehículo con solo una búsqueda.",
    icon: "searchIcon",
  },
  {
    title: "Visítanos en nuestra sucursal",
    description: "Recibe atención especializada en persona y encuentra lo que buscas con nuestros expertos.",
    icon: "map",
  },
  {
    title: "Contáctanos para atención personalizada",
    description: "Nuestro equipo está siempre listo para ayudarte. ¡No hay desafío que no podamos resolver!",
    icon: "phone",
  },
];


export const socialMedia: links[] = [
  { url: "facebook.com", title: "Facebook", icon: "facebook" },
  { url: "instagram.com", title: "Instagram" },
  { url: "/", title: "WatsApp", icon: "whatsapp" },
];

export const helpLinks: links[] = [
  { url: "/help/#Faqs", title: "Preguntas Frecuentes" },
  { url: "/help/#Problems", title: "Reportar problemas" },
  { url: "/about/#Security", title: "Seguridad" },
];

export const cardHeaderData: cardHeader[] = [
  {
    title: "Estamos a sus órdenes en..",
    content:
      "Encuentra nuestra ubicación haciendo clic en el botón.",
    buttonText: "Ver ubicación",
    action: () => redirectPage("https://maps.app.goo.gl/3fFdEp2b4Lg4MJJG8"),
    icon: "/map.svg",
  },
  {
    title: "Contáctanos por WhatsApp",
    content: "Estamos aquí para ayudarte. Escríbenos por WhatsApp.",
    buttonText: "Abrir WhatsApp",
    action: () => redirectPage("https://wa.me/3318106866"),
    icon: "/whatsapp.svg",
  },
];
