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
                        <div className="w-100" style={{ maxWidth: '380px' }}>
                            <div className="ratio ratio-1x1 rounded-3 overflow-hidden shadow">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.7293456782554!2d-64.20072322526292!3d-31.39402559516914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299ecd1584fcb%3A0x78f1912cc4678b1d!2sAtto%20electr%C3%B3nica%20-%20SAE%20-%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1784136967139!5m2!1sen!2sar"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    title="Ubicación de Atto Electrónica"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Divisor Vertical (Solo se muestra en pantallas medianas/grandes 'd-md-flex') */}
                    <div className="col-md-1 d-none d-md-flex justify-content-center">
                        <div className="vr" style={{ height: "300px", opacity: 0.25 }}></div>
                    </div>

                    {/* Columna 2: Redes Sociales */}
                    <div className="col-12 col-md-3">
                        <h5 className="text-uppercase fw-bold mb-3 text-success">Síguenos</h5>
                        <div className='list-unstyled col-12 col-md-6 row g-0 justify-content-center'>
                            <a href="https://www.linkedin.com/in/atto-electronica-9842b9422/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light col-1">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/atto-electronica-9842b9422/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light col-1 mx-md-4 mx-1">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://maps.app.goo.gl/jUULFVXK3dcboHpX9" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light col-1">
                                <i className="bi bi-google"></i>
                            </a>
                        </div>


                    </div>

                    {/* Columna 3: Links de navegación o Info rápida */}
                    <div className="col-12 col-md-3">
                        <h5 className="text-uppercase fw-bold mb-3 text-success">Atto Electrónica</h5>
                        <ul className="list-unstyled text lh-lg">
                            <li>Córdoba, Argentina</li>
                            <li>Lunes a Viernes 8:30 - 14:30 hs</li>
                            <li>
                                <a href="https://wa.me/543515228856" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">+ 54 351 5228856</a>
                            </li>
                            <li>
                                <a href="mailto:ventas@attoelectronica.com.ar" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">ventas@attoelectronica.com.ar</a>
                            </li>
                            <li>
                                <a href="mailto:automatismos@attoelectronica.com.ar" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">automatismos@attoelectronica.com.ar</a>
                            </li>
                            <li>
                                <a href="mailto:info@attoelectronica.com.ar" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">info@attoelectronica.com.ar</a>
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