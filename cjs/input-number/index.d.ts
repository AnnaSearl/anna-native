import * as React from 'react';
export interface TagProps {
    look?: string;
    size?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const Tag: (props: TagProps) => JSX.Element;
export default Tag;
