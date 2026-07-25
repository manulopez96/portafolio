import React from 'react';

export interface CarouselClientesItem {
    id?: string | number;
    imageUrl: string;
    altText?: string;
}

interface CarouselProps {
    items: CarouselClientesItem[];
}

export const CarouselClientes: React.FC<CarouselProps> = ({ items }) => {
    if (!items || items.length === 0) return null;

    // Duplicamos los items para crear el bucle infinito visual perfecto
    const doubleItems = [...items, ...items, ...items];

    return (
        <div>
            <h3 className='mt-5 mb-0 text-center text-muted fw-bold'>Nuestros Clientes</h3>
            <div className="marquee-container" style={{ marginTop: 'clamp(10px, 20vw, 12px)' }}>
                <div className="marquee-content">
                    {doubleItems.map((item, index) => (
                        <div
                            key={item.id ? `marquee-${item.id}-${index}` : `logo-${index}`}
                            className="marquee-item"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.altText || `Cliente ${index + 1}`}
                                className="marquee-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};