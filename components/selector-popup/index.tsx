import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import Popup from '../popup';
import Selector from '../selector';
import FormValue from '../form-value';

export interface SelectorPopupProps {
  placeholder?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  height?: number;
  onChange?: (value: any, valueStr?: string) => void;
  [restProps: string]: any;
}

const SelectorPopup = (props: SelectorPopupProps) => {
  const { placeholder, children, title, textAlign, height, onChange } = props;

  const [show, setShow] = useState(false);

  const [text, setText] = useState('');

  const handlePress = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (value: any, valueStr?: string) => {
    onChange?.(value, valueStr);
    setText(valueStr || '');
    handleClose();
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
        <FormValue textAlign={textAlign} placeholder={placeholder}>
          {children || text}
        </FormValue>
      </Pressable>
      <Popup position="bottom" title={title} closeable open={show} onClose={handleClose}>
        <Selector {...props} style={{ height }} onChange={handleChange} />
      </Popup>
    </View>
  );
};

export default SelectorPopup;
