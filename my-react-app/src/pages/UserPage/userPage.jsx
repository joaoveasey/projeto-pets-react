import React from 'react';
import styles from './userPage.module.css';
import trasition from '../../components/Transition/transition'

import avatarIcon from '../../assets/PessoaUsuario.png';
import userIcon from '../../assets/perfilUsuario.png';
import locationIcon from '../../assets/ELEMENTS.png';
import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/phone.png';

const UserPage = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatar}>
        <img src={avatarIcon} alt="Avatar" className={styles.avatarImg} />
      </div>
      <div className={styles.userInfo}>
        <h1>José Afonso Oliveira</h1>
        <p>
          <img src={userIcon} alt="Ícone de Usuário" className={styles.icon} /> jose.oliveira
        </p>
        <p>
          <img src={locationIcon} alt="Ícone de Localização" className={styles.icon} /> São Paulo, SP
        </p>
        <p>
          <img src={emailIcon} alt="Ícone de Email" className={styles.icon} /> jose.oliveira@gmail.com
        </p>
        <p>
          <img src={phoneIcon} alt="Ícone de Telefone" className={styles.icon} /> (16) 99999-9999
        </p>
        <button className={styles.editButton}>Alterar meus dados</button>
      </div>
    </div>
  );
};

export default trasition(UserPage);