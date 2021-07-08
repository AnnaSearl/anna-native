import React from 'react';
import { ViewStyle } from 'react-native';
export interface PopupProps {
    open?: boolean;
    title?: React.ReactNode;
    closeable?: boolean;
    transparent?: boolean;
    position?: string;
    style?: ViewStyle;
    safeArea?: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;
