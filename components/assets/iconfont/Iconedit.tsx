/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconedit: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M691.584 184.0896l-244.0192 243.1488-2.9952 3.2512a50.8928 50.8928 0 0 0-11.008 22.6048l-0.3584 2.1504-45.568 114.6368c-16.5376 41.5232 24.3712 82.7904 66.048 66.6624l125.312-48.512a51.2 51.2 0 0 0 17.7664-11.5968l245.3504-246.272v527.2576A90.0352 90.0352 0 0 1 752.384 947.2H168.832a90.0352 90.0352 0 0 1-89.7792-89.7792V273.92a90.0352 90.0352 0 0 1 89.7792-89.7792h522.752z"
        fill={getIconColor(color, 0, '#2879FF')}
      />
      <Path
        d="M435.2 588.8l49.8432-125.312 75.4688 76.8L435.2 588.8zM933.7088 90.2912c20.224 21.5552 17.5104 57.9328-6.7328 82.176L560.512 540.288l-76.8-76.8L851.5328 97.024c24.2432-24.2432 60.6208-26.9312 82.176-6.7328z"
        fill={getIconColor(color, 1, '#2879FF')}
      />
    </Svg>
  );
};

Iconedit.defaultProps = {
  size: 18,
};

Iconedit = React.memo ? React.memo(Iconedit) : Iconedit;

export default Iconedit;
