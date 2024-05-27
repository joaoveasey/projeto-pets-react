import './About.Module.css'

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
          <p>Nosso site de acasalamento de cachorros oferecerá aos donos dos cães uma 
            plataforma objetiva e segura para encontrar parceiros adequados para seu pet,
             com base em critérios de raça, idade, temperamento e histórico de saúde.</p>
        </div>
      </div>
      <div className="facil">
        <div className="txtfacil">
          <h2>Fácil e prático!</h2>
          <p>Basta fazer o login e já poder procurar por um parceiro de seu interesse!</p>
        </div>
        <img src="/facil.jpg" alt="fotofacil" style={{ width: '250px', height: 'auto' }}/>
      </div>
      <div className="vantagens">
        <img src="/vantagens.jpg" alt="fotovantagens" style={{ width: '250px', height: 'auto' }}/>
        <div className="txtvantagens">
          <h2>Quais as vantagens de usar o Conexão Canina?</h2>
          <p>Uma das principais vantagens é a garantia de que os filhotes gerados tenham boa saúde e temperamento.
             Além da nossa exigência de um check-up realizado por um veterinário 
             que ajudará a identificar problemas de saúde.</p>
        </div>
      </div>
    </>
    
  )
}

export default About