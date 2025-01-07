import React from "react";

export const Curriculum = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="page curriculum">
      <h2>CV</h2>
      <br></br>
      <div className="contenedor-boton">
        <a
          href="https://drive.google.com/file/d/179HkW5kZiK5qjSlsXKIuieb_9ib91dVo/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="logo-descargar" src="/img/iconos/descargar.gif"></img>
          <p>Descargar</p>
        </a>
      </div>
      <div className="visor-pdf">
        <iframe
          title="curriculum"
          src="/data/curriculumEmanuelLopez.pdf"
          width="100%"
          height="1200px"
        ></iframe>
      </div>
    </div>
  );
});
