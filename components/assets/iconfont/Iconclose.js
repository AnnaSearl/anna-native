/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconclose = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M251.616 179.2l253.44 253.44 253.408-253.44a51.2 51.2 0 1 1 72.416 72.416l-253.44 253.44 253.44 253.408a51.2 51.2 0 1 1-72.416 72.416l-253.44-253.44-253.44 253.44A51.2 51.2 0 1 1 179.2 758.464l253.44-253.44-253.44-253.44A51.2 51.2 0 1 1 251.616 179.2z"
        fill={getIconColor(color, 0, '#BABEC6')}
      />
    </Svg>
  );
};

Iconclose.defaultProps = {
  size: 18,
};

Iconclose = React.memo ? React.memo(Iconclose) : Iconclose;

export default Iconclose;
