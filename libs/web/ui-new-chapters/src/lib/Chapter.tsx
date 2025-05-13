import { useMemo } from 'react';
import Link from 'next/link';
import { Title } from 'rebear';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useNovel } from '@ux-apps/data-access-novels';
import styles from './Chapter.module.scss';

type ChapterProps = {
  id: number;
  chap: number;
  createdAt: string;
  novelId: number;
};
export function Chapter(props: ChapterProps) {
  const { id, chap, createdAt, novelId } = props;
  const { data: novel } = useNovel(novelId);

  const dateDistance = useMemo(() => {
    const date = new Date('2025-04-12T10:00:00Z');
    return formatDistanceToNow(date, { addSuffix: true, locale: vi });
  }, [createdAt]);

  return (
    <Link className={styles.chapter} href={`/chapter/${id}`}>
      {novel.thumbnailUrl && <img src={novel.thumbnailUrl} alt={novel.name} />}

      <Title level={5}>{novel?.name}</Title>

      <Title level={6}>Chap: {chap}</Title>
      <small>{dateDistance}</small>
    </Link>
  );
}

export default Chapter;
