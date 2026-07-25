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
                        Técnico Electrónico e Ingeniero en Sistemas en formación (UTN FRC) con amplia trayectoria en desarrollo de software e integración industrial.
                    </p>
                    <p className="text-muted mb-3 lh-lg">
                        Mi perfil combina una sólida base en electrónica con la arquitectura de software moderna. Cuento con años de experiencia programando PLCs y conectando automatismos industriales con entornos web a través de protocolos de red. En el área de software, me especializo en el desarrollo backend con Go (Golang), diseño e implementación de arquitectura cliente-servidor, gestión de bases de datos y orquestación de entornos con Docker.

Destaco por mi capacidad de pensamiento lógico, resolución eficiente de problemas técnicos complejos y una constante evolución tecnológica.
                    </p>

                    {/* Alerta o caja destacada para las marcas autorizadas */}
                    {/* <div className="p-3 bg-light border-start border-4 border-success rounded-end shadow-sm mt-4">
                        <p className="mb-0 text-dark fw-medium">
                            Trabajamos ofreciendo <strong>servicio técnico autorizado</strong> para marcas líderes de la industria como:
                        </p>
                        <div className="mt-2 d-flex flex-wrap gap-3 fw-bold text-secondary">
                            <span className="badge bg-warning px-3 py-2 fs-6 text-black">ESAB</span>
                            <span className="badge bg-success px-3 py-2 fs-6">Schneider Electric</span>
                        </div>
                    </div> */}
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
                        Valores
                        <span
                            className="position-absolute bg-success"
                            style={{ height: '3px', width: '100px', marginTop: '45px' }}
                        ></span>
                    </h2>
                </div>
                <div className="card-group row g-3">

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <CardValores title="Rigor Técnico e Integridad de Código" value="Diseño soluciones priorizando la estabilidad, el rendimiento y la mantenibilidad a largo plazo. Desde el desarrollo en bajo nivel hasta arquitecturas backend en Go, cada línea de código y configuración de red se construye bajo estándares estrictos para garantizar un funcionamiento impecable."></CardValores>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <CardValores title="Convergencia OT/IT (Hardware y Software)" value="Entiendo el lenguaje de la industria y la web por igual. Mi valor diferencial reside en conectar de forma fluida el mundo físico de la automatización y los PLCs con plataformas digitales, bases de datos y servidores modernos, cerrando la brecha entre la planta y la nube."></CardValores>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <CardValores title="Trabajo en Equipo y Colaboración" value="Promuevo una cultura de comunicación abierta donde las mejores ideas ganan. Priorizo el impacto del equipo sobre los logros individuales."></CardValores>
                </div>
                </div>

            </div>
        </section>
    )
}