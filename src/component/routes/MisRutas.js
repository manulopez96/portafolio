import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HeaderComponent } from "../layout/HeaderComponent";
import { FooterComponent } from "../layout/FooterComponent";
import { Inicio } from "../Inicio";
import { Portafolio } from "../Portafolio";
import { Curriculum } from "../Curriculum";
import { Contacto } from "../Contacto";

export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* El header de la app */}
            <HeaderComponent></HeaderComponent>

            {/* El contenido de la app */}
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={"/inicio"}></Navigate>}
                ></Route>
                <Route path="/inicio" element={<Inicio></Inicio>}></Route>
                <Route
                    path="/portafolio"
                    element={<Portafolio></Portafolio>}
                ></Route>
                <Route
                    path="/curriculum"
                    element={<Curriculum></Curriculum>}
                ></Route>
                <Route path="/contacto" element={<Contacto></Contacto>}></Route>
                <Route
                    path="*"
                    element={
                        <div className="page">
                            <img src="/img/iconos/404.gif" alt="gif"></img>
                        </div>
                    }
                ></Route>
            </Routes>

            {/* El footer de la app */}
            <FooterComponent></FooterComponent>
        </BrowserRouter>
    );
};
