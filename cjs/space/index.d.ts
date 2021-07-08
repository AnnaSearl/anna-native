import * as React from 'react';
import { ViewStyle } from 'react-native';
declare type SizeType = string | number;
export interface SpaceProps {
    size?: SizeType | SizeType[];
    direction?: string;
    align?: string;
    justify?: string;
    wrap?: boolean;
    style?: ViewStyle;
    className?: string;
    children?: React.ReactNode;
}
declare const Space: React.FC<SpaceProps>;
export default Space;
