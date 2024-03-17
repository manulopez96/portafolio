import React from "react";

export const Contacto = () => {
    return (
        <div className="page">
            <div className="contacto">
                <a href="mailto:d.manu.lopez@gmail.com" rel="noreferrer">
                    <div className="contenedor-logo">
                        <img
                            alt="logo-linkedin"
                            src="/img/iconos/gmail.png"
                        ></img>
                    </div>
                    <div className="contenedor-p">
                        <p>¿Quieres contactarme por correo?</p>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/lopez-emanuel/"
                    rel="noreferrer"
                >
                    <div className="contenedor-logo">
                        <img
                            alt="logo-linkedin"
                            src="/img/iconos/linkedin.png"
                        ></img>
                    </div>
                    <div className="contenedor-p">
                        <p>¿Quieres ver mi perfil de Linkedin?</p>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://github.com/manulopez96"
                    rel="noreferrer"
                >
                    <div className="contenedor-logo">
                        <img
                            alt="logo-linkedin"
                            src="/img/iconos/git.png"
                        ></img>
                    </div>
                    <div className="contenedor-p">
                        <p>¿Quieres ver mi perfil de github?</p>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://twitter.com/ManuLPZxx"
                    rel="noreferrer"
                >
                    <div className="contenedor-logo">
                        <img alt="logo-linkedin" src="/img/iconos/X.png"></img>
                    </div>
                    <div className="contenedor-p">
                        <p>¿Quieres ver mi perfil de X?</p>
                    </div>
                </a>
                <a
                    href="https://wa.me/543512809912/?text=Hola!+Estuve+en+tu+sitio+web"
                    rel="noreferrer"
                    target="_blank"
                >
                    <div className="contenedor-logo">
                        <img
                            alt="logo-linkedin"
                            src="/img/iconos/whatsapp.png"
                        ></img>
                    </div>
                    <div className="contenedor-p">
                        <p>¿Quieres escribirme por whatsapp?</p>
                    </div>
                </a>
            </div>
        </div>
    );
};
