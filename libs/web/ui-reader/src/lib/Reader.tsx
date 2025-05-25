'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Container } from '@ux-apps/ui-container';
import { Controls } from './Controls';
import { NovelViewer } from './NovelViewer';
import styles from './Reader.module.scss';

type ReaderProps = {
  id: number;
  title: string;
  content: string;
};

export const Reader = (props: ReaderProps) => {
  const { id, title, content } = props;
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container>
      <section className={styles.section}>
        <Controls />

        <NovelViewer title={title} content={content} fontSize={fontSize} />
      </section>
    </Container>
  );
};

export default Reader;
