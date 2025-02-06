import React, { Suspense } from "react";
import { Slider } from "./layout/Slider";
// import { LuzPuntero } from "./three/LuzPuntero";
// import Environmenty from "./three/Environmenty";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderFoto from "../assets/foto2C01.webp";
import { Cargando } from "./layout/Cargando";

const LuzPuntero = React.lazy(() =>
  import("./three/LuzPuntero").then((module) => ({
    default: module.LuzPuntero,
  }))
);

const Environmenty = React.lazy(() => import("./three/Environmenty"));

export const Inicio = React.forwardRef((props, ref) => {
  const competencias = [
    {
      src: "/img/competencies/python.webp",
      nombre: "Python",
    },
    {
      src: "/img/competencies/react.webp",
      nombre: "React",
    },
    {
      src: "/img/competencies/nodejs.webp",
      nombre: "Node",
    },
    {
      src: "/img/competencies/js.webp",
      nombre: "Javascript",
    },
    {
      src: "/img/competencies/mongodb.webp",
      nombre: "MongoDB",
    },
    {
      src: "/img/competencies/sql.webp",
      nombre: "SQL",
    },
    {
      src: "/img/competencies/html.webp",
      nombre: "HTML",
    },
    {
      src: "/img/competencies/css.webp",
      nombre: "CSS",
    },
    {
      src: "/img/competencies/linux.webp",
      nombre: "Linux",
    },
    {
      src: "/img/competencies/angular.webp",
      nombre: "Angular",
    },
    {
      src: "/img/competencies/expressjs.webp",
      nombre: "Express",
    },
  ];
  return (
    <div ref={ref} className="page inicio">
      <h1>Hey there !</h1>
      <br></br>
      <div className="conteiner-mask">
        <div className="mask">
          <LazyLoadImage
            src="/img/profile/foto2.webp"
            alt="pictureprofile"
            effect="blur"
            placeholderSrc={placeholderFoto}
          ></LazyLoadImage>
        </div>
      </div>
      <div className="descripcion">
        <p>
          Soy estudiante de <strong>Ingeniería en Sistemas</strong> en la UTN
          FRC y apasionado por el desarrollo de software.
          <br />
          Mi combinación de <strong>pensamiento lógico</strong>,{" "}
          <strong>creatividad</strong> y <strong>proactividad</strong>, junto
          con una rápida capacidad de aprendizaje, me ha permitido sobresalir
          tanto en el ámbito académico como profesional. Además de mis estudios
          universitarios, mantengo un compromiso constante con mi desarrollo
          personal, participando en cursos y capacitaciones que fortalecen mis
          habilidades como <strong>desarrollador de software</strong>.
        </p>
        <ul>
          <li>
            Valoro el <strong>trabajo en equipo</strong> como elemento esencial
            para el éxito en proyectos.
          </li>
          <li>
            Promuevo un <strong>ambiente laboral saludable</strong> que fomente
            la colaboración.
          </li>
          <li>
            Creo en la <strong>comunicación efectiva</strong> como herramienta
            para el crecimiento.
          </li>
          <li>
            Veo cada desafío como una <strong>oportunidad de mejora</strong>.
          </li>
        </ul>
      </div>

      <Slider competencias={competencias}></Slider>
      <br></br>
      <>
        <Suspense fallback={<Cargando></Cargando>}>
          <LuzPuntero></LuzPuntero>
        </Suspense>

        <br></br>
        <Suspense fallback={<Cargando></Cargando>}>
          <Environmenty></Environmenty>
        </Suspense>
      </>
    </div>
  );
});
