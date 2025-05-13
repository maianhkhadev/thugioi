import { Reader } from '@ux-apps/ui-reader';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.page}>
      <Reader id={1} title={'title'} content={'content'} />
    </div>
  );
}
