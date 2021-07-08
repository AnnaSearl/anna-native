import React from 'react';
export interface SelectorPopupProps {
    placeholder?: string;
    children?: React.ReactNode;
    title?: React.ReactNode;
    textAlign?: 'left' | 'center' | 'right';
    height?: number;
    onChange?: (value: any, valueStr?: string) => void;
    [restProps: string]: any;
}
declare const SelectorPopup: (props: SelectorPopupProps) => JSX.Element;
export default SelectorPopup;
