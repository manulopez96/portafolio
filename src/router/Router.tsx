import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { SobreMi } from "../pages/SobreMi";
import { NavBar } from '../layout/NavBar';
import { Footer } from '../layout/Footer';
import { Wsp } from "../components/Wsp";
import { Contacto } from "../pages/Contacto";
import { Proyectos } from "../pages/Proyectos";


export const MisRutas = () => {
    return (
        <div style={{ overflowX: 'hidden', width: '100%' }}>
            <BrowserRouter>
                <NavBar></NavBar>
                <Wsp></Wsp>
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/proyectos" element={<Proyectos></Proyectos>}></Route>
                    <Route path="/sobremi" element={<SobreMi></SobreMi>}></Route>
                    <Route path="/contacto" element={<Contacto></Contacto>}></Route>
                    <Route path="*" element={<div className='h-100 m-5 p-5 text-center'><div className='h-100 mt-5 pt-5 text-center'>Error 404</div></div>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
};
