'use client';
import { Title } from 'rebear';
import { useHotNovels } from '@ux-apps/data-access-novels';
import { NovelOverview } from '@ux-apps/ui-novel-overview';
import styles from './HotNovels.module.scss';

export function HotNovels() {
  const { data: novels } = useHotNovels();

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title level={3}>Truyện Hot</Title>
      </header>

      <main className={styles.main}>
        {novels.map((novel) => (
          <NovelOverview key={novel.id} {...novel} />
        ))}
      </main>
    </section>
  );
}

export default HotNovels;
