import * as React from 'react';
import { ViewStyle } from 'react-native';
declare type CheckboxValue = string | number;
export interface CheckboxProps {
    checked?: boolean;
    value?: CheckboxValue;
    children?: React.ReactNode;
    style?: ViewStyle;
    checkboxStyle?: ViewStyle;
    contentStyle?: ViewStyle;
    disabled?: boolean;
    onPress?: (e: any) => void;
    onChange?: (checked: boolean, e?: any, v?: CheckboxValue) => void;
}
declare const Checkbox: React.FC<CheckboxProps> & {
    Group?: React.FC<GroupProps>;
};
export interface GroupProps {
    value?: CheckboxValue[];
    children?: React.ReactNode;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    onChange?: (v?: CheckboxValue[]) => void;
}
export default Checkbox;
