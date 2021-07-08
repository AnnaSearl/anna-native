/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconedit = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M607.392 160a32 32 0 0 1 3.744 63.776L607.36 224H288a64 64 0 0 0-63.84 59.2L224 288v448a64 64 0 0 0 59.2 63.84L288 800h448a64 64 0 0 0 63.84-59.2L800 736v-286.048a32 32 0 0 1 63.776-3.744l0.224 3.744V736a128 128 0 0 1-121.6 127.84L736 864H288a128 128 0 0 1-127.84-121.6L160 736V288a128 128 0 0 1 121.6-127.84L288 160h319.392z m239.008 40.224a32 32 0 0 1 0 45.28l-316.8 316.8a32 32 0 1 1-45.248-45.28l316.8-316.8a32 32 0 0 1 45.248 0z"
        fill={getIconColor(color, 0, '#697184')}
      />
    </Svg>
  );
};

Iconedit.defaultProps = {
  size: 18,
};

Iconedit = React.memo ? React.memo(Iconedit) : Iconedit;

export default Iconedit;
