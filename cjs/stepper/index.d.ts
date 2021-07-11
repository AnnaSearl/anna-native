import * as React from 'react';
export interface StepperProps {
    value?: number;
    min?: number;
    max?: number;
    disabled?: boolean;
    onChange?: Function;
    style?: React.CSSProperties;
}
declare const Stepper: React.FC<StepperProps>;
export default Stepper;
