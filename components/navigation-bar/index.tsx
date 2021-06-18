import * as React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ViewStyle, Pressable } from 'react-native';
import Node from '../node';
import Icon from '../icon';
import { isIPhoneX } from '../_util';
import { STATUS_BAR_HEIGHT, TOP_SAFE_HEIGHT } from '../_constants';
import styles from './style';

const prefixCls = 'navigation-bar';

export interface LeftButtonProps {
  color?: string;
  style?: ViewStyle;
  children?: string | number;
  onPress?: (e?: any) => void;
}

const leftStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 15,
  minWidth: 40,
} as ViewStyle;

const leftTextStyle = {
  fontSize: 16,
  marginLeft: -4,
};

export const LeftButton: React.FC<LeftButtonProps> = props => {
  const { color, style, children, onPress } = props;

  return (
    <TouchableOpacity style={[leftStyle, style]} onPress={onPress}>
      <Icon name="back" size={24} color={color || '#000'} />
      <Text style={[leftTextStyle, { color }]}>{children}</Text>
    </TouchableOpacity>
  );
};

export interface NavigationBarProps {
  left?: React.ReactNode;
  leftText?: string | number;
  right?: React.ReactNode;
  fill?: boolean;
  statusBar?: any;
  leftColor?: string;
  titleColor?: string;
  backgroundColor?: string;
  opacity?: number;
  children?: React.ReactNode;
  previous?: any;
  navigation?: any;
  look?: 'light' | 'dark';
  showBackButton?: boolean;
  absolute?: boolean;
  numberOfLines?: number;
  onLeftPress?: (e?: any) => void;
  onRightPress?: (e?: any) => void;
}

const NavigationBar: React.FC<NavigationBarProps> & {
  config: NavigationBarConfigProps;
  setDefaultConfig: (config: any) => void;
} = props => {
  const {
    leftText,
    leftColor,
    left,
    right,
    onLeftPress,
    onRightPress,
    statusBar = {
      barStyle: 'light-content',
      hidden: false,
    },
    titleColor,
    backgroundColor,
    opacity,
    look,
    showBackButton,
    absolute,
    numberOfLines,
    children,
  } = props;

  let curBackgroundColor = backgroundColor;
  let curTitleColor = titleColor;
  let curLeftColor = leftColor;
  let curOpacity = opacity;
  if (look === 'light') {
    curBackgroundColor = '#FFFFFF';
    curTitleColor = '#000';
    curLeftColor = '#000';
  }

  let leftNode = left;
  if (!left && showBackButton) {
    leftNode = (
      <LeftButton color={curLeftColor} onPress={onLeftPress}>
        {leftText}
      </LeftButton>
    );
  }

  const absoluteTop = isIPhoneX() ? TOP_SAFE_HEIGHT : STATUS_BAR_HEIGHT;

  const absoluteStyle = absolute
    ? {
        position: 'absolute',
        top: absoluteTop,
        left: 0,
        right: 0,
        zIndex: 1,
      }
    : null;

  const navStyle = {
    backgroundColor: curBackgroundColor,
    opacity: curOpacity,
    ...absoluteStyle,
  };

  return (
    <View style={[styles[prefixCls], navStyle]}>
      {!statusBar.hidden ? (
        <View style={styles[`${prefixCls}-status`]}>
          <StatusBar {...statusBar} />
        </View>
      ) : null}
      <View style={styles[`${prefixCls}-content`]}>
        <Node style={styles[`${prefixCls}-left`]}>{leftNode}</Node>
        <Node
          style={[styles[`${prefixCls}-center`], { color: curTitleColor }]}
          numberOfLines={numberOfLines}
        >
          {children}
        </Node>
        <Pressable onPress={onRightPress}>
          <Node style={styles[`${prefixCls}-right`]}>{right}</Node>
        </Pressable>
      </View>
    </View>
  );
};

export interface NavigationBarConfigProps {
  onLeftPress?: (e?: any) => void;
}

NavigationBar.config = {};

NavigationBar.setDefaultConfig = ({ onLeftPress }) => {
  if (onLeftPress) {
    NavigationBar.config.onLeftPress = onLeftPress;
  }
};

export default NavigationBar;
