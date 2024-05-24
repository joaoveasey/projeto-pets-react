import React from 'react';
import styles from './home.module.css';
import sampleImage from '../../assets/dog-home.jpg';
import Rex from '../../assets/dog.jpg';
import Bella from '../../assets/blackDog.jpg';
import { NavLink } from 'react-router-dom';

const dogs = [
  {
    name: 'Rex',
    city: 'São Paulo, SP',
    gender: 'M',
    image: Rex,
  },
  {
    name: 'Bella',
    city: 'Rio de Janeiro, RJ',
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Bella',
    city: 'Rio de Janeiro, RJ',
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Bella',
    city: 'Rio de Janeiro, RJ',
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Bella',
    city: 'Rio de Janeiro, RJ',
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Bella',
    city: 'Rio de Janeiro, RJ',
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Bella',
    city: 'Rio de Janeiro, RJ',
    gender: 'F',
    image: Bella,
  },
  {
    name: 'Bella',
    city: 'Rio de Janeiro, RJ',
    gender: 'F',
    image: Bella,
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageTextContainer}>
        <div className={styles.imageContainer}>
          <img src={sampleImage} alt="Sample" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.containerText}>Encontre o par perfeito para o seu cão.</h1>
          <NavLink to="/cadastro" className={styles.button}>
            Cadastrar Agora!
          </NavLink>
        </div>
      </div>
      <hr className={styles.divider} />
      <h1 className={styles.emphasis}>Destaques</h1>
      <div className={styles.dogHighlights}>
        {dogs.map((dog, index) => (
          <div key={index} className={styles.dogCard}>
            <img src={dog.image} alt={dog.name} className={styles.dogImage} />
            <h2 className={styles.dogName}>{dog.name}</h2>
            <p className={styles.dogDetails}>{dog.city}</p>
            <p className={styles.dogGender}>
              {dog.gender === 'M' ? '♂' : '♀'}
            </p>
          </div>
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

export default Home;
