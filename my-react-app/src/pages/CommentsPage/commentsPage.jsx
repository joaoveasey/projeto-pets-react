import React from 'react';
import CommentForm from '../../components/Comments/CommentForm';
import CommentList from '../../components/Comments/CommentList';
import styles from './commentsPage.module.css'
import trasition from '../../components/Transition/transition'


function CommentsPage() {
  return (
    <div>
      <h1 className={styles.commentTitle}>O QUE VOCÊ ACHOU DO SITE?</h1>
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default trasition(CommentsPage);
