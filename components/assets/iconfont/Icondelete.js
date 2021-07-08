/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icondelete = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M537.6 102.4c226.2272 0 409.6 183.3728 409.6 409.6s-183.3728 409.6-409.6 409.6S128 738.2272 128 512 311.3728 102.4 537.6 102.4z m0 51.2C339.6608 153.6 179.2 314.0608 179.2 512s160.4608 358.4 358.4 358.4 358.4-160.4608 358.4-358.4S735.5392 153.6 537.6 153.6z m217.6 332.8a38.4 38.4 0 0 1 0 76.8h-435.2a38.4 38.4 0 0 1 0-76.8h435.2z"
        fill={getIconColor(color, 0, '#F81A33')}
      />
    </Svg>
  );
};

Icondelete.defaultProps = {
  size: 18,
};

Icondelete = React.memo ? React.memo(Icondelete) : Icondelete;

export default Icondelete;
