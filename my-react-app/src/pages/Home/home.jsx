import React from 'react';
import styles from './home.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext'
import trasition from '../../components/Transition/transition'

import sampleImage from '../../assets/dog-home.jpg';
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
    breed: 'Labrador Retriever',
    city: 'Matão, SP',
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
];

const Home = () => {
  const { user } = useAuthValue()
  return (
    <div className={styles.container}>
      <div className={styles.imageTextContainer}>
        <div className={styles.imageContainer}>
          <img src={sampleImage} alt="Sample" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.containerText}>Encontre o par perfeito para o seu cão.</h1>
          {!user ? (
            <NavLink to="/cadastro" className={styles.button}>
            Cadastrar Agora!
          </NavLink>
          ) : (
            <p></p>
          )}
          
        </div>
      </div>
      <hr className={styles.divider} />
      <h1 className={styles.emphasis}>Destaques</h1>
      
      <div className={styles.dogHighlights}>
        {dogs.map((dog, index) => (
          <NavLink key={index} to={`/detalhes/${dog.name}`} className={styles.dogCard}>
            <img src={dog.image} alt={dog.name} className={styles.dogImage} />
            <h2 className={styles.dogName}>
              {dog.name}, <span className={styles.dogBreed}>{dog.breed}</span>
            </h2>
            <p className={styles.dogDetails}>{dog.city}</p>
            <p className={styles.dogGender}>
              {dog.gender === 'M' ? '♂' : '♀'}
            </p>
          </NavLink>
        ))}
      </div>

      <div className={styles.learnMore}>
        <span className={styles.learnMoreText}>Conheça um parceiro para o seu Cachorro!</span>
        <NavLink to="/cachorros" className={styles.learnMoreButton}>
          Conhecer Mais
        </NavLink>
      </div>
    </div>
  );
};

export default trasition(Home);
