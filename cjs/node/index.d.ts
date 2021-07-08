import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface NodeProps {
    style?: ViewStyle | TextStyle | any[];
    numberOfLines?: number;
    children?: React.ReactNode;
    onLayout?: (e: any) => void;
    onStartShouldSetResponderCapture?: () => boolean;
}
declare const Node: React.FC<NodeProps>;
export default Node;
