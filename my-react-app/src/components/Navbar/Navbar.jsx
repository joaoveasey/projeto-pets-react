import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from "./img/logo.png"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.brand}>
                    <img src={logo} alt="logo" width="120px" height="110px"/>
                    <p>Conexão Canina</p>
                </NavLink>
                <ul className={styles.link_list}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : null )}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre" className={({ isActive }) => (isActive ? styles.active : null )}>
                                Sobre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dicas" className={({ isActive }) => (isActive ? styles.active : null )}>
                                Dicas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/duvidas" className={({ isActive }) => (isActive ? styles.active : null )}>
                                Dúvidas
                        </NavLink>
                    </li>
                    <button className={styles.entrar}>
                        <NavLink to="/entrar">
                                Login
                        </NavLink>
                    </button>
                    
                    {/* {!user && (
                        <>
                            <li>
                                <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : null )}>
                                        Entrar
                                </NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                        <li>
                            <NavLink className={styles.logout} onClick={logout}>
                                    Sair
                            </NavLink>
                        </li>
                    </>
                    )} */}
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar