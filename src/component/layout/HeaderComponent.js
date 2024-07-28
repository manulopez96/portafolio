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
            
            <NavLink className="logo" to="">
                <img
                    alt="logo"
                    src="/img/iconos/saturno.gif"
                ></img>
                <h3>López D. Emanuel</h3>
            </NavLink>
            {widthScreen > 800 ? (
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/inicio"
                                className={({ isActive }) =>
                                    isActive ? "active" : "no-active"
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portafolio"
                                className={({ isActive }) =>
                                    isActive ? "active" : "no-active"
                                }
                            >
                                Portafolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/curriculum"
                                className={({ isActive }) =>
                                    isActive ? "active" : "no-active"
                                }
                            >
                                Curriculum
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacto"
                                className={({ isActive }) =>
                                    isActive ? "active" : "no-active"
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
                                <img
                                    alt="logo-menu"
                                    src="/img/iconos/menu.png"
                                ></img>
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
                                <DropdownItem>
                                    <NavLink
                                        to="/portafolio"
                                        className={({ isActive }) =>
                                            isActive ? "active" : "no-active"
                                        }
                                    >
                                        Portafolio
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink
                                        to="/curriculum"
                                        className={({ isActive }) =>
                                            isActive ? "active" : "no-active"
                                        }
                                    >
                                        Curriculum
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink
                                        to="/contacto"
                                        className={({ isActive }) =>
                                            isActive ? "active" : "no-active"
                                        }
                                    >
                                        Contacto
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </ul>
                </nav>
            )}
        </header>
    );
};
