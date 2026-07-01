import { Camera, PenTool, Printer, Scissors } from "lucide-react";

export const SERVICES = [
  {
    id: "corporeas",
    title: "Letras Corpóreas",
    description: "Diseño y fabricación de letras en 3D (Polyfan, chapa, acrílico) con o sin iluminación LED.",
    icon: Scissors,
  },
  {
    id: "vinilos",
    title: "Rotulación en Vinilo",
    description: "Vinilos de corte e impresos para vidrieras, vehículos y decoración de interiores.",
    icon: PenTool,
  },
  {
    id: "textil",
    title: "Estampado Textil",
    description: "Serigrafía de alta calidad para indumentaria corporativa, remeras promocionales y merchandising.",
    icon: Printer,
  },
  {
    id: "carteleria",
    title: "Cartelería General",
    description: "Carteles front, back, salientes y totems diseñados para destacar tu negocio.",
    icon: Camera,
  }
];

export const PROJECTS = [
  {
    id: "p1",
    title: "Cartelería Luminosa Cafe",
    category: "Corpóreas & Neón",
    imageUrl: "https://images.unsplash.com/photo-1558235221-5f2122616b43?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "p2",
    title: "Vidriera Indumentaria",
    category: "Vinilo de Corte",
    imageUrl: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "p3",
    title: "Merchandising Festival",
    category: "Serigrafía Textil",
    imageUrl: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "p4",
    title: "Rotulación Vehicular",
    category: "Vinilo Impreso",
    imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "p5",
    title: "Fachada Local",
    category: "Cartelería Front",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "p6",
    title: "Uniformes Empresa",
    category: "Serigrafía",
    imageUrl: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800&auto=format&fit=crop&q=60",
  }
];
