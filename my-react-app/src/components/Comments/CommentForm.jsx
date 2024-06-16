import React, { useState } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import styles from './CommentForm.module.css'; // Importe os estilos CSS usando CSS Modules

function CommentForm() {
  const [formData, setFormData] = useState({
    name: '',
    comment: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      name: formData.name,
      comment: formData.comment,
      timestamp: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'comments'), newComment);
      setSuccess(true);
      setError('');
      setFormData({
        name: '',
        comment: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setError('Erro ao enviar o comentário. Por favor, tente novamente.');
    }
  };

  return (
    <div className={styles['form-container']}>
      <h2>Deixe seu Comentário</h2>
      <form onSubmit={handleSubmit} className={styles['comment-form']}>
        <div className={styles['form-row']}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['form-row']}>
          <label htmlFor="comment">Comentário:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles['button-container']}>
          <button type="submit" className={styles['submit-button']}>Enviar</button>
        </div>
      </form>
      {success && <p className={styles['success-message']}>Comentário enviado com sucesso!</p>}
      {error && <p className={styles['error-message']}>{error}</p>}
    </div>
  );
}

export default CommentForm;
