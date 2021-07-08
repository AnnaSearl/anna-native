import * as React from 'react';
export interface StepProps {
    title?: React.ReactNode;
    errorTitle?: React.ReactNode;
    extra?: React.ReactNode;
    description?: React.ReactNode;
}
export interface StepsProps {
    current?: number;
    status?: string;
    direction?: string;
    steps?: StepProps[];
    type?: 'arrow' | 'default';
}
declare const Steps: (props: StepsProps) => React.ReactElement;
export default Steps;
