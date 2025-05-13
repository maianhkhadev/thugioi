'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Container } from '@ux-apps/ui-container';
import { Controls } from './Controls';
import { Settings } from './Settings';
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

  const classNames = clsx([darkMode ? styles.darkMode : styles.lightMode]);

  return (
    <div className={classNames}>
      <Container>
        {/* <Settings
        fontSize={fontSize}
        setFontSize={setFontSize}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Controls /> */}

        <NovelViewer title={title} content={content} fontSize={fontSize} />
      </Container>
    </div>
  );
};

export default Reader;
