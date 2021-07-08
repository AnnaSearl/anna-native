import React from 'react';
import { ViewStyle } from 'react-native';
export interface RowProps {
    gutter?: number;
    justify?: string;
    align?: string;
    style?: ViewStyle;
    children?: React.ReactNode;
}
declare const Row: React.FC<RowProps>;
export default Row;
