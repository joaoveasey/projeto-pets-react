import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './dogDetails.module.css';

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

const dogData = {
  Rex: {
    name: 'Rex',
    breed: 'Beagle',
    city: 'São Paulo, SP',
    state: "SP",
    size: "Médio",
    gender: 'M',
    image: Rex,
  },
  Bella: {
    name: 'Bella',
    breed: 'Basset Hound',
    city: 'Rio de Janeiro, RJ',
    state: "RJ",
    size: "Pequeno",
    gender: 'F',
    image: Bella,
  },
  Thor: {
    name: 'Thor',
    breed: 'Pinscher',
    city: 'Santos, SP',
    state: "SP",
    size: "Pequeno",
    gender: 'M',
    image: Thor,
  },
  Pintado: {
    name: 'Pintado',
    breed: 'Dalmata',
    city: 'Salvador, BH',
    state: "BH",
    size: "Grande",
    gender: 'M',
    image: Pintado,
  },
  Cesar: {
    name: 'Cesar',
    breed: 'Labrador Retriever',
    city: 'Matão, SP',
    state: "SP",
    size: "Médio",
    gender: 'M',
    image: Cesar,
  },
  Dorinha: {
    name: 'Dorinha',
    breed: 'Chihuahua',
    city: 'Manaus, AM',
    state: "AM",
    size: "MuitoPequeno",
    gender: 'F',
    image: Dorinha,
  },
  Chanel: {
    name: 'Chanel',
    breed: 'Pinscher',
    city: 'Rio de Janeiro, RJ',
    state: "RJ",
    size: "Pequeno",
    gender: 'F',
    image: Chanel,
  },
  Birulinha: {
    name: 'Birulinha',
    breed: 'Chihuahua',
    city: 'Belo Horizonte, MG',
    state: "SP",
    size: "Pequeno",
    gender: 'M',
    image: Birulinha,
  },
  Max: {
    name: 'Max',
    breed: 'Golden Retriever',
    city: 'Curitiba, PR',
    state: "PR",
    size: "Grande",
    gender: 'M',
    image: Max,
  },
  Luna: {
    name: 'Luna',
    breed: 'Poodle',
    city: 'Fortaleza, CE',
    state: "CE",
    size: "MuitoPequeno",
    gender: 'F',
    image: Luna,
  },
  Buddy: {
    name: 'Buddy',
    breed: 'Labrador Retriever',
    city: 'Porto Alegre, RS',
    state: "RS",
    size: "Grande",
    gender: 'M',
    image: Buddy,
  },
  Molly: {
    name: 'Molly',
    breed: 'Bulldog Francês',
    city: 'Florianópolis, SC',
    state: "SC",
    size: "Pequeno",
    gender: 'F',
    image: Molly,
  },
  Rocky: {
    name: 'Rocky',
    breed: 'Boxer',
    city: 'São Luís, MA',
    state: "MA",
    size: "Grande",
    gender: 'M',
    image: Rocky,
  },
  Daisy: {
    name: 'Daisy',
    breed: 'Cocker Spaniel',
    city: 'João Pessoa, PB',
    state: "PB",
    size: "Médio",
    gender: 'F',
    image: Daisy,
  },
  Zeus: {
    name: 'Zeus',
    breed: 'Doberman',
    city: 'Natal, RN',
    state: "RN",
    size: "Grande",
    gender: 'M',
    image: Zeus,
  },
  Lola: {
    name: 'Lola',
    breed: 'Shih Tzu',
    city: 'Vitória, ES',
    state: "ES",
    size: "Pequeno",
    gender: 'F',
    image: Lola,
  },
  Toby: {
    name: 'Toby',
    breed: 'Yorkshire Terrier',
    city: 'Campo Grande, MS',
    state: "MS",
    size: "Pequeno",
    gender: 'M',
    image: Toby,
  },
  Bailey: {
    name: 'Bailey',
    breed: 'Rottweiler',
    city: 'Aracaju, SE',
    state: "SE",
    size: "MuitoGrande",
    gender: 'F',
    image: Bailey,
  },
  Charlie: {
    name: 'Charlie',
    breed: 'Pastor Alemão',
    city: 'Belém, PA',
    state: "PA",
    size: "MuitoGrande",
    gender: 'M',
    image: Charlie,
  },
  Rosie: {
    name: 'Rosie',
    breed: 'Maltês',
    city: 'Maceió, AL',
    state: "AL",
    size: "Pequeno",
    gender: 'F',
    image: Rosie,
  },
  Jack: {
    name: 'Jack',
    breed: 'Dogue Alemão',
    city: 'Recife, PE',
    state: "PE",
    size: "Grande",
    gender: 'M',
    image: Jack,
  },
  Lucy: {
    name: 'Lucy',
    breed: 'Pastor Australiano',
    city: 'Palmas, TO',
    state: "TO",
    size: "Médio",
    gender: 'F',
    image: Lucy,
  },
  Duke: {
    name: 'Duke',
    breed: 'São Bernardo',
    city: 'Macapá, AP',
    state: "AP",
    size: "MuitoGrande",
    gender: 'M',
    image: Duke,
  },
  Maggie: {
    name: 'Maggie',
    breed: 'Border Collie',
    city: 'Boa Vista, RR',
    state: "RR",
    size: "Médio",
    gender: 'F',
    image: Maggie,
  },
};

const DogDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dog = dogData[name];

  if (!dog) {
    return <div>Cachorro não encontrado!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={dog.image} alt={dog.name} className={styles.dogImage} />
      </div>
      <div className={styles.content}>
      <h1 className={styles.dogName}>
              {dog.name}, <span className={styles.dogBreed}>{dog.breed}</span>
            </h1>
        <p className={styles.dogDetails}>{dog.city}</p>
        <p className={styles.dogGender}>{dog.gender === 'M' ? 'Macho' : 'Fêmea'}</p>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default DogDetails;
