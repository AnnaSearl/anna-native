import React from 'react';
import { ViewStyle } from 'react-native';
export declare type valueType = string | number;
export interface OptionProps {
    value: valueType;
    text: React.ReactNode;
    children?: OptionProps[];
}
export interface CascadeProps {
    name?: string;
    value?: valueType[];
    options?: OptionProps[];
    changeOnSelect?: boolean;
    height?: string;
    style?: ViewStyle;
    prompt?: (e: any) => string;
    onChange: (v: valueType[], selectedOptions?: OptionProps[], isLast?: boolean) => void;
}
declare const Cascade: React.FC<CascadeProps>;
export default Cascade;
