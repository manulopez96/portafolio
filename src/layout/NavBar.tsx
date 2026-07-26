import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si el menú está abierto y el clic NO ocurrió dentro del contenedor del Navbar, lo cerramos
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor NavLink 50px, activamos el estado
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    // Limpiamos el evento al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // 1. Usamos fixed-top para que nos acompañe al bajar.
    // 2. Aplicamos la clase "navbar-scrolled" dinámicamente según el estado.
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-sm fixed-top shadow navbar-custom-transicion fw-bold ${isScrolled ? 'navbar-scrolled' : 'navbar-top' 
        }`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand p-0 ms-md-5" to="/" onClick={closeMenu}>
          <img
            style={{
              // El tamaño del logo también cambia dinámicamente
              width: isScrolled ? '15vw' : '14vw',
              maxWidth: isScrolled ? '150px' : '250px',
              minWidth: '70px',
              transition: 'all 0.6s ease' // Suaviza el cambio de tamaño del logo
            }}
            src="/logos/LPZDev400x200.png"
            alt="logo"
            className="shaped-shadow-lg"
          />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-md-5"
            style={{
              fontSize: isScrolled ? '3vh' : '3.5vh',
              transition: 'all 0.6s ease'
            }}
          >
            <li className="nav-item px-2">
              <NavLink className={`nav-link ${location.pathname == '/' ? 'active' : ''}`} aria-current="page" to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li className={`nav-item px-2 `}>
              <NavLink className={`nav-link`} to="proyectos" onClick={closeMenu}>Proyectos</NavLink>
            </li>
            <li className={`nav-item px-2 `}>
              <NavLink className={`nav-link`} to="sobremi" onClick={closeMenu}>Sobre mi</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className={`nav-link`} to="contacto" onClick={closeMenu}>Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};