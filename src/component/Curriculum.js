import React from "react";

export const Curriculum = () => {
    return (
        <div className="page curriculum">
            <div className="contenedor-boton">
                <a
                    href="/data/curriculumEmanuelLopez.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        alt="logo-descargar"
                        src="/img/iconos/descargar.gif"
                    ></img>
                    <p>Descargar</p>
                </a>
            </div>
            <div className="visor-pdf">
                <iframe
                    title="curriculum"
                    src="/data/curriculumEmanuelLopez.pdf"
                    width="100%"
                    height="500px"
                ></iframe>
            </div>
        </div>
    );
};
