import * as React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import styles from './style';

const prefixCls = 'col';

export interface ColProps {
  span?: number;
  offset?: number;
  flex?: string | number;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const Col = (props: ColProps) => {
  const { span, offset = 0, flex, style, children } = props;

  return (
    <View
      style={StyleSheet.flatten([
        styles[prefixCls],
        span && styles[`${prefixCls}-${span}`],
        offset && styles[`${prefixCls}-offset-${offset}`],
        { flex, ...style },
      ])}
    >
      {children}
    </View>
  );
};

export default Col;
