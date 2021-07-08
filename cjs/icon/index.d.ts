import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface IconProps {
    name: string;
    size?: number;
    color?: string | string[];
    style?: ViewStyle;
}
declare const Icon: React.FC<IconProps> & {
    PressableIcon?: (p: any) => React.ReactElement | null;
};
export interface PressableIconProps extends IconProps {
    style: ViewStyle;
    onPress?: (e: any) => void;
}
export default Icon;
