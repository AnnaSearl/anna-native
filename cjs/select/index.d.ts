import * as React from 'react';
export interface SelectProps {
    value?: string | number;
    options?: any[];
    placeholder?: string;
    textAlign?: 'left' | 'right';
    children?: React.ReactNode;
    onChange?: (e: any) => void;
    onStartShouldSetResponderCapture?: () => boolean;
}
declare const Select: React.FC<SelectProps>;
export default Select;
