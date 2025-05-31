'use client'
import React from 'react';
import Link from 'next/link';
import { Title } from 'rebear'
import styles from './Chapter.module.scss';

type ChapterProps = {
  id: number;
  title: string;
};

export const Chapter = (props: ChapterProps) => {
  const { id, title } = props;

  return (
    <Link className={styles.chapter} href={`/chapter/${id}`}>
      <Title className={styles.title} level={6}>{title}</Title>
      <div className={styles.date}>9 hours ago</div>
    </Link>
  );
};

export default Chapter;
