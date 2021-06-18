import * as React from 'react';
import styles from './index.module.scss';

export interface GridProps {
  children?: any;
}

const Grid = (props: GridProps) => {
  const { children } = props;
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
