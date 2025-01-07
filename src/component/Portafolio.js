import React from "react";

export const Portafolio = React.forwardRef((props, ref) => {
  const proyectos = [
    {
      id: 1,
      nombre: "Simple Note",
      url: "/img/proyectos/simpleNote.webm",
      descripcion:
        "Aplicación web desarrollada con Node.js, ReactJS, Express, SQLite, Sequelize, enrutamiento y Axios. Este proyecto fue un trabajo colaborativo desarrollado por un equipo de tres personas, en el cual asumí la responsabilidad completa del desarrollo del front-end, además de implementar algunas funcionalidades relacionadas con la base de datos y la autenticación de usuarios mediante JWT.",
      link: "#",
    },
    {
      id: 2,
      nombre: "Numero aleatorio",
      url: "/img/proyectos/numeroRand.webm",
      descripcion:
        "Proyecto desarrollado con JavaScript, HTML y CSS que permite generar un número aleatorio al introducir un valor mínimo y máximo. La aplicación valida los datos ingresados para evitar errores.",
      link: "#",
    },
    {
      id: 3,
      nombre: "Gestion de presupuesto",
      url: "/img/proyectos/presupuesto.webm",
      descripcion:
        "Aplicación desarrollada con JavaScript, HTML y CSS que permite la introducción de ingresos y egresos de capital, facilitando así la obtención de un balance final basado en los datos ingresados.",
      link: "#",
    },
    {
      id: 4,
      nombre: "Price Checklist",
      url: "/img/proyectos/PriceChecklist.webm",
      descripcion:
        "Aplicación web desarrollada en ReactJS que permite generar una lista de productos con sus respectivos precios y cantidades. Esta lista se almacena en el local storage del dispositivo, lo que garantiza su persistencia.",
      link: "#",
    },
    {
      id: 5,
      nombre: "LPZ web",
      url: "/img/proyectos/portafolio.webm",
      descripcion:
        "Proyecto personal desarrollado utilizando Node.js, Express y ReactJS. La aplicación emplea hooks, enrutamiento, props, eventos, funciones callback y Axios. Además, cuenta con un sistema de envío de correos.",
      link: "#",
    },
  ];

  return (
    <div ref={ref} className="page portafolio">
      <h1>Proyectos</h1>
      <br></br>
      {proyectos &&
        proyectos.map((proyecto, index) => {
          return (
            <div
              key={index}
              className={
                index % 2
                  ? "contenedor-proyecto-izq contenedor-proyecto flex"
                  : "contenedor-proyecto-der contenedor-proyecto flex"
              }
            >
              <div className={"contenedor-imagen"}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt={proyecto.nombre}
                  src={proyecto.url}
                ></video>
              </div>
              <div className={"contenedor-descripcion"}>
                <p className="nombre-proyecto">{proyecto.nombre}</p>
                <p className="descripcion-proyecto">{proyecto.descripcion} </p>
              </div>
            </div>
          );
        })}
    </div>
  );
});
