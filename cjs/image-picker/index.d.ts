import React from 'react';
export interface ImagePickerProps {
    action?: 'camera' | 'photos' | 'mix';
    files?: string[];
    multiple?: boolean;
    multipleCount?: number;
    compress?: boolean;
    sizeType?: string[];
    sourceType?: string[];
    deletable?: boolean;
    disabled?: boolean;
    maxCount?: number;
    children?: React.ReactNode;
    onChange?: (e: string[]) => void;
    onAddBefore?: () => boolean | undefined;
}
declare const ImagePicker: React.FC<ImagePickerProps>;
export default ImagePicker;
