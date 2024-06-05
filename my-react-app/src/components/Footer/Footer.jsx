import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        
            <footer className={styles.footer}>
                <div className={styles.footer.left}>
                    <h2>© Copyright Conexão Canina</h2>
                    <h3>Desenvolvido por Grupo PETS</h3>
                </div>
                <div className={styles.footer.right}>
                    <h3>Contato: (16) 99999-9999</h3>
                    <h3>E-mail: contato.conexaocanina@gmail.com</h3>
                </div>
            </footer>
    
    )
}

export default Footer;