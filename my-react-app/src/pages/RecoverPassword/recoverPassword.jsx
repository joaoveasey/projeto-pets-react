import styles from './recoverPassword.module.css'
import React, { useState } from 'react';
import { auth } from '../../firebase/config'
import { sendPasswordResetEmail   } from 'firebase/auth'

function RecoverPassword() {
    const [ formValues, setFormValues ] = useState({
        email: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, formValues.email)
            alert('Link de recuperação de senha enviado para o email: ' + formValues.email)
        }
        catch (error) {
            alert("Ocorreu um erro, tente novamente mais tarde")
        }
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }
  return (
    <>
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <span>Recupere sua Senha</span>
        <div className={styles.inputContainer}>
            <label htmlFor="email">E-mail</label>
            <input 
            type="email"
            id='email'
            name='email'
            placeholder='E-mail'
            value={formValues.email}
            onChange={handleInputChange}
            required
             />
        </div>
        <button type='submit' className={styles.button}>Enviar</button>
      </form>
    </div>
      
    </>
  )
}

export default RecoverPassword