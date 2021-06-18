import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'text-item';

export interface TextItemProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  labelStyle?: ViewStyle | TextStyle;
  descriptionStyle?: ViewStyle | TextStyle;
  valueStyle?: ViewStyle | TextStyle;
  children?: React.ReactNode;
  noMarginBottom?: boolean;
  valueAlign?: string;
  vertical?: boolean;
}

const TextItem = (props: TextItemProps) => {
  const {
    label,
    description,
    descriptionStyle,
    labelStyle,
    valueStyle,
    noMarginBottom,
    valueAlign,
    vertical,
    children,
  } = props;

  const valueNodeStyle = [
    styles[`${prefixCls}-value`],
    styles[`${prefixCls}-value-${valueAlign}`],
    valueStyle,
  ];

  if (vertical) {
    return (
      <View style={[styles[prefixCls], noMarginBottom && { marginBottom: 0 }]}>
        <Node
          style={[styles[`${prefixCls}-label`], styles[`${prefixCls}-vertical-label`], labelStyle]}
        >
          {label}
        </Node>
        <Node style={valueNodeStyle}>{children || children === 0 ? children : '-'}</Node>
      </View>
    );
  }

  return (
    <View
      style={[
        styles[prefixCls],
        styles[`${prefixCls}-horizontal`],
        noMarginBottom && { marginBottom: 0 },
      ]}
    >
      <View style={styles[`${prefixCls}-left`]}>
        <Node style={[styles[`${prefixCls}-label`], labelStyle]}>{label}</Node>
        <Node style={[styles[`${prefixCls}-description`], descriptionStyle]}>{description}</Node>
      </View>
      <Node style={valueNodeStyle}>{children || children === 0 ? children : '-'}</Node>
    </View>
  );
};

export default TextItem;
