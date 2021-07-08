/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconright = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M365.2608 68.3008l391.424 391.3216 0.9216 0.9216a64 64 0 0 1 0 90.5216l-392.192 392.192a64 64 0 1 1-90.5216-90.5216l346.88-346.88-347.0336-347.0336a64 64 0 0 1 90.5216-90.5216z"
        fill={getIconColor(color, 0, '#BABEC6')}
      />
    </Svg>
  );
};

Iconright.defaultProps = {
  size: 18,
};

Iconright = React.memo ? React.memo(Iconright) : Iconright;

export default Iconright;
