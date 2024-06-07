import React, { useState } from 'react';
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
    owner: {
      name: 'Carlos Silva',
      email: 'carlos.silva@example.com',
      phone: '(11) 98765-4321',
    }
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
    owner: {
      name: 'Ana Souza',
      email: 'ana.souza@example.com',
      phone: '(21) 98765-4321',
    }
  },
  Thor: {
    name: 'Thor',
    breed: 'Pinscher',
    city: 'Belo Horizonte',
    state: 'MG',
    size: 'Pequeno',
    gender: 'Macho',
    age: '4 anos',
    description: 'Thor é um cachorro amigável e muito obediente.',
    image: Thor,
    owner: {
      name: 'Bruno Santos',
      email: 'bruno.santos@example.com',
      phone: '(31) 98765-4321',
    }
  },
  Pintado: {
    name: 'Pintado',
    breed: 'Dálmata',
    city: 'Curitiba',
    state: 'PR',
    size: 'Grande',
    gender: 'Macho',
    age: '5 anos',
    description: 'Pintado é um cachorro brincalhão e cheio de energia.',
    image: Pintado,
    owner: {
      name: 'Mariana Ferreira',
      email: 'mariana.ferreira@example.com',
      phone: '(41) 98765-4321',
    }
  },
  Cesar: {
    name: 'Cesar',
    breed: 'Labrador Retriever',
    city: 'Porto Alegre',
    state: 'RS',
    size: 'Médio',
    gender: 'Macho',
    age: '2 anos',
    description: 'Cesar é um cachorro inteligente e fácil de treinar.',
    image: Cesar,
    owner: {
      name: 'Roberto Costa',
      email: 'roberto.costa@example.com',
      phone: '(51) 98765-4321',
    }
  },
  Dorinha: {
    name: 'Dorinha',
    breed: 'Chihuahua',
    city: 'Fortaleza',
    state: 'CE',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Dorinha é uma cadela carinhosa e muito apegada aos donos.',
    image: Dorinha,
    owner: {
      name: 'Luciana Almeida',
      email: 'luciana.almeida@example.com',
      phone: '(85) 98765-4321',
    }
  },
  Chanel: {
    name: 'Chanel',
    breed: 'Pinscher',
    city: 'Salvador',
    state: 'BA',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '1 ano',
    description: 'Chanel é uma cadela pequena, mas muito corajosa.',
    image: Chanel,
    owner: {
      name: 'Fernanda Oliveira',
      email: 'fernanda.oliveira@example.com',
      phone: '(71) 98765-4321',
    }
  },
  Birulinha: {
    name: 'Birulinha',
    breed: 'Chihuahua',
    city: 'Recife',
    state: 'PE',
    size: 'Médio',
    gender: 'Macho',
    age: '4 anos',
    description: 'Birulinha é um cachorro calmo e muito pilantra.',
    image: Birulinha,
    owner: {
      name: 'Paulo Mendes',
      email: 'paulo.mendes@example.com',
      phone: '(81) 98765-4321',
    }
  },
  Max: {
    name: 'Max',
    breed: 'Golden Retriever',
    city: 'Brasília',
    state: 'DF',
    size: 'Grande',
    gender: 'Macho',
    age: '5 anos',
    description: 'Max é um cachorro muito leal e protetor.',
    image: Max,
    owner: {
      name: 'Gustavo Moreira',
      email: 'gustavo.moreira@example.com',
      phone: '(61) 98765-4321',
    }
  },
  Luna: {
    name: 'Luna',
    breed: 'Poodle',
    city: 'Manaus',
    state: 'AM',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Luna é uma cadela ativa e muito brincalhona.',
    image: Luna,
    owner: {
      name: 'Juliana Rocha',
      email: 'juliana.rocha@example.com',
      phone: '(92) 98765-4321',
    }
  },
  Buddy: {
    name: 'Buddy',
    breed: 'Labrador Retriever',
    city: 'Belém',
    state: 'PA',
    size: 'Grande',
    gender: 'Macho',
    age: '6 anos',
    description: 'Buddy é um cachorro muito inteligente e obediente.',
    image: Buddy,
    owner: {
      name: 'Ricardo Lima',
      email: 'ricardo.lima@example.com',
      phone: '(91) 98765-4321',
    }
  },
  Molly: {
    name: 'Molly',
    breed: 'Bulldog Francês',
    city: 'Natal',
    state: 'RN',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '2 anos',
    description: 'Molly é uma cadela amorosa e muito divertida.',
    image: Molly,
    owner: {
      name: 'Patrícia Barbosa',
      email: 'patricia.barbosa@example.com',
      phone: '(84) 98765-4321',
    }
  },
  Rocky: {
    name: 'Rocky',
    breed: 'Boxer',
    city: 'Florianópolis',
    state: 'SC',
    size: 'Grande',
    gender: 'Macho',
    age: '5 anos',
    description: 'Rocky é um cachorro muito protetor e leal.',
    image: Rocky,
    owner: {
      name: 'Fábio Carvalho',
      email: 'fabio.carvalho@example.com',
      phone: '(48) 98765-4321',
    }
  },
  Daisy: {
    name: 'Daisy',
    breed: 'Cocker Spaniel',
    city: 'João Pessoa',
    state: 'PB',
    size: 'Médio',
    gender: 'Fêmea',
    age: '4 anos',
    description: 'Daisy é uma cadela muito carinhosa e dócil.',
    image: Daisy,
    owner: {
      name: 'Marina Costa',
      email: 'marina.costa@example.com',
      phone: '(83) 98765-4321',
    }
  },
  Zeus: {
    name: 'Zeus',
    breed: 'Doberman',
    city: 'Teresina',
    state: 'PI',
    size: 'Grande',
    gender: 'Macho',
    age: '6 anos',
    description: 'Zeus é um cachorro imponente e muito obediente.',
    image: Zeus,
    owner: {
      name: 'Daniel Martins',
      email: 'daniel.martins@example.com',
      phone: '(86) 98765-4321',
    }
  },
  Lola: {
    name: 'Lola',
    breed: 'Shih Tzu',
    city: 'Maceió',
    state: 'AL',
    size: 'Pequeno',
    gender: 'Fêmea',
    age: '3 anos',
    description: 'Lola é uma cadela pequena, mas cheia de energia.',
    image: Lola,
    owner: {
      name: 'Camila Azevedo',
      email: 'camila.azevedo@example.com',
      phone: '(82) 98765-4321',
    }
  },
  Toby: {
    name: 'Toby',
    breed: 'Yorkshire Terrier',
    city: 'Aracaju',
    state: 'SE',
    size: 'Pequeno',
    gender: 'Macho',
    age: '4 anos',
    description: 'Toby é um cachorro muito esperto e cheio de energia.',
    image: Toby,
    owner: {
      name: 'Rafael Souza',
      email: 'rafael.souza@example.com',
      phone: '(79) 98765-4321',
    }
  },
  Bailey: {
    name: 'Bailey',
    breed: 'Rottweiler',
    city: 'Campo Grande',
    state: 'MS',
    size: 'Grande',
    gender: 'F',
  }
}

const Modal = ({ onClose, owner }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <div className={styles.infos}>
      <h2 className={styles.ownerContact}>Contato do Dono</h2>
      <p className={styles.ownerName}><strong>Nome:</strong> {owner.name}</p>
      <p className={styles.ownerEmail}><strong>Email:</strong> {owner.email}</p>
      <p className={styles.ownerPhone}><strong>Telefone:</strong> {owner.phone}</p>
      </div>
      <button onClick={onClose} className={styles.closeButton}>Fechar</button>
    </div>
  </div>
);

const DogDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dog = dogData[name];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!dog) {
    return <div>Cachorro não encontrado!</div>;
  }

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <button className={styles.contactButton} onClick={handleContactClick}>
          Contato
        </button>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} owner={dog.owner} />}
    </div>
  );
};

export default DogDetails;
