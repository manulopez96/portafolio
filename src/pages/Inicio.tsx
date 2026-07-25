import { CardServicios, type ServicioItem } from "../components/CardServicio"
import { Carousel, type CarouselItem } from '../layout/Carousel';
import { CarouselClientes, type CarouselClientesItem as CarouselLogosItem } from "../layout/CarouselClientes";

export const Inicio = () => {

  const misSlides: CarouselItem[] = [
    {
      id: 1,
      imageUrl: "/carrusel/schneider1200x400.webp",
      altText: "Desarrollo de Páginas Web imagen",
      title: "Desarrollo de Páginas Web",
      description: "Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados"
    },
    {
      id: 2,
      imageUrl: "/carrusel/automatismo1200x400.webp",
      altText: "Gestión de Correos Empresariales imagen",
      title: "Gestión de Correos Empresariales",
      description: "Comunicación profesional, segura y sin interrupciones"
    },
    {
      id: 3,
      imageUrl: "/carrusel/esabHD2-1200x400.webp",
      altText: "Diseño de Software a Medida imagen",
      title: "Diseño de Software a Medida",
      description: "Soluciones tecnológicas adaptadas al 100% a la lógica de tu negocio"
    },
    {
      id: 4,
      imageUrl: "/carrusel/scada1200x400.webp",
      altText: "Programación a Bajo Nivel y Conexión Web con Modbus TCP imagen",
      title: "Programación a Bajo Nivel y Conexión Web con Modbus TCP",
      description: "Programación a Bajo Nivel y Conexión Web con Modbus TCP"
    },
  ];

  const servicios: ServicioItem[] = [
    {
      id: 1,
      title: "Servicio autorizado Schneider",
      text1: "Contamos con ingenieros y técnicos certificados directamente por el fabricante para garantizar los más altos estándares de calidad.",
      text2: "Diagnóstico preciso y reparación utilizando únicamente componentes y repuestos 100% originales Schneider Electric para garantizar la máxima durabilidad.",
      text3: "Atención y diagnóstico tanto en nuestras instalaciones de laboratorio como servicio de asistencia técnica en planta e instalaciones del cliente.",
      text4: "Planes de mantenimiento preventivo y correctivo diseñados para maximizar la continuidad operativa de tus procesos industriales.",
      text5: "",
      imageUrl1: "/cardServicios/schneider-flat400x400.png",
      // imageUrl2: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 2,
      title: "Automatismo & SCADA",
      text1: "Diseñamos e implementamos sistemas de automatización industrial y paneles SCADA a medida. Optimiza tus procesos, reduce tiempos de parada y toma decisiones basadas en datos precisos minuto a minuto.",
      text2: "Supervisión y Telemetría en Tiempo Real: Paneles SCADA intuitivos que permiten visualizar variables críticas (presión, temperatura, caudal, estado de motores) desde cualquier punto de la planta.",
      text3: "Control Automatizado de Procesos: Desarrollo de lógica de control precisa en PLCs (Siemens, Schneider, Allen-Bradley, Delta, entre otros) para asegurar un funcionamiento autónomo y seguro.",
      text4: "Gestión de Alarmas e Históricos: Registro continuo de datos de producción y sistemas de alerta temprana para prevenir fallas severas y minimizar los tiempos de parada no programados.",
      text5: "Integración Industrial: Conectividad multimarca utilizando protocolos estándar de la industria (Modbus, Profinet, Ethernet/IP).",
      imageUrl1: "/cardServicios/automatismo400x400.png",
    },
    {
      id: 3,
      title: "Eficiencia & Monitoreo Energético",
      text1: "Medición inteligente, software a medida y estrategias de ahorro para optimizar el consumo de tu planta.",
      text2: "Diseñamos e implementamos proyectos integrales de medición y gestión energética para plantas industriales y grandes superficies. Combinamos instrumentación de precisión en campo con plataformas de software de monitoreo en tiempo real, permitiéndote tomar el control total de tus costos eléctricos, diagnosticar la calidad de energía y garantizar la sostenibilidad de tus operaciones.",
      text3: "Medición y análisis de armónicos (THD), variaciones de tensión y fluctuaciones de frecuencia para proteger tus equipos y evitar sobrecalentamientos o fallas prematuras.",
      text4: "Diagnóstico del consumo reactivo e ingeniería para el diseño de bancos de capacitores, evitando penalizaciones tarifarias en la factura eléctrica.",
      text5: "Asignación precisa del consumo eléctrico a líneas de producción, máquinas o sectores específicos de la planta.",
      imageUrl1: "/cardServicios/scadaservicio400x400.png",
    },
    {
      id: 4,
      title: "Servicio Técnico Autorizado ESAB (SAE)",
      text1: "Reparación, mantenimiento y calibración oficial para equipos de soldadura y corte de alta tecnología.",
      text2: "Como Servicio Autorizado ESAB (SAE), ofrecemos soporte técnico especializado para toda la línea de equipos industriales y portátiles de la marca. Contamos con técnicos capacitados por el fabricante, instrumental de diagnóstico calibrado y repuestos 100% originales para garantizar que tus equipos recuperen su rendimiento de fábrica y cumplan con las normativas de seguridad e industria.",
      text3: "Reparación integral, diagnóstico de fuentes de potencia, antorchas, consumibles, placas de control y sistemas CNC o portátiles de corte por plasma y tecnología láser.",
      text4: "Mantenimiento de fuentes inverters y tiristorizadas, devanadores/alimentadores de alambre, sistemas de tracción, antorchas y placas electrónicas de control de arco.",
      text5: "Reparación de equipos de alta frecuencia (HF), pulsados, fuentes AC/DC y módulos de potencia para soldaduras de alta precisión en aceros e inoxidables.",
      imageUrl1: "/cardServicios/esabServicio400x400.png",
    },
    {
      id: 5,
      title: "Servicio Técnico Multimarca de Soldadura y Corte",
      text1: "Mantenimiento integral, diagnóstico electrónico y reparación especializada para todas las marcas del mercado.",
      text2: "Brindamos soluciones de soporte técnico multimarca para equipos de soldadura y corte industrial. Entendemos el impacto de un equipo detenido en la línea de producción, por lo que contamos con un laboratorio técnico equipado para el diagnóstico preciso de fallas electrónicas, eléctricas y mecánicas, garantizando tiempos de respuesta ágiles y máxima confiabilidad.",
      text3: "Reparación de fuentes inverters y convencionales, devanadores, motores de arrastre, tarjetas de control y antorchas.",
      text4: "Diagnóstico de sistemas de alta frecuencia (HF), módulos IGBT, rectificadores y tableros de potencia.",
      text5: "Mantenimiento de fuentes de corte, circuitos de alta presión/gas, antorchas, consumibles y placas electrónicas.",
      imageUrl1: "/cardServicios/multimarca400x400.png",
    },
    {
      id: 6,
      title: "Venta de Equipos, Consumibles y Repuestos de Soldadura",
      text1: "Ofrecemos soluciones para procesos de soldadura y corte. Proveemos equipos, antorchas, consumibles y accesorios de las marcas más reconocidas del mercado global.",
      text2: "Equipos de Soldadura & Corte: Inverters MMA, MIG/MAG semiautomáticos, TIG AC/DC, sistemas de corte por plasma.",
      text3: "Antorchas y Consumibles: Toberas, difusores, picos de contacto, cuellos, electrodos de tungsteno y repuestos originales.",
      text4: "Asesoramiento Técnico Personalizado: Te ayudamos a optimizar costos eligiendo el insumo exacto para tu aplicación.",
      text5: "Productos 100% originales con garantía directa de fábrica y soporte técnico postventa.",
      imageUrl1: "/cardServicios/ventasmaq400x400.png",
    },
  ];

  const tecnologias: CarouselLogosItem[] = [
    {
      id: 1,
      imageUrl: "/logosClientes/schneider-electric-logo400x400.png",
      altText: "Schneider electric logo",
    },
    {
      id: 2,
      imageUrl: "/logosClientes/esab-logo400x400.png",
      altText: "Esab logo",
    },
    {
      id: 3,
      imageUrl: "/logosClientes/richetta-logo400x400.png",
      altText: "Richetta logo",
    },
    {
      id: 4,
      imageUrl: "/logosClientes/electroalem-logo400x400.png",
      altText: "electroalem logo",
    },
    {
      id: 5,
      imageUrl: "/logosClientes/JM-logo400x400.png",
      altText: "JM logo",
    },
    {
      id: 6,
      imageUrl: "/logosClientes/Aguas-Cordobesas-logo400x400.png",
      altText: "Aguas Cordobesas logo",
    },
    {
      id: 7,
      imageUrl: "/logosClientes/rc-logo400x400.png",
      altText: "RC Cuser logo",
    },
    {
      id: 8,
      imageUrl: "/logosClientes/kemppi-logo400x400.png",
      altText: "Kemppi logo",
    },
    {
      id: 9,
      imageUrl: "/logosClientes/ac-logo400x400.png",
      altText: "AC logo",
    },
  ];


  return (
    <div>
      <Carousel items={misSlides} />
      <CardServicios items={servicios} />
      <CarouselClientes items={tecnologias} />
    </div>
  )
}
