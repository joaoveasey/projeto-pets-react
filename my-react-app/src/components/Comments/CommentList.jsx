import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

import styles from './CommentList.module.css'; // Importe os estilos CSS usando CSS Modules

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedComments = [];
        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });
        setComments(fetchedComments);
      });
      return () => unsubscribe();
    };

    fetchComments();
  }, []);

  return (
    <div className={styles['comment-list']}>
      <h2>Lista de Comentários</h2>
      <ul className={styles['comments']}>
        {comments.map((comment) => (
          <li key={comment.id} className={styles['comment']}>
            <p className={styles['comment-author']}>{comment.name}</p>
            <p className={styles['comment-text']}>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
