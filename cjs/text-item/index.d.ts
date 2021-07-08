import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface TextItemProps {
    label?: React.ReactNode;
    description?: React.ReactNode;
    labelStyle?: ViewStyle | TextStyle;
    descriptionStyle?: ViewStyle | TextStyle;
    valueStyle?: ViewStyle | TextStyle;
    children?: React.ReactNode;
    noMarginBottom?: boolean;
    valueAlign?: string;
    vertical?: boolean;
}
declare const TextItem: (props: TextItemProps) => JSX.Element;
export default TextItem;
