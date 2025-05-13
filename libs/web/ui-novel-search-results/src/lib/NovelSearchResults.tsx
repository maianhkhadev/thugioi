'use client';
import React from 'react';
import { Title } from 'rebear';
import { useHotNovels } from '@ux-apps/data-access-novels';
import { NovelOverview } from '@ux-apps/ui-novel-overview';
import styles from './NovelSearchResults.module.scss';

export function NovelSearchResults() {
  const { data: novels } = useHotNovels();

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title level={3}>Kết quả tìm kiếm</Title>
      </header>

      <main className={styles.main}>
        {novels.length === 0 && <div>Không có kết quả tìm kiếm</div>}

        {novels.map((novel) => (
          <NovelOverview key={novel.id} {...novel} />
        ))}
      </main>
    </section>
  );
}

export default NovelSearchResults;
