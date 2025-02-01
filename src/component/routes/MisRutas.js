import React, { useRef, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HeaderComponent } from "../layout/HeaderComponent";
import { FooterComponent } from "../layout/FooterComponent";
import { Inicio } from "../Inicio";
import { Cargando } from "../layout/Cargando";
// import { Portafolio } from "../Portafolio";
// import { Curriculum } from "../Curriculum";
// import { Contacto } from "../Contacto";

const Portafolio = React.lazy(() =>
  import("../Portafolio").then((module) => ({
    default: module.Portafolio,
  }))
);
const Curriculum = React.lazy(() =>
  import("../Curriculum").then((module) => ({
    default: module.Curriculum,
  }))
);
const Contacto = React.lazy(() =>
  import("../Contacto").then((module) => ({
    default: module.Contacto,
  }))
);

export const MisRutas = () => {
  const sectionsRef = useRef({});

  const scrollToSection = (section) => {
    if (sectionsRef.current[section]) {
      const sectionElement = sectionsRef.current[section];
      const menuHeight = 60; // Altura del menú fijo

      // Calcula el desplazamiento compensado
      const offsetTop = sectionElement.offsetTop - menuHeight;

      // Realiza el desplazamiento con smooth scroll
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log("No section selected");
    }
  };

  return (
    <BrowserRouter>
      {/* El header de la app con scrollToSection */}
      <HeaderComponent scrollToSection={scrollToSection} />

      {/* El contenido de la app */}
      <Inicio ref={(el) => (sectionsRef.current["inicio"] = el)} />

      <Suspense fallback={<Cargando></Cargando>}>
        <Portafolio ref={(el) => (sectionsRef.current["portafolio"] = el)} />
      </Suspense>

      <Suspense fallback={<Cargando></Cargando>}>
        <Curriculum ref={(el) => (sectionsRef.current["curriculum"] = el)} />
      </Suspense>

      <Suspense fallback={<Cargando></Cargando>}>
        <Contacto ref={(el) => (sectionsRef.current["contacto"] = el)} />
      </Suspense>

      {/* El footer de la app */}
      <FooterComponent />
    </BrowserRouter>
  );
};
