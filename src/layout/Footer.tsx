import { FirmaLPZ } from '../components/FirmaLPZ'

export const Footer = () => {
    return (
        // Usamos la etiqueta semántica <footer>, quitamos h-50 y agregamos py-5 (padding)
        <footer className="bg-dark text-light mt-5 py-5 border-top border-secondary">
            <div className="container">
                {/* Fila principal del footer */}
                <div className="row g-5 align-items-center justify-content-between text-center text-md-start">

                    {/* Columna 1: El Mapa (Responsivo gracias a la clase ratio) */}
                    <div className="col-12 col-md-5 d-flex justify-content-center">
                        <div className="w-100" style={{ maxWidth: '250px' }}>
                            <div className="ratio ratio-1x1 rounded-3">
                                <img
                                    style={{

                                    }}
                                    src="/logos/LPZDevCircular.png"
                                    alt="logo"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divisor Vertical (Solo se muestra en pantallas medianas/grandes 'd-md-flex') */}
                    <div className="col-md-1 d-none d-md-flex justify-content-center">
                        <div className="vr" style={{ height: "300px", opacity: 0.25 }}></div>
                    </div>

                    {/* Columna 2: Redes Sociales */}
                    <div className="col-12 col-md-3">
                        <h5 className="text-uppercase fw-bold mb-3 text-success">Sígueme</h5>
                        <div className='list-unstyled col-12 col-md-6 row g-0 justify-content-lg-start justify-content-center'>
                            <a href="https://www.linkedin.com/in/lopez-emanuel/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light col-1 mx-md-2">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com/manulopez96" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light col-1 mx-md-2">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>


                    </div>

                    {/* Columna 3: Links de navegación o Info rápida */}
                    <div className="col-12 col-md-3">
                        <h5 className="text-uppercase fw-bold mb-3 text-success">LPZ Dev</h5>
                        <ul className="list-unstyled text lh-lg">
                            <li>Córdoba, Argentina</li>
                            <li>Lunes a Viernes 8:30 - 16:30 hs</li>
                            <li>
                                <a href="https://wa.me/543512809912" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">+ 54 351 2809912</a>
                            </li>
                            
                            <li>
                                <a href="mailto:info@lpzdev.com.ar" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">info@lpzdev.com.ar</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Línea divisoria decorativa antes de la firma */}
                <hr className="my-4 text-secondary" style={{ opacity: 0.15 }} />

                {/* Fila final: Firma del Desarrollador */}
                <div className="row">
                    <div className="col text-center">
                        <FirmaLPZ />
                    </div>
                </div>
            </div>
        </footer>
    )
}