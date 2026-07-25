import React from 'react';

// 1. Definimos la estructura que debe tener cada elemento del carrusel
export interface CarouselItem {
    id?: string | number; // Opcional, para usar como key única de React si la tienes
    imageUrl: string;
    altText?: string;
    title?: string;
    description?: string;
}

// 2. Definimos las propiedades (Props) que recibirá el componente
interface CarouselProps {
    items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
    // Si la lista viene vacía, no renderizamos nada para evitar errores
    if (!items || items.length === 0) return null;

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide" 
            data-bs-ride="carousel"
            data-bs-interval="3000"
            style={{
                marginTop: 'clamp(60px, 8vw, 120px)',
                overflowX: 'hidden' 
            }}
        >
            {/* Indicadores Dinámicos */}
            <div className="carousel-indicators ">
                {items.map((_, index) => (
                    <button
                        key={`indicator-${index}`}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Slides Dinámicos */}
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <div
                        key={item.id || `slide-${index}`}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                        <img
                            src={item.imageUrl}
                            className="d-block w-100 carousel-img-custom" // <-- Le agregamos esta clase personalizada
                            alt={item.altText || `Slide ${index + 1}`}
                        />

                        {/* Renderizar subtítulos solo si al menos uno existe */}
                        {(item.title || item.description) && (
                            <div className="carousel-caption ">
                                {item.title && (
                                    <h5 className="d-block bg-dark p-2 bg-opacity-75 blur-2 rounded-3">
                                        {item.title}
                                    </h5>
                                )}
                                {item.description && (
                                    <p className="d-none d-md-block bg-dark p-2 bg-opacity-75 blur-2 rounded-3">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Controles del Carrusel */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};