'use client';
import React from 'react';
import Link from 'next/link';
import { Paragraph } from 'rebear';
import styles from './Comment.module.scss';

type CommentProps = {
  user: string;
  content: string;
};

export const Comment = (props: CommentProps) => {
  const { user, content } = props;

  return (
    <div className={styles.commentItem}>
      <div className={styles.header}>
        <span className={styles.username}>{user}</span>
        <Link className={styles.chapter} href={`/chapter/1`}>
          {' '}
          - Chương 1
        </Link>
        <small className={styles.date}> - 10 hours ago</small>
      </div>
      <Paragraph className={styles.content}>{content}</Paragraph>
    </div>
  );
};

export default Comment;
