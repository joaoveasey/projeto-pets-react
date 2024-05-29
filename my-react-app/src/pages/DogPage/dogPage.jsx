import styles from './dogPage.module.css'

function DogPage() {
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
            </select>
          </label>
          <label className={styles.container_filter_input}>
          <select
              name='dogGender'

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
          <button className={styles.container_filter_button}>Buscar</button>
      </div>
    </>
    
  )
}

export default DogPage