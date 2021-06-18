import * as React from 'react';
import styles from './index.module.scss';

export interface GridItemProps {
  name?: string;
  children?: any;
}

const GridItem = (props: GridItemProps) => {
  const { name, children } = props;
  return (
    <div className={styles.gridItem}>
      {children}
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default GridItem;
