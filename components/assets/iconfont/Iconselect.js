/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconselect = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M102.304 452.224a48 48 0 0 1 67.872 0l214.912 214.944L833.472 218.88a48 48 0 0 1 67.872 67.872L426.176 761.92a48.544 48.544 0 0 1-3.712 3.328 48 48 0 0 1-71.264 3.744L102.304 520.096a48 48 0 0 1 0-67.872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconselect.defaultProps = {
  size: 18,
};

Iconselect = React.memo ? React.memo(Iconselect) : Iconselect;

export default Iconselect;
