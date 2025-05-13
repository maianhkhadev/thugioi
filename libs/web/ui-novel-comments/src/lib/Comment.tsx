import React from 'react';
import styles from './Comment.module.scss';

type CommentProps = {
  user: string;
  content: string;
};

export const Comment = (props: CommentProps) => {
  const { user, content } = props;

  return (
    <li className={styles.commentItem}>
      <div className={styles.username}>{user}</div>
      <div className={styles.content}>{content}</div>
    </li>
  );
};

export default Comment;
