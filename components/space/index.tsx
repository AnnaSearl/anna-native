import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'space';

export interface SpaceProps {
  size?: string | number;
  direction?: string;
  align?: string;
  justify?: string;
  style?: ViewStyle;
  className?: string;
  children?: React.ReactNode;
}

const renderItems = (children: React.ReactNode, size?: string | number, direction?: string) => {
  let itemStyle: any;
  if (typeof size === 'number') {
    itemStyle =
      direction === 'vertical'
        ? {
            marginBottom: size,
          }
        : {
            marginRight: size,
          };
  }
  const items = React.Children.toArray(children).filter(
    child => child !== undefined && child !== null,
  );
  const itemNodes = items.map((child, index) => {
    const childStyle = [
      typeof size === 'string' && size && styles[`${prefixCls}-${direction}-${size}`],
      itemStyle,
      index === items.length - 1 &&
        (direction === 'horizontal' ? { marginRight: 0 } : { marginBottom: 0 }),
    ];
    return (
      <Node key={index} style={childStyle}>
        {child}
      </Node>
    );
  });

  return itemNodes;
};

const Space: React.FC<SpaceProps> = (props: SpaceProps) => {
  const {
    size = 'small',
    direction = 'horizontal',
    align = direction === 'horizontal' ? 'center' : undefined,
    justify,
    style,
    children,
  } = props;

  const wrapperStyle: any = [
    styles[prefixCls],
    styles[`${prefixCls}-align-${align}`],
    { justifyContent: justify },
    style,
  ];

  return <View style={wrapperStyle}>{renderItems(children, size, direction)}</View>;
};

export default Space;
