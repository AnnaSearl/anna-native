import * as React from 'react';
import { View, Pressable, ViewStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'card';

export interface CardProps {
  title?: React.ReactNode;
  titleSize?: 'small' | 'medium' | 'large';
  description?: React.ReactNode;
  extra?: React.ReactNode;
  foot?: React.ReactNode;
  cover?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  shadow?: boolean;
  style?: ViewStyle;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onPress?: (e: any) => void;
}

const Card = (props: CardProps) => {
  const { title, titleSize, description, extra, style, contentStyle, children, onPress } = props;

  const renderHead = () => {
    return title || description || extra ? (
      <View style={[styles[`${prefixCls}-head`]]}>
        <View>
          {title ? (
            <Node
              style={[
                styles[`${prefixCls}-title`],
                { fontSize: titleSize === 'small' ? 13 : null },
              ]}
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
        <View style={styles[`${prefixCls}-extra`]}>
          <Node>{extra}</Node>
        </View>
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
