import Link from 'next/link';
import { useParams } from 'next/navigation'
import { ButtonIcon } from 'rebear';
import { IconMenu01, IconChevronLeft, IconChevronRight, IconSettings01, IconBookOpen01 } from 'rebear-icons';
import styles from './Controls.module.scss';

export const Controls = () => {
  const { id } = useParams()

  return (
    <div className={styles.controls}>
      <ButtonIcon variant="secondary" size="md" icon={<IconChevronLeft />} />

      <ButtonIcon variant="secondary" size="md" icon={<IconMenu01 />} />

      <ButtonIcon variant="secondary" size="md" icon={<IconSettings01 />} />

      <Link href={`/novel/${id}`}>
        <ButtonIcon variant="secondary" size="md" icon={<IconBookOpen01 />} />
      </Link>

      <ButtonIcon variant="secondary" size="md" icon={<IconChevronRight />} />
    </div>
  );
};

export default Controls;
