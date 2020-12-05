import * as React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ViewStyle, Pressable } from 'react-native';
import Node from '../node';
import Icon from '../icon';
import styles from './style';

const prefixCls = 'navigation-bar';

export interface LeftButtonProps {
  color?: string;
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

const LeftButton: React.FC<LeftButtonProps> = props => {
  const { color, children, onPress } = props;

  return (
    <TouchableOpacity style={leftStyle} onPress={onPress}>
      <Icon name="line-return-48" size={24} color={color || '#000'} />
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
  children?: React.ReactNode;
  previous?: any;
  navigation?: any;
  look: 'light' | 'dark';
  showBackButton?: boolean;
  onLeftPress?: (e?: any) => void;
  onRightPress?: (e?: any) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = props => {
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
    look,
    showBackButton,
    children,
  } = props;

  let curBackgroundColor = backgroundColor;
  let curTitleColor = titleColor;
  let curLeftColor = leftColor;
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

  return (
    <View style={[styles[prefixCls], { backgroundColor: curBackgroundColor }]}>
      {!statusBar.hidden ? (
        <View style={styles[`${prefixCls}-status`]}>
          <StatusBar {...statusBar} />
        </View>
      ) : null}
      <View style={styles[`${prefixCls}-content`]}>
        <Node style={styles[`${prefixCls}-left`]}>{leftNode}</Node>
        <Node style={[styles[`${prefixCls}-center`], { color: curTitleColor }]}>{children}</Node>
        <Pressable onPress={onRightPress}>
          <Node style={styles[`${prefixCls}-right`]}>{right}</Node>
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationBar;
