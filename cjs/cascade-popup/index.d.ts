import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
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
declare const CascadePopup: React.FC<CascadePopupProps>;
export default CascadePopup;
