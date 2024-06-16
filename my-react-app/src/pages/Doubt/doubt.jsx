
import './Doubt.Module.css'
import React, { useState } from 'react';
import trasition from '../../components/Transition/transition'
import { db } from '../../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Doubts() {

  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      nomeCompleto: formData.nomeCompleto,
      email: formData.email,
      assunto: formData.assunto,
      mensagem: formData.mensagem,
      timestamp: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'contacts'), newMessage);
      setSuccess(true);
      setError('');
      setFormData({
        nomeCompleto: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setError('Erro ao enviar a mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <div className='titulo'>
        <h1>Entre em Contato Conosco</h1>
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
          <div className='form-row'>
            <textarea 
              id='mensagem'
              name='mensagem'
              placeholder='Mensagem'
              value={formData.mensagem}
              onChange={handleChange}
              maxLength={200}
              required
            ></textarea>
            <p>{formData.mensagem.length}/200</p>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
        {success && <p>Mensagem enviada com sucesso!</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default trasition(Doubts);

