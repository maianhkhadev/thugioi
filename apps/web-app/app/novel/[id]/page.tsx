import { Container } from '@ux-apps/ui-container';
import { NovelDetails } from '@ux-apps/ui-novel-details';
import { NovelChapters } from '@ux-apps/ui-novel-chapters';
import { NovelComments } from '@ux-apps/ui-novel-comments';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.page}>
      <Container>
        <NovelDetails />

        <NovelChapters />

        <NovelComments />
      </Container>
    </div>
  );
}
