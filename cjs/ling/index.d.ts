import React from 'react';
export interface LingConfigProps {
    title?: React.ReactNode;
    content?: React.ReactNode;
    icon?: React.ReactNode;
    iconColor?: string;
    titleColor?: string;
}
export interface LingProps {
    position?: string;
}
declare const _default: React.ForwardRefExoticComponent<LingProps & React.RefAttributes<any>>;
export default _default;
