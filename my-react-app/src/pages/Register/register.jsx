import styles from './register.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
// import { userAuthentication } from '../../hooks/userAuthentication'


function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const [dogName, setDogName] = useState('')
  const [dogBreed, setDogBreed] = useState('')
  const [dogSize, setDogSize] = useState('')
  const [dogGender, setDogGender] = useState('')
  const [dogAge, setDogAge] = useState('')
  const [dogInfo, setDogInfo] = useState('')
  const [dogPhoto, setDogPhoto] = useState('')
  const [error, setError] = useState('')

  // const { createUser, error: authError, loading } = userAuthentication()

  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const user = {
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
      state,
      username,
      password,
      dogName,
      dogBreed,
      dogSize,
      dogGender,
      dogAge,
      dogPhoto,
      dogInfo
    }

    if (password != confirmedPassword){
      setError("As senhas precisam ser iguais.")
      return
    }

    if (dogAge < 0){
      setError("A idade não pode ser menor que 0.")
    } 

    const res = await createUser(user)

    console.table(res)
  }

  // useEffect(() => {
  //   if (authError) {
  //     setError(authError)
  //   }
  // }, [authError] 
  // )
  
  return (
    <>
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handlerSubmit}>
        <div >
          <div className={styles.header}>
           <span>Novo usuário? Cadastre-se!</span>
          </div>
          <span>Nome:</span>
          <label className={styles.inputContainer}>
            <input 
            type="text" 
            name='firstName'
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Nome'></input>
          </label>
          <span>Sobrenome:</span>
          <label className={styles.inputContainer}>
            <input 
            type="text" 
            name='lastName'
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Sobrenome'></input>
          </label>
          <span>Email:</span>
          <label className={styles.inputContainer} >
            <input 
            type="email" 
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'></input>
          </label>
          <span>Celular:</span>
          <label className={styles.inputContainer}>
            <input 
            type="tel" 
            name='phoneNumber'
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Celular'></input>
          </label>
          <span>Cidade:</span>
          <label className={styles.inputContainer}>
            <input 
            type="text" 
            name='city'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Cidade'></input>
          </label>
          <span>Estado:</span>
          <label className={styles.inputContainer}>
            <input 
            type="text" 
            name='state'
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder='Estado'></input>
          </label>
          <span>Nome de Usuário:</span>
          <label className={styles.inputContainer}>
            <input 
            type="text" 
            name='username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Nome de Usuário'></input>
          </label>
          <span>Senha:</span>
          <label className={styles.inputContainer}>
            <input 
            type="password" 
            name='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Senha'></input>
          </label>
          <span>Confirme sua senha:</span>
          <label className={styles.inputContainer}>
            <input 
            type="password" 
            name='confirmedPassword'
            required
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            placeholder='Confirme sua senha'></input>
          </label>
        </div>
        <div>
        <div className={styles.header}>
         <span>Informações do Cão</span>
        </div>
        <span>Nome:</span>
          <label className={styles.inputContainer}>
            <input 
            type="text" 
            name='dogName'
            required
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            placeholder='Nome'></input>
          </label>
          <span>Idade:</span>
          <label className={styles.inputContainer}>
            <input 
            type="number" 
            name='dogAge'
            required
            value={dogAge}
            onChange={(e) => setDogAge(e.target.value)}
            placeholder='Idade'></input>
          </label>
          <span>Raça:</span>
          <label className={styles.inputContainer_Select}>
            <select 
            name="dogBreed" 
            value={dogBreed}
            required
            onChange={(e) => setDogBreed(e.target.value)}
            > 
              <option selected value="-1"></option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Pit Bull">Pit Bull</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="German Shepherd">Pastor Alemão</option>
              <option value="French Bulldog">Buldogue Francês</option>
              <option value="Beagle">Beagle</option>
              <option value="Bulldog">Buldogue Inglês</option>
              <option value="Poodle">Poodle</option>
              <option value="Boxer">Boxer</option>
              <option value="Dachshund">Dachshund (Salsicha)</option>
              <option value="Yorkshire Terrier">Yorkshire Terrier</option>
              <option value="Siberian Husky">Husky Siberiano</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Shih Tzu">Shih Tzu</option>
              <option value="Rottweiler">Rottweiler</option>
              <option value="Great Dane">Dogue Alemão</option>
              <option value="Cocker Spaniel">Cocker Spaniel</option>
              <option value="Doberman Pinscher">Doberman</option>
              <option value="Shiba Inu">Shiba Inu</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Australian Shepherd">Pastor Australiano</option>
              <option value="Saint Bernard">São Bernardo</option>
              <option value="Basset Hound">Basset Hound</option>
              <option value="Weimaraner">Weimaraner</option>
              <option value="Maltese">Maltês</option>
              <option selected value="Outro">Outro</option>
            </select>
          </label>
          <span>Porte:</span>
          <label className={styles.inputContainer_Select}>
            <select
              name='dogSize'
              required
              value={dogSize}
              onChange={(e) => setDogSize(e.target.value)}
            >
              <option selected value="-1"></option>
              <option value="muitoPequeno">Muito Pequeno</option>  
              <option selected value="Pequeno">Pequeno</option>  
              <option value="Medio">Médio</option>  
              <option value="Grande">Grande</option>  
              <option value="muitoGrande">Muito Grande</option>  
            </select> 
          </label>
          <span>Gênero:</span>
          <label className={styles.inputContainer_Select}>
          <select 
              name='dogGender'
              required
              value={dogGender}
              onChange={(e) => setDogGender(e.target.value)}
            >
              <option selected value="-1"></option>
              <option value="M">Masculino</option>  
              <option value="F">Feminino</option>
            </select> 
          </label>
          
          <span>Adicione uma foto do seu Pet:</span>
          <label className={styles.inputContainer_Photo}>
            <input 
            type="file" 
            name='dogPhoto'
            value={dogPhoto}
            onChange={(e) => setDogPhoto(e.target.value)}></input>
          </label>
          <label className={styles.inputContainer}>
            <textarea 
            type="text" 
            name='dogInfo'
            required
            value={dogInfo}
            onChange={(e) => setDogInfo(e.target.value)}
            placeholder='Conte aqui um pouco sobre o Pet'></textarea>
          </label>
        </div>
        <button className='button'>Cadastrar</button>
      </form>
    </div>
      
    </>
    
  )
}

export default Register