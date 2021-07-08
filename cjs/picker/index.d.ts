import React from 'react';
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
declare const Picker: React.FC<PickerProps>;
export default Picker;
