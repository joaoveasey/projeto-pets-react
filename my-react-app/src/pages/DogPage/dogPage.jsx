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
import Max from '../../assets/dog9.jpeg';
import Luna from '../../assets/dog10.jpg';
import Buddy from '../../assets/dog11.jpg';
import Molly from '../../assets/dog12.jpg';
import Rocky from '../../assets/dog13.jpg';
import Daisy from '../../assets/dog23.jpg';
import Zeus from '../../assets/dog15.jpg';
import Lola from '../../assets/dog16.jpg';
import Toby from '../../assets/dog17.jpg';
import Bailey from '../../assets/dog14.jpg';
import Charlie from '../../assets/dog19.jpg';
import Rosie from '../../assets/dog24.jpg';
import Jack from '../../assets/dog20.jpg';
import Lucy from '../../assets/dog21.jpg';
import Duke from '../../assets/dog18.jpg';
import Maggie from '../../assets/dog22.jpg';

const dogs = [
  {
    name: 'Rex',
    breed: 'Beagle',
    city: 'São Paulo, SP',
    state: "SP",
    size: "Medio",
    gender: 'M',
    image: Rex,
  },
  {
    name: 'Bella',
    breed: 'Basset Hound',
    city: 'Rio de Janeiro, RJ',
    state: "RJ",
    size: "Pequeno",
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Thor',
    breed: 'Pinscher',
    city: 'Santos, SP',
    state: "SP",
    size: "Pequeno",
    gender: 'M',
    image: Thor,
  },
  {
    name: 'Pintado',
    breed: 'Dalmata',
    city: 'Salvador, BH',
    state: "BH",
    size: "Grande",
    gender: 'M',
    image: Pintado,
  },
  {
    name: 'Cesar',
    city: 'Matão, SP',
    breed: 'Labrador Retriever',
    state: "SP",
    size: "Medio",
    gender: 'M',
    image: Cesar,
  },
  {
    name: 'Dorinha',
    breed: 'Chihuahua',
    city: 'Manaus, AM',
    state: "AM",
    size: "MuitoPequeno",
    gender: 'F',
    image: Dorinha,
  },
  {
    name: 'Chanel',
    breed: 'Pinscher',
    city: 'Rio de Janeiro, RJ',
    state: "RJ",
    size: "Pequeno",
    gender: 'F',
    image: Chanel,
  },
  {
    name: 'Birulinha',
    breed: 'Chihuahua',
    city: 'Belo Horizonte, MG',
    state: "SP",
    size: "Pequeno",
    gender: 'M',
    image: Birulinha,
  },

  {
    name: 'Max',
    breed: 'Golden Retriever',
    city: 'Curitiba, PR',
    state: "PR",
    size: "Grande",
    gender: 'M',
    image: Max,
  },
  {
    name: 'Luna',
    breed: 'Poodle',
    city: 'Fortaleza, CE',
    state: "CE",
    size: "MuitoPequeno",
    gender: 'F',
    image: Luna,
  },
  {
    name: 'Buddy',
    breed: 'Labrador Retriever',
    city: 'Porto Alegre, RS',
    state: "RS",
    size: "Grande",
    gender: 'M',
    image: Buddy,
  },
  {
    name: 'Molly',
    breed: 'Bulldog Francês',
    city: 'Florianópolis, SC',
    state: "SC",
    size: "Pequeno",
    gender: 'F',
    image: Molly,
  },
  {
    name: 'Rocky',
    breed: 'Boxer',
    city: 'São Luís, MA',
    state: "MA",
    size: "Grande",
    gender: 'M',
    image: Rocky,
  },
  {
    name: 'Daisy',
    breed: 'Cocker Spaniel',
    city: 'João Pessoa, PB',
    state: "PB",
    size: "Medio",
    gender: 'F',
    image: Daisy,
  },
  {
    name: 'Zeus',
    breed: 'Doberman',
    city: 'Natal, RN',
    state: "RN",
    size: "Grande",
    gender: 'M',
    image: Zeus,
  },
  {
    name: 'Lola',
    breed: 'Shih Tzu',
    city: 'Vitória, ES',
    state: "ES",
    size: "Pequeno",
    gender: 'F',
    image: Lola,
  },
  {
    name: 'Toby',
    breed: 'Yorkshire Terrier',
    city: 'Campo Grande, MS',
    state: "MS",
    size: "Pequeno",
    gender: 'M',
    image: Toby,
  },
  {
    name: 'Bailey',
    breed: 'Rottweiler',
    city: 'Aracaju, SE',
    state: "SE",
    size: "MuitoGrande",
    gender: 'F',
    image: Bailey,
  },
  {
    name: 'Charlie',
    breed: 'Pastor Alemão',
    city: 'Belém, PA',
    state: "PA",
    size: "MuitoGrande",
    gender: 'M',
    image: Charlie,
  },
  {
    name: 'Rosie',
    breed: 'Maltês',
    city: 'Maceió, AL',
    state: "AL",
    size: "Pequeno",
    gender: 'F',
    image: Rosie,
  },
  {
    name: 'Jack',
    breed: 'Dogue Alemão',
    city: 'Recife, PE',
    state: "PE",
    size: "Grande",
    gender: 'M',
    image: Jack,
  },
  {
    name: 'Lucy',
    breed: 'Pastor Australiano',
    city: 'Palmas, TO',
    state: "TO",
    size: "Medio",
    gender: 'F',
    image: Lucy,
  },
  {
    name: 'Duke',
    breed: 'São Bernardo',
    city: 'Macapá, AP',
    state: "AP",
    size: "MuitoGrande",
    gender: 'M',
    image: Duke,
  },
  {
    name: 'Maggie',
    breed: 'Border Collie',
    city: 'Boa Vista, RR',
    state: "RR",
    size: "Medio",
    gender: 'F',
    image: Maggie,
  }
];

