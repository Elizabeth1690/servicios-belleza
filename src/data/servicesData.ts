export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface ServicesData {
  services: Service[];
}

export const services: Service[] = [
  {
    id: 1,
    name: "Manicura Clásica",
    description:
      "Incluye limado, hidratación y aplicación de esmalte permanente.",
    category: "Manos y Pies",
  },
  {
    id: 2,
    name: "Pedicura Spa",
    description:
      "Pedicura Spa con baño de parafina para unos pies suaves y relajados.",
    category: "Manos y Pies",
  },
  {
    id: 3,
    name: "Corte y peinado",
    description: "Corte de pelo personalizado más lavado y peinado.",
    category: "Cabello",
  },
  {
    id: 4,
    name: "A todo color",
    description: "Coloración capilar completa con productos sin amoníaco.",
    category: "Cabello",
  },
  {
    id: 5,
    name: "Masaje de tejido profundo",
    description: "Masaje intenso para aliviar la tensión muscular.",
    category: "Masaje y Spa",
  },
  {
    id: 6,
    name: "Facial Anti-Edad",
    description: "Tratamiento facial rejuvenecedor con productos naturales.",
    category: "Cuidado facial",
  },
  {
    id: 7,
    name: "Depilación",
    description: "Depilación corporal para una piel suave y sin vello.",
    category: "Depilación",
  },
  {
    id: 8,
    name: "Tratamiento Capilar",
    description: "Tratamiento reparador para cabello dañado o teñido.",
    category: "Cabello",
  },
  {
    id: 9,
    name: "Maquillaje Profesional",
    description: "Servicios de maquillaje para eventos especiales.",
    category: "Maquillaje",
  },
  {
    id: 10,
    name: "Limpieza facial",
    description:
      "Limpieza profunda con extracción de impurezas y aplicación de mascarilla.",
    category: "Cuidado facial",
  },
  // Se pueden agregar más servicios según sea necesario
];

// Uso de los tipos
/*console.log(data.services[0].name)*/ // Acceso a la propiedad name del primer servicio
