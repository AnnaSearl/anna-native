import React, { useRef, useEffect, useState } from 'react';
import { View, Pressable, TouchableWithoutFeedback, Animated, ViewStyle } from 'react-native';
import Node from '../node';
import Mask from '../mask';
import Icon from '../icon';
import SafeFilling from '../safe-filling';
import styles from './style';

const prefixCls = 'popup';

export interface PopupProps {
  open?: boolean;
  title?: React.ReactNode;
  closeable?: boolean;
  transparent?: boolean;
  position?: string;
  style?: ViewStyle;
  safeArea?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Popup: React.FC<PopupProps> = props => {
  const {
    open = false,
    title,
    closeable,
    position,
    transparent,
    style,
    safeArea,
    children,
    onClose,
  } = props;

  const distance = useRef(new Animated.Value(0)).current;
  const size = useRef(0);

  const [showMask, setShowMask] = useState(false);

  useEffect(() => {
    if (open) {
      setShowMask(true);
      Animated.timing(distance, {
        toValue: -size.current,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {});
    } else {
      Animated.timing(distance, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShowMask(false);
      });
    }
  }, [open]);

  const handleClose = () => {
    onClose?.();
  };

  const handLayout = (e: any) => {
    let isFirst = false;
    if (size.current) {
      isFirst = false;
    } else {
      isFirst = true;
    }
    if (position === 'top' || position === 'bottom') {
      size.current = e.nativeEvent.layout.height;
    }
    if (position === 'left' || position === 'right') {
      size.current = e.nativeEvent.layout.width;
    }
    if (isFirst) {
      Animated.timing(distance, {
        toValue: -size.current,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  let transformStyle = {};
  if (position === 'top') {
    transformStyle = { transform: [{ translateY: distance }] };
  }
  if (position === 'bottom') {
    transformStyle = { transform: [{ translateY: distance }] };
  }
  if (position === 'left') {
    transformStyle = { transform: [{ translateX: distance }] };
  }
  if (position === 'right') {
    transformStyle = { transform: [{ translateX: distance }] };
  }

  return (
    <Mask show={showMask} onPress={handleClose}>
      <View style={styles[prefixCls]}>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles[`${prefixCls}-contaner`],
              styles[`${prefixCls}-contaner-${position}`],
              transparent ? { backgroundColor: 'transparent' } : null,
              style,
              transformStyle,
            ]}
            onLayout={handLayout}
          >
            {title ? <Node style={styles[`${prefixCls}-title`]}>{title}</Node> : null}
            {closeable ? (
              <Pressable style={styles[`${prefixCls}-close`]} onPress={handleClose}>
                <Icon name="close" size={16} color="#999" />
              </Pressable>
            ) : null}
            <Node style={styles[`${prefixCls}-content`]}>{children}</Node>
            {safeArea ? <SafeFilling bottom /> : null}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </Mask>
  );
};

export default Popup;
