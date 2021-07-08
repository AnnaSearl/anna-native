import React from 'react';
import { ViewStyle } from 'react-native';
export interface OptionObjProps {
    [propName: string]: string;
}
declare type OptionProps = string | OptionObjProps;
export interface PickerViewColumnProps {
    value?: number;
    options?: OptionProps[];
    optionsKey?: string;
    style?: ViewStyle;
    children?: React.ReactNode;
    onChange?: (value: number) => void;
}
declare const PickerViewColumn: React.FC<PickerViewColumnProps>;
export default PickerViewColumn;
