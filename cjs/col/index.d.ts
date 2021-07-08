import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface ColProps {
    span?: number;
    offset?: number;
    flex?: string | number;
    style?: ViewStyle;
    children?: React.ReactNode;
}
declare const Col: (props: ColProps) => JSX.Element;
export default Col;
