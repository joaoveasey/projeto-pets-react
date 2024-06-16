import styles from './recoverPassword.module.css'
import React, { useState } from 'react';
import { auth } from '../../firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'
import trasition from '../../components/Transition/transition'

function RecoverPassword() {
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('')
        setError(null)

        try {
            await sendPasswordResetEmail(auth, email)
            setMessage('Link de recuperação de senha enviado para o email: '+ email +'.')
        }
        catch (error) {
            setError("Ocorreu um erro, verifique se o e-mail está escrito corretamente.")
        }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             />
        </div>
        <button type='submit' className={styles.button}>Enviar</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
      
    </>
  )
}

export default trasition(RecoverPassword);