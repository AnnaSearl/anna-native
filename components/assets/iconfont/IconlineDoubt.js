/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconlineDoubt = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416S741.76 928 512 928 96 741.76 96 512 282.24 96 512 96z m0 64c-194.4 0-352 157.6-352 352s157.6 352 352 352 352-157.6 352-352-157.6-352-352-352z m0 512a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m0-384a128 128 0 0 1 127.84 121.6l0.16 6.4a128.064 128.064 0 0 1-96 123.968V608a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32 64 64 0 0 0 4.8-127.84L512 352a64 64 0 0 0-63.84 59.2L448 416a32 32 0 0 1-64 0 128 128 0 0 1 128-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineDoubt.defaultProps = {
  size: 18,
};

IconlineDoubt = React.memo ? React.memo(IconlineDoubt) : IconlineDoubt;

export default IconlineDoubt;
