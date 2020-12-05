import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';
import Popup from '../popup';
import PickerView from '../picker-view';
import SafeFilling from '../safe-filling';
import FormValue from '../form-value';
import styles from './style';

const prefixCls = 'native-picker';

export interface OptionObjProps {
  [propName: string]: string;
}

type OptionProps = string | OptionObjProps;

export interface NativePickerProps {
  value?: string | string[];
  range?: any[];
  rangeKey?: string;
  rangeColumnsFlex?: number[];
  disabled?: boolean;
  style?: ViewStyle;
  textAlign?: 'left' | 'right' | 'center';
  placeholder?: string;
  children?: React.ReactNode;
  onChange?: (v: number | number[], e?: any) => void;
  onStartShouldSetResponderCapture?: () => boolean;
  [propName: string]: any;
}

const NativePicker: React.FC<NativePickerProps> = props => {
  const {
    value,
    range,
    rangeKey = 'text',
    rangeColumnsFlex,
    style,
    placeholder,
    textAlign = 'right',
    disabled,
    children,
    onChange,
    onStartShouldSetResponderCapture,
  } = props;

  const multiple = useRef(Array.isArray(range?.[0])).current;

  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<any>(
    multiple ? [...new Array(range?.length).fill('0')] : '0',
  );

  useEffect(() => {
    if (value) {
      setInternalValue(value);
    }
  }, [value]);

  const handlePress = () => {
    if (disabled) {
      return;
    }
    setOpen(state => !state);
  };

  const handleOK = () => {
    onChange?.(internalValue);
    setOpen(false);
  };

  const handleCancel = () => {
    setInternalValue(value);
    setOpen(false);
  };

  const handleChangeValue = (val: string) => {
    // 这里拿到的 val 值被转换成string类型
    setInternalValue(val);
  };

  const getMultiModeValue = useCallback((pOptions: any[], pValue: string[]) => {
    return pOptions?.map(
      (column: OptionProps[], index: number) => column?.[Number(pValue?.[index])],
    );
  }, []);

  const selectOption = useMemo(
    () => (multiple ? getMultiModeValue(range || [], value as string[]) : range?.[Number(value)]),
    [multiple, range, value],
  );

  const selectText = useMemo(
    () =>
      multiple
        ? selectOption
            ?.map((option: OptionProps) =>
              typeof option === 'object' ? option?.[rangeKey] : option,
            )
            ?.join(' ')
        : typeof selectOption === 'object'
        ? selectOption?.[rangeKey]
        : selectOption,
    [selectOption],
  );

  return (
    <>
      <Pressable
        style={style}
        onPress={handlePress}
        onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
      >
        <FormValue textAlign={textAlign} placeholder={placeholder}>
          {children || selectText}
        </FormValue>
      </Pressable>
      <Popup position="bottom" open={open} onClose={handleCancel}>
        <PickerView onOK={handleOK} onCancel={handleCancel}>
          {multiple ? (
            <MultiPicker
              selectedValue={internalValue}
              onValueChange={handleChangeValue}
              style={styles[`${prefixCls}-container`]}
            >
              {range?.map((column: OptionProps[], index: number) => (
                <Picker
                  key={index}
                  style={[
                    styles[`${prefixCls}-column`],
                    Array.isArray(rangeColumnsFlex) ? { flex: rangeColumnsFlex?.[index] } : null,
                  ]}
                >
                  {column?.map((option: OptionProps, cindex: number) => (
                    <Picker.Item key={cindex} value={cindex}>
                      {typeof option === 'object' ? (option as OptionObjProps)?.[rangeKey] : option}
                    </Picker.Item>
                  ))}
                </Picker>
              ))}
            </MultiPicker>
          ) : (
            <Picker selectedValue={internalValue} onValueChange={handleChangeValue}>
              {range?.map((option: OptionProps, index: number) => (
                <Picker.Item key={index} value={index}>
                  {typeof option === 'object' ? (option as OptionObjProps)?.[rangeKey] : option}
                </Picker.Item>
              ))}
            </Picker>
          )}
        </PickerView>
        <SafeFilling bottom />
      </Popup>
    </>
  );
};

export default NativePicker;
