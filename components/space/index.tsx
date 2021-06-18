import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'space';

type SizeType = string | number;
export interface SpaceProps {
  size?: SizeType | SizeType[];
  direction?: string;
  align?: string;
  justify?: string;
  wrap?: boolean;
  style?: ViewStyle;
  className?: string;
  children?: React.ReactNode;
}

const renderItems = (
  children: React.ReactNode,
  size?: SizeType | SizeType[],
  direction?: string,
) => {
  let itemStyle: any;
  if (Array.isArray(size)) {
    if (typeof size[0] === 'number' && typeof size[1] === 'number') {
      if (direction === 'vertical') {
        itemStyle = { marginBottom: size[0] };
      } else {
        itemStyle = { marginRight: size[0], marginBottom: size[1] };
      }
    }
  } else {
    if (typeof size === 'string' && size) {
      itemStyle = styles[`${prefixCls}-${direction}-${size}`];
    }
    if (typeof size === 'number') {
      if (direction === 'vertical') {
        itemStyle = { marginBottom: size };
      } else {
        itemStyle = { marginRight: size };
      }
    }
  }
  const items = React.Children.toArray(children).filter(
    child => child !== undefined && child !== null,
  );
  const itemNodes = items.map((child, index) => {
    const childStyle = [
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
    wrap,
    style,
    children,
  } = props;

  const wrapperStyle: any = [
    styles[prefixCls],
    styles[`${prefixCls}-align-${align}`],
    { justifyContent: justify },
    direction === 'horizontal' && wrap ? { flexWrap: 'wrap' } : null,
    style,
  ];

  return <View style={wrapperStyle}>{renderItems(children, size, direction)}</View>;
};

export default Space;
