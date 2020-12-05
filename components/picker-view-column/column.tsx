import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, PanResponder, ScrollView } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'picker-view-column';

const heightUnit = 22;

export interface OptionObjProps {
  [propName: string]: string;
}

type OptionProps = string | OptionObjProps;

export interface PickerViewColumnProps {
  value?: number;
  options?: OptionProps[];
  optionsKey?: string;
  children?: React.ReactNode;
  onChange?: (value: number) => void;
}

const PickerViewColumn: React.FC<PickerViewColumnProps> = props => {
  const { value = 0, options = [], optionsKey = 'text', onChange, content } = props;

  const [initial, setInitial] = useState(heightUnit * 2);
  const [start, setStart] = useState(0);
  const [y, setY] = useState(initial);
  const [columnHeight, setColumnHeight] = useState(0);

  const pan = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('11111----', pan);
        pan.setOffset(pan._value);
      },
      onPanResponderMove: Animated.event([null, { dy: pan }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  useEffect(() => {
    setColumnHeight(options.length * heightUnit);
  }, [options]);

  useEffect(() => {
    if (!value || value <= 0) {
      setY(heightUnit * 2);
      return;
    }
    setY(-heightUnit * value + heightUnit * 2);
  }, [value]);

  const handleTouchStart = (e: any) => {
    console.log('e=----', e);

    e.preventDefault?.();
    setStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: any) => {
    e.preventDefault?.();
    const diff = e.touches[0].clientY - start;
    const updateY = diff + initial;
    if (updateY < -columnHeight + heightUnit * 2) {
      setY(-columnHeight + heightUnit * 2);
      return;
    }
    if (updateY > heightUnit * 3) {
      setY(heightUnit * 3);
      return;
    }
    setY(updateY);
  };

  const handleTouchEnd = (e: any) => {
    e.preventDefault?.();
    if (y < -columnHeight + heightUnit * 3) {
      const val = -columnHeight + heightUnit * 3;
      setY(val);
      setInitial(val);

      const v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange?.(v);
      return;
    }
    if (y > heightUnit * 2) {
      const val = heightUnit * 2;
      setY(val);
      setInitial(val);

      const v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange?.(v);
      return;
    }
    if (y % heightUnit !== 0) {
      const r = Math.round(y / heightUnit) - Math.floor(y / heightUnit);
      let val = 0;
      if (r === 1) {
        val = Math.ceil(y / heightUnit) * heightUnit;
      } else {
        val = Math.floor(y / heightUnit) * heightUnit;
      }
      setY(val);
      setInitial(val);

      const v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange?.(v);
      return;
    }
    setInitial(y);
  };

  return (
    <View style={styles.prefixCls}>
      {/* <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={{ height: 150, width: 150, backgroundColor: 'blue', borderRadius: 5 }} />
      </Animated.View> */}
      <View>
        <Animated.View
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
          // onTouchEnd={handleTouchEnd}
          style={[styles[`${prefixCls}-items`], { transform: [{ translateY: pan }] }]}
          {...panResponder.panHandlers}
        >
          {options?.map((option, index: number) => (
            <Node key={index} style={styles[`${prefixCls}-item`]}>
              {typeof option === 'object' ? (option as OptionObjProps)?.[optionsKey] : option}
            </Node>
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default PickerViewColumn;
