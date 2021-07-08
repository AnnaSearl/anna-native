import * as React from 'react';
export interface PopupProps {
    show?: boolean;
    children?: React.ReactNode;
    onPress?: () => void;
}
declare const Mask: (props: PopupProps) => React.ReactElement;
export default Mask;
