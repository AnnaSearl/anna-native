import React, { useRef, useEffect, useState } from 'react';
import { View, Pressable, TouchableWithoutFeedback, Animated, ViewStyle } from 'react-native';
import Node from '../node';
import Mask from '../mask';
import Icon from '../icon';
import styles from './style';

const prefixCls = 'popup';

export interface PopupProps {
  open?: boolean;
  title?: React.ReactNode;
  closeable?: boolean;
  transparent?: boolean;
  position?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Popup: React.FC<PopupProps> = props => {
  const { open = false, title, closeable, transparent, style, children, onClose } = props;

  const y = useRef(new Animated.Value(0)).current;
  const height = useRef(0);

  const [showMask, setShowMask] = useState(false);

  useEffect(() => {
    if (open) {
      setShowMask(true);
      Animated.timing(y, {
        toValue: -height.current,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {});
    } else {
      Animated.timing(y, {
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
    if (height.current) {
      isFirst = false;
    } else {
      isFirst = true;
    }
    height.current = e.nativeEvent.layout.height;
    if (isFirst) {
      Animated.timing(y, {
        toValue: -height.current,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Mask show={showMask} onPress={handleClose}>
      <View style={styles[prefixCls]}>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles[`${prefixCls}-contaner`],
              transparent ? { backgroundColor: 'transparent' } : null,
              style,
              { transform: [{ translateY: y }] },
            ]}
            onLayout={handLayout}
          >
            {title ? <Node style={styles[`${prefixCls}-title`]}>{title}</Node> : null}
            {closeable ? (
              <Pressable style={styles[`${prefixCls}-close`]} onPress={handleClose}>
                <Icon name="line-error-32" size={16} color="#999" />
              </Pressable>
            ) : null}
            <Node>{children}</Node>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </Mask>
  );
};

export default Popup;
