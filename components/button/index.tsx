import * as React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'btn';

export interface TagProps {
  type?: string;
  shape?: string;
  plain?: boolean;
  look?: string;
  size?: 'small' | 'medium' | 'large' | 'superlarge';
  width?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
  onPress?: () => void;
}

const Button = (props: TagProps) => {
  const { type, shape, plain, size, look, width, style, textStyle, children, onPress } = props;

  const btnStyle: any = [
    styles[prefixCls],
    styles[`${prefixCls}-${shape}`],
    styles[`${prefixCls}-${type}`],
    styles[`${prefixCls}-${size}`],
    styles[`${prefixCls}-${plain && 'plain'}`],
    styles[`${prefixCls}-${plain && type === 'primary' && 'plain-primary'}`],
    styles[`${prefixCls}-${look}`],
    width && { width: width },
    style,
  ].filter(i => i);

  const btnTextStyle: any = [
    styles[`${prefixCls}-text`],
    styles[`${prefixCls}-${type}-text`],
    styles[`${prefixCls}-${size}-text`],
    styles[`${prefixCls}-${plain && 'plain'}-text`],
    styles[`${prefixCls}-${plain && type === 'primary' && 'plain-primary'}-text`],
    styles[`${prefixCls}-${look}-text`],
    textStyle,
  ].filter(i => i);

  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Node style={btnTextStyle}>{children}</Node>
    </TouchableOpacity>
  );
};

export default Button;
