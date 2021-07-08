import React from 'react';
import { ViewStyle } from 'react-native';
export interface DropdownProps {
    open?: boolean;
    position?: string;
    zIndex?: number;
    style?: ViewStyle;
    children?: React.ReactNode;
    onClose?: () => void;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
