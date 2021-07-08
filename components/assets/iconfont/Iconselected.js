/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconselected = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.608 64 64 264.608 64 512s200.608 448 448 448 448-200.608 448-448S759.392 64 512 64z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M757.504 307.2h-61.568c-13.376 0-26.112 6.304-34.016 17.12l-206.368 280.832-93.472-127.296a42.24 42.24 0 0 0-34.016-17.12H266.496a10.336 10.336 0 0 0-8.544 16.352l163.584 222.592a42.24 42.24 0 0 0 67.904 0l276.48-376.128a10.24 10.24 0 0 0-8.416-16.352z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconselected.defaultProps = {
  size: 18,
};

Iconselected = React.memo ? React.memo(Iconselected) : Iconselected;

export default Iconselected;
