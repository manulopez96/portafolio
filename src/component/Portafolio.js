import React, { useEffect, useState } from "react";

export const Portafolio = () => {
    const [contador, setContador] = useState(0);
    const proyectos = [
        {
            nombre: "Blog de articulos",
            url: "/img/proyectos/blog.gif",
            descripcion:
                "Aplicacion web desarrollada con Node, ReactJS, Express, MongoDB y mas. Permite crear y almacenar articulos.",
            link: "#",
        },
        {
            nombre: "Numero aleatorio",
            url: "/img/proyectos/numeroRand.gif",
            descripcion:
                "Proyecto que permite generar un numero aleatorio, introduciendo el valor minimo y maximo, desarrollado con JS, html y css. ",
            link: "#",
        },
        {
            nombre: "Gestion de presupuesto",
            url: "/img/proyectos/presupuesto.gif",
            descripcion:
                "Aplicacion que permite introducir ingresos y egresos de capital, permitiendonos obtener un balance final con los datos introducidos, desarrollado con JS, html y css.",
            link: "#",
        },
        {
            nombre: "Listado de Personas",
            url: "/img/proyectos/proyecto01.png",
            descripcion:
                "Aplicacion que permite introducir personas a una lista, armado un array de objetos para mostrarlo dinamicamente en la pantalla.",
            link: "#",
        },
        {
            nombre: "Reloj digital",
            url: "/img/proyectos/proyecto02.png",
            descripcion:
                "Proyecto sencillo en Javascript, con manejo del DOM y utlizacion de eventos.",
            link: "#",
        },
        {
            nombre: "LPZ web",
            url: "/img/proyectos/portafolio.gif",
            descripcion:
                "Proyecto personal, esta pagina, desarrollado con reactJS, utlizando hooks, props, eventos , funciones callback y mucho mas!",
            link: "#",
        },
    ];
    const modificarContador = (op = "+") => {
        if (op === "-") {
            if (contador > 0) {
                setContador(contador - 1);
            } else {
                setContador(proyectos.length - 1);
            }
        } else if (op === "+") {
            if (contador < proyectos.length - 1) {
                setContador(contador + 1);
            } else {
                setContador(0);
            }
        }
        //  console.log(contador);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 37) {
            modificarContador("-");
        }
        if (e.keyCode === 39) {
            modificarContador("+");
        }
    };

    useEffect(() => {}, [contador]);
    return (
        <div className="page portafolio">
            <h1>Proyectos</h1>
            <br></br>
            <div
                className="contenedor-slider"
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                <button
                    onClick={() => modificarContador("-")}
                    className="btn-izq"
                >
                    {"<"}
                </button>
                <button
                    onClick={() => modificarContador("+")}
                    className="btn-der"
                >
                    {">"}
                </button>
                <div className="contenedor-img">
                    <img alt="" src={proyectos[contador].url}></img>
                    <p className="nombre-proyecto">
                        {proyectos[contador].nombre}
                    </p>
                    <p className="descripcion-proyecto">
                        {proyectos[contador].descripcion}
l                    </p>
                </div>
            </div>
        </div>
    );
};
