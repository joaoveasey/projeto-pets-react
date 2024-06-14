import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faLightbulb, faQuestionCircle, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import { userAuthentication } from '../../hooks/userAuthentication';
import { useAuthValue } from '../../context/AuthContext';
import logo from "./img/logo.png";
import userPic from "./img/user.png";
import poligono from "./img/PolygonOpened.png";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = userAuthentication();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/entrar');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.brand}>
                <img src={logo} alt="logo" width="120px" height="110px" />
                <p className={styles.pageName}>Conexão Canina</p>
            </NavLink>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
                <ul className={styles.link_list}>
                    <li className={styles.links}>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </NavLink>
                    </li>
                    <li className={styles.links}>
                        <NavLink to="/sobre">
                            <FontAwesomeIcon icon={faInfoCircle} /> Sobre
                        </NavLink>
                    </li>
                    <li className={styles.links}>
                        <NavLink to="/dicas">
                            <FontAwesomeIcon icon={faLightbulb} /> Dicas
                        </NavLink>
                    </li>
                    <li className={styles.links}>
                        <NavLink to="/duvidas">
                            <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
                        </NavLink>
                    </li>
                    {!user ? (
                        <li className={styles.links}>
                            <NavLink to="/entrar" className={styles.entrarButton}>
                                <FontAwesomeIcon icon={faSignInAlt} /> Entrar
                            </NavLink>
                        </li>
                    ) : (
                        <li className={styles.links}>
                            <div className={styles.drawerToggle} onClick={() => setDrawerOpen(!drawerOpen)}>
                                <img src={poligono} width="20px" height="18px" alt="Menu Toggle" />
                            </div>
                            <NavLink to="/usuario" className={styles.usuario}>
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
            <div className={styles.burger} onClick={toggleMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </header>
    );
};

export default Navbar;
