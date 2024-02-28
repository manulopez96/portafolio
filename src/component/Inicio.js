import React from "react";
import { Slider } from "./layout/Slider";

export const Inicio = () => {
    const competencias = [
        {
            src: "/img/competencies/python.png",
            nombre: "Python",
        },
        {
            src: "/img/competencies/react.png",
            nombre: "React",
        },
        {
            src: "/img/competencies/js.png",
            nombre: "Javascript",
        },
        {
            src: "/img/competencies/html.png",
            nombre: "HTML",
        },
        {
            src: "/img/competencies/css.png",
            nombre: "CSS",
        },
        {
            src: "/img/competencies/linux.png",
            nombre: "Linux",
        },
        {
            src: "/img/competencies/angular.png",
            nombre: "Angular",
        },
    ];

    return (
        <div className="page inicio">
            <h1>HOLA!</h1>
            <div className="conteiner-mask">
                <div className="mask">
                    <img
                        alt="pictureprofile"
                        src="/img/profile/foto1.jpeg"
                    ></img>
                </div>
            </div>
            <div className="descripcion">
                <p>
                    Soy estudiante de Ingeniería en Sistemas en la UTN FRC. Mi
                    trayectoria académica inicial en Ingeniería Electrónica
                    reveló mi afinidad por el pensamiento lógico, pero fue a
                    través de experiencias en programación donde descubrí mi
                    verdadero potencial. Con determinación, realicé un cambio a
                    Ingeniería en Sistemas, donde he encontrado una verdadera
                    pasión por el desarrollo de software. Mi habilidad para el
                    pensamiento lógico, combinada con mi creatividad,
                    proactividad y capacidad para aprender rápidamente, me ha
                    permitido destacarme tanto en mis estudios universitarios
                    como en mi desarrollo profesional. Paralelamente a mis
                    responsabilidades académicas, me he embarcado en una
                    constante búsqueda de mejora, participando en cursos y
                    capacitaciones para afinar mis habilidades como
                    desarrollador de software.
                </p>
            </div>

            <Slider competencias={competencias}></Slider>
        </div>
    );
};
