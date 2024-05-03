import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.brand}>
                    Conexão Canina
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
                    <li>
                        <NavLink to="/entrar" className={({ isActive }) => (isActive ? styles.active : null )}>
                                Entrar
                        </NavLink>
                    </li>
                    
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