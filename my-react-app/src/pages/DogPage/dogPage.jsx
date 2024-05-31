import styles from './dogPage.module.css'
import React, { useState } from 'react'
import Rex from '../../assets/dog1.jpg';
import Bella from '../../assets/dog2.jpg';
import Thor from '../../assets/dog3.jpg';
import Pintado from '../../assets/dog4.jpg';
import Cesar from '../../assets/dog5.jpg';
import Dorinha from '../../assets/dog6.jpg';
import Chanel from '../../assets/dog7.jpg';
import Birulinha from '../../assets/dog8.jpg';

const dogs = [
  {
    name: 'Rex',
    breed: 'Beagle',
    city: 'São Paulo, SP',
    state: "SP",
    gender: 'M',
    image: Rex,
  },
  {
    name: 'Bella',
    breed: 'Basset Hound',
    city: 'Rio de Janeiro, RJ',
    state: "RJ",
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Thor',
    breed: 'Pinscher',
    city: 'Santos, SP',
    state: "SP",
    gender: 'M',
    image: Thor,
  },
  {
    name: 'Pintado',
    breed: 'Dalmata',
    city: 'Salvador, BH',
    state: "BH",
    gender: 'M',
    image: Pintado,
  },
  {
    name: 'Cesar',
    city: 'Matão, SP',
    breed: 'Shiba Inu',
    state: "SP",
    gender: 'M',
    image: Cesar,
  },
  {
    name: 'Dorinha',
    breed: 'Chihuahua',
    city: 'Manaus, AM',
    state: "AM",
    gender: 'F',
    image: Dorinha,
  },
  {
    name: 'Chanel',
    breed: 'Pinscher',
    city: 'Rio de Janeiro, RJ',
    state: "RJ",
    gender: 'F',
    image: Chanel,
  },
  {
    name: 'Birulinha',
    breed: 'Chihuahua',
    city: 'Belo Horizonte, MG',
    state: "SP",
    gender: 'M',
    image: Birulinha,
  },
];

function DogPage() {

  const [ selectedGender, setSelectedGender ] = useState('-1');

  const handleFilterChange = (event) =>{
    setSelectedGender(event.target.value);
  }

  const filteredDogs = selectedGender === '-1'
    ? dogs
    : dogs.filter(dog => dog.gender === selectedGender)

 

  return (
    <>
      <h1>Encontre um Parceiro</h1>
      <div className={styles.container_filter}>
          <label className={styles.container_filter_input}>
            <select 
            name="dogBreed" 
            > 
              <option className={styles.default_option} selected value="-1">Raça</option>
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
              <option value="Dalmata">Dálmata</option>
              <option value="Pinscher">Pinscher</option>
            </select>
          </label>
          <label 
          className={styles.container_filter_input} 
          >
          <select
              name='dogGender'
              value={selectedGender}
              onChange={handleFilterChange}
            >
              <option className={styles.default_option} selected value="-1">Gênero</option>
              <option value="M">Masculino</option>  
              <option value="F">Feminino</option>
            </select> 
          </label>
          <label className={styles.container_filter_input}>
            <select
              name='dogSize'
            >
              <option selected value="-1">Porte</option>
              <option value="muitoPequeno">Muito Pequeno</option>  
              <option value="Pequeno">Pequeno</option>  
              <option value="Medio">Médio</option>  
              <option value="Grande">Grande</option>  
              <option value="muitoGrande">Muito Grande</option>  
            </select> 
          </label>
          <label className={styles.container_filter_input}>
            <select
              name='state'
            >
              <option selected value="-1">Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select> 
          </label>
      </div>

      <div className={styles.dogHighlights}>
        {filteredDogs.map((dog, index) => (
          <div key={index} className={styles.dogCard}>
            <img src={dog.image} alt={dog.name} className={styles.dogImage} />
            <h2 className={styles.dogName}>
              {dog.name}, <span className={styles.dogBreed}>{dog.breed}</span>
            </h2>
            <p className={styles.dogDetails}>{dog.city}</p>
            <p className={styles.dogGender}>
              {dog.gender === 'M' ? '♂' : '♀'}
            </p>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default DogPage