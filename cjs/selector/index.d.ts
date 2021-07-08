import React from 'react';
export interface OptionProps {
    value: string | number;
    text: string;
    children?: OptionProps[];
}
export interface SelectorProps {
    options?: OptionProps[];
    value?: string[];
    style?: React.CSSProperties;
    onChange?: (value: any, valueStr?: string) => void;
    onChangeParentOption?: (e: any) => void;
    [key: string]: any;
}
declare const Selector: (props: SelectorProps) => JSX.Element;
export default Selector;
