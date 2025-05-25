import Link from 'next/link';
import { Title, Paragraph } from 'rebear';
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

      <main className={styles.main}>
        <Title level={5}>{name}</Title>

        <Paragraph>
          <strong>Tác giả:</strong> Dedart
        </Paragraph>

        <Paragraph size="sm">{description}</Paragraph>
      </main>
    </Link>
  );
}

export default NovelOverview;
