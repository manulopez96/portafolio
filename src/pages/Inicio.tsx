import { CardServicios, type ServicioItem } from "../components/CardServicio"
import { Carousel, type CarouselItem } from '../layout/Carousel';
import { CarouselLogos, type CarouselClientesItem as CarouselLogosItem } from "../layout/CarouselClientes";

export const Inicio = () => {

  // TODO: si la pantalla en menor a 790px cambiar imagenes
  const misSlides: CarouselItem[] = [
    {
      id: 1,
      imageUrl: "/carrusel/webdev1200x400.png",
      altText: "Desarrollo de Páginas Web imagen",
      title: "Desarrollo de Páginas Web",
      description: "Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados"
    },
    {
      id: 3,
      imageUrl: "/carrusel/diseño1200x400.jpeg",
      altText: "Diseño de Software a Medida imagen",
      title: "Diseño de Software a Medida",
      description: "Soluciones tecnológicas adaptadas al 100% a la lógica de tu negocio"
    },
    {
      id: 4,
      imageUrl: "/carrusel/modbus1200x400.png",
      altText: "Programación a Bajo Nivel y Conexión Web con Modbus TCP imagen",
      title: "Programación a Bajo Nivel y Conexión Web con Modbus TCP",
      description: "Desarrollamos soluciones avanzadas de integración entre la web y dispositivos industriales."
    },
    {
      id: 2,
      imageUrl: "/carrusel/correos1200x400.png",
      altText: "Gestión de Correos Empresariales imagen",
      title: "Gestión de Correos Empresariales",
      description: "Comunicación profesional, segura y sin interrupciones"
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
    
  ];

  const tecnologias: CarouselLogosItem[] = [
    {
      id: 1,
      imageUrl: "/logos/competencias/react.png",
      altText: "React logo",
    },
    {
      id: 2,
      imageUrl: "/logos/competencias/go.png",
      altText: "Go logo",
    },
    {
      id: 3,
      imageUrl: "/logos/competencias/js.png",
      altText: "JS logo",
    },
    {
      id: 4,
      imageUrl: "/logos/competencias/mongodb.png",
      altText: "Mongo logo",
    },
    {
      id: 5,
      imageUrl: "/logos/competencias/linux.png",
      altText: "Linux logo",
    },
    {
      id: 6,
      imageUrl: "/logos/competencias/html.png",
      altText: "html logo",
    },
    {
      id: 7,
      imageUrl: "/logos/competencias/css.png",
      altText: "css logo",
    },
    {
      id: 8,
      imageUrl: "/logos/competencias/sql.png",
      altText: "SQL logo",
    },
    {
      id: 9,
      imageUrl: "/logos/competencias/ts.png",
      altText: "ts logo",
    },
    {
      id: 10,
      imageUrl: "/logos/competencias/postgresql.png",
      altText: "postgreql logo",
    },
    {
      id: 11,
      imageUrl: "/logos/competencias/docker.png",
      altText: "docker logo",
    },
    
  ];


  return (
    <div>
      <Carousel items={misSlides} />
      <CardServicios items={servicios} />
      <CarouselLogos items={tecnologias} />
    </div>
  )
}
