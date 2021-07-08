import * as React from 'react';
export interface PickerViewProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
    onOK?: (e: any) => void;
    onCancel?: (e: any) => void;
}
declare const PickerView: React.FC<PickerViewProps>;
export default PickerView;
