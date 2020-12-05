import React, { useState, useEffect, useRef } from 'react';
import { Pressable, ViewStyle, TextStyle } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Popup from '../popup';
import PickerView from '../picker-view';
import SafeFilling from '../safe-filling';
import FormValue from '../form-value';

export interface PickerProps {
  value?: number | number[];
  mode?: 'date' | 'time' | 'datetime' | 'countdown' | undefined;
  display?: 'default' | 'compact' | 'inline' | 'spinner' | undefined;
  placeholder?: string;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: ViewStyle | TextStyle;
  textAlign?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
  onChange?: (v: number | number[], e?: any) => void;
  onStartShouldSetResponderCapture?: () => boolean;
  [propName: string]: any;
}

const DatePicker: React.FC<PickerProps> = props => {
  const initialDate = useRef(new Date()).current;

  const {
    value = initialDate,
    mode,
    display = 'spinner',
    placeholder,
    style,
    textStyle,
    textAlign,
    disabled,
    children,
    onChange,
    onStartShouldSetResponderCapture,
    ...restProps
  } = props;

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<any>(initialDate);

  useEffect(() => {
    if (value) {
      setDate(value);
    }
  }, [value]);

  const handlePress = () => {
    if (disabled) {
      return;
    }
    setOpen(state => !state);
  };

  const handleOK = () => {
    onChange?.(date);
    setOpen(false);
  };

  const handleCancel = () => {
    setDate(value);
    setOpen(false);
  };

  const handleChangeDateTime = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <>
      <Pressable
        style={style}
        onPress={handlePress}
        onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
      >
        <FormValue textAlign={textAlign} placeholder={placeholder} style={textStyle}>
          {children}
        </FormValue>
      </Pressable>
      <Popup position="bottom" open={open} onClose={handleCancel}>
        <PickerView onOK={handleOK} onCancel={handleCancel}>
          <DateTimePicker
            value={date || initialDate}
            onChange={handleChangeDateTime}
            mode={mode}
            display={display}
            {...restProps}
          />
        </PickerView>
        <SafeFilling bottom />
      </Popup>
    </>
  );
};

export default DatePicker;
