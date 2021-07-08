import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface FormValueProps {
    placeholder?: string;
    textAlign?: 'left' | 'right' | 'center';
    children?: React.ReactNode;
    style?: ViewStyle | TextStyle;
    placeholderStyle?: TextStyle;
}
declare const FormValue: React.FC<FormValueProps>;
export default FormValue;
