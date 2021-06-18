import * as React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface BlockProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  noTitlePadding?: boolean;
  contentStyle?: React.CSSProperties;
  className?: string;
}

const Block = (props: BlockProps) => {
  const { title, children, noTitlePadding, contentStyle, className } = props;

  return (
    <div className={classNames(styles.block, className)}>
      <div className={styles.title} style={{ paddingLeft: noTitlePadding ? '0' : '24px' }}>
        {title}
      </div>
      <div className={styles.content} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Block;
