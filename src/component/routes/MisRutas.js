import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { HeaderComponent } from "../layout/HeaderComponent";
import { FooterComponent } from "../layout/FooterComponent";
import { Inicio } from "../Inicio";
import { Portafolio } from "../Portafolio";
import { Curriculum } from "../Curriculum";
import { Contacto } from "../Contacto";

export const MisRutas = () => {
  const sectionsRef = useRef({});

  const scrollToSection = (section) => {
    if (sectionsRef.current[section]) {
      sectionsRef.current[section].scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("no section selected");
    }
  };

  return (
    <BrowserRouter>
      {/* El header de la app con scrollToSection */}
      <HeaderComponent scrollToSection={scrollToSection} />

      {/* El contenido de la app */}
      <Inicio ref={(el) => (sectionsRef.current["inicio"] = el)} />
      <Portafolio ref={(el) => (sectionsRef.current["portafolio"] = el)} />
      <Curriculum ref={(el) => (sectionsRef.current["curriculum"] = el)} />
      <Contacto ref={(el) => (sectionsRef.current["contacto"] = el)} />

      {/* El footer de la app */}
      <FooterComponent />
    </BrowserRouter>
  );
};
