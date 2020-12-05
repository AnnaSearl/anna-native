import React, { useRef, useEffect, useState } from 'react';
import { View, Pressable, Animated, ViewStyle } from 'react-native';
import Node from '../node';
import SafeFilling from '../safe-filling';
import styles from './style';

const prefixCls = 'dropdown';

export interface DropdownProps {
  open?: boolean;
  position?: string;
  zIndex?: number;
  style?: ViewStyle;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Dropdown: React.FC<DropdownProps> = props => {
  const { open = false, zIndex, style, children, onClose } = props;

  const y = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const height = useRef(0);

  const [showMask, setShowMask] = useState(false);

  useEffect(() => {
    if (open) {
      setShowMask(true);
      Animated.timing(y, {
        toValue: height.current,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {});
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(y, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShowMask(false);
      });
    }
  }, [open]);

  const handLayout = (e: any) => {
    // 当对父元素设置 display: 'none' 时 获取到的 height 为 0， 所有加上非0判断
    if (e.nativeEvent.layout.height) {
      height.current = e.nativeEvent.layout.height;
    }
  };

  const handlePressMask = (e: any) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <View
      style={[
        styles[prefixCls],
        { zIndex },
        // 使用 display: 'none' 会导致 第一次获取 contaner 的 height 为 0
        // showMask ? { display: 'flex' } : { display: 'none', position: 'relative' },
        showMask ? { height: 1000 } : { height: 0 },
      ]}
    >
      <Animated.View style={[styles[`${prefixCls}-mask`], { opacity: fadeAnim }]}>
        <Pressable style={styles[`${prefixCls}-mask-pressable`]} onPress={handlePressMask} />
      </Animated.View>

      {/* 内容区域是相对于视窗的 */}
      <Animated.View
        style={[styles[`${prefixCls}-contaner`], style, { transform: [{ translateY: y }] }]}
        onLayout={handLayout}
      >
        <SafeFilling />
        <Node>{children}</Node>
      </Animated.View>
    </View>
  );
};

export default Dropdown;
