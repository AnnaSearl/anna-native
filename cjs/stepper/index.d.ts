import * as React from 'react';
export interface TagProps {
    value: number;
    min: number;
    max: number;
    disabled: boolean;
    onChange: Function;
    style?: React.CSSProperties;
}
declare const Stepper: (props: TagProps) => JSX.Element;
export default Stepper;
