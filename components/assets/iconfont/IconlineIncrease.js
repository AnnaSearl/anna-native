/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconlineIncrease = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416S741.76 928 512 928 96 741.76 96 512 282.24 96 512 96z m0 64c-194.4 0-352 157.6-352 352s157.6 352 352 352 352-157.6 352-352-157.6-352-352-352z m0 160a32 32 0 0 1 32 32v128h128a32 32 0 0 1 0 64H544v128a32 32 0 0 1-64 0V544H352a32 32 0 0 1 0-64h128V352a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineIncrease.defaultProps = {
  size: 18,
};

IconlineIncrease = React.memo ? React.memo(IconlineIncrease) : IconlineIncrease;

export default IconlineIncrease;
