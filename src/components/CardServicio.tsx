import React from 'react'; 
import { ModalServicio } from "./ModalServicio";

export interface ServicioItem {
    id?: string | number | undefined;
    title?: string;
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    imageUrl1?: string;
    imageUrl2?: string;
}

interface CardServiciosProps {
    items: ServicioItem[];
}

export const CardServicios: React.FC<CardServiciosProps> = ({ items }) => {
    // Protección por si items viene vacío o undefined
    if (!items || items.length === 0) return null;

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 justify-content-center mx-auto">
                {items.map((item, index) => (
                    // 4. Aseguramos un key único combinando el id o el index
                    <div className="col d-flex" key={item.id || `servicio-${index}`}>
                        
                        <div className="card w-100 h-100 shadow-sm">
                            <img 
                                src={item.imageUrl1} 
                                className="card-img-top" 
                                alt={item.title || "Servicio"} 
                            />

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-bold">{item.title}</h5>
                                <p className="card-text text-secondary">{item.text1}</p>

                                <div className="d-flex justify-content-center mt-auto">
                                    <ModalServicio id={item.id} title={item.title} text1={item.text1} text2={item.text2} text3={item.text3} text4={item.text4} text5={item.text5} imageUrl1={item.imageUrl1} imageUrl2={item.imageUrl2} />
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};