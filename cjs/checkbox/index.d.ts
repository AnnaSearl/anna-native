import * as React from 'react';
import { ViewStyle } from 'react-native';
declare type CheckboxValue = string | number;
export interface CheckboxProps {
    theme: AnnaNative.Theme;
    checked?: boolean;
    value?: CheckboxValue;
    style?: ViewStyle;
    checkboxStyle?: ViewStyle;
    contentStyle?: ViewStyle;
    disabled?: boolean;
    onPress?: (e: any) => void;
    onChange?: (checked: boolean, e?: any, v?: CheckboxValue) => void;
}
export interface GroupProps {
    value?: CheckboxValue[];
    children?: React.ReactNode;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    onChange?: (v?: CheckboxValue[]) => void;
}
declare const CheckboxWithTheme: (props: any) => JSX.Element;
export default CheckboxWithTheme;
