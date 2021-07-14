import * as React from 'react';
import { Pressable, ViewStyle, TextStyle } from 'react-native';
import Node from '../node';
import { withTheme } from '../theme';
import { createStylesWithTheme } from './style';

const prefixCls = 'tag';

export interface TagProps {
  look?: 'primary' | 'blue' | 'green' | 'yellow' | 'red' | 'dark' | 'gray';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  plain?: boolean;
  color?: string;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[] | TextStyle | TextStyle[];
  theme: AnnaNative.Theme;
  onPress?: (e: any) => void;
}

const Tag: React.FC<TagProps> & {
  CheckableTag?: (p: any) => React.ReactElement | null;
} = props => {
  const { theme, size, look, plain, color, disabled, style, children, onPress } = props;

  const styles = createStylesWithTheme(theme);

  const tagStyle: any = [
    styles[prefixCls],
    plain ? styles[`${prefixCls}-plain`] : null,
    styles[`${prefixCls}-${size}`],
    styles[`${prefixCls}-${look}`],
    color ? { color, borderColor: color } : null,
    style,
    disabled ? styles[`${prefixCls}-disabled`] : null, // disabled 要放在 style 之后，否则不会覆盖掉 CheckableTag 的样式
  ];

  const handlePress = (e: any) => {
    if (disabled) {
      return;
    }
    onPress?.(e);
  };

  return (
    <Pressable onPress={handlePress}>
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
  const { theme, checked, style, children, onChange } = props;

  const styles = createStylesWithTheme(theme);

  const handlePress = () => {
    onChange?.(!checked);
  };

  return (
    <Tag
      {...props}
      style={[
        styles[`${prefixCls}-checkable-default`],
        checked ? { ...styles[`${prefixCls}-checkable-checked`] } : null,
        style,
      ]}
      onPress={handlePress}
    >
      {children}
    </Tag>
  );
};

const TagWithTheme = withTheme(Tag);

TagWithTheme.CheckableTag = withTheme(CheckableTag);

export default TagWithTheme;
