import React, { useState, useRef } from 'react';
import { View, Pressable } from 'react-native';
import Popup from '../popup';
import PickerView from '../picker-view';
import PickerViewColumn from '../picker-view-column';
import SafeFilling from '../safe-filling';
import FormValue from '../form-value';
import styles from './style';

const prefixCls = 'picker';

export interface PickerProps {
  value?: number | number[];
  range?: any[];
  rangeKey?: string;
  disabled?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  placeholder?: string;
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
    disabled,
    children,
    onChange,
    onStartShouldSetResponderCapture,
  } = props;

  const [open, setOpen] = useState(false);

  const val = useRef<number | number[]>(value < 0 ? 0 : value);

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

  const handleChangeColumn = (multiple: boolean, v: number, index?: number) => {
    if (multiple) {
      val.current = [...(Array.isArray(val.current) ? val.current : [val.current])];
      val.current[index as number] = v;
      return;
    }
    val.current = v;
  };

  let multiple = false;
  if (Array.isArray(range?.[0])) {
    multiple = true;
  }

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
        <PickerView onOK={handleOK} onCancel={() => setOpen(false)}>
          {multiple ? (
            range?.map((columnData: any[], index: number) => (
              <PickerViewColumn
                key={index}
                value={(value as number[])[index]}
                options={columnData}
                optionsKey={rangeKey}
                onChange={v => handleChangeColumn(true, v, index)}
              />
            ))
          ) : (
            <PickerViewColumn
              value={value as number}
              options={range}
              optionsKey={rangeKey}
              onChange={v => handleChangeColumn(false, v)}
            />
          )}
        </PickerView>
        <SafeFilling bottom />
      </Popup>
    </View>
  );
};

export default Picker;
