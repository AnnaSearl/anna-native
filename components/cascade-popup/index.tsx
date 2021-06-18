import React, { useState } from 'react';
import { View, Pressable, ViewStyle, TextStyle } from 'react-native';
import Cascade, { valueType, OptionProps } from '../cascade';
import Popup from '../popup';
import FormValue from '../form-value';
import styles from './style';

const prefixCls = 'cascade-popup';

export interface CascadePopupProps {
  name?: string;
  value?: any[];
  children?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  options?: any[];
  textAlign?: 'left' | 'right';
  prompt?: (e: any) => string;
  onChange: (v: any, s: any) => void;
  valueStyle?: ViewStyle | TextStyle;
  placeholderStyle?: ViewStyle | TextStyle;
  [restProps: string]: any;
}

const CascadePopup: React.FC<CascadePopupProps> = props => {
  const {
    value,
    children,
    disabled,
    placeholder,
    textAlign,
    onChange,
    valueStyle,
    placeholderStyle,
  } = props;

  const [show, setShow] = useState(false);

  const handleTap = () => {
    if (disabled) {
      return;
    }
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (v: valueType[], s?: OptionProps[], isLast?: boolean) => {
    onChange(v, s);
    if (isLast) {
      setShow(false);
    }
  };

  const cascadeValue = value?.map(i => i.value) || [];

  return (
    <View style={styles[prefixCls]}>
      <Pressable style={styles[`${prefixCls}-form-item`]} onPress={handleTap}>
        <FormValue
          textAlign={textAlign}
          placeholder={placeholder}
          style={valueStyle}
          placeholderStyle={placeholderStyle}
        >
          {children || value?.map(i => i.text).join(' ')}
        </FormValue>
      </Pressable>
      <Popup position="bottom" open={show} onClose={handleClose} title="请选择" closeable>
        <View style={styles[`${prefixCls}-container`]}>
          <Cascade {...props} onChange={handleChange} value={cascadeValue} />
        </View>
      </Popup>
    </View>
  );
};

export default CascadePopup;
