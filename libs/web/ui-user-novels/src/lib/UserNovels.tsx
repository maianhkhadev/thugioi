'use client';
import React from 'react';
import { Title } from 'rebear';
import { useHotNovels } from '@ux-apps/data-access-novels';
import { NovelOverview } from '@ux-apps/ui-novel-overview';
import styles from './UserNovels.module.scss';

export function UserNovels() {
  const { data: novels } = useHotNovels();

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title level={3}>Truyện bạn theo dõi</Title>
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

export default UserNovels;
