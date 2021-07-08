import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface SearchBarProps {
    value?: string;
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
    showActionButton?: boolean;
    placeholder?: string;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    clearButtonMode?: string;
    autoFocus?: boolean;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onActionPress?: () => void;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: (e: any) => void;
}
declare const _default: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<any>>;
export default _default;
