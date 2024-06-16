import React, { useState } from 'react';
import styles from './userPage.module.css';
import trasition from '../../components/Transition/transition'

import avatarIcon from '../../assets/PessoaUsuario.png';
import userIcon from '../../assets/perfilUsuario.png';
import locationIcon from '../../assets/ELEMENTS.png';
import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/phone.png';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';

const UserPage = () => {
  const [ imgUrl, setImgUrl] = useState("")
  const [ progress, setProgress ] = useState(0)

  const handleUpload = (event) => {
    event.preventDefault()

    const file = event.target[0]?.files[0]
    if(!file) return;

    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100
        setProgress(progress)
      },
      error => {
        alert(error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgUrl(url)
        })
      }
    )
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatar}>
      {!imgUrl && <img src={avatarIcon} alt='Foto Perfil' className={styles.uploaded_image} />}
      {imgUrl && <img src={imgUrl} alt='Foto Perfil' className={styles.uploaded_image} />}
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
      <form onSubmit={handleUpload} className={styles.upload_form}>
        <br />
        <h4>Alterar minha foto de Perfil</h4>
        <input type="file" className={styles.file_input}/>
        <button type="submit" className={styles.upload_button}>Enviar</button>
      </form>
      {!imgUrl && <progress value={progress} max={100} className={styles.progress_bar} />}
      </div>
    </div>
  );
};

export default trasition(UserPage);