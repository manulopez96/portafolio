import React from "react";

export const Slider = ({ competencias }) => {
    return (
        <div className="slider">
            <div className="slide-track">
                {competencias.map((competencia, index) => (
                    <div className="slide" key={index}>
                        <img 
                            alt={competencia.nombre}
                            src={competencia.src}
                        ></img>
                        <p>{competencia.nombre}</p>
                    </div>
                ))}
                
                {competencias.map((competencia, index) => (
                    <div className="slide" key={index}>
                        <img 
                            alt={competencia.nombre}
                            src={competencia.src}
                        ></img>
                        <p>{competencia.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
