import { CardValores } from "../components/CardValores"

export const SobreMi = () => {
    return (
        // Usamos la etiqueta semántica <section>. 
        // py-5 maneja el espaciado arriba y abajo de forma equilibrada.
        <section className="container py-5 my-5">
            <div className="row g-5 align-items-center justify-content-between mt-0">
                {/* 1. El título ahora ocupa toda la fila de forma correcta */}
                <div className="col-12">
                    <h2 className="text-uppercase fw-bold text-secondary position-relative d-inline-block">
                        Sobre Nosotros
                        <span
                            className="position-absolute start-0 bottom-0 bg-success"
                            style={{ height: '3px', width: '60px', marginBottom: '-8px' }}
                        ></span>
                    </h2>
                </div>

                {/* 2. Columna de Texto */}
                <div className="col-12 col-md-6 text-start">

                    <p className="lead text-dark fw-normal mb-3">
                        Atto Electrónica es una empresa dedicada a la venta de servicios de automatismo industrial y soluciones tecnológicas. Con años de experiencia en el sector, nos hemos consolidado como un referente en la industria, ofreciendo productos de alta calidad y un servicio al cliente excepcional.
                    </p>
                    <p className="text-muted mb-3 lh-lg">
                        Nuestro equipo de profesionales altamente capacitados trabaja incansablemente para garantizar que cada proyecto se complete con precisión y eficiencia. Nos enorgullece nuestra capacidad para adaptarnos a las necesidades cambiantes del mercado y ofrecer soluciones innovadoras que superen las expectativas de nuestros clientes.
                    </p>

                    {/* Alerta o caja destacada para las marcas autorizadas */}
                    <div className="p-3 bg-light border-start border-4 border-success rounded-end shadow-sm mt-4">
                        <p className="mb-0 text-dark fw-medium">
                            Trabajamos ofreciendo <strong>servicio técnico autorizado</strong> para marcas líderes de la industria como:
                        </p>
                        <div className="mt-2 d-flex flex-wrap gap-3 fw-bold text-secondary">
                            <span className="badge bg-warning px-3 py-2 fs-6 text-black">ESAB</span>
                            <span className="badge bg-success px-3 py-2 fs-6">Schneider Electric</span>
                        </div>
                    </div>
                </div>

                {/* 3. Columna de la Imagen */}
                <div className="col-12 col-md-5 d-flex justify-content-center">
                    <img
                        src="/fotosAtto/attoFrente2.jpeg"
                        className="img-fluid rounded-4 shadow-lg"
                        alt="Instalaciones de Atto Electrónica"
                        style={{
                            objectFit: 'cover',
                            maxHeight: '500px',
                            width: '100%',
                            height: '100%',
                            maxWidth: '400px',
                        }}
                    />
                </div>

                <hr />


                <div className="col-12 d-flex justify-content-center">
                    <h2 className="d-flex justify-content-center">
                        Nuestros valores
                        <span
                            className="position-absolute bg-success"
                            style={{ height: '3px', width: '100px', marginTop: '45px' }}
                        ></span>
                    </h2>
                </div>
                <div className="card-group row g-3">

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <CardValores title="Calidad y Excelencia" value="Comprometidos con entregar productos y servicios duraderos, funcionales y bien construidos, con cuidando a los detalles."></CardValores>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <CardValores title="Innovación y Adaptabilidad" value="Buscamos constantemente formas de mejorar, resolver problemas complejos y adaptarnos a los cambios del mercado y la tecnología."></CardValores>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <CardValores title="Trabajo en Equipo y Colaboración" value="Promovemos una cultura de comunicación abierta donde las mejores ideas ganan. Priorizamos el impacto del equipo sobre los logros individuales."></CardValores>
                </div>
                </div>

            </div>
        </section>
    )
}