function DogPage() {
  const [ selectedBreed, setSelectedBreed ] = useState('-1')
  const [ selectedGender, setSelectedGender ] = useState('-1')
  const [ selectedState, setSelectedState ] = useState('-1')
  const [ selectedSize, setSelectedSize ] = useState('-1')

  const filteredDogs = dogs.filter(dog => {
    return (selectedGender === '-1' || dog.gender === selectedGender) &&
           (selectedBreed === '-1' || dog.breed === selectedBreed) &&
           (selectedState === '-1' || dog.state === selectedState) &&
           (selectedSize === '-1' || dog.size === selectedSize)
  })

  const [ currentPage, setCurrentPage ] = useState(1)
  const dogsPerPage = 12;

  const indexOfLastDog = currentPage * dogsPerPage
  const indexOfFirstDog = indexOfLastDog - dogsPerPage
  const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog)

  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage)

  const handleFilterChange = (event) =>{
    const { name, value } = event.target;
    if (name === 'dogBreed'){
      setSelectedBreed(value)
    } else if (name === 'dogGender'){
      setSelectedGender(value)
    } else if (name === 'state'){
      setSelectedState(value)
    } else if (name === 'dogSize'){
      setSelectedSize(value)
    }
  }
  
  const handlePrevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  } 
    
  return (
    <>
      <h1>Encontre um Parceiro</h1>
      <div className={styles.container_filter}>
          <label className={styles.container_filter_input}>
            <select 
            name='dogBreed'
            value={selectedBreed}
            onChange={handleFilterChange}
            > 
              <option className={styles.default_option} selected value="-1">Raça</option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Pit Bull">Pit Bull</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="German Shepherd">Pastor Alemão</option>
              <option value="Bulldog Francês">Buldogue Francês</option>
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
              <option value="Pastor Alemão">Dogue Alemão</option>
              <option value="Cocker Spaniel">Cocker Spaniel</option>
              <option value="Doberman">Doberman</option>
              <option value="Shiba Inu">Shiba Inu</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Pastor Australiano">Pastor Australiano</option>
              <option value="São Bernardo">São Bernardo</option>
              <option value="Basset Hound">Basset Hound</option>
              <option value="Weimaraner">Weimaraner</option>
              <option value="Maltês">Maltês</option>
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
              value={selectedSize}
              onChange={handleFilterChange}
            >
              <option selected value="-1">Porte</option>
              <option value="MuitoPequeno">Muito Pequeno</option>  
              <option value="Pequeno">Pequeno</option>  
              <option value="Medio">Médio</option>  
              <option value="Grande">Grande</option>  
              <option value="MuitoGrande">Muito Grande</option>  
            </select> 
          </label>
          <label className={styles.container_filter_input}>
            <select
              name='state'
              value={selectedState}
              onChange={handleFilterChange}
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
        {currentDogs.map((dog, index) => (
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
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </>
  )
}

export default DogPage