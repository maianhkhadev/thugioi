'use client';
import React from 'react';
import { Title } from 'rebear';
import { Chapter } from './Chapter';
import styles from './NovelChapters.module.scss';

const chapters = [
  { id: 1, title: 'Chương 1: Trở về quá khứ (1)' },
  { id: 2, title: 'Chương 2: Trở về quá khứ (2)' },
  { id: 3, title: 'Chương 3: Trở về quá khứ (3)' },
  { id: 4, title: 'Chương 4: Slime hoàng kim (1)' },
  { id: 5, title: 'Chương 5: Slime hoàng kim (2)' },
  { id: 6, title: 'Chương 6: Slime hoàng kim (3)' },
];

export const NovelChapters = () => {
  return (
    <section className={styles.chapterList}>
      <Title className={styles.title} level={3}>
        Danh Sách Chương
      </Title>
      <ul>
        {chapters.map((chapter) => (
          <Chapter key={chapter.id} {...chapter} />
        ))}
      </ul>
    </section>
  );
};

export default NovelChapters;
