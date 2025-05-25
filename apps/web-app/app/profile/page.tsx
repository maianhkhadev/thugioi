import { Container } from '@ux-apps/ui-container';
import { UserDetails } from '@ux-apps/ui-user-details';
import { UserNovels } from '@ux-apps/ui-user-novels';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.page}>
      <Container>
        <UserDetails />

        <UserNovels />
      </Container>
    </div>
  );
}
