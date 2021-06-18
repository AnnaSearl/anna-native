import * as React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'btn';

export interface ButtonProps {
  type?: 'primary';
  shape?: 'square' | 'circle';
  plain?: boolean;
  disabled?: boolean;
  look?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  width?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    type,
    shape,
    plain,
    size,
    disabled,
    look,
    width,
    style,
    textStyle,
    children,
    onPress,
  } = props;

  const btnStyle: any = [
    styles[prefixCls],
    styles[`${prefixCls}-${shape}`],
    styles[`${prefixCls}-${type}`],
    styles[`${prefixCls}-${size}`],
    styles[`${prefixCls}-${plain && 'plain'}`],
    styles[`${prefixCls}-${plain && type === 'primary' && 'plain-primary'}`],
    styles[`${prefixCls}-${look}`],
    styles[`${prefixCls}-${disabled && 'disabled'}`],
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
    styles[`${prefixCls}-${disabled && 'disabled'}-text`],
    textStyle,
  ].filter(i => i);

  const handlePress = () => {
    if (disabled) {
      return;
    }
    onPress?.();
  };

  return (
    <TouchableOpacity style={btnStyle} onPress={handlePress}>
      <Node style={btnTextStyle}>{children}</Node>
      {size === 'xxlarge' && type === 'primary' && !disabled ? (
        <View style={styles[`${prefixCls}-top-border-patch`]} />
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;
