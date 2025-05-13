import { ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
};

export function Container(props: ContainerProps) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}

export default Container;
