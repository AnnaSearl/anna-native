import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, PanResponder, ViewStyle } from 'react-native';
import styles from './style';

const prefixCls = 'wheel';

const rowHeight = 44;

export interface OptionObjProps {
  [propName: string]: string;
}

type OptionProps = string | OptionObjProps;

export interface WheelProps {
  value?: number;
  options?: OptionProps[];
  optionsKey?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
  onChange?: (value: number) => void;
}

const Wheel: React.FC<WheelProps> = props => {
  const { value = 0, options = [], optionsKey = 'text', style, onChange } = props;

  const startPoint = useRef({ y: 0 }).current;
  const initialTranslateValue = useRef({ y: -rowHeight * value + rowHeight * 2 }).current;
  const translateY = useRef(new Animated.Value(initialTranslateValue.y)).current;
  const column = useRef({ height: 0 }).current;

  useEffect(() => {
    column.height = options?.length * rowHeight;
  }, [options]);

  useEffect(() => {
    if (!value || value <= 0) {
      translateY.setValue(rowHeight * 2);
      return;
    }
    translateY.setValue(-rowHeight * value + rowHeight * 2);
  }, [value]);

  const handlePanResponderGrant = (e: any) => {
    startPoint.y = e.nativeEvent.pageY;
  };

  const handlePanResponderMove = (e: any) => {
    const diff = e.nativeEvent.pageY - startPoint.y;
    const updateY = diff + initialTranslateValue.y;

    if (updateY < -column.height + rowHeight * 2) {
      translateY.setValue(-column.height + rowHeight * 2);
      return;
    }

    if (updateY > rowHeight * 3) {
      translateY.setValue(rowHeight * 3);
      return;
    }
    translateY.setValue(updateY);
  };

  const hanldePanResponderRelease = () => {
    // @ts-ignore
    const translateYValue = translateY._value;

    const animated = (pVal: number) => {
      Animated.spring(translateY, {
        toValue: pVal,
        useNativeDriver: true,
      }).start(() => {
        translateY.setValue(pVal);
        initialTranslateValue.y = pVal;
      });

      const v = Math.floor((pVal - rowHeight * 2) / -rowHeight);
      onChange?.(v);
    };

    if (translateYValue < -column.height + rowHeight * 3) {
      const val = -column.height + rowHeight * 3;
      animated(val);
      return;
    }
    if (translateYValue > rowHeight * 2) {
      const val = rowHeight * 2;
      animated(val);
      return;
    }
    if (translateYValue % rowHeight !== 0) {
      const r = Math.round(translateYValue / rowHeight) - Math.floor(translateYValue / rowHeight);
      let val = 0;
      if (r === 1) {
        val = Math.ceil(translateYValue / rowHeight) * rowHeight;
      } else {
        val = Math.floor(translateYValue / rowHeight) * rowHeight;
      }
      animated(val);
      return;
    }
    initialTranslateValue.y = translateYValue;
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => false,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: hanldePanResponderRelease,
      onPanResponderTerminate: () => null,
      onShouldBlockNativeResponder: () => true,
    }),
  ).current;

  return (
    <View style={[styles[prefixCls], style]}>
      {/*加一个最外层 View 来包裹 Animated.View 解决安卓上无法滑动滚轮的问题 */}
      <Animated.View
        style={[styles[`${prefixCls}-content`], { transform: [{ translateY: translateY }] }]}
        {...panResponder.panHandlers}
      >
        {options?.map((option, index: number) => (
          <View key={index} style={styles[`${prefixCls}-item`]}>
            <Text style={styles[`${prefixCls}-item-text`]}>
              {typeof option === 'object' ? (option as OptionObjProps)?.[optionsKey] : option}
            </Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

export default Wheel;
