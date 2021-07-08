/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconlineLogistIcs = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 800a64 64 0 0 1-64-64V507.968a64 64 0 0 1 18.464-44.992l90.816-91.936A64 64 0 0 1 218.816 352H384V224a64 64 0 0 1 64-64h448a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H736a64 64 0 1 1-128 0H448a63.68 63.68 0 0 1-32.032-8.576C406.592 796.864 395.648 800 384 800h-96a64 64 0 1 1-128 0h-32z m768-576H448v512h448V224zM384 416H218.816L128 507.968V736h256V416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineLogistIcs.defaultProps = {
  size: 18,
};

IconlineLogistIcs = React.memo ? React.memo(IconlineLogistIcs) : IconlineLogistIcs;

export default IconlineLogistIcs;
