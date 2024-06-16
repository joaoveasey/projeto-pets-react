import './About.Module.css'
import trasition from '../../components/Transition/transition'

function About() {
  return (
    <>   
      <div className="titulo">
        <h1>SOBRE</h1>
      </div>
      <div className="objetivos">
        <img src="/objetivos.jpg" alt="fotoobjetivos" style={{ width: '250px', height: 'auto' }}/>
        <div className="txtobjetivos">
          <h2>Nossos objetivos?</h2>
          <p>O Conexão Canina tem como principal objetivo facilitar 
            a comunicação entre donos de cachorros interessados em
             promover a união de seus cães. O site simplifica
             a busca por diversos cães, fornecendo os contatos de 
             seus donos, e ajudando os usuários a encontrar o cão 
             ideal e proprietários confiáveis e honestos.
            </p>
        </div>
      </div>
      <div className="facil">
        <div className="txtfacil">
          <h2>Fácil e prático!</h2>
          <p>Para acessar sua conta, basta utilizar seu e-mail e senha. 
            Caso ainda não tenha uma conta, criar uma é muito simples! 
            Você só precisa fornecer seu nome completo, e-mail e senha. 
            Conta criada e logada? Você já poderá usar todos os
             recursos disponíveis do site.
          </p>
        </div>
        <img src="/facil.jpg" alt="fotofacil" style={{ width: '250px', height: 'auto' }}/>
      </div>
      <div className="vantagens">
        <img src="/vantagens.jpg" alt="fotovantagens" style={{ width: '250px', height: 'auto' }}/>
        <div className="txtvantagens">
          <h2>Quais as vantagens de usar o Conexão Canina?</h2>
          <p>O site proporciona extrema facilidade na busca de cães,
             permitindo que os donos encontrem o par ideal para seu pet.
             Não sendo necessário procurar em outros sites, canis ou cidades.
          </p>
        </div>
      </div>
    </>
    
  )
}

export default trasition(About);