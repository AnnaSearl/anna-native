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

let Iconfuliaonor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1047 1024" width={size} height={size} {...rest}>
      <Path
        d="M116.363636 116.363636m69.818182 0l325.818182 0q69.818182 0 69.818182 69.818182l0 232.727273q0 69.818182-69.818182 69.818182l-325.818182 0q-69.818182 0-69.818182-69.818182l0-232.727273q0-69.818182 69.818182-69.818182Z"
        fill={getIconColor(color, 0, '#9DA1AD')}
      />
      <Path
        d="M442.181818 535.272727m69.818182 0l325.818182 0q69.818182 0 69.818182 69.818182l0 232.727273q0 69.818182-69.818182 69.818182l-325.818182 0q-69.818182 0-69.818182-69.818182l0-232.727273q0-69.818182 69.818182-69.818182Z"
        fill={getIconColor(color, 1, '#9DA1AD')}
      />
      <Path
        d="M628.363636 116.363636m69.818182 0l139.636364 0q69.818182 0 69.818182 69.818182l0 232.727273q0 69.818182-69.818182 69.818182l-139.636364 0q-69.818182 0-69.818182-69.818182l0-232.727273q0-69.818182 69.818182-69.818182Z"
        fill={getIconColor(color, 2, '#9DA1AD')}
        opacity=".5"
      />
      <Path
        d="M116.363636 535.272727m69.818182 0l139.636364 0q69.818182 0 69.818182 69.818182l0 232.727273q0 69.818182-69.818182 69.818182l-139.636364 0q-69.818182 0-69.818182-69.818182l0-232.727273q0-69.818182 69.818182-69.818182Z"
        fill={getIconColor(color, 3, '#9DA1AD')}
        opacity=".5"
      />
    </Svg>
  );
};

Iconfuliaonor.defaultProps = {
  size: 18,
};

Iconfuliaonor = React.memo ? React.memo(Iconfuliaonor) : Iconfuliaonor;

export default Iconfuliaonor;
