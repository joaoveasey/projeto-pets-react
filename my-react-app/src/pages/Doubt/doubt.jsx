import './Doubt.Module.css'
import React, { useState } from 'react';

const DoubtsButton = ({ doubtsButtonText, image, activeText }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='doubtsButton'>
      <button onClick={toggleActive} className={isActive ? 'active' : 'inactive'}>
        <span className="doubtsButtonText">{doubtsButtonText}</span>
        <img src={isActive ? image.active : image.inactive} alt="Button Image" />
      </button>
      {isActive && <p id='pcomofunciona'>{activeText}</p>}
    </div>
  );
};

function Doubts() {

  const buttonImage = {
    active: "/PolygonOpened.png",
    inactive: "/PolygonClosed.png",
  };

  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
  };

  return (
    <>
      <div className='titulo'>
        <h1>DÚVIDAS FREQUENTES</h1>
      </div>
      <div>
        <DoubtsButton doubtsButtonText="1. Como funciona o site?"
         activeText={"Os usuários podem se cadastrar no seu site fornecendo informações sobre seus cães, incluindo raça, idade, gênero, temperamento, histórico de saúde e qualquer outra informação relevante. Após o cadastro, podem navegar pelos perfis de outros cães cadastrados no site. Eles podem filtrar a busca com base em diferentes critérios, como raça, idade, localização geográfica, entre outros."} 
         image={buttonImage} />
        <DoubtsButton doubtsButtonText="2. Tem algum custo?"
         activeText={"Não. A priori o Conexão Canina não apresenta nenhum custo para usuário," + 
         " todo o dinheiro arrecado do site é por meio de anúncios, não existe nenhum preço" 
         + " imposto a quem utiliza o site, nenhum e-mail, mensagem enviada requirindo" +
         " dinheiro é de forma oficial, não responda ou envie nenhum tipo de dado pessoal." +
         " O Conexão Canina é um site totalmente grátis e não concorda nem incentiva" +
         " venda de cães, nem compra ou venda de cruzamento, o objetivo é apenas a" +
         " comunicação entre donos."} 
         image={buttonImage} />
        <DoubtsButton doubtsButtonText="3. Como faço para cadastrar meu cão?"
         activeText={"O cadastro de cão é muito simples e será feito juntamente com o do proprietário, serão requisitados os seguintes itens; nome, e-mail, numero de telefone, cidade, estado, entre outros."}
         image={buttonImage} />
         <hr className='divider' />
      </div>
      <div className='titulocontato'>
        <img src="/Contato.png" alt="Contato Image" style={{ width: '40px', height: 'auto' }}/>
        <h2>CONTATO</h2>
      </div>
      <div className='entrecontato'>
        <h3>Ainda possui alguma dúvida? Entre em contato conosco por e-mail.</h3>
      </div>
      <div className="formContact">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              id="nomeCompleto"
              name="nomeCompleto"
              placeholder="Nome Completo"
              value={formData.nomeCompleto}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder="Assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
      </div>
    </>    
  )
}

export default Doubts