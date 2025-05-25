import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export function Container(props: ContainerProps) {
  const { children, className } = props;

  const classes = clsx([styles.container, className]);

  return <div className={classes}>{children}</div>;
}

export default Container;
