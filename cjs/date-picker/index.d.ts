import React from 'react';
export interface DatePickerProps {
    value?: string;
    type?: 'date' | 'time' | 'datetime';
    format?: string;
    disabled?: boolean;
    rangeColumnsFlex?: number[];
    additionalOptions?: any[];
    children?: React.ReactNode;
    onChange?: (v: string) => void;
    [restProps: string]: any;
}
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
