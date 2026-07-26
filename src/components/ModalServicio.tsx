
export type ModalServicioProps = {
    id: string | number | undefined;
    title?: string;
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    imageUrl1?: string;
    imageUrl2?: string;
    text6?: string;
    text7?: string;
    text8?: string;
    text9?: string;
};

export const ModalServicio = ({ id, title, text1, text2, text3, text4, text5, imageUrl1, imageUrl2, text6, text7, text8, text9, }: ModalServicioProps) => {
    const modalId = `modal-servicio-${id}`;

    return (
        <div>
            {/* Button trigger modal: apunta al id único */}
            <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
            >
                Más detalles
            </button>

            {/* Modal: su ID coincide de manera exacta con el botón que lo llama */}
            <div
                className="modal fade text-start blur-8" // text-start evita que herede el centrado del botón
                id={modalId}
                tabIndex={-1}
                aria-labelledby={`${modalId}Label`}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content blur-12  bg-dark opacity-95 text-light border-secondary">

                        <div className="modal-header  border-secondary">
                            <h4 className="modal-title fw-bold" id={`${modalId}Label`}>
                                {title}
                            </h4>
                            <button
                                type="button"
                                className="btn-close btn-close-white "
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body text-light">
                            <div className="row g-1">
                                <div className="col-12 col-md-6">
                                    <div className="col-12 mb-4">
                                        <p>
                                            {text1}
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <p>
                                            {text2}
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <p>
                                            {text3}
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <p>
                                            {text4}
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <p>
                                            {text5}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 d-flex justify-content-center">
                                    <img
                                        src={imageUrl1}
                                        className="img-fluid rounded-1 shadow-lg"
                                        alt={"imagen " + title}
                                        style={{
                                            objectFit: 'cover',
                                            maxHeight: '500px',
                                            width: '100%',
                                            height: '100%',
                                            maxWidth: '400px',
                                        }}
                                    />
                                </div>
                                {imageUrl2 ? (
                                    <>
                                        <div className="col-12 col-md-6 d-flex justify-content-center mt-5">
                                            <img
                                                src={imageUrl2}
                                                className="img-fluid rounded-1 shadow-lg"
                                                alt={"imagen 2 " + title}
                                                style={{
                                                    objectFit: 'cover',
                                                    maxHeight: '500px',
                                                    width: '100%',
                                                    height: '100%',
                                                    maxWidth: '400px',
                                                }}
                                            />
                                        </div>
                                        <div className="col-12 col-md-6 mt-5">
                                            <div className="col-12">
                                                <p>
                                                    {text6}
                                                </p>
                                            </div>
                                            <div className="col-12">
                                                <p>
                                                    {text7}
                                                </p>
                                            </div>
                                            <div className="col-12">
                                                <p>
                                                    {text8}
                                                </p>
                                            </div>
                                            <div className="col-12">
                                                <p>
                                                    {text9}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : <></>}

                            </div>
                        </div>

                        <div className="modal-footer border-secondary">
                            <button
                                type="button"
                                className="btn btn-outline-light"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};