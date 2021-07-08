/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconback = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M349.098667 520.213333L635.712 806.826667a21.333333 21.333333 0 0 1 0 30.165333l-30.165333 30.165333a21.333333 21.333333 0 0 1-30.165334 0L228.416 520.213333a21.333333 21.333333 0 0 1 0-30.165333L575.381333 143.082667a21.333333 21.333333 0 0 1 30.165334 0l30.165333 30.165333a21.333333 21.333333 0 0 1 0 30.186667L349.098667 490.026667a21.333333 21.333333 0 0 0 0 30.165333z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

Iconback.defaultProps = {
  size: 18,
};

Iconback = React.memo ? React.memo(Iconback) : Iconback;

export default Iconback;
