import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './dogDetails.module.css';

// Importar as imagens dos ícones
import pawIcon from '../../assets/patacachorro.png';
import locationIcon from '../../assets/ELEMENTS.png';
import descriptionIcon from '../../assets/descriptionIcon.png';

// Importar as imagens dos cachorros
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
    city: 'São Paulo',
    state: 'SP',
    size: 'Médio',
    gender: 'Macho',
    age: '3 anos',
    description: 'Rex é um cachorro alegre e cheio de energia.',
    image: Rex,
  },
  Bella: {
    name: 'Bella',
    breed: 'Basset Hound',
    city: 'Rio de Janeiro',
    state: 'RJ',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '2 anos',
    description: 'Bella é uma cadela carinhosa e tranquila.',
    image: Bella,
  },
  Thor: {
    name: 'Thor',
    breed: 'Pinscher',
    city: 'Santos',
    state: 'SP',
    size: 'Pequeno',
    gender: 'Macho',
    age: '1 ano',
    description: 'Thor é um pequeno guerreiro cheio de coragem.',
    image: Thor,
  },
  Pintado: {
    name: 'Pintado',
    breed: 'Dalmata',
    city: 'Salvador',
    state: 'BA',
    size: 'Grande',
    gender: 'Macho',
    age: '4 anos',
    description: 'Pintado é um cão dócil e muito ativo.',
    image: Pintado,
  },
  Cesar: {
    name: 'Cesar',
    breed: 'Labrador Retriever',
    city: 'Matão',
    state: 'SP',
    size: 'Médio',
    gender: 'Macho',
    age: '5 anos',
    description: 'Cesar é muito amigável e adora brincar.',
    image: Cesar,
  },
  Dorinha: {
    name: 'Dorinha',
    breed: 'Chihuahua',
    city: 'Manaus',
    state: 'AM',
    size: 'Muito Pequeno',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Dorinha é pequena, mas cheia de personalidade.',
    image: Dorinha,
  },
  Chanel: {
    name: 'Chanel',
    breed: 'Pinscher',
    city: 'Rio de Janeiro',
    state: 'RJ',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '2 anos',
    description: 'Chanel é uma cadela elegante e protetora.',
    image: Chanel,
  },
  Birulinha: {
    name: 'Birulinha',
    breed: 'Chihuahua',
    city: 'Belo Horizonte',
    state: 'MG',
    size: 'Pequeno',
    gender: 'Macho',
    age: '4 anos',
    description: 'Birulinha adora se aninhar e receber carinho.',
    image: Birulinha,
  },
  Max: {
    name: 'Max',
    breed: 'Golden Retriever',
    city: 'Curitiba',
    state: 'PR',
    size: 'Grande',
    gender: 'Macho',
    age: '6 anos',
    description: 'Max é um gigante gentil, ótimo com crianças.',
    image: Max,
  },
  Luna: {
    name: 'Luna',
    breed: 'Poodle',
    city: 'Fortaleza',
    state: 'CE',
    size: 'Muito Pequeno',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Luna é muito esperta e cheia de truques.',
    image: Luna,
  },
  Buddy: {
    name: 'Buddy',
    breed: 'Labrador Retriever',
    city: 'Porto Alegre',
    state: 'RS',
    size: 'Grande',
    gender: 'Macho',
    age: '5 anos',
    description: 'Buddy é leal e adora nadar.',
    image: Buddy,
  },
  Molly: {
    name: 'Molly',
    breed: 'Bulldog Francês',
    city: 'Florianópolis',
    state: 'SC',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '4 anos',
    description: 'Molly é muito engraçada e cheia de energia.',
    image: Molly,
  },
  Rocky: {
    name: 'Rocky',
    breed: 'Boxer',
    city: 'São Luís',
    state: 'MA',
    size: 'Grande',
    gender: 'Macho',
    age: '6 anos',
    description: 'Rocky é um cão muito ativo e protetor.',
    image: Rocky,
  },
  Daisy: {
    name: 'Daisy',
    breed: 'Cocker Spaniel',
    city: 'João Pessoa',
    state: 'PB',
    size: 'Médio',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Daisy é muito amigável e adora correr.',
    image: Daisy,
  },
  Zeus: {
    name: 'Zeus',
    breed: 'Doberman',
    city: 'Natal',
    state: 'RN',
    size: 'Grande',
    gender: 'Macho',
    age: '4 anos',
    description: 'Zeus é um cão muito leal e protetor.',
    image: Zeus,
  },
  Lola: {
    name: 'Lola',
    breed: 'Shih Tzu',
    city: 'Vitória',
    state: 'ES',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '2 anos',
    description: 'Lola é uma cadela carinhosa e cheia de charme.',
    image: Lola,
  },
  Toby: {
    name: 'Toby',
    breed: 'Yorkshire Terrier',
    city: 'Campo Grande',
    state: 'MS',
    size: 'Pequeno',
    gender: 'Macho',
    age: '3 anos',
    description: 'Toby é pequeno, mas muito corajoso.',
    image: Toby,
  },
  Bailey: {
    name: 'Bailey',
    breed: 'Rottweiler',
    city: 'Aracaju',
    state: 'SE',
    size: 'Muito Grande',
    gender: 'Fêmea',
    age: '5 anos',
    description: 'Bailey é uma gigante dócil e protetora.',
    image: Bailey,
  },
  Charlie: {
    name: 'Charlie',
    breed: 'Pastor Alemão',
    city: 'Belém',
    state: 'PA',
    size: 'Muito Grande',
    gender: 'Macho',
    age: '4 anos',
    description: 'Charlie é muito inteligente e adora desafios.',
    image: Charlie,
  },
  Rosie: {
    name: 'Rosie',
    breed: 'Maltês',
    city: 'Maceió',
    state: 'AL',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '2 anos',
    description: 'Rosie é muito fofa e adora brincar.',
    image: Rosie,
  },
  Jack: {
    name: 'Jack',
    breed: 'Dogue Alemão',
    city: 'Recife',
    state: 'PE',
    size: 'Grande',
    gender: 'Macho',
    age: '5 anos',
    description: 'Jack é grande, mas muito gentil.',
    image: Jack,
  },
  Lucy: {
    name: 'Lucy',
    breed: 'Pastor Australiano',
    city: 'Palmas',
    state: 'TO',
    size: 'Médio',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Lucy é muito inteligente e adora pastorear.',
    image: Lucy,
  },
  Duke: {
    name: 'Duke',
    breed: 'Husky Siberiano',
    city: 'Boa Vista',
    state: 'RR',
    size: 'Grande',
    gender: 'Macho',
    age: '4 anos',
    description: 'Duke é cheio de energia e adora o frio.',
    image: Duke,
  },
  Maggie: {
    name: 'Maggie',
    breed: 'Schnauzer',
    city: 'Porto Velho',
    state: 'RO',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Maggie é muito esperta e adora explorar.',
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
        <div className={styles.details}>
          <p className={styles.detailItemPaw}>
            <img src={pawIcon} alt="Paw icon" className={styles.iconPaw} />
             {dog.gender} | {dog.size} | {dog.age}
          </p>
          <p className={styles.detailItemLocation}>
            <img src={locationIcon} alt="Location icon" className={styles.iconLocation} />
             {dog.city}, {dog.state}
          </p>
          <p className={styles.detailItemDescription}>
            <img src={descriptionIcon} alt="Description icon" className={styles.iconDescription} />
             {dog.description}
          </p>
        </div>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default DogDetails;
