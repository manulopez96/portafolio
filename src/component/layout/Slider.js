import React from "react";

export const Slider = ({ competencias }) => {
    return (
        <div className="slider">
            <div className="slide-track">
                <div className="slide-img"></div>
                {competencias.map((competencia, index) => (
                    <div className="slide" key={index}>
                        <div className="slide-img">
                            <img
                                alt={competencia.nombre}
                                src={competencia.src}
                            ></img>
                        </div>
                        <p>{competencia.nombre}</p>
                    </div>
                ))}

                {competencias.map((competencia, index) => (
                    <div className="slide" key={index}>
                        <div className="slide-img">
                            <img
                                alt={competencia.nombre}
                                src={competencia.src}
                            ></img>
                        </div>
                        <p>{competencia.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
