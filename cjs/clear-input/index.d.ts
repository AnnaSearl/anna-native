import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface InputProps {
    clearButtonMode?: string;
    clearBtnStyle?: ViewStyle;
    value?: string;
    onClear?: () => void;
    onChangeText?: (text: string) => void;
    [restProps: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<InputProps, React.ReactText> & React.RefAttributes<any>>;
export default _default;
