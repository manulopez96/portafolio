import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Slider = ({ competencias }) => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide-img"></div>
        {competencias.map((competencia, index) => (
          <div className="slide" key={index}>
            <div className="slide-img">
              <LazyLoadImage
                alt={competencia.nombre}
                src={competencia.src}
                effect="blur"
                threshold={100}
              ></LazyLoadImage>
            </div>
            <p>{competencia.nombre}</p>
          </div>
        ))}

        {competencias.map((competencia, index) => (
          <div className="slide" key={index}>
            <div className="slide-img">
              <LazyLoadImage
                alt={competencia.nombre}
                src={competencia.src}
                effect="blur"
                threshold={100}
              ></LazyLoadImage>
            </div>
            <p>{competencia.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
