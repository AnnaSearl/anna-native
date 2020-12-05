import * as React from 'react';
import { Pressable, ViewStyle, TextStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'tag';

export interface TagProps {
  look?: string;
  size?: 'small' | 'medium' | 'large';
  plain?: boolean;
  color?: string;
  style?: ViewStyle | ViewStyle[] | TextStyle | TextStyle[];
  children?: React.ReactNode;
  onPress: (e: any) => void;
}

const Tag: React.FC<TagProps> & {
  CheckableTag?: (p: any) => React.ReactElement | null;
} = props => {
  const { size, look, plain, color, style, children, onPress } = props;

  const tagStyle: any = [
    styles[prefixCls],
    plain ? styles[`${prefixCls}-plain`] : null,
    styles[`${prefixCls}-${size}`],
    styles[`${prefixCls}-${look}`],
    color ? { color, borderColor: color } : null,
    style,
  ];

  return (
    <Pressable onPress={onPress}>
      <Node style={tagStyle}>{children}</Node>
    </Pressable>
  );
};

export interface CheckableTagProps extends TagProps {
  checked?: boolean;
  style?: ViewStyle;
  onChange?: (checked: boolean) => void;
}

const CheckableTag: React.FC<CheckableTagProps> = props => {
  const { checked, style, children, onChange } = props;

  const handlePress = () => {
    onChange?.(!checked);
  };

  return (
    <Tag
      {...props}
      style={[
        styles[`${prefixCls}-checkable-default`],
        checked ? styles[`${prefixCls}-checkable-secondary`] : null,
        style,
      ]}
      onPress={handlePress}
    >
      {children}
    </Tag>
  );
};

Tag.CheckableTag = CheckableTag;

export default Tag;
