import * as React from 'react';
import Picker from '../picker';

export interface SelectProps {
  value?: string | number;
  options?: any[];
  placeholder?: string;
  textAlign?: 'left' | 'right';
  children?: React.ReactNode;
  onChange?: (e: any) => void;
  onStartShouldSetResponderCapture?: () => boolean;
}

const Select: React.FC<SelectProps> = props => {
  const {
    value,
    options,
    placeholder,
    textAlign,
    children,
    onChange,
    onStartShouldSetResponderCapture,
  } = props;

  const handleChangePicker = (v: any) => {
    if (v < 0) {
      return;
    }
    onChange?.(options?.[v]);
  };

  const valueIndex = options?.findIndex((item: any) => item.key === value) || 0;
  const selectedOption = options?.find(option => option.key === value);

  return (
    <Picker
      range={options}
      rangeKey="value"
      value={valueIndex}
      onChange={handleChangePicker}
      onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
      placeholder={placeholder}
      textAlign={textAlign}
    >
      {children || selectedOption?.value}
    </Picker>
  );
};

export default Select;
