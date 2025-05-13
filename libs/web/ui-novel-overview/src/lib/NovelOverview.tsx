import Link from 'next/link';
import { Title } from 'rebear';
import styles from './NovelOverview.module.scss';

type NovelOverviewProps = {
  id: number;
  name: string;
  thumbnailUrl: string;
  description: string;
};
export function NovelOverview(props: NovelOverviewProps) {
  const { id, name, thumbnailUrl, description } = props;

  return (
    <Link className={styles.novel} href={`/novel/${id}`}>
      <img src={thumbnailUrl} alt={name} />

      <main>
        <Title level={5}>{name}</Title>
        <Title level={6}>Tác giả: Mai Anh Kha</Title>
        <small>{description}</small>
      </main>
    </Link>
  );
}

export default NovelOverview;
