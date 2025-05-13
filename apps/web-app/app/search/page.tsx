import { Container } from '@ux-apps/ui-container';
import { NovelFilters } from '@ux-apps/ui-novel-filters';
import { NovelSearchResults } from '@ux-apps/ui-novel-search-results';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.page}>
      <Container>
        <NovelFilters />

        <NovelSearchResults />
      </Container>
    </div>
  );
}
