'use client';
import { Title } from 'rebear';
import { useNewChapters } from '@ux-apps/data-access-chapters';
import { Chapter } from './Chapter';
import styles from './NewChapters.module.scss';

export function NewChapters() {
  const { data: chapters } = useNewChapters();

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title level={3}>Mới cập nhật</Title>
      </header>

      <main className={styles.main}>
        {chapters.map((chapter) => {
          return <Chapter key={chapter.id} {...chapter} />;
        })}
      </main>
    </section>
  );
}

export default NewChapters;
