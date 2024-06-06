import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { userAuthentication } from '../../hooks/userAuthentication'
import { useAuthValue } from '../../context/AuthContext'
import logo from "./img/logo.png"
import userPic from "./img/user.png"
import poligono from "./img/PolygonOpened.png"

const Navbar = () => {
    const { user } = useAuthValue()
    const { logout } = userAuthentication()
    const navigate = useNavigate()
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.brand}>
                    <img src={logo} alt="logo" width="120px" height="110px" />
                    <p>Conexão Canina</p>
                </NavLink>
                <ul className={styles.link_list}>
                    <li className={styles.links}>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.links}>
                        <NavLink to="/sobre" >
                            Sobre
                        </NavLink>
                    </li>
                    <li className={styles.links}>
                        <NavLink to="/dicas" >
                            Dicas
                        </NavLink>
                    </li>
                    <li className={styles.links}>
                        <NavLink to="/duvidas">
                            Dúvidas
                        </NavLink>
                    </li>
                    {!user ? (
                        <li className={styles.links}>
                            <NavLink to="/entrar" className={styles.entrarButton} activeClassName={styles.active}>
                                Entrar
                            </NavLink>
                        </li>
                    ) : (
                        <li className={styles.links}>
                            <div className={styles.drawerToggle} onClick={() => setDrawerOpen(!drawerOpen)}>
                                    <img src={poligono} width="20px" height="18px"/>
                            </div>
                            <NavLink to="/usuario" className={styles.usuario} activeClassName={styles.active}>
                                <img src={userPic} alt="Usuário" width="80px" height="45px" />
                                <p>{user.displayName || 'Usuário'}</p>
                            </NavLink>
                            {drawerOpen && (
                                <div className={styles.drawer}>
                                    <button onClick={handleLogout} className={styles.logoutButton}>
                                        Sair
                                    </button>
                                </div>
                            )}
                        </li>
                    )}

                </ul>
            </nav>
        </>
    )
}

export default Navbar