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
      title: "Desarrollo Backend",
      text1: "Construyo arquitecturas de servidor robustas, de alto rendimiento y preparadas para escalar.",
      text2: "Especializado en el ecosistema Go (Golang) y frameworks como Gin, diseño APIs RESTful, sistemas orientados a microservicios y servicios concurrentes de baja latencia.",
      text3: "Modelo e implemento bases de datos relacionales con PostgreSQL y MySQL, garantizando la integridad de los datos, y empaqueto toda la infraestructura con Docker para despliegues ágiles, portables y seguros.",
      text4: "Base de Datos: Gestión, modelado y optimización en PostgreSQL y MySQL.",
      text5: "Arquitectura: Diseño de API REST y ecosistemas de microservicios escalables.",
      imageUrl1: "/cardServicios/backendService.png",
      // imageUrl2: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 2,
      title: "Desarrollo Frontend",
      text1: "Construyo interfaces de usuario interactivas, rápidas y totalmente adaptables a cualquier dispositivo.",
      text2: "Utilizo React con TypeScript (ReactTS) para garantizar un código limpio, tipado y mantenible, complementado con Bootstrap para un diseño ágil, estructurado y responsivo.",
      text3: "Implemento arquitecturas de cliente sólidas que incluyen enrutamiento dinámico, gestión de estado y flujos de autenticación seguros mediante la integración de tokens JWT.",
      text4: "Consumo y sincronización fluida con APIs REST backend.",
      text5: "",
      imageUrl1: "/cardServicios/frontendService.png",
      // imageUrl2: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 3,
      title: "Mantenimiento, Optimización y Migración de Bases de Datos ",
      text1: "Gestión eficiente de datos para sistemas existentes.",
      text2: "Diseño, optimización y creación de estructura de bases de datos relacionales (PostgreSQL / MySQL).",
      text3: "Optimización de consultas lentas (queries), diseño de esquemas de datos desde cero, migraciones de datos seguras y estrategias de respaldo (backups) automatizados.",
      text4: "",
      text5: "",
      imageUrl1: "/cardServicios/dbService.jpg",
      // imageUrl2: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 4,
      title: "Desarrollo de Sistemas de Gestión a Medida (ERP / CRM / POS)",
      text1: "Digitalización de procesos operativos para negocios y pymes.",
      text2: "Creación de software de gestión interna personalizado (puntos de venta, control de inventario, gestión de clientes o facturación).",
      text3: "Soluciones full-stack (Go + ReactTS) creadas a la medida exacta de la lógica del cliente, superando las limitaciones de los software genéricos comercializados en el mercado.",
      text4: "",
      text5: "",
      imageUrl1: "/cardServicios/programing.jpg",
      // imageUrl2: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 5,
      title: "Auditoría y Modernización de Código (Refactorización)",
      text1: "Mejora de sistemas web o backends antiguos.",
      text2: "Se revisa código existente, migración de backends lentos a Go o interfaces obsoletas a React con TypeScript.",
      text3: "Reducción de costos de servidor (por la eficiencia de Go), mayor seguridad en las autenticaciones y una interfaz web moderna, responsiva y rápida.",
      text4: "",
      text5: "",
      imageUrl1: "/cardServicios/refactorService.jpg",
      // imageUrl2: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 6,
      title: "Modernización de Planta e Integración Web de PLCs",
      text1: "Transformamos tu infraestructura industrial en un entorno conectado, inteligente y accesible en tiempo real.",
      text2: "Implementamos soluciones avanzadas de lectura y escritura remota sobre Autómatas Programables (PLCs) y dispositivos de planta mediante protocolos industriales (Modbus TCP, Ethernet/IP, Serial).",
      text3: "Conectamos el hardware de producción con backends de alto rendimiento en Go y dashboards web en React, permitiendo monitorear variables de proceso, registrar datos históricos, gestionar alarmas y enviar comandos de control a tus máquinas desde cualquier dispositivo y con total seguridad.",
      text4: "",
      text5: "",
      imageUrl1: "/cardServicios/plcService.jpg",
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
