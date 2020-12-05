import * as React from 'react';
import { Text, ViewStyle, TextStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'form-value';

export interface FormValueProps {
  placeholder?: string;
  textAlign?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
  style?: ViewStyle | TextStyle;
  placeholderStyle?: TextStyle;
}

const FormValue: React.FC<FormValueProps> = props => {
  const { placeholder, textAlign = 'left', style, placeholderStyle, children } = props;
  return children || children === 0 ? (
    <Node style={[styles[prefixCls], style, { textAlign }]}>{children}</Node>
  ) : (
    <Text style={[styles[`${prefixCls}-placeholder`], placeholderStyle, { textAlign }]}>
      {placeholder}
    </Text>
  );
};

export default FormValue;
