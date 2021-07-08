import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface CountdownProps {
    timeStamp?: number | string;
    style?: ViewStyle;
    onEnd?: Function;
}
declare const Countdown: React.FC<CountdownProps>;
export default Countdown;
