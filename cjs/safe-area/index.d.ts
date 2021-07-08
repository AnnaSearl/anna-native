import * as React from 'react';
import { ViewProps, ViewStyle } from 'react-native';
export interface SafeAreaProps extends ViewProps {
    topColor?: string;
    bottomColor?: string;
    topInset?: boolean;
    bottomInset?: boolean;
    topStyle?: ViewStyle;
    bottomStyle?: ViewStyle;
    native?: boolean;
    style?: ViewStyle;
    children?: React.ReactNode;
}
declare const SafeArea: React.FC<SafeAreaProps>;
export default SafeArea;
