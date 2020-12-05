import * as React from 'react';
import Node from '../node';
import styles from './style';

const prefixCls = 'tag';

export interface TagProps {
  look?: string;
  size?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tag = (props: TagProps) => {
  const { size, look, style, children } = props;

  const tagStyle: any = [
    styles[prefixCls],
    styles[`${prefixCls}-${size}`],
    styles[`${prefixCls}-${look}`],
    style,
  ];

  return <Node style={tagStyle}>{children}</Node>;
};

export default Tag;
