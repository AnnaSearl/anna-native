import * as React from 'react';
import { TextInputProps } from 'react-native';
export interface InputProps extends TextInputProps {
    maxLength?: number;
    showCount?: boolean;
}
declare const Input: React.FC<InputProps> & {
    TextArea?: (p: TextAreaProps) => React.ReactElement | null;
};
export interface TextAreaProps extends InputProps {
    rows?: number;
}
export default Input;
