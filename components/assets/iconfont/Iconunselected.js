/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconunselected = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m0 64C317.6 160 160 317.6 160 512s157.6 352 352 352 352-157.6 352-352S706.4 160 512 160z"
        fill={getIconColor(color, 0, '#BABEC6')}
      />
    </Svg>
  );
};

Iconunselected.defaultProps = {
  size: 18,
};

Iconunselected = React.memo ? React.memo(Iconunselected) : Iconunselected;

export default Iconunselected;
