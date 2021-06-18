import React, { useState, useRef } from 'react';
import { View, Pressable } from 'react-native';
import Popup from '../popup';
import WheelView from '../picker-view';
import Wheel from '../picker-view-column';
import SafeFilling from '../safe-filling';
import FormValue from '../form-value';
import styles from './style';

const prefixCls = 'wheel-picker';

const getInitialVal = (value: any, mult: boolean, rangeLength = 1) => {
  if (mult) {
    if (!Array.isArray(value)) {
      return Array(rangeLength).fill(0);
    }
    return value;
  }
  return value || 0;
};

export interface PickerProps {
  value?: number | number[];
  range?: any[];
  rangeKey?: string;
  disabled?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  placeholder?: string;
  rangeColumnsFlex?: number[];
  children?: React.ReactNode;
  onChange?: (v: number | number[], e?: any) => void;
  onStartShouldSetResponderCapture?: () => boolean;
}

const Picker: React.FC<PickerProps> = props => {
  const {
    value = 0,
    range,
    rangeKey = 'text',
    textAlign,
    placeholder,
    rangeColumnsFlex,
    disabled,
    children,
    onChange,
    onStartShouldSetResponderCapture,
  } = props;

  const multiple = useRef(Array.isArray(range?.[0])).current;
  const val = useRef<number | number[]>(getInitialVal(value, multiple, range?.length));

  const [open, setOpen] = useState(false);

  const handlePress = () => {
    if (disabled) {
      return;
    }
    setOpen(state => !state);
  };

  const handleOK = (e: any) => {
    onChange?.(val.current, e);
    setOpen(false);
  };

  const handleChangeColumn = (mult: boolean, v: number, index?: number) => {
    if (mult) {
      val.current = [...(Array.isArray(val.current) ? val.current : [val.current])];
      val.current[index as number] = v;
      return;
    }
    val.current = v;
  };

  return (
    <View style={styles[prefixCls]}>
      <Pressable
        onPress={handlePress}
        onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
      >
        <FormValue textAlign={textAlign} placeholder={placeholder}>
          {children}
        </FormValue>
      </Pressable>
      <Popup position="bottom" open={open} onClose={() => setOpen(false)}>
        <WheelView onOK={handleOK} onCancel={() => setOpen(false)}>
          {multiple ? (
            range?.map((columnData: any[], index: number) => (
              <Wheel
                key={index}
                style={
                  Array.isArray(rangeColumnsFlex) ? { flex: rangeColumnsFlex?.[index] } : undefined
                }
                value={(value as number[])[index]}
                options={columnData}
                optionsKey={rangeKey}
                onChange={v => handleChangeColumn(true, v, index)}
              />
            ))
          ) : (
            <Wheel
              value={value as number}
              options={range}
              optionsKey={rangeKey}
              onChange={v => handleChangeColumn(false, v)}
            />
          )}
        </WheelView>
        <SafeFilling bottom />
      </Popup>
    </View>
  );
};

export default Picker;
