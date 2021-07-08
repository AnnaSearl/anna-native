import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface LeftButtonProps {
    color?: string;
    style?: ViewStyle;
    children?: string | number;
    onPress?: (e?: any) => void;
}
export declare const LeftButton: React.FC<LeftButtonProps>;
export interface NavigationBarProps {
    left?: React.ReactNode;
    leftText?: string | number;
    right?: React.ReactNode;
    fill?: boolean;
    statusBar?: any;
    leftColor?: string;
    titleColor?: string;
    backgroundColor?: string;
    opacity?: number;
    children?: React.ReactNode;
    previous?: any;
    navigation?: any;
    look?: 'light' | 'dark';
    showBackButton?: boolean;
    absolute?: boolean;
    numberOfLines?: number;
    onLeftPress?: (e?: any) => void;
    onRightPress?: (e?: any) => void;
}
declare const NavigationBar: React.FC<NavigationBarProps> & {
    config: NavigationBarConfigProps;
    setDefaultConfig: (config: any) => void;
};
export interface NavigationBarConfigProps {
    onLeftPress?: (e?: any) => void;
}
export default NavigationBar;
