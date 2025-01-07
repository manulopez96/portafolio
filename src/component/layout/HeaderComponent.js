import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const HeaderComponent = ({ scrollToSection }) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [drop, setDrop] = useState(false);

  const openCloseDrop = () => {
    setDrop(!drop);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <h3>López D. Emanuel</h3>
      </div>
      {widthScreen > 800 ? (
        <nav>
          <ul>
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="nav-button"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portafolio")}
                className="nav-button"
              >
                Portafolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("curriculum")}
                className="nav-button"
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="nav-button"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="drop">
          <ul>
            <Dropdown isOpen={drop} toggle={openCloseDrop}>
              <DropdownToggle className="menu-boton">
                <img alt="logo-menu" src="/img/iconos/menu.png"></img>
              </DropdownToggle>
              <DropdownMenu className="menu-desplegado">
                <DropdownItem tag="a" onClick={() => scrollToSection("inicio")}>
                  Inicio
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  onClick={() => scrollToSection("portafolio")}
                >
                  Portafolio
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  onClick={() => scrollToSection("curriculum")}
                >
                  Curriculum
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  onClick={() => scrollToSection("contacto")}
                >
                  Contacto
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ul>
        </nav>
      )}
    </header>
  );
};

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const HeaderComponent = () => {
//   let [widthScreen, setWidthScreen] = useState(window.innerWidth);
//   const [drop, setDrop] = useState(false);

//   const openCloseDrop = () => {
//     setDrop(!drop);
//   };

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // console.log("screen width: " + widthScreen);
//   useEffect(() => {
//     function handleResize() {
//       setWidthScreen(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//   }, [widthScreen]);
//   return (
//     <header className="header">
//       <NavLink className="logo" to="">
//         <h3>López D. Emanuel</h3>
//       </NavLink>
//       {widthScreen > 800 ? (
//         <nav>
//           <ul>
//             <li>
//               <NavLink
//                 to="/inicio"
//                 className={({ isActive }) =>
//                   isActive ? "active" : "no-active"
//                 }
//               >
//                 Inicio
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/portafolio"
//                 className={({ isActive }) =>
//                   isActive ? "active" : "no-active"
//                 }
//               >
//                 Portafolio
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/curriculum"
//                 className={({ isActive }) =>
//                   isActive ? "active" : "no-active"
//                 }
//               >
//                 Curriculum
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contacto"
//                 className={({ isActive }) =>
//                   isActive ? "active" : "no-active"
//                 }
//               >
//                 Contacto
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       ) : (
//         <nav className="drop">
//           <ul>
//             <Dropdown isOpen={drop} toggle={openCloseDrop}>
//               <DropdownToggle className="menu-boton">
//                 <img alt="logo-menu" src="/img/iconos/menu.png"></img>
//               </DropdownToggle>
//               <DropdownMenu className="menu-desplegado">
//                 <DropdownItem>
//                   <NavLink
//                     to="/inicio"
//                     className={({ isActive }) => (isActive ? "active" : "")}
//                   >
//                     Inicio
//                   </NavLink>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <NavLink
//                     to="/portafolio"
//                     className={({ isActive }) =>
//                       isActive ? "active" : "no-active"
//                     }
//                   >
//                     Portafolio
//                   </NavLink>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <NavLink
//                     to="/curriculum"
//                     className={({ isActive }) =>
//                       isActive ? "active" : "no-active"
//                     }
//                   >
//                     Curriculum
//                   </NavLink>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <NavLink
//                     to="/contacto"
//                     className={({ isActive }) =>
//                       isActive ? "active" : "no-active"
//                     }
//                   >
//                     Contacto
//                   </NavLink>
//                 </DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };
