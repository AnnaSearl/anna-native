import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface CellProps {
    label?: React.ReactNode;
    children?: React.ReactNode;
    labelDescription?: React.ReactNode;
    style?: ViewStyle;
    labelStyle?: ViewStyle;
    valueStyle?: ViewStyle;
    labelDescriptionStyle?: ViewStyle | TextStyle;
    vertical?: boolean;
    icon?: string;
    iconSize?: number;
    required?: boolean;
    arrow?: boolean;
    extra?: React.ReactNode;
    defaultNullValue?: string;
    textAlign?: 'left' | 'right' | 'center';
    onPress?: () => void;
}
declare const Cell: (props: CellProps) => JSX.Element;
export default Cell;
