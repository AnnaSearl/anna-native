import * as React from 'react';
import { View, Pressable, ViewStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'card';

export interface CardProps {
  title?: React.ReactNode;
  titleNumberOfLines?: number;
  titleSize?: 'small' | 'medium' | 'large';
  headerBorder?: boolean;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onPress?: (e: any) => void;
}

const Card = (props: CardProps) => {
  const {
    title,
    titleNumberOfLines,
    titleSize,
    headerBorder,
    description,
    extra,
    style,
    contentStyle,
    children,
    onPress,
  } = props;

  const renderHead = () => {
    return title || description || extra ? (
      <View style={[styles[`${prefixCls}-header`], headerBorder ? { paddingBottom: 10 } : null]}>
        {headerBorder ? <View style={styles[`${prefixCls}-header-border`]} /> : null}
        <View style={[styles[`${prefixCls}-header-left`]]}>
          {title ? (
            <Node
              style={[
                styles[`${prefixCls}-title`],
                titleSize === 'small' ? styles[`${prefixCls}-title-${titleSize}`] : null,
              ]}
              numberOfLines={titleNumberOfLines}
            >
              {title}
            </Node>
          ) : null}
          {description ? (
            <View style={styles[`${prefixCls}-description`]}>
              <Node>{description}</Node>
            </View>
          ) : null}
        </View>
        <Node style={styles[`${prefixCls}-extra`]}>{extra}</Node>
      </View>
    ) : null;
  };

  return (
    <Pressable style={[styles[prefixCls], style]} onPress={onPress}>
      {renderHead()}
      <View style={[styles[`${prefixCls}-content`], contentStyle]}>
        <Node>{children}</Node>
      </View>
    </Pressable>
  );
};

export default Card;
