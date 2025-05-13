import { Container } from '@ux-apps/ui-container';
import { WritterDetails } from '@ux-apps/ui-writter-details';
import { WritterNovels } from '@ux-apps/ui-writter-novels';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.page}>
      <Container>
        <WritterDetails />

        <WritterNovels />
      </Container>
    </div>
  );
}
