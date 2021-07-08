import React from 'react';
import { ViewStyle } from 'react-native';
export interface ActionSheetActionGridProps {
    value?: string | number;
    name?: React.ReactNode;
    icon?: string;
    disabled?: boolean;
}
export interface ActionSheetActionDefaultProps {
    value?: string | number;
    text?: React.ReactNode | ActionSheetActionGridProps[];
    type?: string;
    mode?: string;
    disabled?: boolean;
}
export declare type ActionSheetAction = ActionSheetActionDefaultProps | ActionSheetActionGridProps;
export interface ActionSheetProps {
    open?: boolean;
    title?: React.ReactNode;
    actions?: ActionSheetActionDefaultProps[];
    cancelText?: React.ReactNode;
    cover?: boolean;
    children?: React.ReactNode;
    maskClosable?: boolean;
    itemStyle?: ViewStyle;
    itemTextStyle?: ViewStyle;
    onCancel?: (e?: any) => void;
    onChange?: (a: ActionSheetAction, g?: ActionSheetActionDefaultProps, e?: any) => void;
}
declare const ActionSheet: React.FC<ActionSheetProps>;
export default ActionSheet;
