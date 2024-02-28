import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const HeaderComponent = () => {
    let [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [drop, setDrop] = useState(false);

    const openCloseDrop = () => {
        setDrop(!drop);
    };

    // console.log("screen width: " + widthScreen);
    useEffect(() => {
        function handleResize() {
            setWidthScreen(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [widthScreen]);
    return (
        <header className="header">
            <div className="logo">
                {/* <img src="/img/iconos/lobo.png"></img> */}
                <img alt="logo" src="/img/iconos/saturno.png"></img>
                <h3>López D. Emanuel</h3>
            </div>
            {widthScreen > 800 ? (
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/inicio"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portafolio"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Portafolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/curriculum"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Curriculum
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacto"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            ) : (
                <nav className="drop">
                    <ul>
                        <Dropdown isOpen={drop} toggle={openCloseDrop}>
                            <DropdownToggle className="menu-boton">
                                <img alt="logo-menu" src="/img/iconos/menu.png"></img>
                            </DropdownToggle>
                            <DropdownMenu className="menu-desplegado">
                                <DropdownItem>
                                    <NavLink
                                        to="/inicio"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        Inicio
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem><NavLink
                                to="/portafolio"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Portafolio
                            </NavLink></DropdownItem>
                                <DropdownItem><NavLink
                                to="/curriculum"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Curriculum
                            </NavLink></DropdownItem>
                                <DropdownItem><NavLink
                                to="/contacto"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Contacto
                            </NavLink></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </ul>
                </nav>
            )}
        </header>
    );
};
