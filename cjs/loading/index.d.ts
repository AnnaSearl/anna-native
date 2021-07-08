import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface LoadingProps {
    look?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    plain?: boolean;
    color?: string;
    disabled?: boolean;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    children?: React.ReactNode;
    onPress: (e: any) => void;
}
declare const Loading: React.FC<LoadingProps>;
export default Loading;
