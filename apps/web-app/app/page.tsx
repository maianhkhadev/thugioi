import { Container } from '@ux-apps/ui-container';
import { NewChapters } from '@ux-apps/ui-new-chapters';
import { HotNovels } from '@ux-apps/ui-hot-novels';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.page}>
      <Container>
        <img className={styles.banner} src="https://placehold.co/800x200" alt="" />

        <NewChapters />

        <HotNovels />
      </Container>
    </div>
  );
}
