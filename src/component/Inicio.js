import React from "react";
import { Slider } from "./layout/Slider";
import { LuzPuntero } from "./three/LuzPuntero";
import Environmenty from "./three/Environmenty";

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
          <img alt="pictureprofile" src="/img/profile/foto2.webp"></img>
        </div>
      </div>
      <div className="descripcion">
        <p>
          Soy estudiante de <strong>Ingeniería en Sistemas</strong> en la UTN
          FRC.
          <br></br>
          Mi habilidad para el pensamiento lógico, combinada con mi{" "}
          <strong>creatividad</strong>,<strong> proactividad</strong> y
          capacidad para <strong>aprender</strong> rápidamente, me ha permitido
          destacarme tanto en mis estudios universitarios como en mi desarrollo
          profesional. Paralelamente a mis responsabilidades académicas, me he
          embarcado en una
          <strong> constante búsqueda de mejora</strong>, participando en cursos
          y capacitaciones para afinar mis habilidades como{" "}
          <strong>desarrollador de software</strong>.
        </p>
        <ul>
          <li>El trabajo en equipo es clave en el desarrollo.</li>
          <li>Mantener un ambiente laboral sano es prioridad.</li>
          <li>La comunicación efectiva impulsa el crecimiento.</li>
          <li>Todo problema es tambien una oportunidad.</li>
        </ul>
      </div>

      <Slider competencias={competencias}></Slider>
      <br></br>
      <br></br>
      <LuzPuntero></LuzPuntero>
      <br></br>
      <br></br>
      <Environmenty></Environmenty>
    </div>
  );
});
